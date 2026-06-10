import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-5",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
