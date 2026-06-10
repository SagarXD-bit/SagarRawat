"use client";

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

        <div className="relative space-y-4 before:absolute before:left-[1.12rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-sky-300/40 before:to-transparent sm:before:left-1/2 sm:before:-ml-px">
          {timeline.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} delay={0.05 * index}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                <div className={index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}>
                  <div className="flex items-center gap-3 sm:hidden">
                    <span className="relative z-10 size-9 rounded-full border border-sky-300/30 bg-sky-300/10" />
                    <p className="font-mono text-xs tracking-[0.26em] text-sky-200 uppercase">
                      {item.period}
                    </p>
                  </div>
                  <Card className="mt-3 rounded-[28px] p-5 sm:mt-0">
                    <p className="hidden font-mono text-xs tracking-[0.26em] text-sky-200 uppercase sm:block">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{item.organisation}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} className="border-white/10 bg-white/5 text-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="relative hidden sm:block">
                  <span className="absolute left-1/2 top-6 z-10 size-4 -translate-x-1/2 rounded-full border border-sky-300/40 bg-sky-300/20 shadow-[0_0_30px_rgba(125,211,252,0.35)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
