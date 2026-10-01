/**
 * EngineChapter — 02 / ENGINE
 * The signal travels deeper into the backend.
 * 
 * Visualizes the Spring Boot backend architecture as a request lifecycle:
 * REQUEST → SPRING SECURITY → CONTROLLER → SERVICE → REPOSITORY → DATABASE
 * Supported technologies: Java, Spring Boot, Spring Security, Hibernate, Spring Data JPA, REST APIs.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const backendStages = [
  {
    label: 'REQUEST',
    title: 'HTTP Client Ingestion',
    tech: 'REST / JSON Payload',
    description: 'Incoming HTTP request payload received at server boundary with request headers and body.',
    architecturalDetail: 'CORS configuration, rate limiting, and request ID tracking for distributed traceability.',
  },
  {
    label: 'SPRING SECURITY',
    title: 'Authentication & RBAC Filter',
    tech: 'SecurityFilterChain / JWT',
    description: 'Token validation and Role-Based Access Control (RBAC) preventing unauthorized access before logic execution.',
    architecturalDetail: 'Verified user roles (e.g., Doctor, Admin, Pharmacist in HMS) with method-level @PreAuthorize security.',
  },
  {
    label: 'CONTROLLER',
    title: 'REST Controller & DTO Mapping',
    tech: 'Spring Web / Jakarta Validation',
    description: 'Routing endpoints, validating DTO schema with @Valid annotations, and mapping to internal domain models.',
    architecturalDetail: 'Strict input sanitization, structured error responses, and clean RESTful endpoint separation.',
  },
  {
    label: 'SERVICE',
    title: 'Business Logic & Transactions',
    tech: '@Service / @Transactional',
    description: 'Core domain business logic execution with atomic database transaction demarcation.',
    architecturalDetail: 'ACID transaction boundaries ensuring data rollback on runtime exceptions to protect system integrity.',
  },
  {
    label: 'REPOSITORY',
    title: 'Data Access & Query Abstraction',
    tech: 'Spring Data JPA / Hibernate',
    description: 'Object-Relational Mapping (ORM) translating domain entity state into optimized SQL queries.',
    architecturalDetail: 'Custom JPQL queries, lazy loading configuration, and index-leveraged entity lookups.',
  },
  {
    label: 'DATABASE',
    title: 'PostgreSQL Relational Commit',
    tech: 'PostgreSQL / Connection Pool',
    description: 'Physical persistence with write-ahead logging, foreign key constraints, and relational integrity.',
    architecturalDetail: 'HikariCP connection pooling and transaction commit with strict concurrency control.',
  },
];

const technologies = [
  { name: 'Java', role: 'Enterprise core language' },
  { name: 'Spring Boot', role: 'Microservice / web framework' },
  { name: 'Spring Security', role: 'Authentication & RBAC filtering' },
  { name: 'Spring Data JPA', role: 'Data access abstraction' },
  { name: 'Hibernate', role: 'ORM & persistence engine' },
  { name: 'REST APIs', role: 'Stateless contract communication' },
];

const EngineChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * backendStages.length);
    const clampedIndex = Math.min(backendStages.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="engine" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="02"
          label="Engine"
          title="The Backend Layer"
          subtitle="Where business logic lives. Secure, transactional, and architecturally resilient."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          {/* Left Column — Architecture Flow (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                Request Lifecycle
              </span>

              <FlowDiagram
                nodes={backendStages.map((s) => s.label)}
                activeIndex={activeIndex}
                onSelectNode={(i) => setActiveIndex(i)}
                className="w-full max-w-[240px]"
              />
            </div>
          </div>

          {/* Right Column — Synchronized Backend Stage Details (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {backendStages.map((stage, i) => {
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

        {/* Backend Stack Snapshot Grid */}
        <div className="p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
          <div className="font-mono text-xs tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Backend Core Stack
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-3 border border-foreground/[0.04] bg-bg-deep/60 rounded-sm"
              >
                <div className="font-mono text-xs text-foreground font-semibold">
                  {tech.name}
                </div>
                <div className="text-[0.6875rem] text-muted mt-0.5">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Conduit leading into 03 / DATA */}
        <SystemTransition
          fromNumber="02"
          fromLabel="ENGINE"
          toNumber="03"
          toLabel="DATA"
          protocol="ORM PERSISTENCE BRIDGE (JPA / SQL)"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default EngineChapter;
