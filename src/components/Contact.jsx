import { Send } from 'lucide-react';
import TiltCard from './TiltCard';

const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        backgroundColor: 'rgba(255, 214, 0, 0.02)',
        filter: 'blur(140px)',
        bottom: '-10%',
        left: '10%',
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
        Inquiries
      </span>
      <h2 style={{ 
        fontSize: '2.8rem', 
        textAlign: 'center', 
        marginBottom: '4.5rem',
        fontFamily: 'var(--font-sans)',
        textTransform: 'none'
      }}>
        Get in Touch
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '3rem',
        alignItems: 'stretch',
        maxWidth: '1000px',
        margin: '0 auto'
      }} className="responsive-contact-grid">
        
        {/* Left Side: Contact Form in TiltCard */}
        <TiltCard className="glass-card" maxTilt={4} style={{ padding: '2.5rem' }}>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="responsive-form-row">
              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(18, 10, 7, 0.4)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="contact-input"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(18, 10, 7, 0.4)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.9rem', color: '#FFFFFF' }}>Message</label>
              <textarea
                rows="5"
                placeholder="Describe your project or inquiries..."
                className="contact-input"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: 'rgba(18, 10, 7, 0.4)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  resize: 'none'
                }}
              />
            </div>
            
            <button
              type="submit"
              className="btn"
              style={{ 
                width: '100%', 
                marginTop: '0.5rem',
                padding: '16px 24px'
              }}
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </TiltCard>

        {/* Right Side: Info & Socials */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem 0'
        }} className="responsive-contact-info">
          <div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '1.2rem' }}>Let's Build Something Together</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Whether you need a robust cloud architecture, a highly reactive frontend application, or an intelligent system integrated with AI models, feel free to drop a message!
            </p>
          </div>

          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Connect with me
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://github.com/miki12-gech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Input hover/focus states styles and responsive rules */}
      <style>{`
        .contact-input:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 10px var(--primary-glow) !important;
        }
        .social-btn:hover {
          color: var(--primary) !important;
          border-color: var(--primary) !important;
          background-color: rgba(255, 214, 0, 0.08) !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 214, 0, 0.15);
        }
        @media (max-width: 868px) {
          .responsive-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .responsive-contact-info {
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .responsive-form-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
