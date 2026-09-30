/**
 * ArchitectureChapter — Chapter 6: The Method.
 * Engineering philosophy section — how I approach building software.
 * Visually restrained, communicates principles not buzzwords.
 */
import { motion } from 'framer-motion';
import { FileText, Cpu, Code2, Shield, Rocket, Activity } from 'lucide-react';
import ChapterHeading from '../layout/ChapterHeading';

const principles = [
  {
    icon: <Cpu className="text-gold" size={20} />,
    title: 'Modular Architecture',
    description: 'Systems designed as composable, independently deployable modules rather than monolithic blocks.',
  },
  {
    icon: <Shield className="text-gold" size={20} />,
    title: 'Security-First',
    description: 'Authentication, authorization, and data isolation treated as architectural requirements, not afterthoughts.',
  },
  {
    icon: <Code2 className="text-gold" size={20} />,
    title: 'Data Integrity',
    description: 'Migration discipline, referential integrity, and query optimization as foundations of reliable systems.',
  },
  {
    icon: <Rocket className="text-gold" size={20} />,
    title: 'Automation',
    description: 'CI/CD pipelines, automated testing, and infrastructure-as-code for repeatable, reliable deployments.',
  },
  {
    icon: <Activity className="text-gold" size={20} />,
    title: 'Performance',
    description: 'Intentional optimization through profiling and measurement rather than premature optimization.',
  },
  {
    icon: <FileText className="text-gold" size={20} />,
    title: 'Maintainability',
    description: 'Clean code, clear boundaries, and meaningful abstractions that future engineers can understand.',
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
          Engineering principles that guide every architectural decision and implementation choice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-warm p-7 rounded-2xl relative overflow-hidden group"
            >
              {/* Step number watermark */}
              <div className="absolute top-3 right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                <span className="text-7xl font-black text-foreground">{index + 1}</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{principle.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureChapter;
