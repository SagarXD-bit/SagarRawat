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
   title: "Credify",
   eyebrow: "Featured Project",
   description:
     "AI-powered loan approval analytics and prediction platform that leverages machine learning models to assess creditworthiness, analyze applicant data, and provide intelligent approval recommendations.",
   tech: [
     "Python",
     "Machine Learning",
     "Flask",
     "Pandas",
     "Scikit-learn",
   ],
  image: "/projects/edge-vision-lab.svg",
   github: "https://github.com/SagarXD-bit/Credify-AI-Powered-Loan-Approval-Analytics-Prediction-Platform",
   demo: "YOUR_DEPLOYED_LINK",
   featured: true,
   highlights: [
     "Machine learning based loan approval prediction",
     "Interactive analytics dashboard and insights",
     "Data-driven risk assessment and decision support",
   ],
  },
 {
  title: "HealthTrack",
  eyebrow: "Full Stack Project",
  description:
    "A web-based hospital management platform for handling patient records, appointments, doctor management, and administrative workflows through a centralized dashboard.",
  tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
  image: "/projects/ethara-workspace.svg",
  github: "https://github.com/SagarXD-bit/HealthTrack",
  demo: "https://health-track.bytexl.live/",
 },


 {
  title: "Real-Time IoT Communication Simulator",
  eyebrow: "IoT & WebSockets",
  description:
    "A real-time IoT communication platform that simulates sensor devices and streams live data through WebSockets.",
  tech: ["Python", "WebSockets", "HTML", "JavaScript"],
  image: "/projects/signal-stack.svg",
  github: "https://github.com/your-handle/iot-simulator",
  demo:"https://your-demo-url.vercel.app",
  demoMessage:"This project relies on locally simulated IoT devices and WebSocket communication, so a live cloud demo is not available. Please view the source code, architecture, and setup guide on GitHub",
 },
] as const;

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
    link: "#",
    linkLabel: "Coming Soon",
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
