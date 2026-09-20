import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-2xl border border-[rgba(232,196,168,0.14)] bg-white/5 px-4 py-3 text-sm text-sand placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
