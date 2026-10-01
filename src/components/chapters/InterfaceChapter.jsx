/**
 * InterfaceChapter — 01 / INTERFACE
 * The signal enters the frontend layer.
 * 
 * Flow: UI → REACT → NEXT.JS → TYPESCRIPT → TAILWIND CSS → SHADCN/UI → API
 * Progressively activates as the user scrolls, emphasizing corresponding details.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const frontendStack = [
  {
    label: 'UI',
    title: 'User Interface & Interaction',
    description: 'User-facing interface layer with responsive layouts, accessible navigation, and micro-interactions.',
    details: 'Focuses on visual hierarchy, low interaction latency, and intuitive state feedback.',
  },
  {
    label: 'REACT',
    title: 'Component Architecture & State',
    description: 'Declarative component trees, custom hooks, and deterministic reactive state management.',
    details: 'Modular component design separating presentation logic from data fetching.',
  },
  {
    label: 'NEXT.JS',
    title: 'Server-Side Rendering & App Router',
    description: 'Hybrid SSR/SSG rendering, API route orchestration, and SEO-optimized performance.',
    details: 'Leverages server components for fast first-contentful paint and minimal client bundles.',
  },
  {
    label: 'TYPESCRIPT',
    title: 'Strict Type-Safe Development',
    description: 'Compile-time type verification, robust interface contracts, and error-free component props.',
    details: 'Guarantees reliable data flow between frontend views and backend REST APIs.',
  },
  {
    label: 'TAILWIND CSS',
    title: 'Design System & Utility Architecture',
    description: 'Systematic token-based styling, responsive grid layouts, and strict color palette consistency.',
    details: 'Zero runtime CSS overhead with precise architectural spacing tokens.',
  },
  {
    label: 'SHADCN/UI',
    title: 'Accessible UI Primitives',
    description: 'Radix UI primitive foundation with complete keyboard navigation and ARIA compliance.',
    details: 'Accessible dialogue, dropdown, and tab primitives styled directly with system tokens.',
  },
  {
    label: 'API',
    title: 'Client-Server Communication',
    description: 'RESTful API integration, typed JSON client contracts, and error interceptors.',
    details: 'The boundary where frontend requests serialize into backend payloads.',
  },
];

const InterfaceChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-driven progressive node activation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * frontendStack.length);
    const clampedIndex = Math.min(frontendStack.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="interface" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="01"
          label="Interface"
          title="The Frontend Layer"
          subtitle="Where users meet the system. Clean component architecture, type safety, and accessible design."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left Column — Progressive Architecture Flow (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                Frontend Pipeline
              </span>

              <FlowDiagram
                nodes={frontendStack.map((s) => s.label)}
                activeIndex={activeIndex}
                onSelectNode={(i) => setActiveIndex(i)}
                className="w-full max-w-[240px]"
              />
            </div>
          </div>

          {/* Right Column — Synchronized Technical Breakdown (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {frontendStack.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={item.label}
                  onClick={() => setActiveIndex(i)}
                  className={`p-4 sm:p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-bg-elevated/90 border-accent/70 shadow-[0_0_20px_rgba(139,45,58,0.15)] pl-6'
                      : 'bg-bg-elevated/20 border-foreground/[0.05] opacity-50 hover:opacity-85 hover:border-foreground/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-accent shadow-[0_0_8px_#a63545]' : 'bg-foreground/20'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-wider uppercase font-semibold ${
                          isActive ? 'text-accent-bright' : 'text-foreground/80'
                        }`}
                      >
                        {item.label} — {item.title}
                      </span>
                    </div>

                    <span className="font-mono text-[0.5625rem] text-text-dim">
                      STEP 0{i + 1}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted'
                    }`}
                  >
                    {item.description}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-foreground/[0.06] text-xs text-text-secondary font-mono leading-relaxed"
                    >
                      <span className="text-accent/80 mr-1.5">▸</span>
                      {item.details}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Conduit leading into 02 / ENGINE */}
        <SystemTransition
          fromNumber="01"
          fromLabel="INTERFACE"
          toNumber="02"
          toLabel="ENGINE"
          protocol="HTTP / REST CLIENT DTO"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default InterfaceChapter;
