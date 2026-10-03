/**
 * CoreArchitectureSection — 01 / 02 / 03 CORE ARCHITECTURE + PRODUCTION PROOF
 * 
 * Replaces linear "slide deck" presentation with an interactive living system:
 * CLIENT / INTERFACE ──(REST API)──> ENGINE / CORE ──(JPA / SQL)──> DATA STORE
 * Followed immediately by real software proof: Hospital Management System (INSA).
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Database, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Printer,
  ChevronDown
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeader from '../layout/ChapterHeader';
import projects from '../../data/projects';

const hmsProject = projects.find(p => p.id === 'hospital-management') || projects[0];

const architectureNodes = [
  {
    id: 'interface',
    number: '01',
    label: 'INTERFACE',
    sublabel: 'Client Layer',
    icon: Layers,
    summary: 'Responsive component trees, server-side rendering, and typed contracts.',
    tech: [
      { name: 'Next.js', tag: 'App Router / SSR' },
      { name: 'React 19', tag: 'Reactive State' },
      { name: 'TypeScript', tag: 'Contract Verification' },
      { name: 'Tailwind CSS', tag: 'Design Tokens' },
      { name: 'Shadcn/UI', tag: 'Accessible Primitives' }
    ],
    role: 'Presents clinical and administrative workflows with minimal latency, responsive state updates, and strict client-side validation.',
    boundary: 'Serializes user interactions into authenticated REST / JSON payloads.'
  },
  {
    id: 'engine',
    number: '02',
    label: 'ENGINE',
    sublabel: 'Core Backend',
    icon: Cpu,
    summary: 'Spring Boot domain logic, strict RBAC authorization, and transactional boundaries.',
    tech: [
      { name: 'Spring Boot 3', tag: 'Service Core' },
      { name: 'Spring Security', tag: 'RBAC Demarcation' },
      { name: 'JPA / Hibernate', tag: 'ORM & Query Cache' },
      { name: 'REST APIs', tag: 'Stateless Endpoints' },
      { name: 'IoT Webhook', tag: 'Hardware Print Bridge' }
    ],
    role: 'Orchestrates business workflows, enforces role permissions across doctors and admins, and enforces transactional safety via @Transactional.',
    boundary: 'Guarantees that all state mutations satisfy strict domain constraints before persistence.'
  },
  {
    id: 'data',
    number: '03',
    label: 'DATA STORE',
    sublabel: 'Relational DB',
    icon: Database,
    summary: 'PostgreSQL relational persistence, indexing strategies, and zero-loss migrations.',
    tech: [
      { name: 'PostgreSQL', tag: 'Primary RDBMS' },
      { name: 'MySQL Migration', tag: 'Schema Modernization' },
      { name: 'HikariCP', tag: 'Connection Pooling' },
      { name: 'ACID Transactions', tag: 'Clinical Integrity' },
      { name: 'Composite Indexes', tag: 'Query Optimization' }
    ],
    role: 'Stores patient histories, pharmacy inventories, and audit logs with strict foreign key constraints and transactional recovery.',
    boundary: 'Provides persistent source-of-truth storage with zero data loss guarantees.'
  }
];

const CoreArchitectureSection = () => {
  const [activeNodeId, setActiveNodeId] = useState('interface');
  const [showDeepDive, setShowDeepDive] = useState(false);

  const activeNode = architectureNodes.find(n => n.id === activeNodeId) || architectureNodes[0];

  const handleAskMikiale = (question) => {
    window.dispatchEvent(new CustomEvent('open-ask-mikiale', { 
      detail: { question } 
    }));
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background architectural trace */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent/30 to-transparent" />

      {/* Internal Navigation Anchors to maintain left rail scrollspy */}
      <div id="interface" className="absolute top-0" />
      <div id="engine" className="absolute top-1/3" />
      <div id="data" className="absolute top-2/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ChapterHeader
          number="01-03"
          label="The Core Architecture"
          title="Living System Explorer"
          subtitle="An integrated three-tier architecture: from user interaction to persistent database storage."
        />

        {/* ========================================================
            PART 1: INTERACTIVE ARCHITECTURE CONSOLE (NOT A SLIDE DECK)
            ======================================================== */}
        <div className="mb-14 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 backdrop-blur-md p-6 sm:p-8">
          {/* Top System Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[0.625rem] text-text-dim uppercase tracking-wider pb-4 mb-6 border-b border-foreground/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-foreground font-semibold">ARCHITECTURE SCHEMATIC // 3-TIER OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">INTERACTIVE EXPLORER</span>
              <span>•</span>
              <span>CLICK NODES TO INSPECT</span>
            </div>
          </div>

          {/* Connected Architectural Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {architectureNodes.map((node, i) => {
              const isSelected = node.id === activeNodeId;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setActiveNodeId(node.id);
                    setShowDeepDive(true);
                  }}
                  className={`text-left p-5 rounded-sm border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'border-accent bg-accent/[0.08] shadow-[0_0_20px_rgba(139,45,58,0.2)]'
                      : 'border-foreground/[0.08] bg-bg-deep/60 hover:border-foreground/20 hover:bg-bg-deep/80'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeCoreNode"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(166,53,69,0.8)]"
                    />
                  )}

                  {/* Node Header */}
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

                  {/* Summary */}
                  <p className="text-xs text-text-secondary line-clamp-2 mb-3">
                    {node.summary}
                  </p>

                  {/* Scannable Tech Badges */}
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

          {/* Interactive Inspection Panel (Progressive Disclosure) */}
          <div className="mt-6 pt-5 border-t border-foreground/[0.06]">
            <div className="p-4 sm:p-5 rounded-sm bg-bg-deep/80 border border-foreground/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                    Node Inspection: {activeNode.label} ({activeNode.sublabel})
                  </span>
                </div>
                {/* 1-Click AI Deep-Dive Mode */}
                <button
                  onClick={() => handleAskMikiale(`Tell me about your ${activeNode.label} layer architecture: ${activeNode.role}`)}
                  className="flex items-center gap-1.5 font-mono text-[10px] text-accent-bright hover:text-white transition-colors cursor-pointer group"
                >
                  <Sparkles className="w-3 h-3 text-accent-bright" />
                  <span>Ask Mikiale about this layer →</span>
                </button>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {activeNode.role}
              </p>

              {/* Complete Tech Breakdown for Selected Node */}
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
            PART 2: RHYTHMIC GROUNDED PROJECT (THE PROOF)
            ======================================================== */}
        <div className="relative rounded-sm border-2 border-accent/40 bg-gradient-to-b from-bg-elevated/80 to-bg-deep/95 p-6 sm:p-10 shadow-[0_0_35px_rgba(139,45,58,0.15)]">
          {/* Section Marker */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-foreground/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-accent text-white font-bold tracking-wider">
                PRODUCTION PROOF // 01
              </span>
              <span className="text-text-dim">SYSTEM IMPLEMENTATION</span>
            </div>
            <span className="font-mono text-[10px] text-accent-bright tracking-wider">
              INSA FULL-STACK MODERNIZATION
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Project Overview & Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
                  {hmsProject.title}
                </h3>
                <p className="text-xs font-mono text-text-dim">
                  Role: <span className="text-foreground">{hmsProject.myRole}</span>
                </p>
              </div>

              {/* The Real Problem */}
              <div className="p-4 rounded-sm bg-bg-surface/50 border border-foreground/[0.06]">
                <div className="font-mono text-[10px] uppercase text-text-dim tracking-wider mb-1">
                  The Engineering Problem
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {hmsProject.problem}
                </p>
              </div>

              {/* Architectural Decisions (Proof) */}
              <div>
                <div className="font-mono text-xs uppercase text-foreground tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  Key Architectural Decisions
                </div>
                <div className="space-y-2.5">
                  {hmsProject.technicalDecisions.map((decision, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <span className="font-mono text-accent text-[11px] mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{decision}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions & AI Trigger */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={hmsProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-bg-elevated hover:bg-bg-surface border border-foreground/[0.15] hover:border-accent text-foreground text-xs font-mono tracking-wider font-semibold rounded-sm transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>

                {/* Inline 1-Click AI Ask Trigger */}
                <button
                  onClick={() => handleAskMikiale('How did you architect role isolation and the database migration from MySQL to PostgreSQL in the Hospital Management System?')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent/20 hover:bg-accent text-accent-bright hover:text-white border border-accent/60 rounded-sm font-mono text-xs tracking-wider font-semibold shadow-[0_0_15px_rgba(139,45,58,0.25)] transition-all duration-300 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Mikiale: RBAC & PostgreSQL →</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Architectural Topology Visual (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/95 font-mono select-none">
              <div className="flex items-center justify-between text-[0.625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.06] pb-2">
                <span className="flex items-center gap-1.5 text-foreground font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  HMS Architectural Pipeline
                </span>
                <span>Production Topology</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-xs">
                {/* Layer 1: Next.js Frontend */}
                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.1] bg-bg-elevated/70 text-center text-foreground font-semibold">
                  Next.js Clinical Interface
                  <div className="text-[9px] text-text-dim font-normal">SSR · Doctor / Admin / Pharmacy Portals</div>
                </div>

                <div className="text-accent text-[10px]">↓ HTTP / REST API Calls</div>

                {/* Layer 2: Spring Boot Application Core */}
                <div className="w-full p-2.5 rounded-sm border border-accent/50 bg-accent/[0.08] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(139,45,58,0.2)]">
                  Spring Boot Application Core
                  <div className="text-[9px] text-accent font-normal mt-0.5">
                    @Transactional Service Boundaries
                  </div>
                </div>

                <div className="text-accent text-[10px]">↓ Spring SecurityFilterChain</div>

                {/* Layer 3: RBAC Isolation */}
                <div className="w-full p-2 rounded-sm border border-foreground/[0.08] bg-bg-elevated/50 text-center text-foreground/80 text-[11px] flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>RBAC Access Control</span>
                </div>

                <div className="text-accent text-[10px]">↓ Connection Pool & JPA/Hibernate</div>

                {/* Layer 4: PostgreSQL Database */}
                <div className="w-full p-2.5 rounded-sm border border-foreground/[0.12] bg-bg-elevated/90 text-center text-foreground font-semibold">
                  PostgreSQL Relational DB
                  <div className="text-[9px] text-text-dim font-normal">Migrated from MySQL · ACID Guarantees</div>
                </div>

                {/* IoT Hardware Integration */}
                <div className="mt-3 pt-3 border-t border-foreground/[0.06] w-full flex items-center justify-center gap-2 text-[10px] text-muted">
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span>IoT Webhook: Automated Prescription Printing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreArchitectureSection;
