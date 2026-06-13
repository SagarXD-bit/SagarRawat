"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function HashScrollHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      if (!hash) return;

      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    };

    // Handle hash scroll on initial load
    handleHashScroll();

    // Handle hash scroll when hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [router]);

  return null;
}
