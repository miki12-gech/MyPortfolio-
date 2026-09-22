/**
 * ContactChapter — Chapter 7: The Conversation.
 * Returns to coffee ceremony atmosphere for narrative closure.
 * Uses real social links from data/social.js.
 */
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import social from '../../data/social';

const ContactChapter = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Atmospheric background — return to coffee warmth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse, rgba(58,33,21,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-warm rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle warm glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(197,165,114,0.06) 0%, transparent 60%)',
            }}
          />

          {/* Sini icon — narrative closure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <svg viewBox="0 0 60 40" className="w-16 h-10 opacity-30">
              <path
                d="M 10,10 C 8,18 12,35 18,38 L 42,38 C 48,35 52,18 50,10 Z"
                fill="none"
                stroke="#C5A572"
                strokeWidth="1"
              />
              <ellipse cx="30" cy="10" rx="20" ry="4" fill="none" stroke="#C5A572" strokeWidth="1" />
              {/* Steam wisps */}
              <path d="M 25,8 C 24,3 26,0 25,-3" fill="none" stroke="#C5A572" strokeWidth="0.5" opacity="0.5" />
              <path d="M 30,7 C 31,2 29,-1 30,-4" fill="none" stroke="#C5A572" strokeWidth="0.5" opacity="0.4" />
              <path d="M 35,8 C 36,3 34,0 35,-3" fill="none" stroke="#C5A572" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Let's build something meaningful.
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for a software engineer to tackle complex architecture,
              or seeking expertise in AI and security integration — I'm ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={social.email === '#' ? '#' : `mailto:${social.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-bg-deep px-8 py-3.5 rounded-full font-semibold hover:bg-gold-bright transition-colors duration-300"
              >
                <Mail size={18} />
                Get In Touch
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-foreground/5 border border-gold/10 text-muted hover:text-foreground hover:bg-foreground/10 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-foreground/5 border border-gold/10 text-muted hover:text-foreground hover:bg-foreground/10 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center text-sm text-text-dim"
        >
          <p>© {new Date().getFullYear()} Mikiale Getachew. Engineered with craft and intention.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactChapter;
