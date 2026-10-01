/**
 * SystemCompleteChapter — 09 / SYSTEM COMPLETE + CONTACT
 * The architecture journey reaches its conclusion.
 * Displays system status verification of all layers and direct contact access.
 */
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import social from '../../data/social';

const systemLayers = [
  { id: 'interface', label: 'INTERFACE', number: '01', desc: 'Frontend Component Architecture' },
  { id: 'engine', label: 'ENGINE', number: '02', desc: 'Spring Boot & RBAC Core' },
  { id: 'data', label: 'DATA', number: '03', desc: 'PostgreSQL Relational Persistence' },
  { id: 'intelligence', label: 'INTELLIGENCE', number: '04', desc: 'RAG & RL Inference Pipelines' },
  { id: 'security', label: 'SECURITY', number: '05', desc: 'Dynamic Hooking & Boundary Audit' },
  { id: 'infrastructure', label: 'INFRASTRUCTURE', number: '06', desc: 'Docker & Cloud Deployment' },
  { id: 'work', label: 'THE WORK', number: '07', desc: 'Production Case Studies' },
  { id: 'engineer', label: 'THE ENGINEER', number: '08', desc: 'Mikiale Getachew Profile' },
];

const SystemCompleteChapter = () => {
  return (
    <>
      {/* System Complete Verification Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-widest text-accent uppercase mb-3 block">
              System Traced
            </span>

            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-8">
              Architecture Operational
            </h2>

            {/* System Status Panel */}
            <div className="inline-block text-left w-full max-w-xl mb-12">
              <div className="system-panel rounded-sm p-6 sm:p-8 border border-foreground/[0.08] bg-bg-elevated/40">
                <div className="flex items-center justify-between font-mono text-[0.625rem] tracking-widest text-text-dim uppercase mb-6 pb-3 border-b border-foreground/[0.06]">
                  <span>System Diagnostics</span>
                  <span className="text-accent flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    ALL SYSTEMS VERIFIED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {systemLayers.map((layer, i) => (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center justify-between py-1.5 border-b border-foreground/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[0.625rem] text-accent font-semibold w-5">
                          {layer.number}
                        </span>
                        <span className="text-foreground/90 font-medium">
                          {layer.label}
                        </span>
                        <span className="text-text-dim text-[0.625rem] hidden sm:inline">
                          // {layer.desc}
                        </span>
                      </div>
                      <span className="text-accent font-semibold text-[0.6875rem]">
                        ✓ VERIFIED
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/[0.06] flex items-center justify-between font-mono text-[0.625rem] text-text-dim">
                  <span>ARCHITECTURE HIERARCHY</span>
                  <span className="text-foreground/60">INTEGRITY 100%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 border-t border-foreground/[0.06] bg-bg-deep/80">
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-widest text-accent uppercase mb-3 block">
              Contact
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-5">
              Have a system to build?
            </h2>

            <p className="text-muted text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Whether it's enterprise backend architecture, AI integration,
              or security automation — let's build something remarkable.
            </p>

            {/* Main Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-2 bg-accent text-foreground px-8 py-3.5 rounded-sm font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent-bright transition-all duration-300 shadow-[0_0_20px_rgba(139,45,58,0.3)]"
              >
                <Mail size={16} />
                Get In Touch
              </a>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center justify-center gap-8 font-mono text-xs">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                aria-label="Send Email"
              >
                <Mail size={16} />
                <span>{social.email}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-foreground/[0.04] bg-bg-deep select-none">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim font-mono">
          <p>© {new Date().getFullYear()} Mikiale Getachew — Software Systems & Architecture</p>
          <div className="flex items-center gap-6">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted transition-colors"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${social.email}`}
              className="hover:text-muted transition-colors"
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
