import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BrainCircuit,
  Database,
  FolderKanban,
  Rocket,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutCards = [
  {
    title: "Build End-to-End",
    description:
      "From product thinking and system design to polished frontend delivery, I enjoy owning the full user journey.",
  },
  {
    title: "AI With Product Intent",
    description:
      "I like exploring practical AI integrations that improve workflows, decision making, and user experience.",
  },
  {
    title: "Performance Matters",
    description:
      "My default is clean architecture, accessible UI, and fast experiences that feel calm and dependable.",
  },
] as const;

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Blocks,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FolderKanban,
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["TensorFlow", "TinyML", "Python", "AI Integrations"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
  },
] as const;

export const projects = [
  {
    title: "Ethara Workspace",
    eyebrow: "Featured Product",
    description:
      "A premium workspace concept for modern teams, designed around collaboration, workflows, and a unified product experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "App Router",
    ],
    image: "/projects/ethara-workspace.svg",
    github: "https://github.com/your-handle/ethara-workspace",
    demo: "https://ethara-workspace-demo.vercel.app",
    featured: true,
    highlights: [
      "Startup-style landing and dashboard storytelling",
      "Refined component system with soft glass surfaces",
      "Built for clarity, speed, and product-first presentation",
    ],
  },
  {
    title: "Signal Stack",
    eyebrow: "Project Placeholder",
    description:
      "An analytics dashboard concept focused on readable metrics, alert routing, and confident operational decision-making.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/signal-stack.svg",
    github: "https://github.com/your-handle/signal-stack",
    demo: "https://signal-stack-demo.vercel.app",
  },
  {
    title: "Neural Notes",
    eyebrow: "Project Placeholder",
    description:
      "A note-taking experience that explores AI-assisted summarization, semantic search, and structured knowledge capture.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    image: "/projects/neural-notes.svg",
    github: "https://github.com/your-handle/neural-notes",
    demo: "https://neural-notes-demo.vercel.app",
  },
  {
    title: "Edge Vision Lab",
    eyebrow: "Project Placeholder",
    description:
      "A TinyML and computer vision showcase for lightweight inference workflows and edge-first experimentation.",
    tech: ["Python", "TensorFlow", "TinyML"],
    image: "/projects/edge-vision-lab.svg",
    github: "https://github.com/your-handle/edge-vision-lab",
    demo: "https://edge-vision-lab-demo.vercel.app",
  },
] as const;

export const timeline = [
  {
    period: "Add Date Range",
    title: "Internship / Experience Slot",
    organisation: "Company or startup name",
    description:
      "Use this card to highlight your role, the stack you worked with, and the measurable outcome you helped ship.",
    tags: ["Ownership", "Delivery", "Teamwork"],
  },
  {
    period: "Add Date Range",
    title: "Research Paper / Technical Study",
    organisation: "Conference, journal, or university",
    description:
      "Summarize your research focus, the problem explored, and the result or learning that makes it noteworthy.",
    tags: ["Research", "TinyML", "Applied AI"],
  },
  {
    period: "Add Date Range",
    title: "Certification / Advanced Training",
    organisation: "Platform or provider",
    description:
      "Document a certification that strengthened your fundamentals in cloud, AI, backend systems, or modern frontend engineering.",
    tags: ["Certification", "Growth", "Depth"],
  },
  {
    period: "Add Date Range",
    title: "Achievement / Milestone",
    organisation: "Hackathon, open source, or academic",
    description:
      "Feature a standout achievement with context around why it mattered and what it says about the way you build.",
    tags: ["Achievement", "Execution", "Curiosity"],
  },
] as const;

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/your-handle",
    value: "@your-handle",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    value: "linkedin.com/in/your-handle",
  },
  {
    label: "Email",
    href: "mailto:hello@sagarrawat.dev",
    value: "hello@sagarrawat.dev",
  },
] as const;

export const heroStats = [
  { label: "Focus", value: "Full-Stack + AI" },
  { label: "Style", value: "Clean, fast, premium" },
  { label: "Mindset", value: "Ship with intent" },
] as const;

export const heroKeywords = ["full-stack systems", "AI-driven products", "modern web interfaces"] as const;

export const experiencePill = {
  label: "Available for impactful internships, freelance, and product collaborations",
  icon: Rocket,
};
