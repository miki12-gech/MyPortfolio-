/**
 * Navbar — Precision system navigation.
 * Desktop: clean horizontal nav with clear active states and current chapter monitor.
 * Mobile: proper hamburger menu with backdrop blur and keyboard navigation.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'System', href: '#interface', id: 'system' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'Engineer', href: '#engineer', id: 'engineer' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const chapterMap = [
  { id: 'contact', label: '09 // CONTACT', section: 'contact' },
  { id: 'engineer', label: '08 // ENGINEER', section: 'engineer' },
  { id: 'work', label: '07 // THE WORK', section: 'work' },
  { id: 'infrastructure', label: '06 // INFRASTRUCTURE', section: 'system' },
  { id: 'security', label: '05 // SECURITY', section: 'system' },
  { id: 'intelligence', label: '04 // INTELLIGENCE', section: 'system' },
  { id: 'data', label: '03 // DATA', section: 'system' },
  { id: 'engine', label: '02 // ENGINE', section: 'system' },
  { id: 'interface', label: '01 // INTERFACE', section: 'system' },
  { id: 'signal', label: '00 // SIGNAL', section: 'system' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState('00 // SIGNAL');
  const [activeSection, setActiveSection] = useState('system');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine current chapter and active nav section
      for (const chapter of chapterMap) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setCurrentChapter(chapter.label);
            setActiveSection(chapter.section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === '#' || href === '#signal') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const top = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-deep/95 backdrop-blur-md border-b border-foreground/[0.06] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo — Name & System Signal Indicator */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-2 group cursor-pointer select-none"
            aria-label="Scroll to top"
          >
            <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
              MIKIALE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(166,53,69,0.9)] transition-all duration-300" />
            <span className="font-mono text-[0.625rem] text-text-dim hidden sm:inline tracking-widest">
              // ARCHITECTURE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-muted hover:text-foreground/90'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_6px_rgba(139,45,58,0.8)]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Current Chapter System Readout */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-foreground/[0.08] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[0.625rem] tracking-widest text-text-secondary uppercase">
                {currentChapter}
              </span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 z-50 rounded-sm border border-foreground/[0.08] bg-bg-elevated/60"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-0.5 bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* System Status in Mobile Menu */}
            <div className="absolute top-20 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
                Current: {currentChapter}
              </span>
            </div>

            <nav className="flex flex-col items-center gap-7" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className={`font-mono text-lg tracking-widest uppercase transition-colors ${
                    activeSection === item.id
                      ? 'text-accent font-semibold'
                      : 'text-foreground hover:text-accent'
                  }`}
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
