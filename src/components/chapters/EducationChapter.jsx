/**
 * EducationChapter — Chapter 4: The Academy.
 * New section with configurable education data.
 * TODO: Update institution and period in src/data/experience.js
 */
import { motion } from 'framer-motion';
import ChapterHeading from '../layout/ChapterHeading';
import { education } from '../../data/experience';

const EducationChapter = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 04 — The Academy"
          title="Education"
          className="mb-16"
        />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-warm p-8 md:p-10 rounded-2xl relative overflow-hidden"
            >
              {/* Decorative number */}
              <div className="absolute top-4 right-6 opacity-[0.03]">
                <span className="text-8xl font-black text-foreground">🎓</span>
              </div>

              <div className="relative z-10">
                {/* Period */}
                <span className="inline-block text-xs font-display tracking-[0.2em] text-gold bg-gold/8 px-3 py-1 rounded-full mb-4 border border-gold/15">
                  {edu.period}
                </span>

                <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-gold-dim font-medium mb-6">{edu.institution}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-text-secondary text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dim shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationChapter;
