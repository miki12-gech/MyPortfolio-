/**
 * SystemPath — The continuous vertical signal line that traces through the entire portfolio.
 * Renders on the right edge as a thin luminous connector, creating visual continuity.
 * This is the "spine" of the system architecture.
 * Visible only on large screens to avoid mobile clutter.
 */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SystemPath = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.5, 0.5, 0]);

  return (
    <div
      ref={containerRef}
      className="fixed right-8 top-0 bottom-0 z-[1] pointer-events-none hidden xl:block"
      aria-hidden="true"
    >
      {/* Static background line */}
      <div className="absolute inset-0 w-px bg-foreground/[0.02]" />
      
      {/* Animated progress line */}
      <motion.div
        style={{ height: pathHeight, opacity: glowOpacity }}
        className="absolute top-0 w-px origin-top"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
        {/* Signal dot at leading edge */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-accent/60"
          style={{
            boxShadow: '0 0 6px rgba(139,45,58,0.4), 0 0 15px rgba(139,45,58,0.15)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default SystemPath;
