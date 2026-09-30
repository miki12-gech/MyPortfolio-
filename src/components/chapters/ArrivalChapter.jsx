/**
 * ArrivalChapter — Chapter 0: The Ethiopian Coffee Ceremony.
 * 
 * Redesigned hero with strong identity, positioning statement, CTAs,
 * and the scroll-driven coffee pour ceremony below.
 */
import { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import useChapterProgress from '../../hooks/useChapterProgress';
import useCoffeeProgress from '../../hooks/useCoffeeProgress';
import useScrollVelocity from '../../hooks/useScrollVelocity';
import useReducedMotion from '../../hooks/useReducedMotion';
import CoffeeScene from '../coffee/CoffeeScene';

const ArrivalChapter = () => {
  const containerRef = useRef(null);
  const { progress } = useChapterProgress(containerRef);
  const { pourProgress, liquidLevel, transitionProgress, isComplete } = useCoffeeProgress(progress);
  const { intensity, isScrolling } = useScrollVelocity(progress);
  const prefersReduced = useReducedMotion();

  // Scroll instruction fades out as user begins scrolling
  const instructionOpacity = useTransform(progress, [0, 0.05], [1, 0]);

  // Identity text fades in slightly after scroll begins, fades with transition
  const identityOpacity = useTransform(progress, [0, 0.02, 0.7, 0.95], [0.9, 1, 1, 0]);

  // CTA buttons fade out earlier
  const ctaOpacity = useTransform(progress, [0, 0.02, 0.5, 0.7], [0.9, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="arrival"
      style={{ minHeight: '400vh', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
        className="flex flex-col items-center justify-center bg-bg-deep"
      >
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          {/* Radial warm glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(58,33,21,0.15) 0%, rgba(15,11,8,0) 60%)',
            }}
          />
          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 50%, rgba(8,7,6,0.6) 100%)',
            }}
          />
        </div>

        {/* Identity Text — above the coffee scene */}
        <motion.div
          style={{ opacity: identityOpacity }}
          className="relative z-10 text-center px-6 mb-4 md:mb-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-dim text-xs tracking-[0.3em] font-display mb-4"
          >
            እንኳን ደህና መጡ <span className="mx-2 opacity-50">|</span> WELCOME
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-xl md:text-2xl lg:text-3xl tracking-[0.15em] text-foreground mb-3"
          >
            MIKIALE GETACHEW
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-secondary text-base md:text-lg font-light tracking-wide mb-2"
          >
            Full-Stack Software Engineer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted text-sm tracking-wider max-w-md mx-auto leading-relaxed"
          >
            Building scalable enterprise systems, intelligent security platforms, and cloud-ready applications.
          </motion.p>

          {/* Domain badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-2 mt-4 flex-wrap"
          >
            {['Software Engineering', 'AI', 'Cybersecurity', 'Cloud'].map((domain) => (
              <span
                key={domain}
                className="text-xs text-gold-dim tracking-wider px-3 py-1 border border-gold/10 rounded-full bg-gold/[0.03]"
              >
                {domain}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Coffee Scene */}
        <div className="relative z-10 w-full max-w-[420px] md:max-w-[560px] mx-auto px-4">
          <CoffeeScene
            pourProgress={pourProgress}
            liquidLevel={liquidLevel}
            transitionProgress={transitionProgress}
            isComplete={isComplete}
            isScrolling={isScrolling}
            intensity={intensity}
          />
        </div>

        {/* CTAs */}
        <motion.div
          style={{ opacity: ctaOpacity }}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-5 px-6"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-gold text-bg-deep text-sm font-semibold rounded-full hover:bg-gold-bright transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 border border-gold/20 text-gold text-sm font-medium rounded-full hover:bg-gold/5 transition-colors duration-300"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Scroll Instruction */}
        <motion.div
          style={{ opacity: instructionOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-text-dim text-xs tracking-[0.3em] font-display">
            SCROLL TO POUR
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-px h-6 bg-gradient-to-b from-gold-dim to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ArrivalChapter;
