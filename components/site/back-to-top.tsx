"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-terracotta/30 bg-terracotta text-sand shadow-[0_16px_40px_rgba(198,93,59,0.28)] hover:-translate-y-0.5 sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
