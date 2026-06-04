import profileImg from '../assets/profile.jpg';
import ThreeHeroScene from './ThreeHeroScene';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'var(--nav-height)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '4rem',
        width: '100%',
        zIndex: 2,
      }} className="responsive-hero-grid">
        
        {/* Left Side: Typography & CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: '1.8rem',
        }}>
          {/* Circular profile avatar */}
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid var(--primary)',
            boxShadow: '0 0 20px var(--primary-glow)',
            animation: 'fadeInUp 0.8s ease forwards',
            marginBottom: '0.5rem'
          }}>
            <img
              src={profileImg}
              alt="Mikiale Getachew"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="animate-fade-in-up">
            <span style={{
              color: 'var(--primary)',
              textTransform: 'uppercase',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}>
              Welcome to my digital space
            </span>
            <h1 style={{ 
              fontSize: '3.5rem', 
              lineHeight: 1.1, 
              color: '#FFFFFF',
              margin: '0.2rem 0'
            }}>
              Hi, I'm <span style={{
                color: 'var(--primary)',
                textShadow: '0 0 15px rgba(255, 214, 0, 0.2)'
              }}>Mikiale</span>
            </h1>
            <p style={{
              fontSize: '1.8rem',
              color: '#FFFFFF',
              fontWeight: 600,
              marginTop: '0.5rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.01em'
            }}>
              Software Engineer & Solution Architect
            </p>
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            lineHeight: '1.7',
            margin: 0
          }} className="animate-fade-in-up">
            Designing and building scalable, user-centric digital experiences. Currently sharpening my technical arsenal at Mekelle University.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '1.2rem',
            marginTop: '0.5rem'
          }} className="animate-fade-in-up">
            <button
              className="btn"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side: 3D canvas representation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }} className="responsive-hero-3d">
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            backgroundColor: 'var(--primary-glow)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            zIndex: 1,
            pointerEvents: 'none'
          }} />
          <div style={{ zIndex: 2, width: '100%' }}>
            <ThreeHeroScene />
          </div>
        </div>

      </div>

      {/* CSS injection for responsive mobile viewports */}
      <style>{`
        @media (max-width: 968px) {
          .responsive-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2rem !important;
          }
          .responsive-hero-grid > div {
            align-items: center !important;
            text-align: center !important;
          }
          .responsive-hero-3d {
            order: -1 !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
