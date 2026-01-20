import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)',
            background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)' // Subtle spotlight effect
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2.5rem',
                maxWidth: '900px',
                zIndex: 1
            }}>
                <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    border: '4px solid white',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <img
                        src={profileImg}
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                    Hi, I'm <span style={{
                        color: 'var(--primary)',
                    }}>Mikiale Getachew</span>
                </h1>

                <p style={{
                    fontSize: '1.75rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                    marginBottom: '1rem',
                    fontWeight: 300
                }}>
                    Software Engineer & Solution Architect
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '-1rem 0 1rem 0'
                }}>
                    Building scalable, user-centric digital experiences with modern technologies.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <button
                        className="btn"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore My Work
                    </button>
                    <button
                        className="btn"
                        style={{
                            background: 'white',
                            color: 'var(--text-primary)',
                            border: '1px solid #e2e8f0'
                        }}
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
