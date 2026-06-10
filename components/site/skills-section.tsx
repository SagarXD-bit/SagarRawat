"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/site-data";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A stack shaped for product delivery."
            description="These are the technologies and tools I enjoy using to ship thoughtful frontend experiences, reliable backend systems, and practical AI-enhanced products."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={0.04 * index}>
                <Card className="group h-full rounded-[28px] p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sky-200">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.26em] text-slate-500 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        className="border-white/10 bg-white/[0.04] text-[11px] tracking-[0.16em] text-slate-200 group-hover:border-sky-300/20 group-hover:text-white"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
