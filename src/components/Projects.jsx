import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Hospital Management System",
    description: "Enterprise healthcare management platform modernization.",
    problem: "Legacy hospital system suffered from slow data retrieval, lack of strict access controls, and difficult maintainability, risking data integrity and operational efficiency.",
    highlights: [
      "Spring Boot backend",
      "Next.js frontend",
      "Database migration",
      "RBAC security",
      "Multi-role workflows",
      "Hardware integration"
    ],
    tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com"
    }
  },
  {
    title: "AI Android Security Analysis Platform",
    description: "AI-driven automated Android security testing system.",
    problem: "Manual Android penetration testing is time-consuming and often misses complex execution paths. Required an automated, intelligent agent capable of dynamic runtime interaction.",
    highlights: [
      "Reinforcement Learning environment",
      "Dynamic action execution",
      "Android automation",
      "Runtime analysis",
      "Security testing"
    ],
    tech: ["Python", "Reinforcement Learning", "Appium", "Frida"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com"
    }
  },
  {
    title: "Doc Forge AI",
    description: "Intelligent, AI-powered documentation forge.",
    problem: "Manual document parsing and analysis across various formats is highly inefficient and error-prone, requiring a unified pipeline to extract actionable insights automatically.",
    highlights: [
      "Automated PDF parsing",
      "AI-driven summarization",
      "Structured data extraction",
      "Cloud-native orchestration"
    ],
    tech: ["React", "Next.js", "AI Orchestration", "Cloud Deploy"],
    links: {
      github: "https://github.com",
      demo: "https://doc-forge-ai-mu.vercel.app/"
    }
  },
  {
    title: "TaskFlow",
    description: "High-performance productivity application for sprint optimization.",
    problem: "Teams struggled with scattered workflows and lack of visibility into sprint milestones, leading to inefficient task delegation and missed deadlines.",
    highlights: [
      "Sprint milestone tracking",
      "Optimized task delegation",
      "Real-time updates",
      "Client portal integration"
    ],
    tech: ["React", "Productivity Tools", "State Management"],
    links: {
      github: "https://github.com",
      demo: "https://taskflow-ultra-kappa.vercel.app/"
    }
  },
  {
    title: "Addis Link",
    description: "Community hub for urban residents and service providers.",
    problem: "Urban residents lacked a centralized, reliable hub to find verified local service providers and community announcements.",
    highlights: [
      "Service provider directory",
      "Community announcement board",
      "Full-stack integration",
      "Scalable data structure"
    ],
    tech: ["NodeJS", "React", "Full Stack", "API Design"],
    links: {
      github: "https://github.com",
      demo: "https://addis-link.vercel.app/"
    }
  },
  {
    title: "Course Bete",
    description: "Open learning portal and educational resource platform.",
    problem: "University students faced fragmented learning resources scattered across platforms, lacking a structured index for course materials.",
    highlights: [
      "Centralized study resources",
      "Educational resource indexing",
      "Responsive UI",
      "Open learning portal"
    ],
    tech: ["React", "Tailwind CSS", "Education Tech"],
    links: {
      github: "https://github.com",
      demo: "http://course-bete.vercel.app/"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Case Studies</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Selected projects demonstrating architectural decision-making, complex problem-solving, and scalable implementation.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-medium">{project.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.github} className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.links.demo} className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">The Problem</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Architecture Highlights</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <ChevronRight size={16} className="text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
