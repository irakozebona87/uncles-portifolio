import { navLinks } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="font-heading font-extrabold text-sm">
          OLIVIER UWIRINGIYE

      </div>
      <div className="flex gap-6">
        {navLinks.slice(0, 4).map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="text-[0.65rem] tracking-[0.08em] uppercase text-background/45 hover:text-accent transition-colors"
            data-hover
          >
            {s}
          </a>
        ))}
      </div>
      <div className="text-[0.65rem] tracking-wider uppercase text-background/35">
        © 2026 OLIVIER UWIRINGIYE— All rights reserved
      </div>
    </footer>
  );
}
