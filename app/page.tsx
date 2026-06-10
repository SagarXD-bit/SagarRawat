import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { ProjectsSection } from "@/components/site/projects-section";
import { SkillsSection } from "@/components/site/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
