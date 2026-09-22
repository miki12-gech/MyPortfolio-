/**
 * SkillsChapter — Chapter 2: The System.
 * Interactive architecture visualization with connected nodes.
 * Preserves all 5 skill categories with exact technologies.
 */
import { motion } from 'framer-motion';
import { Server, Layout, Database, Cloud, Shield } from 'lucide-react';
import ChapterHeading from '../layout/ChapterHeading';
import skillCategories from '../../data/skills';

const iconMap = {
  Server: <Server size={22} className="text-gold" />,
  Layout: <Layout size={22} className="text-gold" />,
  Database: <Database size={22} className="text-gold" />,
  Cloud: <Cloud size={22} className="text-gold" />,
  Shield: <Shield size={22} className="text-gold" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsChapter = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeading
          label="Chapter 02 — The System"
          title="Technical Architecture"
          className="mb-6"
        />
        <p className="text-muted text-lg max-w-2xl mb-14">
          A structured breakdown of my technical stack, categorized by domain.
        </p>

        {/* Architecture Node Visualization (SVG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <svg viewBox="0 0 400 200" className="w-full max-w-[500px] h-auto">
            {/* Central node */}
            <circle cx="200" cy="100" r="20" fill="rgba(197,165,114,0.08)" stroke="#C5A572" strokeWidth="1" />
            <text x="200" y="104" textAnchor="middle" fill="#C5A572" fontSize="9" fontFamily="Syncopate" fontWeight="700">SYS</text>

            {/* Surrounding nodes */}
            {[
              { x: 70, y: 60, label: 'Frontend' },
              { x: 330, y: 60, label: 'Backend' },
              { x: 70, y: 150, label: 'Cloud' },
              { x: 200, y: 180, label: 'Database' },
              { x: 330, y: 150, label: 'Security' },
            ].map((node, i) => (
              <g key={i}>
                <line x1="200" y1="100" x2={node.x} y2={node.y} stroke="#C5A572" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 3" />
                <circle cx={node.x} cy={node.y} r="6" fill="#1A1410" stroke="#C5A572" strokeWidth="0.8" opacity="0.7" />
                <text x={node.x} y={node.y + 18} textAnchor="middle" fill="#8A7E72" fontSize="8" fontFamily="Outfit">{node.label}</text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-warm p-6 rounded-2xl hover:border-gold/20 transition-colors duration-300 border border-transparent"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 bg-gold/5 rounded-lg border border-gold/10">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <ul className="space-y-2.5">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="w-1 h-1 rounded-full bg-gold-dim" />
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

export default SkillsChapter;
