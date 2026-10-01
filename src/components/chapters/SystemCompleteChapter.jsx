/**
 * SystemCompleteChapter — 09 / SYSTEM COMPLETE
 * The architecture from the beginning is now complete.
 * Visual summary of all traced system layers.
 * Then transitions into Contact.
 */
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import social from '../../data/social';

const systemLayers = [
  { id: 'interface', label: 'INTERFACE', number: '01' },
  { id: 'engine', label: 'ENGINE', number: '02' },
  { id: 'data', label: 'DATA', number: '03' },
  { id: 'intelligence', label: 'INTELLIGENCE', number: '04' },
  { id: 'security', label: 'SECURITY', number: '05' },
  { id: 'infrastructure', label: 'INFRASTRUCTURE', number: '06' },
];

const SystemCompleteChapter = () => {
  return (
    <>
      {/* System Complete visualization */}
      <section className="relative py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-widest text-accent uppercase mb-8 block">
              System Traced
            </span>

            {/* System status display */}
            <div className="inline-block text-left mb-12">
              <div className="system-panel rounded-sm p-6 md:p-8">
                <div className="font-mono text-[0.625rem] tracking-widest text-text-dim uppercase mb-6">
                  System Status
                </div>

                <div className="space-y-3">
                  {systemLayers.map((layer, i) => (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="font-mono text-[0.5625rem] text-text-dim w-5">
                        {layer.number}
                      </span>
                      <span className="font-mono text-xs tracking-wider text-foreground/70 flex-1">
                        {layer.label}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                        className="font-mono text-[0.625rem] text-accent"
                      >
                        ✓
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Completion line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-px bg-accent/20 mt-6 origin-left"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
              Have a system to build?
            </h2>
            <p className="text-muted text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether it's enterprise architecture, AI integration,
              or security automation — let's talk.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-2 bg-accent text-foreground px-8 py-3 rounded-sm font-medium hover:bg-accent-bright transition-colors duration-300 text-sm tracking-wide"
              >
                <Mail size={16} />
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-foreground/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim font-mono">
          <p>© {new Date().getFullYear()} Mikiale Getachew</p>
          <div className="flex items-center gap-6">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${social.email}`}
              className="hover:text-muted transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SystemCompleteChapter;
