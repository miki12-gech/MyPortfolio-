/**
 * SignalChapter — HERO: The Signal & The Architectural Genesis.
 * 
 * An architectural system forming around the central signal node.
 * Features subtle system coordinates, satellite architecture layers,
 * and delicate grid lines without cluttering the minimalist aesthetic.
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
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -50]);
  const signalExtendY = useTransform(scrollYProgress, [0, 0.6], [0, 140]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [0.03, 0.05, 0]);

  return (
    <section
      ref={containerRef}
      id="signal"
      className="relative min-h-[160vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle radial ambient warmth centered behind the signal */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 38%, rgba(139,45,58,0.06) 0%, transparent 55%),
              radial-gradient(ellipse at 50% 65%, rgba(74,124,138,0.02) 0%, transparent 45%)
            `,
          }}
        />

        {/* Architectural background grid lines */}
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Vertical axis lines */}
          {[15, 30, 50, 70, 85].map((pos) => (
            <div
              key={`v-${pos}`}
              className="absolute top-0 bottom-0 w-px bg-foreground"
              style={{ left: `${pos}%` }}
            />
          ))}
          {/* Horizontal axis lines */}
          {[20, 40, 60, 80].map((pos) => (
            <div
              key={`h-${pos}`}
              className="absolute left-0 right-0 h-px bg-foreground"
              style={{ top: `${pos}%` }}
            />
          ))}
        </motion.div>

        {/* Content container */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
        >
          {/* ========================================================
              ARCHITECTURAL SYSTEM FORMING AROUND THE CENTRAL SIGNAL
              Subtle schematic frame, satellite nodes, and signal pulse
             ======================================================== */}
          <div className="relative mb-10 select-none">
            {/* Architectural crosshair corner brackets framing the node */}
            <div className="absolute -inset-10 pointer-events-none hidden sm:block">
              <span className="absolute top-0 left-0 text-[10px] font-mono text-foreground/20 leading-none">+</span>
              <span className="absolute top-0 right-0 text-[10px] font-mono text-foreground/20 leading-none">+</span>
              <span className="absolute bottom-0 left-0 text-[10px] font-mono text-foreground/20 leading-none">+</span>
              <span className="absolute bottom-0 right-0 text-[10px] font-mono text-foreground/20 leading-none">+</span>
              
              {/* Outer boundary lines */}
              <div className="absolute top-0 left-3 right-3 h-px bg-foreground/[0.04]" />
              <div className="absolute bottom-0 left-3 right-3 h-px bg-foreground/[0.04]" />
              <div className="absolute left-0 top-3 bottom-3 w-px bg-foreground/[0.04]" />
              <div className="absolute right-0 top-3 bottom-3 w-px bg-foreground/[0.04]" />
            </div>

            {/* Satellite subsystem indicators forming around the signal */}
            <div className="absolute -inset-16 pointer-events-none hidden md:flex items-center justify-between">
              {/* Left satellites: Interface & Data */}
              <div className="flex flex-col justify-between h-full -translate-x-4">
                <span className="font-mono text-[0.5rem] tracking-wider text-text-dim flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  01.INT
                </span>
                <span className="font-mono text-[0.5rem] tracking-wider text-text-dim flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/30" />
                  03.DAT
                </span>
              </div>

              {/* Right satellites: Engine & Infra */}
              <div className="flex flex-col justify-between h-full translate-x-4">
                <span className="font-mono text-[0.5rem] tracking-wider text-text-dim flex items-center gap-1.5">
                  02.ENG
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                </span>
                <span className="font-mono text-[0.5rem] tracking-wider text-text-dim flex items-center gap-1.5">
                  06.INF
                  <span className="w-1 h-1 rounded-full bg-accent/30" />
                </span>
              </div>
            </div>

            {/* Central Signal Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, type: 'spring', stiffness: 100 }}
              className="relative p-6 flex items-center justify-center"
            >
              {/* Core signal */}
              <motion.div
                animate={prefersReduced ? {} : {
                  scale: [1, 1.2, 1],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 rounded-full bg-accent relative z-10"
                style={{
                  boxShadow: '0 0 20px rgba(139,45,58,0.5), 0 0 50px rgba(139,45,58,0.2)',
                }}
              />

              {/* First orbit ring */}
              <motion.div
                animate={prefersReduced ? {} : {
                  scale: [1, 1.6, 1],
                  opacity: [0.18, 0.05, 0.18],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full border border-accent/25"
              />

              {/* Second orbit ring */}
              <motion.div
                animate={prefersReduced ? {} : {
                  scale: [1, 2.1, 1],
                  opacity: [0.1, 0, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute inset-[-4px] rounded-full border border-accent/15"
              />

              {/* Luminous signal bus line extending downward on scroll */}
              <motion.div
                style={{ height: signalExtendY }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent pointer-events-none"
              />
            </motion.div>
          </div>

          {/* System metadata label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <span className="font-mono text-[0.625rem] tracking-[0.35em] text-text-dim uppercase">
              SYS.CORE // ARCHITECTURE ENGINE
            </span>
          </motion.div>

          {/* Name — Primary identity */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.08] mb-4"
          >
            Mikiale Getachew
          </motion.h1>

          {/* Role — Secondary identity */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-mono text-xs sm:text-sm tracking-[0.2em] text-muted uppercase mb-5"
          >
            Software Engineering Student
          </motion.p>

          {/* Domain indicators — three core focus pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-8"
          >
            {['AI', 'Full-Stack', 'Cybersecurity'].map((domain, i) => (
              <span key={domain} className="flex items-center gap-3 sm:gap-4">
                <span className="font-mono text-xs tracking-wider text-foreground/80 font-medium">
                  {domain}
                </span>
                {i < 2 && (
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          >
            I build intelligent software systems{' '}
            <span className="text-foreground font-medium">from interface to infrastructure.</span>
          </motion.p>

          {/* Architectural CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-accent text-foreground text-xs font-mono tracking-wider uppercase font-semibold hover:bg-accent-bright transition-all duration-300 shadow-[0_0_15px_rgba(139,45,58,0.25)]"
            >
              View Work
            </a>
            {social.resume && (
              <a
                href={social.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 border border-foreground/[0.12] text-foreground/80 text-xs font-mono tracking-wider uppercase hover:border-accent hover:text-foreground transition-all duration-300 bg-bg-elevated/40"
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
              className="px-6 py-2.5 border border-foreground/[0.12] text-foreground/80 text-xs font-mono tracking-wider uppercase hover:border-accent hover:text-foreground transition-all duration-300 bg-bg-elevated/40"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Prompt — Architectural system trace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none"
        >
          <span className="font-mono text-[0.5625rem] tracking-[0.3em] text-text-dim uppercase">
            Trace The System
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-6 bg-gradient-to-b from-accent/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_6px_rgba(139,45,58,0.5)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignalChapter;
