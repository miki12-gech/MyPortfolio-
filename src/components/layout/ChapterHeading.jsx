import { motion } from 'framer-motion';

/**
 * Styled chapter heading with optional label.
 *
 * @param {string} label - Small label above heading (e.g., "Chapter 01")
 * @param {string} title - Main heading text
 * @param {string} className - Additional classes
 */
const ChapterHeading = ({ label, title, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {label && (
        <span className="font-display text-xs text-gold-dim tracking-[0.25em] mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="w-12 h-0.5 bg-gold rounded-full" />
    </motion.div>
  );
};

export default ChapterHeading;
