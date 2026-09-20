import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(232,196,168,0.1)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sagar Rawat. Crafted with care for modern web.</p>
        <div className="flex items-center gap-5">
          <p className="font-mono text-xs tracking-[0.24em] uppercase">
            Next.js / TypeScript / Tailwind / Motion
          </p>
          <Link href="#home" className="text-xs tracking-[0.18em] text-clay uppercase hover:text-sand">
            Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
