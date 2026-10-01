/**
 * WorkChapter — 07 / THE WORK
 * The real projects become the focus.
 * Premium editorial layout with architecture diagrams per project.
 * Preserves all six existing projects with enhanced presentation.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeader from '../layout/ChapterHeader';
import projects from '../../data/projects';

/* Mini architecture flow for each project */
const ProjectArchitecture = ({ steps }) => {
  if (!steps || steps.length === 0) return null;
  
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {steps.map((step, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="font-mono text-[0.5625rem] tracking-wider text-accent/70 uppercase whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-foreground/10 text-xs mx-0.5">→</span>
          )}
        </span>
      ))}
    </div>
  );
};

/* Expanded project detail view */
const ProjectDetail = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="overflow-hidden"
    >
      <div className="pt-6 pb-2 space-y-6">
        {/* Problem */}
        {project.problem && (
          <div>
            <h4 className="font-mono text-[0.625rem] tracking-widest text-accent uppercase mb-2">
              Problem
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div>
            <h4 className="font-mono text-[0.625rem] tracking-widest text-accent uppercase mb-2">
              What I Built
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}

        {/* My Contribution */}
        {project.myContribution && (
          <div>
            <h4 className="font-mono text-[0.625rem] tracking-widest text-accent uppercase mb-2">
              My Contribution
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div>
            <h4 className="font-mono text-[0.625rem] tracking-widest text-accent uppercase mb-3">
              Architecture
            </h4>
            <div className="p-4 system-panel rounded-sm">
              <div className="flex flex-col items-center gap-1">
                {project.architecture.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-mono text-xs text-foreground/80 px-3 py-1.5 border border-foreground/[0.06] rounded-sm bg-bg-elevated/50">
                      {step}
                    </span>
                    {i < project.architecture.length - 1 && (
                      <div className="w-px h-3 bg-foreground/[0.08] my-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && (
          <div>
            <h4 className="font-mono text-[0.625rem] tracking-widest text-accent uppercase mb-2">
              Highlights
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((hl, i) => (
                <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  {hl}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* Individual project entry — editorial layout */
const ProjectEntry = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group"
    >
      {/* Top border */}
      <div className="h-px bg-foreground/[0.04] mb-8" />

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        {/* Project number — large editorial */}
        <div className="md:col-span-2">
          <span className="font-mono text-3xl md:text-4xl font-extralight text-text-dim/40 group-hover:text-accent/30 transition-colors duration-500">
            {num}
          </span>
        </div>

        {/* Project content */}
        <div className="md:col-span-7">
          {/* Title + description */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-accent-bright transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-sm mb-4">
            {project.description}
          </p>

          {/* Architecture flow — compact inline */}
          <ProjectArchitecture steps={project.architecture} />

          {/* Expand/collapse detail */}
          <AnimatePresence>
            {expanded && <ProjectDetail project={project} onClose={() => setExpanded(false)} />}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-mono text-xs tracking-wider text-muted hover:text-accent transition-colors duration-300 uppercase"
          >
            {expanded ? '— Collapse' : '+ View Details'}
          </button>
        </div>

        {/* Right column — tech + links */}
        <div className="md:col-span-3 space-y-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag text-[0.625rem]">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors duration-300"
                aria-label={`${project.title} source code`}
              >
                <FaGithub size={14} />
                Source
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors duration-300"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const WorkChapter = () => {
  return (
    <section id="work" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="07"
          label="The Work"
          title="Engineering Case Studies"
          subtitle="Selected projects demonstrating architectural decision-making, complex problem-solving, and scalable implementation."
        />

        {/* Projects list — editorial layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectEntry
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkChapter;
