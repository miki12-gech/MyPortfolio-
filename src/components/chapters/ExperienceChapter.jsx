/**
 * ExperienceChapter — Chapter 3: The Journey.
 * Visual journey/path rather than standard timeline.
 * Preserves both experience entries exactly.
 */
import { motion } from 'framer-motion';
import ChapterHeading from '../layout/ChapterHeading';
import { experiences } from '../../data/experience';

const ExperienceChapter = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 03 — The Journey"
          title="Professional Experience"
          className="mb-16"
        />

        {/* Journey Path */}
        <div className="relative">
          {/* Vertical path line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Journey node */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-gold bg-bg-deep flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>

                {/* Period badge */}
                <span className="inline-block text-xs font-display tracking-[0.2em] text-gold bg-gold/8 px-3 py-1 rounded-full mb-3 border border-gold/15">
                  {exp.period}
                </span>

                {/* Content card */}
                <div className="glass-warm p-6 md:p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-gold-dim text-sm font-medium mb-4">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-dim shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Current position node */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-16 md:pl-20"
            >
              <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-gold/40 bg-bg-deep flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" />
              </div>
              <span className="text-sm text-text-dim font-display tracking-[0.15em]">
                PRESENT — BUILDING THE FUTURE
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceChapter;
