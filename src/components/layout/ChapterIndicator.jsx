/**
 * ChapterIndicator — Vertical side indicator showing current system position.
 * Fixed on the left edge, shows which layer of the system is currently active.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chapters = [
  { id: 'signal', number: '00', label: 'SIG' },
  { id: 'interface', number: '01', label: 'INT' },
  { id: 'engine', number: '02', label: 'ENG' },
  { id: 'data', number: '03', label: 'DAT' },
  { id: 'intelligence', number: '04', label: 'AI' },
  { id: 'security', number: '05', label: 'SEC' },
  { id: 'infrastructure', number: '06', label: 'INF' },
  { id: 'work', number: '07', label: 'WRK' },
  { id: 'engineer', number: '08', label: 'ENG' },
  { id: 'contact', number: '09', label: 'SYS' },
];

const ChapterIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      
      // Find the active chapter by checking from bottom to top
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3"
      aria-label="Chapter progress indicator"
      role="navigation"
    >
      {chapters.map((chapter, i) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 relative"
          aria-label={`Navigate to ${chapter.label}`}
          title={chapter.label}
        >
          {/* Dot indicator */}
          <motion.div
            animate={{
              scale: i === activeIndex ? 1 : 0.6,
              opacity: i === activeIndex ? 1 : 0.2,
            }}
            transition={{ duration: 0.3 }}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === activeIndex
                ? 'bg-accent shadow-[0_0_6px_rgba(139,45,58,0.4)]'
                : 'bg-foreground/20 group-hover:bg-foreground/40'
            }`}
          />
          
          {/* Label — shows on hover or when active */}
          <AnimatePresence>
            {i === activeIndex && (
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                className="font-mono text-[0.5rem] tracking-widest text-accent/60 uppercase"
              >
                {chapter.number}
              </motion.span>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  );
};

export default ChapterIndicator;
