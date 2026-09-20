import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrowserPreviewProps = {
  title: string;
  image: string;
  url?: string;
  href?: string;
  className?: string;
};

function displayUrl(url?: string) {
  if (!url) {
    return "github.com";
  }

  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function BrowserPreview({
  title,
  image,
  url,
  href,
  className,
}: BrowserPreviewProps) {
  const frame = (
    <div
      className={cn(
        "group overflow-hidden rounded-[22px] border border-[rgba(232,196,168,0.12)] bg-[#0e0c0a]/80",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-[rgba(232,196,168,0.1)] px-3 py-2">
        <span className="size-2 rounded-full bg-rose-400/80" />
        <span className="size-2 rounded-full bg-amber-300/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <div className="ml-1 min-w-0 flex-1 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] tracking-wide text-stone-400">
          {displayUrl(url)}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={`${title} live preview`}
          width={1200}
          height={750}
          unoptimized={image.endsWith(".svg")}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {href ? (
          <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] tracking-[0.16em] text-sand uppercase">
              Open live site
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );

  if (!href) {
    return frame;
  }

  return (
    <Link href={href} target="_blank" rel="noreferrer" className="block">
      {frame}
    </Link>
  );
}
