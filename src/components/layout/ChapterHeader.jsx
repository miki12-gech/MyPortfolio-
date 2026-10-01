/**
 * ChapterHeader — Editorial chapter heading with system numbering.
 * Provides consistent chapter identification across the system.
 */
import { motion } from 'framer-motion';

const ChapterHeader = ({ number, label, title, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${className}`}
    >
      {/* Chapter number + label row */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          {number}
        </span>
        <div className="h-px flex-1 max-w-[60px] bg-accent/20" />
        <span className="font-mono text-xs tracking-widest text-text-dim uppercase">
          {label}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default ChapterHeader;
