/**
 * AboutChapter — Chapter 1: The Person Behind The System.
 * Preserves all existing About content with redesigned presentation.
 */
import { motion } from 'framer-motion';
import ChapterHeading from '../layout/ChapterHeading';
import profileImg from '../../assets/profile.jpg';

const competencies = [
  'Enterprise Systems Architecture',
  'Full-Stack Web Development',
  'AI Integration & Automation',
  'Cybersecurity Research & Testing',
  'Cloud Deployment & DevOps',
];

const AboutChapter = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Subtle warm ambient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(58,33,21,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 01 — The Person"
          title="About Me"
          className="mb-16"
        />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Profile image — small, elegant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden border border-gold/10">
                <img
                  src={profileImg}
                  alt="Mikiale Getachew"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Frame accent */}
              <div className="absolute -bottom-2 -right-2 w-48 h-56 md:w-56 md:h-64 rounded-2xl border border-gold/20 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 text-text-secondary text-lg leading-relaxed"
            >
              <p>
                I am a Full-Stack Software Engineer with a deep focus on building resilient
                enterprise systems, integrating AI into practical applications, and ensuring
                robust cybersecurity architectures.
              </p>
              <p>
                My engineering approach bridges the gap between complex backend architectures
                and intuitive frontend experiences. I specialize in designing systems that
                scale, from cloud deployments to secure AI-driven analysis platforms.
              </p>
              <p>
                Recently, I've been focused on modernizing legacy hospital management systems
                and developing AI environments for automated Android security testing.
              </p>
            </motion.div>

            {/* Core Competencies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-warm p-6 md:p-8 rounded-2xl mt-8"
            >
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Core Competencies
              </h3>
              <ul className="space-y-3">
                {competencies.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-gold-dim flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChapter;
