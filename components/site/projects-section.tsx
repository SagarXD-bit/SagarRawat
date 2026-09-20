"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { BrowserPreview } from "@/components/site/browser-preview";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <SectionShell id="projects">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work with a startup-grade finish."
            description="Live products and shipped builds — each card shows a real deployment preview, the stack behind it, and links to GitHub."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
            <Card className="overflow-hidden rounded-[34px] p-5 shadow-[0_24px_80px_rgba(198,93,59,0.08)] sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-5">
                  <Badge>{featuredProject.eyebrow}</Badge>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-sand sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((item) => (
                      <Badge
                        key={item}
                        className="border-[rgba(232,196,168,0.12)] bg-white/5 text-stone-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  {featuredProject.highlights ? (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {featuredProject.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-[rgba(232,196,168,0.12)] bg-white/5 p-4 text-sm leading-7 text-stone-300"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href={featuredProject.github} target="_blank" rel="noreferrer">
                        GitHub
                        <Code2 className="size-4" />
                      </Link>
                    </Button>
                    {featuredProject.demo ? (
                      <Button asChild variant="secondary">
                        <Link href={featuredProject.demo} target="_blank" rel="noreferrer">
                          Live Demo
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>

                <BrowserPreview
                  title={featuredProject.title}
                  image={featuredProject.image}
                  url={featuredProject.demo}
                  href={featuredProject.demo}
                />
              </div>
            </Card>
          </motion.div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 + index * 0.05}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="h-full">
                <Card className="flex h-full flex-col overflow-hidden rounded-[30px] p-4">
                  <BrowserPreview
                    title={project.title}
                    image={project.image}
                    url={project.demo ?? project.github}
                    href={project.demo}
                  />
                  <div className="flex flex-1 flex-col pt-5">
                    <Badge className="w-fit">{project.eyebrow}</Badge>
                    <h3 className="mt-4 font-display text-xl font-semibold text-sand">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-stone-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <Badge
                          key={item}
                          className="border-[rgba(232,196,168,0.12)] bg-white/5 text-[11px] tracking-[0.16em] text-stone-200"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <Button asChild variant="ghost" className="px-0 text-stone-200 hover:bg-transparent">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                          <Code2 className="size-4" />
                        </Link>
                      </Button>
                      {project.demo ? (
                        <Button asChild variant="ghost" className="px-0 text-stone-200 hover:bg-transparent">
                          <Link href={project.demo} target="_blank" rel="noreferrer">
                            Live Demo
                            <ArrowUpRight className="size-4" />
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
