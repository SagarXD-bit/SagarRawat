"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-terracotta via-clay to-sand"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
    />
  );
}
