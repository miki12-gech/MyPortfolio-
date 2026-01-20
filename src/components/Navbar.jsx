import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 'var(--nav-height)',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Mikiale</div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                color: 'var(--text-primary)',
                                fontWeight: 500
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
