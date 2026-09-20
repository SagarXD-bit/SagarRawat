import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(232,196,168,0.16)] bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.18em] text-stone-200 uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
