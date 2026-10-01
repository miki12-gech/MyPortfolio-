/**
 * InfrastructureChapter — 06 / INFRASTRUCTURE
 * The deployment and operations layer.
 * 
 * Visual logic: CODE → GIT → CI/CD → DOCKER → CLOUD → PRODUCTION
 * Real stack: Docker containerization, GitHub Actions, CI/CD pipelines, AWS cloud deploy.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const infraStages = [
  {
    label: 'CODE',
    title: 'Version Controlled Source Base',
    tech: 'TypeScript / Java / Python',
    description: 'Clean source repository with strict linting, module boundaries, and architectural guidelines.',
    architecturalDetail: 'Pre-commit hooks verifying code standards, static types, and test execution.',
  },
  {
    label: 'GIT',
    title: 'Branching Strategy & Pull Requests',
    tech: 'Git / Semantic Versioning',
    description: 'Feature branching workflow with peer reviews, atomic commits, and merge protection policies.',
    architecturalDetail: 'Squash-merge history with automated release tagging and changelog tracking.',
  },
  {
    label: 'CI/CD',
    title: 'Continuous Integration & Test Automation',
    tech: 'GitHub Actions Workflows',
    description: 'Automated test suites executing on every push to catch regressions before deployment.',
    architecturalDetail: 'Unit tests, integration tests with testcontainers, and build artifact caching.',
  },
  {
    label: 'DOCKER',
    title: 'Containerization & Image Build',
    tech: 'Docker / Multi-Stage Builds',
    description: 'Lightweight, reproducible container images packaged with minimal attack surface.',
    architecturalDetail: 'Multi-stage builds separating compiler dependencies from final minimal runtime containers.',
  },
  {
    label: 'CLOUD',
    title: 'Cloud Orchestration & Hosting',
    tech: 'AWS / Vercel Infrastructure',
    description: 'Deploying isolated workloads with environment variable secret management and automated SSL/TLS.',
    architecturalDetail: 'Stateless application instances connecting to resilient managed PostgreSQL clusters.',
  },
  {
    label: 'PRODUCTION',
    title: 'System Uptime & Live Service',
    tech: 'Live Production Runtime',
    description: 'Verified active deployment serving end users with healthy telemetry, logging, and zero-downtime rollouts.',
    architecturalDetail: 'Continuous health checks, automated container restarts, and load-balanced endpoints.',
  },
];

const infraTechnologies = [
  { name: 'Docker', role: 'Containerization and isolated execution environments' },
  { name: 'GitHub Actions', role: 'Automated test execution, linting, and continuous delivery' },
  { name: 'AWS', role: 'Cloud compute, storage, and networking infrastructure' },
  { name: 'CI/CD Pipelines', role: 'Deterministic build orchestration from commit to deploy' },
];

const InfrastructureChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * infraStages.length);
    const clampedIndex = Math.min(infraStages.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="infrastructure" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="06"
          label="Infrastructure"
          title="The Deployment Layer"
          subtitle="From local development to production. The system moves from code to cloud."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          {/* Left Column — Architecture Flow (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                Delivery Pipeline
              </span>

              <FlowDiagram
                nodes={infraStages.map((s) => s.label)}
                activeIndex={activeIndex}
                onSelectNode={(i) => setActiveIndex(i)}
                className="w-full max-w-[240px]"
              />

              {/* Live Deployment Status Monitor */}
              <div className="mt-8 p-4 w-full rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
                <div className="flex items-center justify-between font-mono text-[0.5625rem] tracking-wider text-text-dim uppercase mb-2">
                  <span>DEPLOYMENT METRICS</span>
                  <span className="text-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="font-mono text-[0.6875rem] text-foreground/80 space-y-1">
                  <div>Environment: {activeIndex < 3 ? 'Local Dev / Staging' : 'Production Cloud'}</div>
                  <div className="text-text-dim text-[0.625rem]">
                    Stage: {infraStages[activeIndex].label} // {infraStages[activeIndex].tech}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Synchronized Technical Cards (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {infraStages.map((stage, i) => {
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

        {/* Infrastructure Technologies Stack */}
        <div className="p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
          <div className="font-mono text-xs tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Infrastructure & Cloud Environment
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {infraTechnologies.map((tech) => (
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

        {/* Transition Conduit leading into 07 / THE WORK */}
        <SystemTransition
          fromNumber="06"
          fromLabel="INFRASTRUCTURE"
          toNumber="07"
          toLabel="THE WORK"
          protocol="SYSTEM DEPLOYED // LIVE PROOF & CASE STUDIES"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default InfrastructureChapter;
