"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const sectionIds = ["home", ...navLinks.map((link) => link.href.slice(1))];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-5",
          isScrolled
            ? "glass-panel border-[rgba(232,196,168,0.16)] shadow-[0_24px_60px_rgba(8,6,4,0.4)]"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border border-terracotta/30 bg-terracotta/15 font-display text-sm font-semibold text-sand shadow-[0_0_24px_rgba(198,93,59,0.2)]">
            SR
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-sand uppercase">
              Sagar Rawat
            </p>
            <p className="text-xs text-stone-400">Full-Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm",
                  isActive
                    ? "bg-terracotta/15 text-sand"
                    : "text-stone-300 hover:bg-white/8 hover:text-sand",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="secondary" size="default">
            <Link href="#contact">
              Let&apos;s Talk
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(232,196,168,0.16)] bg-white/6 text-sand md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl md:hidden"
          >
            <div className="glass-panel rounded-[30px] border border-[rgba(232,196,168,0.16)] p-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = active === link.href.slice(1);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm",
                        isActive
                          ? "bg-terracotta/15 text-sand"
                          : "text-stone-200 hover:bg-white/8 hover:text-sand",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button asChild variant="default" className="mt-2">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
