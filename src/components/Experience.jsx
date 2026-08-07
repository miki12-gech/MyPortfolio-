import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Information Network Security Administration (INSA)",
    role: "Full-Stack Developer Intern",
    period: "2023",
    responsibilities: [
      "Enterprise application development",
      "Backend architecture",
      "Frontend engineering",
      "Database engineering"
    ]
  },
  {
    company: "AI Security Research / Software Engineering Internship",
    role: "Security Researcher & Developer",
    period: "2024",
    responsibilities: [
      "Android automation",
      "AI integration",
      "Security analysis"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-hover:border-primary group-hover:bg-primary/10 text-primary transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_var(--background)]">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                  <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <div className="text-muted-foreground font-medium mb-4">{exp.company}</div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
