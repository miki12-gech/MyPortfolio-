/**
 * ProjectsChapter — Chapter 5: The Work.
 * Featured projects get full case-study treatment.
 * Standard projects displayed in a compact grid.
 */
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeading from '../layout/ChapterHeading';
import projects from '../../data/projects';

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="glass-warm rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/20 transition-colors duration-500"
    >
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="text-xs font-display tracking-[0.25em] text-gold mb-3 block">
              FEATURED PROJECT
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-text-secondary text-base">{project.description}</p>
          </div>
          <div className="flex gap-3 shrink-0 ml-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2.5 bg-foreground/5 rounded-full hover:bg-foreground/10"
                aria-label={`${project.title} GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2.5 bg-foreground/5 rounded-full hover:bg-foreground/10"
                aria-label={`${project.title} Demo`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column — Problem & Solution */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-display tracking-[0.2em] text-gold-dim mb-3">THE CHALLENGE</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
            </div>
            {project.solution && (
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-gold-dim mb-3">THE SOLUTION</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.solution}</p>
              </div>
            )}
            {project.myContribution && (
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-gold-dim mb-3">MY CONTRIBUTION</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{project.myContribution}</p>
              </div>
            )}
          </div>

          {/* Right column — Architecture + Highlights */}
          <div className="space-y-6">
            {/* Architecture diagram */}
            {project.architecture && (
              <div>
                <h4 className="text-xs font-display tracking-[0.2em] text-gold-dim mb-3">ARCHITECTURE</h4>
                <div className="py-4 px-5 bg-bg-deep/60 rounded-xl border border-gold/5">
                  <div className="flex flex-col items-center gap-1.5">
                    {project.architecture.map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-xs text-gold font-medium whitespace-nowrap px-3 py-1.5 bg-gold/[0.06] rounded-lg border border-gold/10">
                          {step}
                        </span>
                        {i < project.architecture.length - 1 && (
                          <div className="w-px h-3 bg-gold/20 my-0.5" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-display tracking-[0.2em] text-gold-dim mb-3">HIGHLIGHTS</h4>
              <ul className="space-y-1.5">
                {project.highlights.slice(0, 6).map((hl, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <ChevronRight size={12} className="text-gold shrink-0" />
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gold/5">
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

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-warm rounded-2xl overflow-hidden border border-transparent hover:border-gold/10 transition-all duration-500 group"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted text-sm">{project.description}</p>
          </div>
          <div className="flex gap-2 shrink-0 ml-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-1.5"
                aria-label={`${project.title} GitHub`}
              >
                <FaGithub size={16} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors p-1.5"
                aria-label={`${project.title} Demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Problem */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">{project.problem}</p>

        {/* Architecture flow */}
        {project.architecture && (
          <div className="mb-4 py-2.5 px-4 bg-bg-deep/50 rounded-lg border border-gold/5">
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {project.architecture.map((step, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="text-xs text-gold-dim font-medium whitespace-nowrap">{step}</span>
                  {i < project.architecture.length - 1 && (
                    <ArrowRight size={10} className="text-gold/30" />
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 bg-gold/5 text-gold-dim text-xs rounded-full"
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
  const featured = projects.filter(p => p.featured);
  const standard = projects.filter(p => !p.featured);

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

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {featured.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        {/* Standard Projects Grid */}
        {standard.length > 0 && (
          <>
            <div className="section-divider mb-10" />
            <h3 className="text-xs font-display tracking-[0.25em] text-gold-dim mb-8">
              MORE PROJECTS
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {standard.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsChapter;
