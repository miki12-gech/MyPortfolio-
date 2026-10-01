/**
 * InfrastructureChapter — 06 / INFRASTRUCTURE
 * Zoom out from the application.
 * CODE → GIT → CI/CD → DOCKER → CLOUD → PRODUCTION
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';

const deploymentFlow = [
  'CODE',
  'GIT',
  'CI/CD',
  'DOCKER',
  'CLOUD',
  'PRODUCTION',
];

const infraTech = [
  { name: 'Docker', role: 'Containerization' },
  { name: 'AWS', role: 'Cloud infrastructure' },
  { name: 'GitHub Actions', role: 'CI/CD pipelines' },
  { name: 'CI/CD', role: 'Automated deployment' },
];

const InfrastructureChapter = () => {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="06"
          label="Infrastructure"
          title="The Deployment Layer"
          subtitle="From local development to production. The system moves from code to cloud."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Deployment pipeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <FlowDiagram
                nodes={deploymentFlow}
                activeIndex={deploymentFlow.length - 1}
              />
              
              {/* Environment labels */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-6 top-0 h-1/3 flex items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-foreground/10" />
                  <span className="font-mono text-[0.5625rem] text-text-dim whitespace-nowrap">LOCAL</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-6 bottom-0 h-1/3 flex items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-foreground/10" />
                  <span className="font-mono text-[0.5625rem] text-text-dim whitespace-nowrap">CLOUD</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Infrastructure technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
            >
              Infrastructure Stack
            </motion.h3>

            <div className="space-y-4 mb-8">
              {infraTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between py-3 border-b border-foreground/[0.04] group"
                >
                  <span className="font-mono text-sm text-foreground group-hover:text-accent-bright transition-colors duration-300">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted">{tech.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureChapter;
