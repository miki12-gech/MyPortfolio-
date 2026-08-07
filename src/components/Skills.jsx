import { motion } from 'framer-motion';
import { Database, Server, Layout, Cloud, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: <Server size={24} className="text-primary" />,
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs"]
  },
  {
    title: "Frontend Engineering",
    icon: <Layout size={24} className="text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "Database Architecture",
    icon: <Database size={24} className="text-primary" />,
    skills: ["PostgreSQL", "MySQL", "Prisma", "Database Migration", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} className="text-primary" />,
    skills: ["Docker", "AWS", "CI/CD", "GitHub Actions"]
  },
  {
    title: "AI & Cybersecurity",
    icon: <Shield size={24} className="text-primary" />,
    skills: ["Python", "Reinforcement Learning", "RAG Systems", "Android Security Testing", "Frida", "Appium"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Architecture</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            A structured breakdown of my technical stack, categorized by domain.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-6 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
