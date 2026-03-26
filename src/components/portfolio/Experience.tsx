import { useReveal } from "@/hooks/useReveal";
import { experience } from "@/data/portfolio-data";

function TimelineItem({
  item,
  delay,
}: {
  item: (typeof experience)[0];
  delay: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-10 border-b border-border relative transition-all duration-600 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-[193px] top-11 w-3.5 h-3.5 border-2 border-accent bg-card rounded-full" />

      <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted-foreground pt-1 md:text-right md:pr-9">
        {item.date}
      </div>
      <div className="md:pl-5">
        <h3 className="font-heading font-bold text-base mb-1">{item.title}</h3>
        <div className="text-[0.75rem] text-accent tracking-wider mb-3.5">
          {item.company}
        </div>
        <p className="text-[0.78rem] leading-7 text-muted-foreground">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-card py-20 md:py-28 px-6 md:px-12">
      <div className="flex items-center gap-2.5 text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-5">
        <span className="w-6 h-px bg-accent" />
        Career Path
      </div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-tight">
        Where I've
        <br />
        <em className="font-light italic text-accent">built things</em>
      </h2>

      <div className="mt-16 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-border" />

        {experience.map((e, i) => (
          <TimelineItem key={e.date} item={e} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
