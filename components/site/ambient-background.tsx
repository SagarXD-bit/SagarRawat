"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      setSpot({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb left-[-8%] top-[12%] h-72 w-72 bg-terracotta/20" />
      <div className="orb orb-delay right-[-6%] top-[38%] h-80 w-80 bg-clay/16" />
      <div className="orb bottom-[8%] left-[38%] h-64 w-64 bg-terracotta/10" />
      {spot ? (
        <motion.div
          className="absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,93,59,0.16),transparent_62%)]"
          animate={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          transition={{ type: "spring", stiffness: 40, damping: 22, mass: 0.6 }}
        />
      ) : null}
    </div>
  );
}
