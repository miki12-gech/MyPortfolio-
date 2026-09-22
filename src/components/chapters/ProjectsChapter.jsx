/**
 * ProjectsChapter — Chapter 5: The Work.
 * Engineering case studies with architecture diagrams.
 * All 6 projects preserved with full case-study structure.
 */
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeading from '../layout/ChapterHeading';
import projects from '../../data/projects';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="glass-warm rounded-2xl overflow-hidden border border-transparent hover:border-gold/10 transition-colors duration-500"
    >
      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-xs font-display tracking-[0.2em] text-gold-dim mb-2 block">
              PROJECT {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
            <p className="text-gold text-sm font-medium">{project.description}</p>
          </div>
          <div className="flex gap-3 shrink-0 ml-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2 bg-foreground/5 rounded-full hover:bg-foreground/10"
                aria-label={`${project.title} GitHub`}
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2 bg-foreground/5 rounded-full hover:bg-foreground/10"
                aria-label={`${project.title} Demo`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Architecture mini-diagram */}
        {project.architecture && (
          <div className="mb-6 py-4 px-5 bg-bg-deep/50 rounded-xl border border-gold/5">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {project.architecture.map((step, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-xs text-gold-dim font-medium whitespace-nowrap">{step}</span>
                  {i < project.architecture.length - 1 && (
                    <ChevronRight size={12} className="text-gold/30" />
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Problem */}
        <div className="mb-6">
          <h4 className="text-xs font-display tracking-[0.2em] text-muted mb-2">THE PROBLEM</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-display tracking-[0.2em] text-muted mb-3">ARCHITECTURE HIGHLIGHTS</h4>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.highlights.map((hl, i) => (
              <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                <ChevronRight size={14} className="text-gold shrink-0" />
                {hl}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gold/8 text-gold text-xs font-medium rounded-full border border-gold/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsChapter = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 05 — The Work"
          title="Engineering Case Studies"
          className="mb-6"
        />
        <p className="text-muted text-lg max-w-2xl mb-14">
          Selected projects demonstrating architectural decision-making, complex
          problem-solving, and scalable implementation.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsChapter;
