import projects from './projects';
import { experiences, education } from './experience';
import social from './social';

/**
 * ONE SOURCE OF TRUTH for the "Ask Mikiale" AI Assistant.
 * Combines existing verified data sources into a structured format optimized for LLM context.
 */

const profile = {
  name: "Mikiale Getachew",
  role: "Software Engineering Student & Full-Stack Developer",
  focus: ["AI", "Full-Stack", "Cybersecurity"],
  tagline: "I build intelligent software systems from interface to infrastructure.",
};

const technicalSkills = {
  backend: ["Java", "Spring Boot", "Spring Security", "Hibernate", "Spring Data JPA", "REST APIs", "Node.js"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
  databases: ["PostgreSQL", "MySQL"],
  aiAndSecurity: ["Python", "Reinforcement Learning", "RAG Systems", "Frida", "Appium", "ADB", "Android Security Testing"],
  infrastructure: ["Git", "GitHub", "CI/CD", "Cloud Deployment"],
};

export const portfolioKnowledge = {
  PROFILE: profile,
  EDUCATION: education,
  EXPERIENCE: experiences,
  PROJECTS: projects.map(p => ({
    title: p.title,
    role: p.myRole || "Developer",
    problem: p.problem,
    solution: p.solution,
    highlights: p.highlights,
    tech: p.tech,
    architecture: p.architecture,
    links: p.links,
    isFeatured: p.featured
  })),
  SKILLS: technicalSkills,
  CONTACT: social
};

/**
 * Renders the knowledge base into a concise, readable string for the LLM system prompt.
 */
export function getSystemKnowledgePrompt() {
  return `
You are ASK MIKIALE, an AI portfolio assistant for Mikiale Getachew.
Your role is to answer visitor questions accurately, professionally, and concisely based ONLY on the following verified information.

CRITICAL ZERO-HALLUCINATION RULES:
- Never invent information, projects, roles, dates, or metrics.
- If asked about something not in this prompt, say "I don't have verified information about that in Mikiale's portfolio."
- Do not upgrade his title (he is a Software Engineering Student and Full-Stack Developer Intern, not a Senior/Principal Engineer).
- Provide URLs exactly as they appear here.

--- VERIFIED KNOWLEDGE ---

[PROFILE]
Name: ${profile.name}
Role: ${profile.role}
Focus: ${profile.focus.join(", ")}
Tagline: ${profile.tagline}

[EDUCATION]
${education.map(e => `- ${e.degree} at ${e.institution} (${e.period}). Status: ${e.status}. Focus: ${e.highlights.join(", ")}`).join("\n")}

[EXPERIENCE]
${experiences.map(e => `- ${e.role} at ${e.company} (${e.period}). Context: ${e.context}. Responsibilities: ${e.responsibilities.join("; ")}`).join("\n")}

[SKILLS]
Backend: ${technicalSkills.backend.join(", ")}
Frontend: ${technicalSkills.frontend.join(", ")}
Databases: ${technicalSkills.databases.join(", ")}
AI & Security: ${technicalSkills.aiAndSecurity.join(", ")}
Infrastructure: ${technicalSkills.infrastructure.join(", ")}

[PROJECTS]
${portfolioKnowledge.PROJECTS.map(p => 
`Project: ${p.title} ${p.isFeatured ? "(Featured)" : ""}
Role: ${p.role}
Problem: ${p.problem}
Solution: ${p.solution}
Highlights: ${p.highlights.join(", ")}
Technologies: ${p.tech.join(", ")}
Architecture: ${p.architecture.join(" -> ")}
Links: GitHub (${p.links.github}) ${p.links.demo ? `, Demo (${p.links.demo})` : ""}
`).join("\n")}

[CONTACT & LINKS]
Email: ${social.email}
GitHub: ${social.github}
LinkedIn: ${social.linkedin}
Portfolio: ${social.portfolio}
Resume: ${social.resume || "Not publicly available yet"}
`;
}
