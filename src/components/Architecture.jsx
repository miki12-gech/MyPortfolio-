import { motion } from 'framer-motion';
import { FileText, Cpu, Code2, TestTube, Rocket, Activity } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="text-primary" size={24} />,
    title: "Requirements",
    description: "Deep dive into business logic, security constraints, and scalability needs."
  },
  {
    icon: <Cpu className="text-primary" size={24} />,
    title: "Architecture",
    description: "System design prioritizing Clean Architecture and security-first principles."
  },
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Development",
    description: "Type-safe, modular implementation with reusable UI components and robust APIs."
  },
  {
    icon: <TestTube className="text-primary" size={24} />,
    title: "Testing",
    description: "Automated security testing, unit tests, and performance validation."
  },
  {
    icon: <Rocket className="text-primary" size={24} />,
    title: "Deployment",
    description: "CI/CD pipelines ensuring zero-downtime and reliable releases."
  },
  {
    icon: <Activity className="text-primary" size={24} />,
    title: "Monitoring",
    description: "Continuous observability, logging, and performance tracking."
  }
];

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Build Software</h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto md:mx-0"></div>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
            A disciplined engineering lifecycle focused on reliability, security, and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black">{index + 1}</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
