import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { X, Send, Terminal, Loader2, Maximize2, Minimize2, Trash2, Sparkles } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ position: 'fixed', bottom: 20, right: 20, background: 'red', color: 'white', padding: 20, zIndex: 9999 }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const SUGGESTED_QUESTIONS = {
  default: [
    "What has Mikiale built?",
    "What is his technical stack?",
    "Tell me about his AI work",
    "How can I contact him?"
  ],
  hospital: [
    "How was HMS architected?",
    "What problem does HMS solve?",
    "What technologies were used in HMS?"
  ],
  security: [
    "What security work has Mikiale done?",
    "How does the Android security project work?",
    "What did he work on at INSA?"
  ],
  intelligence: [
    "What is Doc Forge AI?",
    "How does his RAG pipeline work?",
    "What AI technologies does he use?"
  ]
};

// Helper to extract text from AI SDK v7 UIMessage parts
function getMessageText(message) {
  // v7 format: message.parts is an array of { type, text } objects
  if (message.parts && Array.isArray(message.parts)) {
    return message.parts
      .filter(p => p.type === 'text')
      .map(p => p.text)
      .join('');
  }
  // Fallback for v6 format or user messages
  if (typeof message.content === 'string') return message.content;
  return '';
}

function AskMikialeInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContext, setActiveContext] = useState('default');
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const { messages, sendMessage, status, error, setMessages } = useChat({
    api: '/api/chat',
    body: { contextData: { section: activeContext } },
    onError: (err) => console.error("Chat Error:", err)
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Track scroll to provide context-aware suggestions
  useEffect(() => {
    if (!isOpen) return;
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      let newContext = 'default';
      
      const checkSection = (id, contextName) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          newContext = contextName;
        }
      };

      checkSection('work', 'hospital'); // Assuming HMS is top project
      checkSection('security', 'security');
      checkSection('intelligence', 'intelligence');
      
      setActiveContext(newContext);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      if (e?.detail?.question) {
        sendMessage({ content: e.detail.question, role: 'user' });
      }
    };
    window.addEventListener('open-ask-mikiale', handleOpen);
    return () => window.removeEventListener('open-ask-mikiale', handleOpen);
  }, [sendMessage]);

  const handleSuggestedClick = (q) => {
    sendMessage({ content: q, role: 'user' });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ content: input, role: 'user' });
    setInput('');
  };

  const clearChat = () => setMessages([]);

  return (
    <>
      {/* Floating Action Button (Closed State) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 group"
          >
            {/* Ambient Pulsing Glow Halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-bright to-accent rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />

            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-3.5 px-5 py-3 sm:px-6 sm:py-3.5 bg-bg-deep/95 hover:bg-bg-elevated border-2 border-accent hover:border-accent-bright rounded-full shadow-[0_0_25px_rgba(139,45,58,0.45),0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Open Ask Mikiale Assistant"
            >
              {/* Bot/Sparkle Icon with Ping Indicator */}
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 border border-accent/60 text-accent-bright shrink-0">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-bright opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-bright" />
                </span>
                <Sparkles className="w-4 h-4 text-accent-bright" />
              </div>

              {/* Text Information Block */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-foreground group-hover:text-white uppercase transition-colors">
                    ASK MIKIALE
                  </span>
                  <span className="px-1.5 py-0.5 bg-accent/30 border border-accent/60 rounded text-[9px] font-mono font-bold text-accent-bright tracking-wider uppercase">
                    AI
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-secondary tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Online • Ask anything
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Open Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-[400px] h-[550px] max-h-[calc(100vh-6rem)] bg-bg-card/95 backdrop-blur-xl border border-foreground/10 rounded-sm shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-foreground/10 bg-bg-surface/50">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="font-mono text-[0.65rem] tracking-[0.15em] font-semibold text-foreground">
                  SYSTEM / ASK MIKIALE
                </span>
              </div>
              <div className="flex items-center gap-2 text-text-dim">
                {messages?.length > 0 && (
                  <button onClick={clearChat} className="p-1 hover:text-foreground transition-colors" aria-label="Clear chat" title="Clear Chat">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="p-1 hover:text-accent transition-colors" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {!messages || messages.length === 0 ? (
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-6 space-y-2">
                    <p className="font-sans text-sm text-foreground">
                      I'm Mikiale's portfolio assistant.
                    </p>
                    <p className="font-sans text-sm text-text-secondary">
                      Ask me about his projects, engineering stack, experience, or technical work.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-mono text-[0.6rem] tracking-wider text-text-dim uppercase mb-3">
                      Suggested Queries
                    </p>
                    {SUGGESTED_QUESTIONS[activeContext].map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestedClick(q)}
                        className="block w-full text-left px-3 py-2 text-xs font-sans text-text-secondary bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-sm transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map(m => (
                    <div key={m.id} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <span className="font-mono text-[0.55rem] tracking-widest text-text-dim uppercase mb-1 px-1">
                        {m.role === 'user' ? 'USER' : 'SYSTEM'}
                      </span>
                      <div className={`px-3 py-2 rounded-sm max-w-[85%] text-sm font-sans leading-relaxed whitespace-pre-wrap ${
                        m.role === 'user' 
                          ? 'bg-foreground/10 text-foreground border border-foreground/10' 
                          : 'bg-accent/10 border border-accent/20 text-foreground'
                      }`}>
                        {getMessageText(m)}
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex flex-col items-start">
                      <span className="font-mono text-[0.55rem] tracking-widest text-text-dim uppercase mb-1 px-1">SYSTEM</span>
                      <div className="px-3 py-2 rounded-sm bg-accent/5 border border-accent/10 flex items-center gap-2 text-accent">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span className="text-xs font-mono">Processing...</span>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="flex flex-col items-start mt-2">
                      <div className="px-3 py-2 rounded-sm bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono">
                        SYSTEM CONNECTION UNAVAILABLE.
                        <button onClick={() => sendMessage({ role: 'user', content: "Retry" })} className="ml-2 underline hover:text-red-300">
                          [Retry]
                        </button>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-foreground/10 bg-bg-surface/30">
              <div className="relative flex items-end">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Ask anything..."
                  disabled={isLoading}
                  rows={1}
                  className="w-full bg-bg-deep border border-foreground/20 rounded-sm pl-3 pr-10 py-2.5 text-sm text-foreground placeholder:text-text-dim focus:outline-none focus:border-accent/60 transition-colors disabled:opacity-50 resize-none max-h-32 custom-scrollbar"
                  style={{ minHeight: '40px' }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 bottom-2 p-1.5 text-text-dim hover:text-accent disabled:opacity-50 disabled:hover:text-text-dim transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function AskMikiale() {
  return (
    <ErrorBoundary>
      <AskMikialeInner />
    </ErrorBoundary>
  );
}
