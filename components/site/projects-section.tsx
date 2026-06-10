"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
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
            description="A mix of polished concepts and showcase-ready product ideas, presented with strong hierarchy, premium cards, and room to plug in your real project links as you go."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
            <Card className="overflow-hidden rounded-[34px] p-5 sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-5">
                  <Badge>{featuredProject.eyebrow}</Badge>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((item) => (
                      <Badge key={item} className="border-white/10 bg-white/5 text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {featuredProject.highlights?.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href={featuredProject.github} target="_blank" rel="noreferrer">
                        GitHub
                        <Code2 className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link href={featuredProject.demo} target="_blank" rel="noreferrer">
                        Live Demo
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-3">
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} project preview`}
                    width={960}
                    height={720}
                    className="h-auto w-full rounded-[22px]"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 + index * 0.05}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="h-full">
                <Card className="flex h-full flex-col overflow-hidden rounded-[30px] p-4">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/70 p-2">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={720}
                      height={540}
                      className="h-auto w-full rounded-[18px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pt-5">
                    <Badge className="w-fit">{project.eyebrow}</Badge>
                    <h3 className="mt-4 font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <Badge
                          key={item}
                          className="border-white/10 bg-white/5 text-[11px] tracking-[0.16em] text-slate-200"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <Button asChild variant="ghost" className="px-0 text-slate-200 hover:bg-transparent">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                          <Code2 className="size-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="px-0 text-slate-200 hover:bg-transparent">
                        <Link href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </Button>
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




