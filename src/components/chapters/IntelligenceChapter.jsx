/**
 * IntelligenceChapter — 04 / INTELLIGENCE
 * The system begins receiving unstructured information.
 * Visual: DATA → RETRIEVAL → CONTEXT → MODEL → OUTPUT
 * Visually different from backend/data — represents information flow.
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';

const intelligenceFlow = [
  'DATA',
  'RETRIEVAL',
  'CONTEXT',
  'MODEL',
  'OUTPUT',
];

const capabilities = [
  { name: 'Python', description: 'Core AI/ML language' },
  { name: 'RAG Systems', description: 'Retrieval-Augmented Generation pipelines' },
  { name: 'Reinforcement Learning', description: 'Agent-based decision systems' },
  { name: 'AI Orchestration', description: 'Pipeline coordination & automation' },
  { name: 'Automation', description: 'Intelligent process workflows' },
];

const IntelligenceChapter = () => {
  return (
    <section id="intelligence" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      {/* Subtle visual shift — slightly different atmosphere for Intelligence */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(74,124,138,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="04"
          label="Intelligence"
          title="The AI Layer"
          subtitle="Where structured data meets unstructured intelligence. Information flows through retrieval, context, and model inference."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Intelligence flow diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <FlowDiagram
                nodes={intelligenceFlow}
                activeIndex={intelligenceFlow.length - 1}
              />
              
              {/* Data flow indicators — subtle animated dots along the path */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between py-8"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: `rgba(74,124,138,${0.15 + i * 0.08})`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* AI capabilities */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs tracking-widest text-signal uppercase mb-6"
            >
              Capabilities
            </motion.h3>

            <div className="space-y-5">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-signal/40 group-hover:bg-signal transition-colors duration-300" />
                    <span className="font-mono text-sm text-foreground">
                      {cap.name}
                    </span>
                  </div>
                  <p className="text-muted text-xs ml-[18px]">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceChapter;
