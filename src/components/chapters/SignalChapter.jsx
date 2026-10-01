/**
 * SignalChapter — HERO: The Signal.
 * 
 * A nearly empty dark environment with a luminous signal node.
 * Identity appears with strong typographic hierarchy.
 * As user scrolls, the signal extends into a line that begins constructing the system.
 * Architectural grid lines subtly visible in the background.
 */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';
import social from '../../data/social';

const SignalChapter = () => {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax and fade transforms
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.015, 0.03, 0]);

  return (
    <section
      ref={containerRef}
      id="signal"
      className="relative min-h-[170vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle radial gradient backdrop — centered warmth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 40%, rgba(139,45,58,0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 60%, rgba(74,124,138,0.015) 0%, transparent 40%)
            `,
          }}
        />

        {/* Architectural grid — very faint */}
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Vertical lines */}
          {[20, 35, 50, 65, 80].map((pos) => (
            <div
              key={`v-${pos}`}
              className="absolute top-0 bottom-0 w-px bg-foreground"
              style={{ left: `${pos}%` }}
            />
          ))}
          {/* Horizontal lines */}
          {[25, 50, 75].map((pos) => (
            <div
              key={`h-${pos}`}
              className="absolute left-0 right-0 h-px bg-foreground"
              style={{ top: `${pos}%` }}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
        >
          {/* The Signal — central luminous node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="relative mb-12"
          >
            {/* Core signal */}
            <motion.div
              animate={prefersReduced ? {} : {
                scale: [1, 1.15, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2.5 h-2.5 rounded-full bg-accent relative"
              style={{
                boxShadow: '0 0 20px rgba(139,45,58,0.35), 0 0 60px rgba(139,45,58,0.1)',
              }}
            />
            {/* Ring 1 */}
            <motion.div
              animate={prefersReduced ? {} : {
                scale: [1, 1.8, 1],
                opacity: [0.12, 0, 0.12],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-10px] rounded-full border border-accent/15"
            />
            {/* Ring 2 — larger, slower */}
            <motion.div
              animate={prefersReduced ? {} : {
                scale: [1, 2.2, 1],
                opacity: [0.06, 0, 0.06],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute inset-[-22px] rounded-full border border-accent/8"
            />
          </motion.div>

          {/* System identifier — small technical label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <span className="font-mono text-[0.5625rem] tracking-[0.4em] text-text-dim uppercase">
              System / Signal
            </span>
          </motion.div>

          {/* Name — primary identity */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[1.1] mb-5"
          >
            Mikiale Getachew
          </motion.h1>

          {/* Role — secondary identity */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="font-mono text-[0.6875rem] md:text-xs tracking-[0.2em] text-muted uppercase mb-6"
          >
            Software Engineering Student
          </motion.p>

          {/* Domain indicators — three focus areas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            {['AI', 'Full-Stack', 'Cybersecurity'].map((domain, i) => (
              <span key={domain} className="flex items-center gap-4">
                <span className="font-mono text-[0.6875rem] tracking-wider text-text-secondary/70">
                  {domain}
                </span>
                {i < 2 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-accent/30" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-text-secondary/80 text-sm md:text-[0.9375rem] max-w-md leading-relaxed mb-10"
          >
            I build intelligent software systems{' '}
            <span className="text-foreground/60">from interface to infrastructure.</span>
          </motion.p>

          {/* CTAs — restrained, architectural */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-accent text-foreground text-[0.8125rem] font-medium hover:bg-accent-bright transition-colors duration-300 tracking-wide"
            >
              View Work
            </a>
            {social.resume && (
              <a
                href={social.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 border border-foreground/[0.08] text-text-secondary text-[0.8125rem] font-medium hover:border-foreground/20 hover:text-foreground transition-all duration-300 tracking-wide"
              >
                Resume
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 border border-foreground/[0.08] text-text-secondary text-[0.8125rem] font-medium hover:border-foreground/20 hover:text-foreground transition-all duration-300 tracking-wide"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* TRACE THE SYSTEM — scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[0.5625rem] tracking-[0.3em] text-text-dim uppercase">
            Trace the system
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-5 bg-gradient-to-b from-accent/30 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-accent/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignalChapter;
