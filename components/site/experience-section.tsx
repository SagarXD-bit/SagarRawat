"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { timeline } from "@/lib/site-data";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Research / Experience"
            title="A timeline ready for your strongest proof points."
            description="This section is structured to showcase internships, research, certifications, and standout achievements with a clean editorial rhythm."
          />
        </Reveal>

        <div className="relative space-y-4 before:absolute before:top-3 before:left-[1.12rem] before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-terracotta/40 before:to-transparent sm:before:left-1/2 sm:before:-ml-px">
          {timeline.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} delay={0.05 * index}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                <div className={index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}>
                  <div className="flex items-center gap-3 sm:hidden">
                    <span className="timeline-dot relative z-10 size-9 rounded-full border border-terracotta/30 bg-terracotta/10" />
                    <p className="font-mono text-xs tracking-[0.26em] text-clay uppercase">
                      {item.period}
                    </p>
                  </div>
                  <Card className="mt-3 rounded-[28px] p-5 sm:mt-0">
                    <p className="hidden font-mono text-xs tracking-[0.26em] text-clay uppercase sm:block">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-sand">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone-400">{item.organisation}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-300">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="border-[rgba(232,196,168,0.12)] bg-white/5 text-stone-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {"links" in item && item.links ? (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {item.links.map((entry) => (
                          <Link
                            key={entry.href}
                            href={entry.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-clay hover:text-sand"
                          >
                            {entry.label}
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        ))}
                      </div>
                    ) : "link" in item && item.link ? (
                      <Link
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-clay hover:text-sand"
                      >
                        {"linkLabel" in item ? item.linkLabel : "Learn more"}
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    ) : null}
                  </Card>
                </div>
                <div className="relative hidden sm:block">
                  <span className="timeline-dot absolute top-6 left-1/2 z-10 size-4 -translate-x-1/2 rounded-full border border-terracotta/40 bg-terracotta/20 shadow-[0_0_30px_rgba(198,93,59,0.35)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
