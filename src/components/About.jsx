import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-muted-foreground text-lg"
          >
            <p>
              I am a Full-Stack Software Engineer with a deep focus on building resilient enterprise systems, integrating AI into practical applications, and ensuring robust cybersecurity architectures.
            </p>
            <p>
              My engineering approach bridges the gap between complex backend architectures and intuitive frontend experiences. I specialize in designing systems that scale, from cloud deployments to secure AI-driven analysis platforms.
            </p>
            <p>
              Recently, I've been focused on modernizing legacy hospital management systems and developing AI environments for automated Android security testing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Core Competencies</h3>
            <ul className="space-y-4">
              {[
                "Enterprise Systems Architecture",
                "Full-Stack Web Development",
                "AI Integration & Automation",
                "Cybersecurity Research & Testing",
                "Cloud Deployment & DevOps"
              ].map((competency, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  {competency}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
