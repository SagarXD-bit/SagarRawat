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

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  tech: readonly string[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
  highlights?: readonly string[];
};

export const projects: Project[] = [
  {
    title: "MindMail AI",
    eyebrow: "Featured Project",
    description:
      "AI-powered email intelligence platform that fetches inbox mail, classifies category and urgency, drafts context-aware replies, tracks follow-ups, and surfaces response analytics.",
    tech: ["React", "TypeScript", "FastAPI", "MySQL", "Tailwind CSS"],
    image: "/projects/mindmail.jpg",
    github: "https://github.com/SagarXD-bit/MindMail-Ai",
    demo: "https://mind-mail-ai-tau.vercel.app/",
    featured: true,
    highlights: [
      "AI categorization with urgency, confidence, and explanations",
      "Human-in-the-loop reply engine with multiple tones",
      "Follow-up tracker and response analytics dashboard",
    ],
  },
  {
    title: "Credify",
    eyebrow: "AI / Analytics",
    description:
      "Loan approval intelligence platform with a React dashboard and FastAPI + scikit-learn backend for training models, predicting approvals, and exploring applicant data.",
    tech: ["React", "FastAPI", "scikit-learn", "PostgreSQL", "Vercel"],
    image: "/projects/credify.jpg",
    github:
      "https://github.com/SagarXD-bit/Credify-AI-Powered-Loan-Approval-Analytics-Prediction-Platform",
    demo: "https://credify-phi-eight.vercel.app/",
  },
  {
    title: "TrackDesk",
    eyebrow: "SaaS",
    description:
      "Ticket and order management platform with KPI dashboards, a 10-status repair workflow, customer records, QR tracking, and printable tickets.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/trackdesk.jpg",
    github: "https://github.com/SagarXD-bit/TrackDesk",
    demo: "https://track-desk-chi.vercel.app/dashboard",
  },
  {
    title: "Uber Clone",
    eyebrow: "Maps / Product",
    description:
      "Full ride-hailing clone with GPS pickup, live maps, rider and driver modes, upfront fares in INR, and trip history — built for Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps"],
    image: "/projects/uber.jpg",
    github: "https://github.com/SagarXD-bit/Uber",
    demo: "https://uber-ten-bay.vercel.app/",
  },
  {
    title: "HealthTrack",
    eyebrow: "Full Stack",
    description:
      "Hospital management platform for patient records, appointments, doctor workflows, and admin operations through a centralized dashboard.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/healthtrack.jpg",
    github: "https://github.com/SagarXD-bit/HealthTrack",
    demo: "https://health-track.bytexl.live/",
  },
  {
    title: "Night Shift",
    eyebrow: "Game",
    description:
      "Pygame office-survival game: keep the lights on, watch CCTV, and last from midnight to 6 AM as power drains and the building goes dark.",
    tech: ["Python", "Pygame"],
    image: "/projects/night-shift.svg",
    github: "https://github.com/SagarXD-bit/Night-shift-usign-pygame",
  },
];

export const timeline = [
  {
    period: "2022",
    title: "Started Computer Science Journey",
    organisation: "Chandigarh University",
    description:
      "Began my B.E. in Computer Science and Engineering. Built my first web development projects while learning programming fundamentals, software development principles, and problem-solving techniques.",
    tags: ["Computer Science", "Web Development", "Learning"],
  },
  {
    period: "2023",
    title: "Building Development Skills",
    organisation: "Academic & Personal Projects",
    description:
      "Developed increasingly complex software applications including a Hospital Management System. Strengthened full-stack development skills and started actively maintaining my GitHub portfolio.",
    tags: ["Java", "Software Engineering", "GitHub"],
    link: "YOUR_GITHUB_URL",
    linkLabel: "View GitHub",
  },
  {
    period: "2024",
    title: "First Springer Research Publication",
    organisation: "ICSC 2025",
    description:
      "Published 'Enhancing Textual Understanding in ChatGPT', a research study focused on improving contextual understanding and response quality in large language models. Expanded my research experience through academic writing and technical investigation.",
    tags: ["Research", "Springer", "LLMs"],
    link: "https://doi.org/10.1007/978-981-95-6063-9_29",
    linkLabel: "View Publication",
  },
  {
    period: "2024",
    title: "Technical Team Member",
    organisation: "ISTE",
    description:
      "Joined the technical team of ISTE and contributed to technical initiatives, collaborative projects, and student-driven innovation activities while strengthening leadership and teamwork skills.",
    tags: ["Leadership", "Technical Team", "Collaboration"],
    link: "/certificates/iste-certificate.pdf",
    linkLabel: "View Certificate",
  },
  {
    period: "2025",
    title: "Advanced AI & Neuromorphic Research",
    organisation: "SCIS 2025",
    description:
      "Published 'Event Driven Spiking Neural Network Using Analog Mixed Signals', exploring neuromorphic computing and event-driven spiking neural networks for efficient intelligent systems.",
    tags: ["SNN", "Neuromorphic Computing", "AI Research"],
    link: "https://doi.org/10.1007/978-3-032-22911-3_9",
    linkLabel: "View Publication",
  },
  {
    period: "2025-Present",
    title: "AI, IoT & Edge Computing Projects",
    organisation: "Independent Research & Development",
    description:
      "Working on advanced projects involving Edge Computing, TinyML, IoT systems, real-time monitoring solutions, and AI-powered applications while applying research concepts to practical engineering challenges.",
    tags: ["Edge Computing", "TinyML", "IoT"],
  },
  {
    period: "2026",
    title: "Building Credify",
    organisation: "AI-Powered Loan Analytics Platform",
    description:
      "Currently developing Credify, an AI-powered loan approval analytics platform that combines machine learning, intelligent reporting, data visualization, and predictive analytics to support data-driven decision making.",
    tags: ["Machine Learning", "Analytics", "Full Stack"],
    link: "https://credify-phi-eight.vercel.app/",
    linkLabel: "View Live Demo",
  },
] as const;

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SagarXD-bit",
    value: "@SagarXD-bit",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sagar-rawat-8081ab24a",
    value: "linkedin.com/in/sagar-rawat-8081ab24a",
  },
  {
    label: "Email",
    href: "mailto:sagarrawatinvincible@gmail.com",
    value: "sagarrawatinvincible@gmail.com",
  },
] as const;

export const heroStats = [
  { label: "Focus", value: "Technology & Analytics" },
  { label: "Strength", value: "Problem Solving" },
  { label: "Mindset", value: "Continuous Learning" },
] as const;

export const heroKeywords = [
  "Software engineering",
  "Data analytics",
  "AI-powered solutions",
  "Business intelligence",
  "Digital products",
] as const;
export const experiencePill = {
  label: "Available for impactful internships, freelance, and product collaborations",
  icon: Rocket,
};
