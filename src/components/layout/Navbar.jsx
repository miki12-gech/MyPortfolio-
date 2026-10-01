/**
 * Navbar — System navigation with chapter indicator.
 * Desktop: clean horizontal nav with system-status current chapter display.
 * Mobile: proper hamburger menu.
 * Keyboard navigation supported.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'System', href: '#interface' },
  { name: 'Work', href: '#work' },
  { name: 'Engineer', href: '#engineer' },
  { name: 'Contact', href: '#contact' },
];

const chapterMap = [
  { id: 'contact', label: 'CONTACT' },
  { id: 'engineer', label: 'ENGINEER' },
  { id: 'work', label: 'THE WORK' },
  { id: 'infrastructure', label: 'INFRASTRUCTURE' },
  { id: 'security', label: 'SECURITY' },
  { id: 'intelligence', label: 'INTELLIGENCE' },
  { id: 'data', label: 'DATA' },
  { id: 'engine', label: 'ENGINE' },
  { id: 'interface', label: 'INTERFACE' },
  { id: 'signal', label: 'SIGNAL' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState('SIGNAL');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine current chapter
      for (const chapter of chapterMap) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setCurrentChapter(chapter.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'system-panel-active py-3'
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo — name + signal dot */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-2 group"
          >
            <span className="text-sm font-semibold tracking-tight text-foreground">
              MG
            </span>
            <span className="w-1 h-1 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(139,45,58,0.4)] transition-all duration-300" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-mono text-xs tracking-wider text-muted hover:text-foreground transition-colors duration-300 uppercase relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Chapter indicator */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-foreground/[0.06]">
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="font-mono text-[0.5625rem] tracking-widest text-text-dim uppercase">
                {currentChapter}
              </span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-foreground origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Current chapter indicator */}
            <div className="absolute top-24 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="font-mono text-[0.5625rem] tracking-widest text-text-dim uppercase">
                System / {currentChapter}
              </span>
            </div>

            <nav className="flex flex-col items-center gap-8" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="font-mono text-lg tracking-wider text-foreground hover:text-accent transition-colors uppercase"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
