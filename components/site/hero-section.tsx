"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

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
    <span className="relative inline-flex w-[min(22ch,100%)] max-w-full align-baseline text-clay">
      <span className="invisible whitespace-nowrap">{heroKeywords[2]}</span>
      <span className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={heroKeywords[index]}
            className="absolute inset-0 flex items-start whitespace-nowrap"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroKeywords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

function TiltFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 10);
    rotateY.set(x * 12);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: shouldReduceMotion ? 0 : springX,
        rotateY: shouldReduceMotion ? 0 : springY,
        transformPerspective: 900,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center py-10 sm:py-12 lg:py-14"
    >
      <div className="absolute inset-x-0 top-12 -z-10 h-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(198,93,59,0.16),_transparent_58%)] blur-3xl" />

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="space-y-6 lg:space-y-7">
          <Reveal>
            <Badge className="gap-2 text-[11px] tracking-[0.24em]">
              <experiencePill.icon className="size-3.5 text-clay" />
              {experiencePill.label}
            </Badge>
          </Reveal>

          <div className="space-y-5 lg:space-y-6">
            <Reveal delay={0.05}>
              <p className="font-mono text-xs tracking-[0.3em] text-stone-400 uppercase">
                Sagar Rawat / Developer Portfolio
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                <span className="block">
                  Building <span className="text-gradient">thoughtful digital products</span>
                </span>
                <span className="mt-3 block sm:mt-4">
                  across <RotatingKeyword />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
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
                <a href="/resume.pdf" download>
                  Download Resume
                  <Download className="size-4" />
                </a>
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
                  <p className="text-xs tracking-[0.22em] text-stone-400 uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-sand">
                    {stat.value}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative lg:justify-self-end">
          <span className="absolute -top-3 left-8 z-10 rounded-full border border-terracotta/25 bg-ink/80 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-clay uppercase">
            Available
          </span>
          <span className="absolute top-24 -right-2 z-10 hidden rounded-full border border-[rgba(232,196,168,0.16)] bg-ink/80 px-3 py-1 text-[11px] text-stone-300 sm:block">
            TinyML
          </span>
          <span className="absolute bottom-28 -left-3 z-10 hidden rounded-full border border-[rgba(232,196,168,0.16)] bg-ink/80 px-3 py-1 text-[11px] text-stone-300 sm:block">
            Research
          </span>
          <TiltFrame>
            <Card className="relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,93,59,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(224,138,104,0.14),_transparent_32%)]" />
              <div className="relative overflow-hidden rounded-[24px] border border-[rgba(232,196,168,0.14)] bg-[#0e0c0a]/70 p-4">
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="size-2.5 rounded-full bg-rose-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="mask-fade rounded-[20px] border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-3 pt-12">
                  <Image
                    src="/profile-placeholder.jpg"
                    alt="Sagar Rawat"
                    width={1080}
                    height={1350}
                    priority
                    className="h-auto w-full rounded-[18px]"
                  />
                </div>
              </div>
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(232,196,168,0.12)] bg-white/5 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-sand">
                    <Sparkles className="size-4 text-clay" />
                    Engineering Focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-300">
                    Building clean frontend systems, robust APIs, and thoughtful
                    AI-assisted workflows.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(232,196,168,0.12)] bg-white/5 p-4">
                  <p className="text-sm font-semibold text-sand">Current vibe</p>
                  <p className="mt-2 text-sm leading-7 text-stone-300">
                    Warm, readable, and product-minded design inspired by the
                    best modern software teams.
                  </p>
                </div>
              </div>
            </Card>
          </TiltFrame>
        </Reveal>
      </div>
    </section>
  );
}
