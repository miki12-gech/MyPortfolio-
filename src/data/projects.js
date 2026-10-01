/**
 * Project data — preserved from existing portfolio with enhanced structure.
 * All descriptions, problems, highlights, and technologies are original and verified.
 * Top 3 featured projects prioritized visually for Section 07 / THE WORK.
 */

const projects = [
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description: 'Enterprise healthcare platform modernization.',
    featured: true,
    myRole: 'Full-Stack Developer Intern at INSA',
    problem:
      'Legacy hospital system suffered from slow data retrieval, lack of strict access controls, and difficult maintainability, risking data integrity and operational efficiency.',
    solution:
      'Full modernization with Spring Boot backend, Next.js frontend, PostgreSQL migration, and role-based access control across pharmacy, admin, and doctor workflows.',
    technicalDecisions: [
      'Migrated database from MySQL to PostgreSQL for relational integrity and improved query throughput',
      'Engineered Role-Based Access Control (RBAC) via Spring Security to strictly isolate doctor, pharmacy, and admin records',
      'Implemented transactional service boundaries with @Transactional to guarantee zero data loss in clinical workflows',
      'Engineered hardware/IoT webhook integration for automated prescription and official document printing',
    ],
    highlights: [
      'Legacy system modernization',
      'Spring Boot backend with Spring Security',
      'Next.js frontend',
      'MySQL → PostgreSQL migration',
      'Role-Based Access Control (RBAC)',
      'Multi-role workflows',
      'Official document printing',
      'Hardware/IoT webhook integration',
      'Data integrity & isolation',
    ],
    tech: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Spring Security'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: null,
    },
    architecture: ['Frontend (Next.js)', 'Spring Boot', 'Spring Security (RBAC)', 'PostgreSQL'],
  },
  {
    id: 'ai-android-security',
    title: 'AI Android Security Analysis Platform',
    description: 'AI-driven automated Android security testing system.',
    featured: true,
    myRole: 'Security Researcher & Developer at INSA (Action Executor & Dynamic Sensing layer)',
    problem:
      'Manual Android penetration testing is time-consuming and often misses complex execution paths. Required an automated, intelligent agent capable of dynamic runtime interaction.',
    solution:
      'Reinforcement learning environment with an Action Executor that interfaces directly with Android devices through Appium, ADB, and Frida for automated security analysis.',
    technicalDecisions: [
      'Implemented Action Executor to translate high-level RL agent policy decisions into live ADB and Appium device actions',
      'Integrated Frida runtime hook scripts to monitor cryptographic calls, memory access, and intent broadcasting dynamically',
      'Designed reward function reflecting discovered code coverage and unexplored application activities',
      'Created automated crash and vulnerability reporting pipeline for Android binaries',
    ],
    highlights: [
      'Reinforcement Learning environment',
      'Dynamic action execution',
      'Android automation via Appium + ADB',
      'Runtime analysis with Frida',
      'Security testing automation',
    ],
    tech: ['Python', 'Reinforcement Learning', 'Appium', 'Frida', 'ADB'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: null,
    },
    architecture: ['APK', 'Static Analysis', 'Dynamic Sensing', 'Frida Hooks', 'Action Executor', 'Results'],
  },
  {
    id: 'doc-forge-ai',
    title: 'Doc Forge AI',
    description: 'Intelligent, AI-powered documentation forge.',
    featured: true,
    myRole: 'Full-Stack & AI Engineer',
    problem:
      'Manual document parsing and analysis across various formats is highly inefficient and error-prone, requiring a unified pipeline to extract actionable insights automatically.',
    solution:
      'Automated multi-format document parser paired with context-bounded AI summarization and structured data extraction.',
    technicalDecisions: [
      'Built multi-format PDF and text parsing pipeline with semantic boundary chunking',
      'Engineered structured context window synthesis to prevent hallucinations during extraction',
      'Architected Next.js client with streaming response support and instant artifact export',
      'Deployed serverless cloud infrastructure on Vercel for fast global access',
    ],
    highlights: [
      'Automated PDF parsing',
      'AI-driven summarization',
      'Structured data extraction',
      'Cloud-native orchestration',
    ],
    tech: ['React', 'Next.js', 'AI Orchestration', 'Cloud Deploy'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: 'https://doc-forge-ai-mu.vercel.app/',
    },
    architecture: ['Document Ingest', 'AI Parser', 'Context Synthesizer', 'LLM Engine', 'Structured Output'],
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'High-performance productivity application for sprint optimization.',
    featured: false,
    myRole: 'Frontend & Full-Stack Developer',
    problem:
      'Teams struggled with scattered workflows and lack of visibility into sprint milestones, leading to inefficient task delegation and missed deadlines.',
    highlights: [
      'Sprint milestone tracking',
      'Optimized task delegation',
      'Real-time updates',
      'Client portal integration',
    ],
    tech: ['React', 'Productivity Tools', 'State Management'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: 'https://taskflow-ultra-kappa.vercel.app/',
    },
    architecture: ['UI Layer', 'State Engine', 'Task Manager', 'Client Portal'],
  },
  {
    id: 'addis-link',
    title: 'Addis Link',
    description: 'Community hub for urban residents and service providers.',
    featured: false,
    myRole: 'Full-Stack Developer',
    problem:
      'Urban residents lacked a centralized, reliable hub to find verified local service providers and community announcements.',
    highlights: [
      'Service provider directory',
      'Community announcement board',
      'Full-stack integration',
      'Scalable data structure',
    ],
    tech: ['NodeJS', 'React', 'Full Stack', 'API Design'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: 'https://addis-link.vercel.app/',
    },
    architecture: ['React UI', 'REST API', 'Node.js', 'Database'],
  },
  {
    id: 'course-bete',
    title: 'Course Bete',
    description: 'Open learning portal and educational resource platform.',
    featured: false,
    myRole: 'Frontend Developer',
    problem:
      'University students faced fragmented learning resources scattered across platforms, lacking a structured index for course materials.',
    highlights: [
      'Centralized study resources',
      'Educational resource indexing',
      'Responsive UI',
      'Open learning portal',
    ],
    tech: ['React', 'Tailwind CSS', 'Education Tech'],
    links: {
      github: 'https://github.com/miki12-gech',
      demo: 'http://course-bete.vercel.app/',
    },
    architecture: ['Landing', 'Resource Index', 'Course Viewer'],
  },
];

export default projects;
