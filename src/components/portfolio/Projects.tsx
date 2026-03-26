import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <div className="flex items-center gap-2.5 text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-6 h-px bg-accent" />
            Selected Work
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-tight">
            Projects that
            <br />
            <em className="font-light italic text-accent">define the craft</em>
          </h2>
        </div>
        <a
          href="#contact"
          className="border border-foreground px-7 py-3 text-[0.72rem] uppercase tracking-[0.08em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          data-hover
        >
          All Projects →
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-0.5">
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={`group bg-card p-8 md:p-10 relative overflow-hidden border border-border cursor-pointer transition-all duration-400 ease-out hover:bg-foreground hover:border-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_hsl(var(--accent))] ${
              p.featured ? "lg:row-span-2" : ""
            } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
            data-hover
          >
            <div className="font-display text-[5rem] font-light leading-none text-border mb-6 group-hover:text-background/10 transition-colors">
              {p.num}
            </div>
            <div className="flex gap-2 flex-wrap mb-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.6rem] tracking-[0.1em] uppercase border border-border px-2.5 py-1 text-muted-foreground group-hover:bg-background/10 group-hover:text-background group-hover:border-transparent transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3
              className={`font-display font-bold leading-tight tracking-tight text-foreground mb-4 group-hover:text-background transition-colors ${
                p.featured ? "text-[2.2rem]" : "text-[1.6rem]"
              }`}
            >
              {p.title}
            </h3>
            <p className="text-[0.78rem] leading-7 text-muted-foreground group-hover:text-background/80 transition-colors">
              {p.desc}
            </p>
            <div className="absolute bottom-9 right-9 text-xl text-border opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all -rotate-45 group-hover:rotate-0">
              ↗
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
