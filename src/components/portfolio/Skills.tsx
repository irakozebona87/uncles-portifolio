import { useReveal } from "@/hooks/useReveal";
import { skills } from "@/data/portfolio-data";

interface SkillBar {
  label: string;
  pct: number;
}

interface SkillData {
  icon?: string;
  name: string;
  bars: SkillBar[];
}

function SkillCategory({ data, delay }: { data: SkillData; delay: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`bg-foreground/5 p-7 border border-foreground/[0.06] relative overflow-hidden transition-all duration-300 hover:bg-foreground/10 hover:border-accent/40 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-400 ease-out" />
      {data.icon ? <div className="text-2xl mb-4">{data.icon}</div> : null}
      <div className="font-heading font-bold text-[0.8rem] tracking-wider uppercase text-background mb-5">
        {data.name}
      </div>
      {data.bars.map((b, i) => (
        <div key={b.label} className="mb-3">
          <div className="flex justify-between text-[0.65rem] tracking-wider text-background/50 mb-1.5">
            <span>{b.label}</span>
            <span>{b.pct}%</span>
          </div>
          <div className="h-0.5 bg-background/10 overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-[1200ms] ease-out"
              style={{
                width: visible ? `${b.pct}%` : "0%",
                transitionDelay: `${delay + i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-12 bg-foreground text-background relative overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-extrabold text-[18vw] text-background/[0.025] pointer-events-none whitespace-nowrap select-none">
        SKILLS
      </div>

      <div className="flex justify-between items-end mb-16">
        <div>
          <div className="flex items-center gap-2.5 text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-6 h-px bg-accent" />
            Technical Stack
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-tight text-background">
            Tools that
            <br />
            <em className="font-light italic text-accent">power the work</em>
          </h2>
        </div>
        <div className="font-display text-[4rem] font-light text-background/15 leading-none hidden md:block">
          18
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {skills.map((s, i) => (
          <SkillCategory key={s.name} data={s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
