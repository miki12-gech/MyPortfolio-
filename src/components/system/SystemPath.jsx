/**
 * SystemPath — The continuous vertical signal line tracing through the portfolio.
 * Renders on the right edge as a thin luminous connector creating visual continuity.
 * Acts as the structural spine of the system architecture.
 */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SystemPath = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 0.8, 0.8, 0]);

  return (
    <div
      ref={containerRef}
      className="fixed right-8 top-0 bottom-0 z-20 pointer-events-none hidden xl:block select-none"
      aria-hidden="true"
    >
      {/* Background tracking track */}
      <div className="absolute inset-0 w-px bg-foreground/[0.04]" />
      
      {/* Animated active signal conduit */}
      <motion.div
        style={{ height: pathHeight, opacity: glowOpacity }}
        className="absolute top-0 w-px origin-top bg-gradient-to-b from-accent/40 via-accent to-accent"
      >
        {/* Leading edge signal pulse */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center">
          <div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              boxShadow: '0 0 10px #a63545, 0 0 20px rgba(139,45,58,0.5)',
            }}
          />
          <span className="font-mono text-[0.5rem] tracking-widest text-accent/70 ml-2 whitespace-nowrap">
            SIGNAL.BUS
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemPath;
