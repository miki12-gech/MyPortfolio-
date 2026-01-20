const skills = [
    { name: "Algorithms & Logic", level: 90 },
    { name: "Full-Stack Development", level: 85 },
    { name: "React & Modern JS", level: 88 },
    { name: "Database Design (SQL/NoSQL)", level: 82 },
    { name: "API Development", level: 85 },
    { name: "AI Fundamentals", level: 75 },
    { name: "System Architecture", level: 80 }
];

const Skills = () => {
    return (
        <section id="skills" style={{ backgroundColor: 'var(--bg-color)' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Technical Arsenal</h2>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem'
            }}>
                {skills.map((skill) => (
                    <div key={skill.name} style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)'
                        }}>
                            <span>{skill.name}</span>
                            <span style={{ color: 'var(--primary)' }}>{skill.level}%</span>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '8px',
                            backgroundColor: '#e2e8f0',
                            borderRadius: '9999px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${skill.level}%`,
                                height: '100%',
                                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                                borderRadius: '9999px',
                                transition: 'width 1s ease-out'
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
