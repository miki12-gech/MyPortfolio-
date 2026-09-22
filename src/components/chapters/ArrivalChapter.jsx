/**
 * ArrivalChapter — Chapter 0: The Ethiopian Coffee Ceremony.
 * 
 * The visitor enters a dark, atmospheric scene.
 * Scrolling controls the coffee pour.
 * After completion, steam transitions into engineering visuals.
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
  const { progress, progressValue } = useChapterProgress(containerRef);
  const { fillLevel, transitionProgress, isComplete } = useCoffeeProgress(progress);
  const { intensity, isScrolling } = useScrollVelocity(progress);
  const prefersReduced = useReducedMotion();

  // Scroll instruction fades out as user begins scrolling
  const instructionOpacity = useTransform(progress, [0, 0.05], [1, 0]);

  // Identity text fades in slightly after scroll begins, fades with transition
  const identityOpacity = useTransform(progress, [0, 0.02, 0.7, 0.95], [0.9, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="arrival"
      style={{ minHeight: '280vh', position: 'relative' }}
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

        {/* Coffee Scene */}
        <div className="relative z-10 w-full max-w-[480px] md:max-w-[650px] mx-auto px-4 -mt-12 md:-mt-16">
          <CoffeeScene
            fillLevel={fillLevel}
            transitionProgress={transitionProgress}
            isComplete={isComplete}
            isScrolling={isScrolling}
            intensity={intensity}
          />
        </div>

        {/* Identity Text */}
        <motion.div
          style={{ opacity: identityOpacity }}
          className="relative z-10 text-center mt-6 md:mt-8 px-6"
        >
          <p className="text-gold-dim text-sm tracking-[0.3em] font-display mb-3">
            እንኳን ደህና መጡ <span className="mx-2 opacity-50">|</span> WELCOME
          </p>
          <h1 className="font-display text-lg md:text-xl tracking-[0.2em] text-foreground mb-2">
            MIKIALE GETACHEW
          </h1>
          <p className="text-text-secondary text-base md:text-lg font-light tracking-wide">
            Software Engineering Student
          </p>
          <p className="text-muted text-sm mt-1.5 tracking-wider">
            AI{' '}
            <span className="text-gold-dim mx-1">•</span>{' '}
            Full-Stack{' '}
            <span className="text-gold-dim mx-1">•</span>{' '}
            Cybersecurity
          </p>
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
            animate={{ y: [0, 6, 0] }}
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
