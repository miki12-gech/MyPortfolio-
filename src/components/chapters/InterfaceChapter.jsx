/**
 * InterfaceChapter — 01 / INTERFACE
 * The signal enters the frontend layer.
 * Shows React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
 * as components of the system rather than ordinary skill cards.
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';

const frontendStack = [
  { label: 'UI', description: 'User-facing interface layer' },
  { label: 'React', description: 'Component architecture & state management' },
  { label: 'Next.js', description: 'Server-side rendering & routing' },
  { label: 'TypeScript', description: 'Type-safe development' },
  { label: 'Tailwind CSS', description: 'Utility-first styling system' },
  { label: 'shadcn/ui', description: 'Accessible component primitives' },
  { label: 'API', description: 'Interface to backend services' },
];

const InterfaceChapter = () => {
  return (
    <section id="interface" className="relative py-24 md:py-32">
      {/* Subtle top border — system path entering this layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="01"
          label="Interface"
          title="The Frontend Layer"
          subtitle="Where users meet the system. Clean component architecture, type safety, and accessible design."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — Architecture flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <FlowDiagram
              nodes={frontendStack.map(s => s.label)}
              activeIndex={frontendStack.length - 1}
            />
          </motion.div>

          {/* Right — Detailed breakdown */}
          <div className="space-y-6">
            {frontendStack.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1.5 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-foreground uppercase">
                    {item.label}
                  </span>
                  <p className="text-muted text-sm mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceChapter;
