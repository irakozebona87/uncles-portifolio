import { navLinks } from "@/data/portfolio-data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border">
      <a href="#" className="font-heading font-extrabold text-sm tracking-wider text-foreground">
        OLIVIER UWIRANGIYE
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground hover:text-accent transition-colors"
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
