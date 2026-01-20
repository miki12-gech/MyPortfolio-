const projects = [
    {
        title: "TaskFlow",
        description: "A productivity application designed to streamline task management and enhance workflow efficiency.",
        link: "https://taskflow-ultra-kappa.vercel.app/",
        tags: ["React", "Productivity", "Web App"]
    },
    {
        title: "Addis Link",
        description: "A platform connecting users with local services and resources.",
        link: "https://addis-link.vercel.app/",
        tags: ["Full Stack", "Service", "Community"]
    },
    {
        title: "Course Bete",
        description: "An educational resource platform providing access to courses and learning materials.",
        link: "http://course-bete.vercel.app/",
        tags: ["Education", "E-learning", "Resource"]
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ backgroundColor: 'var(--bg-color)' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                padding: '0 1rem'
            }}>
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '2.5rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'white',
                            boxShadow: 'var(--shadow-sm)',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.borderColor = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            {project.title}
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            flexGrow: 1
                        }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    backgroundColor: '#eff6ff',
                                    color: 'var(--primary)',
                                    padding: '6px 14px',
                                    borderRadius: '9999px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.025em'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
