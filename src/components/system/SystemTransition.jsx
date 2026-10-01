/**
 * SystemTransition — An architectural conduit bridging adjacent system chapters.
 * Carries the continuous burgundy signal line from one layer into the next,
 * creating an unbroken visual flow throughout the system journey.
 */
import { motion } from 'framer-motion';

const SystemTransition = ({
  fromNumber = '01',
  fromLabel = 'INTERFACE',
  toNumber = '02',
  toLabel = 'ENGINE',
  protocol = 'HTTP / REST BUS',
  className = '',
}) => {
  return (
    <div
      className={`relative py-12 flex flex-col items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Top vertical lead-in line */}
      <div className="w-px h-10 bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" />

      {/* Protocol badge & signal transfer junction */}
      <div className="my-2 px-3 py-1 rounded-sm border border-foreground/[0.08] bg-bg-elevated/80 backdrop-blur-sm flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-accent/80 uppercase">
          {protocol}
        </span>
        <span className="font-mono text-[0.5rem] tracking-wider text-text-dim">
          [{fromNumber} → {toNumber}]
        </span>
      </div>

      {/* Downward signal chevron / conduit */}
      <div className="w-px h-12 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/40 relative">
        <motion.div
          animate={{ y: [0, 24, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[2px] top-0 w-[5px] h-[5px] rounded-full bg-accent shadow-[0_0_8px_rgba(166,53,69,0.8)]"
        />
      </div>

      {/* Faint target layer indicator */}
      <div className="mt-1 flex items-center gap-1.5 opacity-40">
        <span className="font-mono text-[0.5rem] tracking-widest text-text-dim uppercase">
          Entering Layer: {toLabel}
        </span>
      </div>
    </div>
  );
};

export default SystemTransition;
