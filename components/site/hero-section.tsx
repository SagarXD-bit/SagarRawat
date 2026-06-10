"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { experiencePill, heroKeywords, heroStats } from "@/lib/site-data";

function RotatingKeyword() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroKeywords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span className="relative inline-flex min-w-[14ch] justify-start text-sky-200">
      <motion.span
        key={heroKeywords[index]}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        {heroKeywords[index]}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center py-14 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-x-0 top-12 -z-10 h-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.14),_transparent_58%)] blur-3xl" />

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="space-y-8">
          <Reveal>
            <Badge className="gap-2 text-[11px] tracking-[0.24em]">
              <experiencePill.icon className="size-3.5 text-sky-200" />
              {experiencePill.label}
            </Badge>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <p className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase">
                Sagar Rawat / Developer Portfolio
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                Building <span className="text-gradient">thoughtful digital products</span>{" "}
                across <RotatingKeyword />
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m a full-stack developer exploring AI-powered experiences,
                scalable systems, and polished frontend execution. I care about
                sharp product thinking, clean architecture, and interfaces that
                feel premium without becoming loud.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="mailto:hello@sagarrawat.dev?subject=Resume%20Request">
                  Download Resume
                  <Download className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="#contact">
                  Contact Me
                  <Mail className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <Card key={stat.label} className="rounded-2xl px-4 py-4">
                  <p className="text-xs tracking-[0.22em] text-slate-400 uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    {stat.value}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative lg:justify-self-end">
          <Card className="relative overflow-hidden p-4 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_32%)]" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="size-2.5 rounded-full bg-rose-400/80" />
                <span className="size-2.5 rounded-full bg-amber-300/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="mask-fade rounded-[20px] border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-3 pt-12">
                <Image
                  src="/profile-placeholder.svg"
                  alt="Abstract profile placeholder for Sagar Rawat"
                  width={640}
                  height={720}
                  priority
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </div>
            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Sparkles className="size-4 text-sky-200" />
                  Engineering Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Building clean frontend systems, robust APIs, and thoughtful
                  AI-assisted workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Current vibe</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Premium, readable, and product-minded design inspired by the
                  best modern software teams.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
