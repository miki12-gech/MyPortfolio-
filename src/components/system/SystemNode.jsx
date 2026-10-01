/**
 * SystemNode — Renders a single node in the system architecture.
 * A small luminous point that represents a system component.
 */
import { motion } from 'framer-motion';

const SystemNode = ({ 
  label, 
  active = false, 
  size = 'md',
  delay = 0,
  className = '' 
}) => {
  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, type: 'spring', stiffness: 200 }}
      className={`flex flex-col items-center gap-2 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <div
          className={`${sizes[size]} rounded-full transition-all duration-500 ${
            active
              ? 'bg-accent shadow-[0_0_12px_rgba(139,45,58,0.4),0_0_4px_rgba(139,45,58,0.3)]'
              : 'bg-foreground/20'
          }`}
        />
        {active && (
          <div
            className="absolute inset-0 rounded-full bg-accent/20 animate-ping"
            style={{ animationDuration: '3s' }}
          />
        )}
      </div>
      {label && (
        <span className={`font-mono text-[0.625rem] tracking-wider uppercase ${
          active ? 'text-accent-bright' : 'text-text-dim'
        }`}>
          {label}
        </span>
      )}
    </motion.div>
  );
};

export default SystemNode;
