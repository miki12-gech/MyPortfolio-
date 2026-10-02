import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { X, Send, Terminal, Loader2, Maximize2, Minimize2, Trash2 } from 'lucide-react';

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

function AskMikialeInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContext, setActiveContext] = useState('default');
  const messagesEndRef = useRef(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, setMessages, append } = useChat({
    api: '/api/chat',
    body: { contextData: { section: activeContext } },
    onError: (err) => console.error("Chat Error:", err)
  });

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

  const handleSuggestedClick = (q) => {
    append({ role: 'user', content: q });
  };

  const clearChat = () => setMessages([]);

  return (
    <>
      {/* Floating Action Button (Closed State) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2.5 bg-bg-elevated/90 backdrop-blur-md border border-accent/40 rounded-sm shadow-[0_0_20px_rgba(139,45,58,0.15)] group hover:border-accent transition-colors"
            aria-label="Open Ask Mikiale Assistant"
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
              <span className="relative w-1.5 h-1.5 bg-accent rounded-full" />
            </div>
            <span className="font-mono text-[0.625rem] tracking-[0.2em] font-semibold text-foreground uppercase group-hover:text-accent-bright transition-colors">
              ASK MIKIALE
            </span>
          </motion.button>
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
                {messages.length > 0 && (
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
              {messages.length === 0 ? (
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
                      <div className={`px-3 py-2 rounded-sm max-w-[85%] text-sm font-sans leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-foreground/10 text-foreground border border-foreground/10' 
                          : 'bg-accent/10 border border-accent/20 text-foreground'
                      }`}>
                        {m.content}
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
                        <button onClick={() => append({ role: 'user', content: "Retry" })} className="ml-2 underline hover:text-red-300">
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
                  value={input || ''}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if ((input || '').trim() && !isLoading) {
                        handleSubmit(e);
                      }
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
                  disabled={isLoading || !(input || '').trim()}
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
