import TiltCard from './TiltCard';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      {/* Background glow behind About */}
      <div style={{
        position: 'absolute',
        width: '320px',
        height: '320px',
        backgroundColor: 'rgba(255, 214, 0, 0.03)',
        filter: 'blur(120px)',
        top: '10%',
        left: '-5%',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <span style={{
        color: 'var(--primary)',
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: '0.85rem',
        letterSpacing: '0.2em',
        display: 'block',
        textAlign: 'center',
        marginBottom: '0.5rem'
      }}>
        Background & Focus
      </span>
      <h2 style={{ 
        fontSize: '2.8rem', 
        textAlign: 'center', 
        marginBottom: '4rem',
        fontFamily: 'var(--font-sans)',
        textTransform: 'none'
      }}>
        About Me
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '3rem',
        alignItems: 'stretch'
      }} className="responsive-about-grid">
        
        {/* Left Side: Story & Philosophy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ height: '100%' }}>
            <p style={{ 
              fontSize: '1.15rem', 
              color: '#FFFFFF', 
              lineHeight: '1.8',
              marginBottom: '1.5rem' 
            }}>
              I am a dedicated <strong>Software Engineer</strong> currently sharpening my skills at Mekelle University. 
              My passion lies in architecting robust digital solutions, building highly optimized backend systems, 
              and crafting immersive frontend interfaces that users love.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              With a strong problem-solving mindset, I thrive on tackling complex algorithmic challenges and design problems. 
              I design systems built for scalability, speed, and maintainability.
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              margin: 0
            }}>
              I am constantly exploring the bleeding edge of <strong>Artificial Intelligence</strong>, machine learning integration, and 
              <strong>Modern Web Engineering</strong> to push the boundaries of what's possible in software design.
            </p>
          </div>
        </div>

        {/* Right Side: Quick facts inside a 3D Tilt Card */}
        <TiltCard className="glass-card" style={{ 
          borderLeft: '4px solid var(--primary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--primary)',
              marginBottom: '1.2rem',
              letterSpacing: '-0.01em'
            }}>
              Core Tenets
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>01 / Clean Architecture</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Writing self-documenting, testable, and modular code.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>02 / AI Orchestration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Integrating LLMs and intelligent agents into product workflows.</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>03 / User-Centric Design</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ensuring speed, accessibility, and high visual standards.</p>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            📍 Based in Addis Ababa, Ethiopia
          </div>
        </TiltCard>

      </div>

      <style>{`
        @media (max-width: 868px) {
          .responsive-about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
