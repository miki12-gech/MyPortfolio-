/**
 * EngineChapter — 02 / ENGINE
 * The signal travels deeper into the backend.
 * Visualizes the Spring Boot backend architecture as a request flow.
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';

const backendFlow = [
  'REQUEST',
  'SPRING SECURITY',
  'CONTROLLER',
  'SERVICE',
  '@TRANSACTIONAL',
  'REPOSITORY',
  'DATABASE',
];

const technologies = [
  { name: 'Java', role: 'Core language' },
  { name: 'Spring Boot', role: 'Application framework' },
  { name: 'Spring Security', role: 'Authentication & authorization' },
  { name: 'Spring Data JPA', role: 'Data access abstraction' },
  { name: 'Hibernate', role: 'ORM & persistence' },
  { name: 'REST APIs', role: 'Service communication' },
];

const EngineChapter = () => {
  return (
    <section id="engine" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="02"
          label="Engine"
          title="The Backend Layer"
          subtitle="Where business logic lives. Secure, transactional, and architecturally sound."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Architecture flow — request lifecycle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <FlowDiagram
                nodes={backendFlow}
                activeIndex={backendFlow.length - 1}
              />
              {/* Annotation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-2"
              >
                <div className="w-8 h-px bg-foreground/10" />
                <span className="font-mono text-[0.5625rem] text-text-dim whitespace-nowrap">
                  REQUEST LIFECYCLE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Technology stack detail */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
            >
              Technology Stack
            </motion.h3>

            <div className="space-y-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center justify-between py-3 border-b border-foreground/[0.04] group"
                >
                  <span className="font-mono text-sm text-foreground group-hover:text-accent-bright transition-colors duration-300">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted">
                    {tech.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineChapter;
