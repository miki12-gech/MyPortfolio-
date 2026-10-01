/**
 * DataChapter — 03 / DATA
 * The persistence layer of the system.
 * 
 * Visual logic: TABLES → RELATIONSHIPS → QUERIES → PERSISTENCE
 * Real stack: PostgreSQL, MySQL migration, Spring Data JPA, Indexing, Query Optimization, Prisma.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const dataStages = [
  {
    label: 'TABLES',
    title: 'Entity Schema & Schema Constraints',
    tech: 'PostgreSQL DDL / Schemas',
    description: 'Strict relational definitions with non-null constraints, unique keys, and typed field definitions.',
    architecturalDetail: 'Schema designed for enterprise healthcare models: Users, Doctors, Patients, Records, and Audit Logs.',
  },
  {
    label: 'RELATIONSHIPS',
    title: 'Foreign Keys & Relational Integrity',
    tech: '1:N & N:M Cardinality',
    description: 'Enforcing referential integrity across interconnected entities with cascading policies and join tables.',
    architecturalDetail: 'Doctor-to-Patient 1:N relations, Pharmacy-to-Prescriptions N:M mappings with indexed foreign keys.',
  },
  {
    label: 'QUERIES',
    title: 'Query Optimization & Migration',
    tech: 'B-Tree Indexes / JPQL Joins',
    description: 'High-speed retrieval tuning, composite indexes, and elimination of N+1 query bottlenecks via fetch joins.',
    architecturalDetail: 'Executed seamless migration from legacy MySQL to PostgreSQL, optimizing clinical search queries.',
  },
  {
    label: 'PERSISTENCE',
    title: 'ACID Transactions & Data Isolation',
    tech: 'WAL / Transaction Isolation',
    description: 'Atomic write-ahead logging ensuring multi-role updates either fully commit or cleanly roll back.',
    architecturalDetail: 'Strict multi-tenant data isolation and read-committed isolation levels for concurrent clinical workflows.',
  },
];

const dataTech = [
  'PostgreSQL',
  'MySQL Migration',
  'Spring Data JPA',
  'B-Tree Indexing',
  'Query Optimization',
  'Prisma ORM',
];

const DataChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * dataStages.length);
    const clampedIndex = Math.min(dataStages.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="data" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="03"
          label="Data"
          title="The Data Layer"
          subtitle="Structured, migrated, optimized. Where system state lives and relationships are defined."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          {/* Left Column — Architecture Flow (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                Data Architecture Pipeline
              </span>

              <FlowDiagram
                nodes={dataStages.map((s) => s.label)}
                activeIndex={activeIndex}
                onSelectNode={(i) => setActiveIndex(i)}
                className="w-full max-w-[240px]"
              />

              {/* Live Interactive Schema Diagram Preview */}
              <div className="mt-8 p-4 w-full rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
                <div className="font-mono text-[0.5625rem] tracking-wider text-text-dim uppercase mb-3 flex items-center justify-between">
                  <span>Schema View: {dataStages[activeIndex].label}</span>
                  <span className="text-accent font-semibold">PostgreSQL</span>
                </div>

                {/* SVG Schema Visualization with active highlighting */}
                <svg viewBox="0 0 280 140" className="w-full h-auto" fill="none">
                  {/* Entity 1: PATIENTS */}
                  <rect
                    x="10"
                    y="10"
                    width="115"
                    height="55"
                    rx="2"
                    fill="#141416"
                    stroke={activeIndex >= 0 ? '#8b2d3a' : 'rgba(240,236,230,0.1)'}
                    strokeWidth={activeIndex === 0 ? '1.5' : '1'}
                  />
                  <text x="20" y="26" fill={activeIndex === 0 ? '#a63545' : '#f0ece6'} fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">
                    PATIENT (PK: id)
                  </text>
                  <text x="20" y="40" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">
                    name, dob, blood_group
                  </text>
                  <text x="20" y="52" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">
                    created_at, status
                  </text>

                  {/* Entity 2: RECORDS */}
                  <rect
                    x="155"
                    y="10"
                    width="115"
                    height="55"
                    rx="2"
                    fill="#141416"
                    stroke={activeIndex >= 1 ? '#8b2d3a' : 'rgba(240,236,230,0.1)'}
                    strokeWidth={activeIndex === 1 ? '1.5' : '1'}
                  />
                  <text x="165" y="26" fill={activeIndex === 1 ? '#a63545' : '#f0ece6'} fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">
                    RECORD (PK: id)
                  </text>
                  <text x="165" y="40" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">
                    patient_id [FK], doctor_id
                  </text>
                  <text x="165" y="52" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">
                    diagnosis, prescription
                  </text>

                  {/* Connecting Foreign Key Line */}
                  <line
                    x1="125"
                    y1="37"
                    x2="155"
                    y2="37"
                    stroke={activeIndex >= 1 ? '#8b2d3a' : 'rgba(240,236,230,0.15)'}
                    strokeWidth={activeIndex === 1 ? '2' : '1'}
                    strokeDasharray={activeIndex === 2 ? '3 3' : 'none'}
                  />

                  {/* Bottom Pipeline Status */}
                  <rect
                    x="10"
                    y="80"
                    width="260"
                    height="45"
                    rx="2"
                    fill="#18181b"
                    stroke={activeIndex === 3 ? '#8b2d3a' : 'rgba(240,236,230,0.06)'}
                    strokeWidth="1"
                  />
                  <text x="20" y="98" fill={activeIndex === 3 ? '#a63545' : '#b8b2a8'} fontSize="8" fontFamily="JetBrains Mono" fontWeight="600">
                    {activeIndex === 0 && '▶ TABLES: Normalized 3NF Schema & Constraints'}
                    {activeIndex === 1 && '▶ RELATIONSHIPS: 1:N Foreign Key Integrity Active'}
                    {activeIndex === 2 && '▶ QUERIES: B-Tree Index Optimization on patient_id'}
                    {activeIndex === 3 && '▶ PERSISTENCE: Transaction Isolation & ACID Commit'}
                  </text>
                  <text x="20" y="112" fill="#6b6660" fontSize="7" fontFamily="JetBrains Mono">
                    Engine: PostgreSQL 16 // HikariCP pool // Zero orphaned records
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column — Synchronized Technical Cards (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {dataStages.map((stage, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={stage.label}
                  onClick={() => setActiveIndex(i)}
                  className={`p-4 sm:p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-bg-elevated/90 border-accent/70 shadow-[0_0_20px_rgba(139,45,58,0.15)] pl-6'
                      : 'bg-bg-elevated/20 border-foreground/[0.05] opacity-50 hover:opacity-85 hover:border-foreground/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-accent shadow-[0_0_8px_#a63545]' : 'bg-foreground/20'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-wider uppercase font-semibold ${
                          isActive ? 'text-accent-bright' : 'text-foreground/80'
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>

                    <span className="font-mono text-[0.5625rem] text-accent/80 px-2 py-0.5 border border-accent/20 rounded-sm">
                      {stage.tech}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {stage.title}
                  </h4>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-foreground/90' : 'text-muted'
                    }`}
                  >
                    {stage.description}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-foreground/[0.06] text-xs text-text-secondary font-mono leading-relaxed"
                    >
                      <span className="text-accent/80 mr-1.5">▸</span>
                      {stage.architecturalDetail}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Data Technologies Badges */}
        <div className="p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
          <div className="font-mono text-xs tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Database & Persistence Technologies
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dataTech.map((tech) => (
              <div
                key={tech}
                className="p-3 border border-foreground/[0.04] bg-bg-deep/60 rounded-sm text-center font-mono text-xs text-foreground/80 font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Transition Conduit leading into 04 / INTELLIGENCE */}
        <SystemTransition
          fromNumber="03"
          fromLabel="DATA"
          toNumber="04"
          toLabel="INTELLIGENCE"
          protocol="EMBEDDING & VECTOR INGESTION BUS"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default DataChapter;
