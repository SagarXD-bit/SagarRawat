import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("section-line scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}
