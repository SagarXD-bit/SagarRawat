import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[28px] border border-[rgba(232,196,168,0.14)]",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
