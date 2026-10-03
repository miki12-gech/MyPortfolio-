/**
 * IntelligenceSecuritySection — 04 / 05 / 06 INTELLIGENCE, SECURITY & INFRASTRUCTURE
 * 
 * Replaces linear "slide deck" presentation with an interactive living system:
 * INTELLIGENCE / RAG ──> DYNAMIC SECURITY & INSTRUMENTATION ──> CLOUD INFRASTRUCTURE
 * Grounded by two real software proofs:
 * 1. AI Android Security Analysis Platform (INSA)
 * 2. Doc Forge AI (Live Production)
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  ShieldAlert, 
  Server, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Activity,
  Zap,
  Lock
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeader from '../layout/ChapterHeader';
import projects from '../../data/projects';

const securityProject = projects.find(p => p.id === 'ai-android-security') || projects[1];
const docForgeProject = projects.find(p => p.id === 'doc-forge-ai') || projects[2];

const pipelineNodes = [
  {
    id: 'intelligence',
    number: '04',
    label: 'INTELLIGENCE',
    sublabel: 'RAG & AI Inference',
    icon: Brain,
    summary: 'Context-bounded synthesis, vector search, and streaming LLM orchestration.',
    tech: [
      { name: 'Python', tag: 'Data & Model Engine' },
      { name: 'Vercel AI SDK', tag: 'Streaming UI' },
      { name: 'LangChain', tag: 'Prompt Orchestration' },
      { name: 'Semantic Chunker', tag: 'Context Isolation' },
      { name: 'Groq / Llama 3', tag: 'Fast Inference' }
    ],
    role: 'Synthesizes domain knowledge and large documents into precise, hallucination-free responses using structured context windows.',
    boundary: 'Translates raw unstructured text into typed, verifiable artifacts.'
  },
  {
    id: 'security',
    number: '05',
    label: 'SECURITY',
    sublabel: 'Autonomous Testing',
    icon: ShieldAlert,
    summary: 'Dynamic sensing, Frida memory/crypto instrumentation, and attack surface auditing.',
    tech: [
      { name: 'Frida', tag: 'Runtime Hooking' },
      { name: 'Appium + ADB', tag: 'Device Automation' },
      { name: 'MobSF', tag: 'Static Bytecode Audit' },
      { name: 'RL Agent', tag: 'Policy Exploration' },
      { name: 'Androguard', tag: 'APK Decompilation' }
    ],
    role: 'Automates deep vulnerability discovery in mobile applications by orchestrating live device actions and intercepting runtime calls.',
    boundary: 'Bridges static binary inspection with dynamic runtime memory analysis.'
  },
  {
    id: 'infrastructure',
    number: '06',
    label: 'INFRASTRUCTURE',
    sublabel: 'Deployment & CI/CD',
    icon: Server,
    summary: 'Reproducible Docker containers, automated GitHub Actions pipelines, and edge serving.',
    tech: [
      { name: 'Docker', tag: 'Container Isolation' },
      { name: 'GitHub Actions', tag: 'CI/CD Pipelines' },
      { name: 'Vercel Edge', tag: 'Global Serverless' },
      { name: 'Linux / Bash', tag: 'System Operations' },
      { name: 'NGINX', tag: 'Reverse Proxy' }
    ],
    role: 'Provides immutable deployment environments, automated verification testing, and fault-tolerant edge distribution.',
    boundary: 'Guarantees reliable runtime availability from development to production.'
  }
];

const IntelligenceSecuritySection = () => {
  const [activeNodeId, setActiveNodeId] = useState('security');

  const activeNode = pipelineNodes.find(n => n.id === activeNodeId) || pipelineNodes[0];

  const handleAskMikiale = (question) => {
    window.dispatchEvent(new CustomEvent('open-ask-mikiale', { 
      detail: { question } 
    }));
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background architectural trace */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent/30 to-transparent" />

      {/* Internal Navigation Anchors */}
      <div id="intelligence" className="absolute top-0" />
      <div id="security" className="absolute top-1/3" />
      <div id="infrastructure" className="absolute top-2/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ChapterHeader
          number="04-06"
          label="Intelligence & Security"
          title="Autonomous Pipeline Explorer"
          subtitle="From dynamic mobile security instrumentation to production RAG synthesis and cloud infrastructure."
        />

        {/* ========================================================
            PART 1: INTERACTIVE PIPELINE CONSOLE (PROGRESSIVE DISCLOSURE)
            ======================================================== */}
        <div className="mb-14 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 backdrop-blur-md p-6 sm:p-8">
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[0.625rem] text-text-dim uppercase tracking-wider pb-4 mb-6 border-b border-foreground/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-foreground font-semibold">INTELLIGENCE & SECURITY PIPELINE // ACTIVE TRACE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">INTERACTIVE EXPLORER</span>
              <span>•</span>
              <span>SELECT COMPONENT</span>
            </div>
          </div>

          {/* Connected Pipeline Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pipelineNodes.map((node) => {
              const isSelected = node.id === activeNodeId;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`text-left p-5 rounded-sm border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'border-accent bg-accent/[0.08] shadow-[0_0_20px_rgba(139,45,58,0.2)]'
                      : 'border-foreground/[0.08] bg-bg-deep/60 hover:border-foreground/20 hover:bg-bg-deep/80'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSecurityNode"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(166,53,69,0.8)]"
                    />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded ${isSelected ? 'bg-accent text-white' : 'bg-bg-surface text-muted group-hover:text-foreground'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-foreground tracking-wider">
                        {node.number} // {node.label}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-text-dim uppercase tracking-widest">
                      {node.sublabel}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary line-clamp-2 mb-3">
                    {node.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {node.tech.slice(0, 3).map(t => (
                      <span
                        key={t.name}
                        className="px-2 py-0.5 font-mono text-[10px] rounded bg-bg-surface/80 border border-foreground/[0.06] text-foreground/80"
                      >
                        {t.name}
                      </span>
                    ))}
                    {node.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 font-mono text-[9px] rounded bg-bg-surface/50 text-text-dim">
                        +{node.tech.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Node Inspection Panel */}
          <div className="mt-6 pt-5 border-t border-foreground/[0.06]">
            <div className="p-4 sm:p-5 rounded-sm bg-bg-deep/80 border border-foreground/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                    Pipeline Inspection: {activeNode.label} ({activeNode.sublabel})
                  </span>
                </div>
                <button
                  onClick={() => handleAskMikiale(`Tell me about your ${activeNode.label} implementation: ${activeNode.role}`)}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-accent-bright hover:text-white transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-accent-bright" />
                  <span>Ask Mikiale about this layer →</span>
                </button>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {activeNode.role}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {activeNode.tech.map(t => (
                  <div key={t.name} className="p-2 rounded bg-bg-elevated/70 border border-foreground/[0.04]">
                    <div className="font-mono text-xs font-medium text-foreground">{t.name}</div>
                    <div className="font-mono text-[9px] text-text-dim tracking-wider">{t.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: RHYTHMIC GROUNDED PROJECT 02 (ANDROID SECURITY)
            ======================================================== */}
        <div className="mb-14 relative rounded-sm border-2 border-accent/40 bg-gradient-to-b from-bg-elevated/80 to-bg-deep/95 p-6 sm:p-10 shadow-[0_0_35px_rgba(139,45,58,0.15)]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-foreground/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-accent text-white font-bold tracking-wider">
                SECURITY PROOF // 02
              </span>
              <span className="text-text-dim">AUTONOMOUS AUDITING</span>
            </div>
            <span className="font-mono text-[10px] text-accent-bright tracking-wider">
              INSA SECURITY RESEARCH
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
                  {securityProject.title}
                </h3>
                <p className="text-xs font-mono text-text-dim">
                  Role: <span className="text-foreground">{securityProject.myRole}</span>
                </p>
              </div>

              <div className="p-4 rounded-sm bg-bg-surface/50 border border-foreground/[0.06]">
                <div className="font-mono text-[10px] uppercase text-text-dim tracking-wider mb-1">
                  The Security Challenge
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {securityProject.problem}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase text-foreground tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  Engineering Highlights & Dynamic Hooks
                </div>
                <div className="space-y-2.5">
                  {securityProject.technicalDecisions.map((decision, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <span className="font-mono text-accent text-[11px] mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{decision}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={securityProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-bg-elevated hover:bg-bg-surface border border-foreground/[0.15] hover:border-accent text-foreground text-xs font-mono tracking-wider font-semibold rounded-sm transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>

                <button
                  onClick={() => handleAskMikiale('What was your exact role in building the AI Android Security Analysis platform at INSA? How did the Action Executor and Frida hooks work?')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent/20 hover:bg-accent text-accent-bright hover:text-white border border-accent/60 rounded-sm font-mono text-xs tracking-wider font-semibold shadow-[0_0_15px_rgba(139,45,58,0.25)] transition-all duration-300 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Mikiale: Action Executor & Frida →</span>
                </button>
              </div>
            </div>

            {/* Pipeline Visual */}
            <div className="lg:col-span-5 p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/95 font-mono select-none">
              <div className="flex items-center justify-between text-[0.625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.06] pb-2">
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Autonomous Pentest Engine
                </span>
                <span>Active Sensing</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-xs">
                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.1] bg-bg-elevated/70 text-center text-foreground font-semibold">
                  Target Android APK Binary
                  <div className="text-[9px] text-text-dim font-normal">Static Bytecode & Manifest Attack Surface</div>
                </div>

                <div className="text-accent text-[10px]">↓ Reinforcement Learning Policy</div>

                <div className="w-full p-2.5 rounded-sm border border-accent/50 bg-accent/[0.08] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(139,45,58,0.2)]">
                  Appium + ADB Action Executor
                  <div className="text-[9px] text-accent font-normal mt-0.5">
                    Live Touch, Keystroke & Intent Dispatching
                  </div>
                </div>

                <div className="text-accent text-[10px]">↓ Dynamic Frida Injected Hooks</div>

                <div className="w-full p-2 rounded-sm border border-foreground/[0.08] bg-bg-elevated/50 text-center text-foreground/80 text-[11px] flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-accent" />
                  <span>Crypto, Keystore & Memory Sensing</span>
                </div>

                <div className="text-accent text-[10px]">↓ Vulnerability Severity Triage</div>

                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.12] bg-bg-elevated/90 text-center text-foreground font-semibold">
                  Automated Security Audit Report
                  <div className="text-[9px] text-text-dim font-normal">Code Coverage & Flaw Evidence Logs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 3: RHYTHMIC GROUNDED PROJECT 03 (DOC FORGE AI)
            ======================================================== */}
        <div className="relative rounded-sm border-2 border-foreground/[0.15] bg-gradient-to-b from-bg-elevated/80 to-bg-deep/95 p-6 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-foreground/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-foreground/15 text-foreground font-bold tracking-wider">
                PRODUCTION AI PROOF // 03
              </span>
              <span className="text-text-dim">LIVE WEB APP</span>
            </div>
            <a 
              href={docForgeProject.links.demo} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[10px] text-accent-bright hover:underline"
            >
              <span>doc-forge-ai-mu.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
                  {docForgeProject.title}
                </h3>
                <p className="text-xs font-mono text-text-dim">
                  Role: <span className="text-foreground">{docForgeProject.myRole}</span>
                </p>
              </div>

              <div className="p-4 rounded-sm bg-bg-surface/50 border border-foreground/[0.06]">
                <div className="font-mono text-[10px] uppercase text-text-dim tracking-wider mb-1">
                  The Problem Solved
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {docForgeProject.problem}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase text-foreground tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  Engineering Highlights
                </div>
                <div className="space-y-2.5">
                  {docForgeProject.technicalDecisions.map((decision, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <span className="font-mono text-accent text-[11px] mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{decision}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={docForgeProject.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-bright text-white text-xs font-mono tracking-wider font-semibold rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(139,45,58,0.4)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>

                <a
                  href={docForgeProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-bg-elevated hover:bg-bg-surface border border-foreground/[0.15] hover:border-accent text-foreground text-xs font-mono tracking-wider font-semibold rounded-sm transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>

                <button
                  onClick={() => handleAskMikiale('How does Doc Forge AI parse documents and prevent LLM hallucinations with structured context windows?')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-bg-elevated hover:bg-bg-surface text-accent-bright border border-accent/40 rounded-sm font-mono text-xs tracking-wider font-semibold transition-all duration-300 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Mikiale: RAG Pipeline →</span>
                </button>
              </div>
            </div>

            {/* Doc Forge Pipeline Visual */}
            <div className="lg:col-span-5 p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/95 font-mono select-none">
              <div className="flex items-center justify-between text-[0.625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.06] pb-2">
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Doc Forge RAG Topology
                </span>
                <span>Context Bounded</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-xs">
                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.1] bg-bg-elevated/70 text-center text-foreground font-semibold">
                  Multi-Format Document Ingest
                  <div className="text-[9px] text-text-dim font-normal">PDF · TXT · Markdown Stream</div>
                </div>

                <div className="text-accent text-[10px]">↓ Semantic Boundary Chunker</div>

                <div className="w-full p-2.5 rounded-sm border border-accent/50 bg-accent/[0.08] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(139,45,58,0.2)]">
                  Context Window Synthesizer
                  <div className="text-[9px] text-accent font-normal mt-0.5">
                    Hallucination Suppression Filter
                  </div>
                </div>

                <div className="text-accent text-[10px]">↓ Streaming LLM Engine</div>

                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.12] bg-bg-elevated/90 text-center text-foreground font-semibold">
                  Structured Artifacts & Instant Export
                  <div className="text-[9px] text-text-dim font-normal">JSON · Summary Cards · Verified Citations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSecuritySection;
