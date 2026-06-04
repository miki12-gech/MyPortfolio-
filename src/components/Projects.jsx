import { ExternalLink, Folder } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: "Doc Forge AI",
    description: "An intelligent, AI-powered documentation forge that automates rendering, analysis, parsing, and structured summary creation for PDFs and files.",
    link: "https://doc-forge-ai-mu.vercel.app/",
    tags: ["AI Orchestration", "Next.js", "React", "Cloud Deploy"]
  },
  {
    title: "TaskFlow",
    description: "A high-performance productivity application designed to streamline task delegation, track sprint milestones, and optimize team velocity.",
    link: "https://taskflow-ultra-kappa.vercel.app/",
    tags: ["React", "Productivity", "Client Portal"]
  },
  {
    title: "Addis Link",
    description: "A community-focused platform connecting urban residents with local service providers, directory resources, and community announcements.",
    link: "https://addis-link.vercel.app/",
    tags: ["Full Stack", "Community Hub", "NodeJS"]
  },
  {
    title: "Course Bete",
    description: "An open learning portal and educational resource platform providing Mekelle University students structured study resources and materials.",
    link: "http://course-bete.vercel.app/",
    tags: ["Education Tech", "Resource Index", "Tailwind"]
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        backgroundColor: 'rgba(255, 214, 0, 0.02)',
        filter: 'blur(150px)',
        bottom: '10%',
        right: '-10%',
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
        Creative Works
      </span>
      <h2 style={{ 
        fontSize: '2.8rem', 
        textAlign: 'center', 
        marginBottom: '4rem',
        fontFamily: 'var(--font-sans)',
        textTransform: 'none'
      }}>
        Featured Projects
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        padding: '0 1rem'
      }}>
        {projects.map((project, index) => (
          <TiltCard
            key={index}
            className="glass-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              height: '100%'
            }}
          >
            <div 
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Card Header with Icons */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.8rem'
              }}>
                <Folder size={36} color="var(--primary)" strokeWidth={1.5} />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                    padding: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.backgroundColor = 'rgba(255, 214, 0, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'; }}
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Title & Description */}
              <h3 style={{
                fontSize: '1.45rem',
                marginBottom: '0.8rem',
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
                fontFamily: 'var(--font-sans)'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.98rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                flexGrow: 1
              }}>
                {project.description}
              </p>

              {/* Badges / Tags */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    backgroundColor: 'rgba(255, 214, 0, 0.06)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(255, 214, 0, 0.15)',
                    padding: '5px 12px',
                    borderRadius: '50px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.025em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
