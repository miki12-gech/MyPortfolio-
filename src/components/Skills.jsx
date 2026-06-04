import TiltCard from './TiltCard';

const skills = [
  { name: "Algorithms & Logic", level: 90, desc: "Data structures, computational complexity, and puzzle solving." },
  { name: "Full-Stack Development", level: 85, desc: "Building end-to-end applications from database layers to client apps." },
  { name: "Spring Boot & Java", level: 86, desc: "Developing enterprise backend applications, microservices, and robust REST APIs." },
  { name: "React & Modern JS", level: 88, desc: "Creating reactive interfaces, custom state management, and modern ESM modules." },
  { name: "Database Design (SQL/NoSQL)", level: 82, desc: "Structuring schemas, writing complex queries, and modeling for high scale." },
  { name: "API Development", level: 85, desc: "Architecting RESTful services, GraphQL schemas, and secure JSON transports." },
  { name: "AI Fundamentals", level: 75, desc: "Integrating cognitive models, embeddings, prompts, and serverless orchestrators." },
  { name: "System Architecture", level: 80, desc: "Designing distributed patterns, microservices, and server topologies." }
];

const Skills = () => {
  return (
    <section id="skills" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        backgroundColor: 'rgba(255, 214, 0, 0.02)',
        filter: 'blur(130px)',
        top: '20%',
        left: '20%',
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
        Capabilities
      </span>
      <h2 style={{ 
        fontSize: '2.8rem', 
        textAlign: 'center', 
        marginBottom: '4.5rem',
        fontFamily: 'var(--font-sans)',
        textTransform: 'none'
      }}>
        Technical Arsenal
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {skills.map((skill) => (
          <TiltCard 
            key={skill.name} 
            className="glass-card"
            maxTilt={8}
            style={{
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '0.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600
                }}>
                  {skill.name}
                </h3>
                <span style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  textShadow: '0 0 8px var(--primary-glow)'
                }}>
                  {skill.level}%
                </span>
              </div>
              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
                marginBottom: '1.5rem'
              }}>
                {skill.desc}
              </p>
            </div>
            
            {/* Progress Bar Container */}
            <div style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                width: `${skill.level}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--primary), #FFE54C)',
                borderRadius: '9999px',
                boxShadow: '0 0 10px var(--primary-glow)',
                transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }} />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
