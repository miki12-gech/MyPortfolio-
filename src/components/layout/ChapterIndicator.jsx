/**
 * ChapterIndicator — Vertical system indicator on left edge.
 * Shows all 10 system chapters (00 through 09) with prominent active states,
 * clear chapter numbers, and smooth navigation.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chapters = [
  { id: 'signal', number: '00', label: 'SIGNAL' },
  { id: 'interface', number: '01', label: 'INTERFACE' },
  { id: 'engine', number: '02', label: 'ENGINE' },
  { id: 'data', number: '03', label: 'DATA' },
  { id: 'intelligence', number: '04', label: 'INTELLIGENCE' },
  { id: 'security', label: 'SECURITY' },
  { id: 'infrastructure', number: '06', label: 'INFRASTRUCTURE' },
  { id: 'work', number: '07', label: 'WORK' },
  { id: 'engineer', number: '08', label: 'ENGINEER' },
  { id: 'contact', number: '09', label: 'COMPLETE' },
];

const ChapterIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 280) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = id === 'signal' ? 0 : 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-start gap-2.5 select-none"
      aria-label="System chapter progress indicator"
      role="navigation"
    >
      {/* Background connector line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-foreground/[0.06] -z-10" />

      {chapters.map((chapter, i) => {
        const isActive = i === activeIndex;

        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => scrollToChapter(chapter.id)}
            className="group flex items-center gap-2.5 relative py-1 text-left cursor-pointer"
            aria-label={`Jump to Chapter ${chapter.number}: ${chapter.label}`}
          >
            {/* Dot indicator */}
            <div className="relative flex items-center justify-center w-3 h-3">
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 0.75,
                }}
                transition={{ duration: 0.25 }}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-accent shadow-[0_0_10px_rgba(166,53,69,1)]'
                    : 'w-2 h-2 bg-foreground/20 group-hover:bg-foreground/50'
                }`}
              />
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-accent/40 animate-ping" />
              )}
            </div>

            {/* Obvious Active Chapter Label */}
            <AnimatePresence>
              {isActive ? (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-bg-elevated/90 border border-accent/30 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                >
                  <span className="font-mono text-[0.625rem] font-semibold text-accent tracking-wider">
                    {chapter.number}
                  </span>
                  <span className="font-mono text-[0.5625rem] text-foreground font-medium tracking-widest uppercase">
                    {chapter.label}
                  </span>
                </motion.div>
              ) : (
                <span className="font-mono text-[0.5rem] tracking-widest text-text-dim/60 opacity-0 group-hover:opacity-100 transition-opacity uppercase pl-1">
                  {chapter.number} {chapter.label}
                </span>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
};

export default ChapterIndicator;
