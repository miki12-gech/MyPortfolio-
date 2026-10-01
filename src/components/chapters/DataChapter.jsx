/**
 * DataChapter — 03 / DATA
 * Data layer visualization with abstract table relationships
 * and database technologies.
 */
import { motion } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';

const technologies = [
  'PostgreSQL',
  'MySQL',
  'Database Migrations',
  'Indexing',
  'Query Optimization',
  'Prisma',
];

const DataChapter = () => {
  return (
    <section id="data" className="relative py-24 md:py-32">
      {/* System path connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/15 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="03"
          label="Data"
          title="The Data Layer"
          subtitle="Structured, migrated, optimized. Where system state lives and relationships are defined."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Entity relationship diagram — abstract */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <svg
              viewBox="0 0 320 280"
              className="w-full max-w-[320px]"
              fill="none"
              aria-label="Abstract entity relationship diagram showing USER, ORDER, PROFILE, and PRODUCT entities with relationships"
            >
              {/* Connection lines */}
              <motion.line
                x1="160" y1="60" x2="260" y2="140"
                stroke="rgba(139,45,58,0.2)" strokeWidth="1"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.line
                x1="160" y1="60" x2="60" y2="140"
                stroke="rgba(139,45,58,0.2)" strokeWidth="1"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.line
                x1="160" y1="60" x2="160" y2="220"
                stroke="rgba(139,45,58,0.2)" strokeWidth="1"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.line
                x1="260" y1="140" x2="160" y2="220"
                stroke="rgba(240,236,230,0.04)" strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              />

              {/* Entity: USER */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <rect x="115" y="35" width="90" height="50" rx="2"
                  fill="rgba(24,24,27,0.8)" stroke="rgba(139,45,58,0.25)" strokeWidth="1" />
                <text x="160" y="55" textAnchor="middle" fill="#8b2d3a" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">USER</text>
                <text x="160" y="72" textAnchor="middle" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">id, name, email</text>
              </motion.g>

              {/* Entity: PROFILE */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <rect x="15" y="115" width="90" height="50" rx="2"
                  fill="rgba(24,24,27,0.8)" stroke="rgba(240,236,230,0.08)" strokeWidth="1" />
                <text x="60" y="135" textAnchor="middle" fill="#b8b2a8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="500">PROFILE</text>
                <text x="60" y="152" textAnchor="middle" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">user_id, bio</text>
              </motion.g>

              {/* Entity: ORDER */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <rect x="215" y="115" width="90" height="50" rx="2"
                  fill="rgba(24,24,27,0.8)" stroke="rgba(240,236,230,0.08)" strokeWidth="1" />
                <text x="260" y="135" textAnchor="middle" fill="#b8b2a8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="500">ORDER</text>
                <text x="260" y="152" textAnchor="middle" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">user_id, total</text>
              </motion.g>

              {/* Entity: PRODUCT */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <rect x="115" y="195" width="90" height="50" rx="2"
                  fill="rgba(24,24,27,0.8)" stroke="rgba(240,236,230,0.08)" strokeWidth="1" />
                <text x="160" y="215" textAnchor="middle" fill="#b8b2a8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="500">PRODUCT</text>
                <text x="160" y="232" textAnchor="middle" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">name, price</text>
              </motion.g>

              {/* Relationship labels */}
              <text x="95" y="90" textAnchor="middle" fill="#3d3a36" fontSize="7" fontFamily="JetBrains Mono">1:1</text>
              <text x="225" y="90" textAnchor="middle" fill="#3d3a36" fontSize="7" fontFamily="JetBrains Mono">1:N</text>
              <text x="175" y="150" textAnchor="middle" fill="#3d3a36" fontSize="7" fontFamily="JetBrains Mono">N:M</text>
            </svg>
          </motion.div>

          {/* Data technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
            >
              Data Technologies
            </motion.h3>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="tech-tag justify-center"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Data flow description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-5 system-panel rounded-sm"
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                Database architecture focused on referential integrity, migration discipline,
                and query optimization. From schema design to production-ready data pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataChapter;
