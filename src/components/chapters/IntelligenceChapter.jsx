/**
 * IntelligenceChapter — 04 / INTELLIGENCE
 * The AI and machine learning layer of the system.
 * 
 * Visual logic: DATA → RETRIEVAL → CONTEXT → MODEL → OUTPUT
 * Real stack: Python, RAG Systems, Reinforcement Learning, AI Orchestration, Doc Forge AI pipeline.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const aiStages = [
  {
    label: 'DATA',
    title: 'Unstructured Ingestion & Extraction',
    tech: 'Doc Parsing / State Observation',
    description: 'Raw multi-format documents (PDFs, clinical notes) and Android environment state observations.',
    architecturalDetail: 'Tokenization, boundary-aware text extraction, and environment state encoding in Python.',
  },
  {
    label: 'RETRIEVAL',
    title: 'Semantic Search & Vector Ranking',
    tech: 'Embeddings / Vector Space',
    description: 'Converting text chunks into high-dimensional vector representations and querying relevant context.',
    architecturalDetail: 'Cosine similarity ranking to pull the exact reference paragraphs needed for factual grounding.',
  },
  {
    label: 'CONTEXT',
    title: 'Prompt Assembly & Constraint Window',
    tech: 'Context Window / System Guardrails',
    description: 'Synthesizing retrieved reference fragments into structured system prompts with strict anti-hallucination boundaries.',
    architecturalDetail: 'Injecting schema definitions to force deterministic JSON responses from non-deterministic models.',
  },
  {
    label: 'MODEL',
    title: 'Inference & Policy Decision',
    tech: 'LLMs / Reinforcement Learning',
    description: 'Executing model inference for summarization or RL policy evaluation for optimal automated security actions.',
    architecturalDetail: 'Balancing latency and reasoning depth; reward-driven policy updates for automated testing agents.',
  },
  {
    label: 'OUTPUT',
    title: 'Structured Validation & Stream',
    tech: 'Validated JSON / Action Execution',
    description: 'Parsing and validating model responses against strict schemas before delivering to client or action executor.',
    architecturalDetail: 'Streaming server-sent events for user interfaces and deterministic command dispatch to devices.',
  },
];

const aiCapabilities = [
  { name: 'Python', role: 'Primary AI & ML programming environment' },
  { name: 'RAG Systems', role: 'Retrieval-Augmented Generation for document search' },
  { name: 'Reinforcement Learning', role: 'State-action exploration and reward engineering' },
  { name: 'AI Orchestration', role: 'Multi-stage prompt pipelines and extraction workflows' },
  { name: 'Automated Testing', role: 'Intelligent dynamic Android security exploration' },
];

const IntelligenceChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * aiStages.length);
    const clampedIndex = Math.min(aiStages.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="intelligence" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 40% 45%, rgba(74,124,138,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="04"
          label="Intelligence"
          title="The AI Layer"
          subtitle="Where structured architecture meets unstructured intelligence. Information flows through retrieval, context, and model inference."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          {/* Left Column — Architecture Flow (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal/70" />
                Inference Pipeline
              </span>

              <FlowDiagram
                nodes={aiStages.map((s) => s.label)}
                activeIndex={activeIndex}
                onSelectNode={(i) => setActiveIndex(i)}
                className="w-full max-w-[240px]"
              />

              {/* Vector Pipeline Status Terminal */}
              <div className="mt-8 p-4 w-full rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
                <div className="font-mono text-[0.5625rem] tracking-wider text-text-dim uppercase mb-2 flex items-center justify-between">
                  <span>VECTOR BUS // PIPELINE</span>
                  <span className="text-signal-bright font-semibold">Active</span>
                </div>
                <div className="font-mono text-[0.6875rem] text-foreground/80 space-y-1">
                  <div className="text-accent">
                    [0{activeIndex + 1}] Processing: {aiStages[activeIndex].label}
                  </div>
                  <div className="text-text-dim text-[0.625rem]">
                    Context: {aiStages[activeIndex].tech}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Synchronized Technical Cards (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {aiStages.map((stage, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={stage.label}
                  onClick={() => setActiveIndex(i)}
                  className={`p-4 sm:p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-bg-elevated/90 border-signal/70 shadow-[0_0_20px_rgba(74,124,138,0.18)] pl-6'
                      : 'bg-bg-elevated/20 border-foreground/[0.05] opacity-50 hover:opacity-85 hover:border-foreground/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-signal-bright shadow-[0_0_8px_#5e9aab]' : 'bg-foreground/20'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-wider uppercase font-semibold ${
                          isActive ? 'text-signal-bright' : 'text-foreground/80'
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>

                    <span className="font-mono text-[0.5625rem] text-signal-bright/80 px-2 py-0.5 border border-signal/30 rounded-sm">
                      {stage.tech}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {stage.title}
                  </h4>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-foreground/90' : 'text-muted'
                    }`}
                  >
                    {stage.description}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-foreground/[0.06] text-xs text-text-secondary font-mono leading-relaxed"
                    >
                      <span className="text-signal-bright mr-1.5">▸</span>
                      {stage.architecturalDetail}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI & ML Capabilities Matrix */}
        <div className="p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
          <div className="font-mono text-xs tracking-widest text-signal-bright uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-bright" />
            AI & Automation Capabilities
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="p-3 border border-foreground/[0.04] bg-bg-deep/60 rounded-sm"
              >
                <div className="font-mono text-xs text-foreground font-semibold">
                  {cap.name}
                </div>
                <div className="text-[0.6875rem] text-muted mt-0.5">
                  {cap.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Conduit leading into 05 / SECURITY */}
        <SystemTransition
          fromNumber="04"
          fromLabel="INTELLIGENCE"
          toNumber="05"
          toLabel="SECURITY"
          protocol="ZERO-TRUST POLICY & PERIMETER BUS"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default IntelligenceChapter;
