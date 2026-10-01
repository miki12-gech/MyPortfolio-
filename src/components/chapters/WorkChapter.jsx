/**
 * WorkChapter — 07 / THE WORK
 * Real projects proving architectural decision-making and hands-on engineering.
 * 
 * Top 3 featured case studies prioritized with bespoke architecture visualizations:
 * 1. Hospital Management System (INSA)
 * 2. AI Android Security Analysis Platform (INSA)
 * 3. Doc Forge AI
 * 
 * Remaining projects presented under "OTHER WORK":
 * - TaskFlow
 * - Addis Link
 * - Course Bete
 */
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeader from '../layout/ChapterHeader';
import projects from '../../data/projects';

/* ========================================================
   BESPOKE ARCHITECTURE VISUALIZATIONS FOR TOP 3 PROJECTS
   ======================================================== */

const HMSArchitectureVisual = () => (
  <div className="p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/90 font-mono select-none">
    <div className="flex items-center justify-between text-[0.5625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.04] pb-2">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Architecture Diagram // HMS
      </span>
      <span>Enterprise Relational</span>
    </div>

    <div className="flex flex-col items-center gap-2 text-xs">
      {/* Layer 1: Frontend */}
      <div className="w-full max-w-[280px] p-2.5 rounded-sm border border-foreground/[0.1] bg-bg-elevated/60 text-center text-foreground font-semibold">
        Next.js Frontend (SSR & Clinical UI)
      </div>

      <div className="text-accent text-[10px]">↓ HTTP / REST API</div>

      {/* Layer 2: Spring Boot Backend */}
      <div className="w-full max-w-[280px] p-2.5 rounded-sm border border-accent/40 bg-accent/[0.05] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(139,45,58,0.15)]">
        Spring Boot Application Core
        <div className="text-[0.625rem] text-accent font-normal mt-0.5">
          @Transactional Service Demarcation
        </div>
      </div>

      <div className="text-accent text-[10px]">↓ SecurityFilterChain & PreAuthorize</div>

      {/* Layer 3: Spring Security RBAC */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 text-center text-foreground/80 text-[0.6875rem]">
        Role-Based Access Control (Doctor / Admin / Pharmacy)
      </div>

      <div className="text-accent text-[10px]">↓ Hibernate & Connection Pool</div>

      {/* Layer 4: PostgreSQL Database */}
      <div className="w-full max-w-[280px] p-2.5 rounded-sm border border-foreground/[0.1] bg-bg-elevated/80 text-center text-foreground font-semibold">
        PostgreSQL Relational DB (Migrated from MySQL)
      </div>

      {/* Auxiliary Node: IoT Webhook */}
      <div className="mt-2 pt-2 border-t border-foreground/[0.04] w-full text-center text-[0.625rem] text-muted">
        ⚡ Hardware Integration: Prescription & Document Print Webhook
      </div>
    </div>
  </div>
);

const SecurityArchitectureVisual = () => (
  <div className="p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/90 font-mono select-none">
    <div className="flex items-center justify-between text-[0.5625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.04] pb-2">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Architecture Diagram // AI Security
      </span>
      <span>Autonomous Pentesting</span>
    </div>

    <div className="flex flex-col items-center gap-2 text-xs">
      {/* Node 1: APK */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.1] bg-bg-elevated/60 text-center text-foreground font-semibold">
        Target Android APK Binary
      </div>

      <div className="text-accent text-[10px]">↓ Decompilation & Attack Surface Mapping</div>

      {/* Node 2: Static Analysis */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 text-center text-foreground/80 text-[0.6875rem]">
        Static Analysis (Permissions & Bytecode)
      </div>

      <div className="text-accent text-[10px]">↓ Appium Automation + ADB Bridge</div>

      {/* Node 3: Dynamic Sensing & Frida */}
      <div className="w-full max-w-[280px] p-2.5 rounded-sm border border-accent/40 bg-accent/[0.05] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(139,45,58,0.15)]">
        Frida Hook Injection & Dynamic Sensing
        <div className="text-[0.625rem] text-accent font-normal mt-0.5">
          Runtime Memory & Crypto Tracing
        </div>
      </div>

      <div className="text-accent text-[10px]">↓ State Vector & Reward Signal</div>

      {/* Node 4: Action Executor */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.1] bg-bg-elevated/60 text-center text-foreground font-semibold">
        RL Action Executor (Policy Exploration)
      </div>

      <div className="text-accent text-[10px]">↓ Triage & Classification</div>

      {/* Node 5: Results */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-accent/30 bg-bg-elevated/80 text-center text-foreground/90 font-medium">
        Vulnerability Assessment & Execution Log
      </div>
    </div>
  </div>
);

const DocForgeArchitectureVisual = () => (
  <div className="p-5 rounded-sm border border-foreground/[0.08] bg-bg-deep/90 font-mono select-none">
    <div className="flex items-center justify-between text-[0.5625rem] text-text-dim uppercase tracking-wider mb-4 border-b border-foreground/[0.04] pb-2">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-signal" />
        Architecture Diagram // Doc Forge AI
      </span>
      <span>RAG Document Pipeline</span>
    </div>

    <div className="flex flex-col items-center gap-2 text-xs">
      {/* Node 1: Input */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.1] bg-bg-elevated/60 text-center text-foreground font-semibold">
        Multi-Format Document Input (PDF / Text)
      </div>

      <div className="text-signal text-[10px]">↓ Token Boundary Chunking</div>

      {/* Node 2: Parser */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 text-center text-foreground/80 text-[0.6875rem]">
        Document Extraction & Table Parser
      </div>

      <div className="text-signal text-[10px]">↓ Context Assembly & Strict Schema</div>

      {/* Node 3: Context Synthesizer */}
      <div className="w-full max-w-[280px] p-2.5 rounded-sm border border-signal/40 bg-signal/[0.05] text-center text-foreground font-semibold shadow-[0_0_12px_rgba(74,124,138,0.15)]">
        Context Synthesizer & Guardrail Window
        <div className="text-[0.625rem] text-signal font-normal mt-0.5">
          Zero-Hallucination Extraction Controls
        </div>
      </div>

      <div className="text-signal text-[10px]">↓ LLM Synthesis Engine</div>

      {/* Node 4: Structured Output */}
      <div className="w-full max-w-[280px] p-2 rounded-sm border border-foreground/[0.1] bg-bg-elevated/80 text-center text-foreground font-semibold">
        Structured JSON & Streaming Markdown Output
      </div>
    </div>
  </div>
);

/* ========================================================
   PRIMARY FEATURED PROJECT COMPONENT
   ======================================================== */

const PrimaryProjectCard = ({ project, index }) => {
  const visualMap = {
    'hospital-management': <HMSArchitectureVisual />,
    'ai-android-security': <SecurityArchitectureVisual />,
    'doc-forge-ai': <DocForgeArchitectureVisual />,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="p-6 sm:p-8 rounded-sm border border-foreground/[0.08] bg-bg-elevated/30 relative"
    >
      {/* Top Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-foreground/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-accent tracking-wider uppercase">
            CASE STUDY 0{index + 1}
          </span>
          <span className="h-3 w-px bg-foreground/10" />
          <span className="font-mono text-xs text-text-dim uppercase tracking-wider">
            {project.tech[0]} // {project.tech[1]}
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-bright transition-colors font-medium"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Core Narrative & Engineering Details (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-muted text-sm font-mono">{project.description}</p>
          </div>

          {/* My Role */}
          {project.myRole && (
            <div className="p-3 rounded-sm border border-foreground/[0.05] bg-bg-deep/50">
              <span className="font-mono text-[0.625rem] tracking-widest text-accent uppercase block mb-1">
                My Role & Responsibility
              </span>
              <p className="text-foreground/90 text-sm font-medium">
                {project.myRole}
              </p>
            </div>
          )}

          {/* Problem Statement */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-text-dim uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              The Problem
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Technical Decisions */}
          {project.technicalDecisions && (
            <div>
              <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Key Technical Decisions
              </h4>
              <ul className="space-y-2">
                {project.technicalDecisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-mono text-xs mt-0.5">▸</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div className="pt-2">
            <h4 className="font-mono text-[0.625rem] tracking-widest text-text-dim uppercase mb-2">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.6875rem] px-2.5 py-1 rounded-sm border border-foreground/[0.08] bg-bg-deep/70 text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Architecture Representation (5 cols) */}
        <div className="lg:col-span-5">
          {visualMap[project.id]}
        </div>
      </div>
    </motion.article>
  );
};

/* ========================================================
   OTHER WORK COMPONENT
   ======================================================== */

const OtherProjectCard = ({ project }) => {
  return (
    <div className="p-6 rounded-sm border border-foreground/[0.06] bg-bg-elevated/20 flex flex-col justify-between hover:border-foreground/15 transition-all">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-semibold text-foreground tracking-tight">
            {project.title}
          </h4>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-bright transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted text-xs mb-3">{project.description}</p>
        <p className="text-text-secondary text-xs leading-relaxed mb-4">
          {project.problem}
        </p>

        {/* Mini Architecture Flow */}
        {project.architecture && (
          <div className="mb-4 p-2.5 rounded-sm bg-bg-deep/60 border border-foreground/[0.04]">
            <div className="font-mono text-[0.5625rem] text-text-dim uppercase tracking-wider mb-1.5">
              Architecture Pipeline:
            </div>
            <div className="font-mono text-[0.625rem] text-accent/80 flex items-center gap-1 flex-wrap">
              {project.architecture.map((step, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span>{step}</span>
                  {i < project.architecture.length - 1 && (
                    <span className="text-foreground/20">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-foreground/[0.04]">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.5625rem] px-2 py-0.5 rounded-sm bg-bg-elevated text-text-dim"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ========================================================
   MAIN WORK CHAPTER COMPONENT
   ======================================================== */

const WorkChapter = () => {
  const primaryProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="07"
          label="The Work"
          title="Engineering Case Studies"
          subtitle="Selected systems demonstrating architectural decision-making, strict data boundaries, and production implementation."
        />

        {/* Primary Featured Projects */}
        <div className="space-y-12 mb-20">
          {primaryProjects.map((project, index) => (
            <PrimaryProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* OTHER WORK Section */}
        <div className="pt-12 border-t border-foreground/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs tracking-widest text-accent uppercase block mb-1">
                Portfolio Systems
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                Other Work
              </h3>
            </div>
            <span className="font-mono text-xs text-text-dim">
              03 PRODUCTION PROJECTS
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkChapter;
