"use client";

import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "@/lib/site-data";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.project || `Portfolio enquiry from ${formData.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name || "Not provided"}`,
        `Email: ${formData.email || "Not provided"}`,
        "",
        formData.message || "Hi Sagar, I'd love to connect.",
      ].join("\n"),
    );

    window.location.href = `mailto:hello@sagarrawat.dev?subject=${subject}&body=${body}`;
  }

  return (
    <SectionShell id="contact" className="pb-12 sm:pb-16">
      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <Card className="h-full rounded-[32px] p-6 sm:p-7">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something sharp and useful."
              description="Whether it&apos;s a product idea, internship opportunity, research conversation, or engineering collaboration, I&apos;m always open to meaningful work."
            />

            <div className="mt-8 space-y-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 hover:bg-white/8"
                >
                  <div>
                    <p className="font-semibold text-white">{social.label}</p>
                    <p className="mt-1 text-slate-400">{social.value}</p>
                  </div>
                  <ArrowUpRight className="size-4" />
                </Link>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="rounded-[32px] p-6 sm:p-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Project or role</span>
                <Input
                  name="project"
                  placeholder="Tell me what you&apos;re building"
                  value={formData.project}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, project: event.target.value }))
                  }
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <Textarea
                  name="message"
                  placeholder="Share a few details about the opportunity or idea."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  This form opens your email client so the message is easy to customize.
                </p>
                <Button type="submit" size="lg">
                  Send Message
                  <Send className="size-4" />
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
