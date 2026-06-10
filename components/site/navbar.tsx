"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-5",
          isScrolled
            ? "glass-panel border-white/12 shadow-[0_24px_60px_rgba(2,6,23,0.36)]"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/7 font-display text-sm font-semibold text-white">
            SR
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Sagar Rawat
            </p>
            <p className="text-xs text-slate-400">Full-Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
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
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
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
            <div className="glass-panel rounded-[30px] border border-white/12 p-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-white/8 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
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
