"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { Card } from "@/components/ui/card";
import { aboutCards } from "@/lib/site-data";

const journey = [
  {
    step: "01",
    title: "Analytical problem solving",
    description:
      "I enjoy breaking down complex problems, identifying patterns, and building practical solutions backed by data and technology.",
  },
  {
    step: "02",
    title: "Technology across domains",
    description:
      "My experience spans software development, data analysis, AI applications, and building systems that solve real-world challenges.",
  },
  {
    step: "03",
    title: "Continuous learning",
    description:
      "I stay curious about emerging technologies, adapting quickly while focusing on reliability, impact, and long-term value.",
  },
] as const;

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <Reveal>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About"
              title="A developer focused on modern product engineering."
              description="I enjoy building web experiences that feel refined from first impression to final interaction, with a strong interest in full-stack systems, AI integrations, and maintainable architecture."
            />

            <div className="space-y-4">
              {journey.map((item, index) => (
                <Reveal key={item.step} delay={0.08 * (index + 1)}>
                  <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="font-mono text-xs tracking-[0.3em] text-sky-200 uppercase">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={0.12 + index * 0.06}
              className={index === 0 ? "sm:col-span-2" : undefined}
            >
              <Card className="h-full rounded-[30px] p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
