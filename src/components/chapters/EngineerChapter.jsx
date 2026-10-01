/**
 * EngineerChapter — 08 / THE ENGINEER
 * The human identity behind the system: Mikiale Getachew.
 * 
 * Features:
 * - Profile photo subtly integrated in an architectural frame (unmodified face)
 * - Real About narrative
 * - Verified Experience at INSA (Full-Stack & Security Research)
 * - Verified Education at Mekelle University (Software Engineering, 5th year)
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import { experiences, education } from '../../data/experience';
import profileImg from '../../assets/profile.jpg';

const EngineerChapter = () => {
  return (
    <section id="engineer" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="08"
          label="The Engineer"
          title="Mikiale Getachew"
          subtitle="Software Engineering Student · AI / Full-Stack / Cybersecurity"
        />

        {/* Identity & About Section */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center mb-20 p-6 sm:p-8 rounded-sm border border-foreground/[0.08] bg-bg-elevated/30">
          {/* Profile Photo in Architectural Frame (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 flex flex-col items-center select-none"
          >
            <div className="relative p-2 rounded-sm border border-foreground/[0.1] bg-bg-deep/80 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Corner crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[9px] text-foreground/30">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[9px] text-foreground/30">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[9px] text-foreground/30">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[9px] text-foreground/30">+</span>

              {/* Photo Viewport */}
              <div className="w-44 h-56 sm:w-48 sm:h-60 overflow-hidden rounded-sm bg-bg-surface">
                <img
                  src={profileImg}
                  alt="Mikiale Getachew"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              {/* Bottom spec label */}
              <div className="mt-2 pt-2 border-t border-foreground/[0.06] flex items-center justify-between font-mono text-[0.5625rem] text-text-dim">
                <span>IDENTITY // MG-01</span>
                <span className="text-accent">ACTIVE</span>
              </div>
            </div>
          </motion.div>

          {/* About Narrative (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 space-y-4"
          >
            <div className="font-mono text-xs tracking-widest text-accent uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Engineering Profile & Philosophy
            </div>

            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
              I am a Software Engineering Student with a deep focus on designing resilient enterprise systems,
              integrating applied AI, and ensuring robust cybersecurity architectures.
            </p>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              My engineering approach bridges the gap between deep backend architectures and responsive frontend
              experiences — from modernizing hospital management platforms with Spring Boot and Next.js,
              to developing reinforcement learning environments and dynamic Android security analysis systems with Frida and Appium.
            </p>

            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-text-dim border-t border-foreground/[0.06]">
              <div>
                <span className="text-accent/80 block">LOCATION</span>
                <span className="text-foreground/80">Addis Ababa / Mekelle</span>
              </div>
              <div>
                <span className="text-accent/80 block">INSTITUTION</span>
                <span className="text-foreground/80">Mekelle University</span>
              </div>
              <div>
                <span className="text-accent/80 block">INDUSTRY WORK</span>
                <span className="text-foreground/80">INSA Ethiopia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
          {/* Experience Section (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 space-y-10 border-l border-foreground/[0.08]">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-bg-deep border border-accent flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                  </span>

                  <span className="font-mono text-[0.625rem] tracking-wider text-accent font-semibold uppercase block mb-1">
                    {exp.period}
                  </span>

                  <h4 className="text-lg font-semibold text-foreground tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="text-muted text-sm font-mono mb-1">
                    {exp.company}
                  </div>
                  {exp.context && (
                    <div className="text-text-dim text-xs italic mb-3">
                      {exp.context}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-text-secondary text-sm">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent text-xs mt-1">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                Education
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 border-l border-foreground/[0.08]">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-bg-deep border border-foreground/30 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-foreground/40" />
                  </span>

                  <span className="font-mono text-[0.625rem] tracking-wider text-accent font-semibold uppercase block mb-1">
                    {edu.period}
                  </span>

                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-foreground tracking-tight">
                      {edu.degree}
                    </h4>
                    {edu.status && (
                      <span className="font-mono text-[0.5625rem] px-2 py-0.5 rounded-sm bg-accent/15 border border-accent/30 text-accent font-medium uppercase">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  <div className="text-muted text-sm font-mono mb-4">
                    {edu.institution}
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[0.625rem] tracking-widest text-text-dim uppercase block">
                      Core Specializations
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2.5 py-1 rounded-sm border border-foreground/[0.08] bg-bg-elevated/60 text-foreground/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineerChapter;
