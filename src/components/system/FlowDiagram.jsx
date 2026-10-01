/**
 * FlowDiagram — Renders a vertical architecture flow diagram with interactive active states.
 * Supports scroll-driven activation, signal traversal along connectors,
 * and click/hover inspection of individual nodes.
 */
import { motion } from 'framer-motion';

const FlowDiagram = ({
  nodes = [],
  activeIndex = 0,
  onSelectNode = null,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {nodes.map((node, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;

        return (
          <div key={i} className="flex flex-col items-center">
            {/* Architectural Node */}
            <motion.button
              type="button"
              onClick={() => onSelectNode && onSelectNode(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-5 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-left ${
                isActive
                  ? 'bg-accent/15 border border-accent text-foreground shadow-[0_0_20px_rgba(139,45,58,0.35)]'
                  : isPast
                  ? 'bg-bg-elevated/70 border border-accent/30 text-foreground/80'
                  : 'bg-bg-elevated/30 border border-foreground/[0.06] text-muted hover:border-foreground/20 hover:text-foreground/70'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {/* Node Status Dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-accent shadow-[0_0_8px_rgba(166,53,69,1)]'
                      : isPast
                      ? 'bg-accent/60'
                      : 'bg-foreground/20'
                  }`}
                />
                
                {/* Node Label */}
                <span className="font-semibold tracking-wider">
                  {typeof node === 'string' ? node : node.label}
                </span>

                {/* Active Indicator Badge */}
                {isActive && (
                  <span className="ml-2 font-mono text-[0.5625rem] text-accent font-normal tracking-widest hidden sm:inline">
                    [ACTIVE]
                  </span>
                )}
              </div>
            </motion.button>

            {/* Architectural Connector Line */}
            {i < nodes.length - 1 && (
              <div className="relative w-px h-7 sm:h-9 my-0.5 bg-foreground/[0.08] overflow-hidden">
                {/* Signal trace traversing down active connectors */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isPast || isActive ? '100%' : '0%',
                    backgroundColor: isActive ? '#8b2d3a' : isPast ? 'rgba(139, 45, 58, 0.4)' : 'transparent',
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                />
                {isActive && (
                  <motion.div
                    animate={{ y: [0, 32, 0], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-0 left-0 w-full h-2 bg-accent shadow-[0_0_6px_#a63545]"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FlowDiagram;
