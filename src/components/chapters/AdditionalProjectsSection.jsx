/**
 * AdditionalProjectsSection — 07 / THE WORK
 * Compact, high-signal project grid presenting remaining production systems:
 * - TaskFlow (Productivity & Client Portal)
 * - Addis Link (Community Service Hub)
 * - Course Bete (Educational Resource Portal)
 */
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ChapterHeader from '../layout/ChapterHeader';
import projects from '../../data/projects';

const otherProjects = projects.filter(p => !p.featured);

const AdditionalProjectsSection = () => {
  const handleAskMikiale = (question) => {
    window.dispatchEvent(new CustomEvent('open-ask-mikiale', { 
      detail: { question } 
    }));
  };

  return (
    <section id="work" className="relative pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="07"
          label="The Work"
          title="Additional Systems"
          subtitle="Production web applications built with modern frontend architecture, state management, and full-stack APIs."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40 hover:border-accent/40 hover:bg-bg-elevated/70 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between font-mono text-[9px] text-text-dim uppercase tracking-wider pb-3 mb-4 border-b border-foreground/[0.06]">
                  <span>{project.myRole || 'Full-Stack'}</span>
                  {project.links.demo && (
                    <span className="text-emerald-500 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-semibold text-foreground group-hover:text-accent-bright transition-colors mb-2">
                  {project.title}
                </h4>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 font-mono text-[11px] text-text-dim">
                  {project.highlights?.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/[0.06] mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 font-mono text-[9px] rounded bg-bg-surface/80 border border-foreground/[0.06] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-accent/20 hover:bg-accent text-accent-bright hover:text-white font-mono text-[10px] tracking-wider font-semibold transition-colors"
                        aria-label={`Launch ${project.title}`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Launch</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-bg-surface hover:bg-foreground/10 text-foreground font-mono text-[10px] tracking-wider transition-colors"
                        aria-label={`View code for ${project.title}`}
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => handleAskMikiale(`Tell me about your ${project.title} project: what problem did it solve and what stack did you use?`)}
                    className="p-1.5 rounded hover:bg-bg-surface text-text-dim hover:text-accent-bright transition-colors cursor-pointer"
                    title={`Ask Mikiale about ${project.title}`}
                    aria-label={`Ask Mikiale about ${project.title}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProjectsSection;
