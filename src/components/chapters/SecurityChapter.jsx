/**
 * SecurityChapter — 05 / SECURITY
 * One of the strongest chapters.
 * A data request enters the system → security boundaries appear.
 * Communicates: "I don't only build systems. I also think about how systems can fail."
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';

const securityFlow = [
  'REQUEST',
  'AUTHENTICATION',
  'AUTHORIZATION',
  'VALIDATION',
  'ANALYSIS',
  'RESULT',
];

const securityCapabilities = [
  {
    area: 'Android Security Testing',
    description: 'Dynamic and static analysis of Android applications',
  },
  {
    area: 'Frida',
    description: 'Runtime instrumentation and hook injection',
  },
  {
    area: 'Appium',
    description: 'Automated interaction and UI-driven security testing',
  },
  {
    area: 'Static Analysis',
    description: 'Code-level vulnerability detection',
  },
  {
    area: 'Security Research',
    description: 'RL-based automated penetration testing',
  },
];

const SecurityChapter = () => {
  return (
    <section id="security" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="05"
          label="Security"
          title="The Security Layer"
          subtitle="I don't only build systems. I also think about how systems can fail."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Security boundary flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Security boundary box around the flow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -inset-6 border border-dashed border-accent/15 rounded-sm"
              >
                <span className="absolute -top-2.5 left-4 bg-bg-deep px-2 font-mono text-[0.5625rem] text-accent/50 uppercase tracking-wider">
                  Security Boundary
                </span>
              </motion.div>

              <FlowDiagram
                nodes={securityFlow}
                activeIndex={securityFlow.length - 1}
              />
            </div>
          </motion.div>

          {/* Security capabilities */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
            >
              Security Research & Tools
            </motion.h3>

            <div className="space-y-4">
              {securityCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-3 border-b border-foreground/[0.04] group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span className="font-mono text-sm text-foreground group-hover:text-accent-bright transition-colors duration-300">
                      {cap.area}
                    </span>
                  </div>
                  <p className="text-muted text-xs ml-4">{cap.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Security philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-5 border border-accent/10 rounded-sm bg-accent/[0.02]"
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                Security is an architectural requirement, not an afterthought.
                Authentication, authorization, and data isolation are designed
                into the system from the first commit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityChapter;
