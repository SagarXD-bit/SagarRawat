export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sagar Rawat. Crafted with care for modern web.</p>
        <p className="font-mono text-xs tracking-[0.24em] uppercase">
          Next.js / TypeScript / Tailwind / Motion
        </p>
      </div>
    </footer>
  );
}
