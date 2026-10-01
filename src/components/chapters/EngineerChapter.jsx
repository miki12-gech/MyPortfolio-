/**
 * EngineerChapter — 08 / THE ENGINEER
 * About + Experience + Education with architectural path.
 * Real information only. No fabricated data.
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import { experiences, education } from '../../data/experience';
import profileImg from '../../assets/profile.jpg';

const EngineerChapter = () => {
  return (
    <section id="engineer" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="08"
          label="The Engineer"
          title="About Me"
        />

        {/* About section */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-20">
          {/* Profile image — restrained */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex justify-center md:justify-start"
          >
            <div className="w-32 h-40 md:w-36 md:h-44 overflow-hidden rounded-sm border border-foreground/[0.06]">
              <img
                src={profileImg}
                alt="Mikiale Getachew"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-9 space-y-5"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I am a Software Engineering Student with a deep focus on building resilient
              enterprise systems, integrating AI into practical applications, and ensuring
              robust cybersecurity architectures.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              My engineering approach bridges the gap between complex backend architectures
              and intuitive frontend experiences — from modernizing legacy hospital systems
              with Spring Boot and Next.js, to building AI-driven Android security testing
              environments with reinforcement learning.
            </p>
          </motion.div>
        </div>

        {/* Experience — architectural path */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs tracking-widest text-accent uppercase mb-10"
          >
            Experience
          </motion.h3>

          <div className="relative">
            {/* Architectural path line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/20 via-foreground/[0.06] to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`exp-${index}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Path node */}
                  <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full border border-accent/30 bg-bg-deep flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  </div>

                  {/* Period */}
                  <span className="font-mono text-[0.625rem] tracking-widest text-accent uppercase">
                    {exp.period}
                  </span>

                  {/* Content */}
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground mb-0.5">
                      {exp.role}
                    </h4>
                    <p className="text-muted text-sm mb-1">{exp.company}</p>
                    {exp.context && (
                      <p className="text-text-dim text-xs mb-3 italic">{exp.context}</p>
                    )}

                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                          <span className="mt-2 w-1 h-1 rounded-full bg-foreground/10 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Current node — pulsing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1 w-[14px] h-[14px] rounded-full border border-accent/20 bg-bg-deep flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
                </div>
                <span className="font-mono text-[0.625rem] tracking-widest text-text-dim uppercase">
                  Present — Building forward
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs tracking-widest text-accent uppercase mb-10"
          >
            Education
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              {/* Node */}
              <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full border border-foreground/10 bg-bg-deep flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
              </div>

              <span className="font-mono text-[0.625rem] tracking-widest text-accent uppercase">
                {edu.period}
              </span>

              <div className="mt-2">
                <div className="flex items-center gap-3 mb-0.5">
                  <h4 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  {edu.status && (
                    <span className="font-mono text-[0.5625rem] tracking-wider text-accent/60 uppercase px-2 py-0.5 border border-accent/15 rounded-sm">
                      {edu.status}
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm mb-3">{edu.institution}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item, i) => (
                    <span key={i} className="tech-tag text-[0.625rem]">
                      {item}
                    </span>
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

export default EngineerChapter;
