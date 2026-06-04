import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--nav-height)',
      backgroundColor: scrolled ? 'rgba(18, 10, 7, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand/Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ 
            fontWeight: '800', 
            fontSize: '1.5rem', 
            cursor: 'pointer',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-sans)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Mikiale</span>
          <span style={{ 
            width: '6px', 
            height: '6px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 8px var(--primary)'
          }} />
        </div>

        {/* Navigation Items */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => {
            const isHovered = hoveredItem === item;
            return (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  color: isHovered ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '50px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isHovered ? 'translateY(-1px)' : 'none',
                  backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                  position: 'relative'
                }}
              >
                {item}
                {isHovered && (
                  <span style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '12px',
                    height: '2px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '2px',
                    boxShadow: '0 0 6px var(--primary)'
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
