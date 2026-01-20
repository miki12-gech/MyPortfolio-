const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>About Me</h2>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
            }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    I am a dedicated <strong>Software Engineer</strong> currently sharpening my skills at Mekelle University.
                    My passion lies in architecting robust digital solutions, from efficient backend systems to engaging frontend interfaces.
                </p>
                <p>
                    With a strong problem-solving mindset, I enjoy tackling complex algorithmic challenges and building applications that make a tangible impact.
                    I am constantly exploring new technologies in <strong>Artificial Intelligence</strong> and <strong>Modern Web Development</strong> to push the boundaries of what's possible in software.
                </p>
            </div>
        </section>
    );
};

export default About;
