/**
 * SecurityChapter — 05 / SECURITY
 * One of the core pillars of Mikiale's engineering focus.
 * 
 * Visual logic: REQUEST → AUTHENTICATION → AUTHORIZATION → ANALYSIS → RESULT
 * Real stack: Frida hook injection, Appium, ADB, Android Security Testing, Spring Security RBAC.
 */
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ChapterHeader from '../layout/ChapterHeader';
import FlowDiagram from '../system/FlowDiagram';
import SystemTransition from '../system/SystemTransition';

const securityStages = [
  {
    label: 'REQUEST',
    title: 'Input Ingestion & APK Target Loading',
    tech: 'APK Binary / API Request',
    description: 'Target APK application binary loaded for inspection, or incoming enterprise REST payload received at boundary.',
    architecturalDetail: 'Decompilation preparation, manifest permission extraction, and attack surface mapping.',
  },
  {
    label: 'AUTHENTICATION',
    title: 'Signature Verification & Identity Audit',
    tech: 'APK Signature / JWT Bearer',
    description: 'Verifying application signing certificates, public key digests, and validating bearer authentication tokens.',
    architecturalDetail: 'Checking certificate revocation, hash validity, and preventing unauthorized token replay attempts.',
  },
  {
    label: 'AUTHORIZATION',
    title: 'Access Control & Permission Boundary',
    tech: 'RBAC Policy / Privilege Checks',
    description: 'Enforcing strict role boundaries to verify caller is entitled to the requested internal resources.',
    architecturalDetail: 'Verified multi-role separation (Admin / Doctor / Pharmacist) and Android Dangerous Permission boundary audit.',
  },
  {
    label: 'ANALYSIS',
    title: 'Dynamic Instrumentation & RL Sensing',
    tech: 'Frida Hooks / Appium / ADB',
    description: 'Injecting dynamic JavaScript hooks via Frida while Appium automates live device UI execution paths.',
    architecturalDetail: 'Tracing crypto calls, IPC intents, and memory inspection to catch runtime vulnerabilities automatically.',
  },
  {
    label: 'RESULT',
    title: 'Observation Triage & Mitigation Report',
    tech: 'Action Executor / Vulnerability Log',
    description: 'The RL agent evaluates rewards based on newly discovered code paths, producing a comprehensive vulnerability report.',
    architecturalDetail: 'Synthesizing actionable remediation steps and ensuring system meets defense-in-depth requirements.',
  },
];

const securityTools = [
  { name: 'Frida', role: 'Runtime dynamic hook injection and memory inspection' },
  { name: 'Appium & ADB', role: 'Automated Android device orchestration and state interaction' },
  { name: 'Android Security', role: 'Dynamic pentesting, intent fuzzing, and static decompilation' },
  { name: 'Spring Security', role: 'Enterprise role-based access control and token verification' },
  { name: 'Data Isolation', role: 'Tenant-level isolation and clinical record authorization' },
];

const SecurityChapter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * securityStages.length);
    const clampedIndex = Math.min(securityStages.length - 1, Math.max(0, rawIndex));
    setActiveIndex(clampedIndex);
  });

  return (
    <section ref={containerRef} id="security" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Top entry indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/25 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="05"
          label="Security"
          title="The Security Layer"
          subtitle="I don't only build systems. I also think about how systems can fail."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-16">
          {/* Left Column — Architecture Flow with Security Perimeter (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="sticky top-28 w-full flex flex-col items-center md:items-start">
              <span className="font-mono text-[0.625rem] tracking-[0.25em] text-text-dim uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Security Inspection Pipeline
              </span>

              {/* Security Boundary Perimeter Frame */}
              <div className="relative p-6 rounded-sm border border-dashed border-accent/30 bg-bg-elevated/40 w-full max-w-[260px] flex justify-center">
                <span className="absolute -top-2.5 left-4 bg-bg-deep px-2 font-mono text-[0.5625rem] text-accent font-semibold uppercase tracking-wider">
                  Security Boundary [Active]
                </span>

                <FlowDiagram
                  nodes={securityStages.map((s) => s.label)}
                  activeIndex={activeIndex}
                  onSelectNode={(i) => setActiveIndex(i)}
                  className="w-full"
                />
              </div>

              {/* Active Threat Analysis Status */}
              <div className="mt-6 p-3.5 w-full max-w-[260px] rounded-sm border border-foreground/[0.08] bg-bg-deep/80 font-mono text-[0.625rem]">
                <div className="flex items-center justify-between text-text-dim mb-1">
                  <span>INSPECTION STATE</span>
                  <span className="text-accent font-semibold">ENFORCED</span>
                </div>
                <div className="text-foreground/80">
                  Gate: <span className="text-accent font-semibold">{securityStages[activeIndex].label}</span>
                </div>
                <div className="text-muted text-[0.5625rem] mt-0.5">
                  {securityStages[activeIndex].tech}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Synchronized Technical Cards (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {securityStages.map((stage, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={stage.label}
                  onClick={() => setActiveIndex(i)}
                  className={`p-4 sm:p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-bg-elevated/90 border-accent/70 shadow-[0_0_20px_rgba(139,45,58,0.2)] pl-6'
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

                    <span className="font-mono text-[0.5625rem] text-accent/90 px-2 py-0.5 border border-accent/30 rounded-sm">
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
                      <span className="text-accent mr-1.5">▸</span>
                      {stage.architecturalDetail}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security Research & Toolset Matrix */}
        <div className="p-6 rounded-sm border border-foreground/[0.08] bg-bg-elevated/40">
          <div className="font-mono text-xs tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Security Research & Analysis Tooling
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {securityTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3 border border-foreground/[0.04] bg-bg-deep/60 rounded-sm"
              >
                <div className="font-mono text-xs text-foreground font-semibold">
                  {tool.name}
                </div>
                <div className="text-[0.6875rem] text-muted mt-0.5">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Conduit leading into 06 / INFRASTRUCTURE */}
        <SystemTransition
          fromNumber="05"
          fromLabel="SECURITY"
          toNumber="06"
          toLabel="INFRASTRUCTURE"
          protocol="CONTAINERIZED ARTIFACT DISPATCH (DOCKER / CI-CD)"
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default SecurityChapter;
