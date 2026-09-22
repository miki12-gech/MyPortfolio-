/**
 * ArchitectureChapter — Chapter 6: The Method.
 * Connected engineering pipeline visualization.
 * Preserves 6-step process with visual connections.
 */
import { motion } from 'framer-motion';
import { FileText, Cpu, Code2, TestTube, Rocket, Activity } from 'lucide-react';
import ChapterHeading from '../layout/ChapterHeading';

const steps = [
  {
    icon: <FileText className="text-gold" size={22} />,
    title: 'Requirements',
    description: 'Deep dive into business logic, security constraints, and scalability needs.',
  },
  {
    icon: <Cpu className="text-gold" size={22} />,
    title: 'Architecture',
    description: 'System design prioritizing Clean Architecture and security-first principles.',
  },
  {
    icon: <Code2 className="text-gold" size={22} />,
    title: 'Development',
    description: 'Type-safe, modular implementation with reusable UI components and robust APIs.',
  },
  {
    icon: <TestTube className="text-gold" size={22} />,
    title: 'Testing',
    description: 'Automated security testing, unit tests, and performance validation.',
  },
  {
    icon: <Rocket className="text-gold" size={22} />,
    title: 'Deployment',
    description: 'CI/CD pipelines ensuring zero-downtime and reliable releases.',
  },
  {
    icon: <Activity className="text-gold" size={22} />,
    title: 'Monitoring',
    description: 'Continuous observability, logging, and performance tracking.',
  },
];

const ArchitectureChapter = () => {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 06 — The Method"
          title="How I Build Software"
          className="mb-6"
        />
        <p className="text-muted text-lg max-w-2xl mb-14">
          A disciplined engineering lifecycle focused on reliability, security, and scalability.
        </p>

        {/* Pipeline connection line (visible on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-warm p-7 rounded-2xl relative overflow-hidden group"
            >
              {/* Step number watermark */}
              <div className="absolute top-3 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                <span className="text-7xl font-black text-foreground">{index + 1}</span>
              </div>

              <div className="relative z-10">
                {/* Connection indicator */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gold/15" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureChapter;
