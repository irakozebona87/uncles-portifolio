import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.png";

export default function Hero() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const target = 24;
    const dur = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setCounter(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-screen"
    >
      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="inline-block text-[0.6rem] uppercase tracking-[0.18em] text-accent font-heading font-bold mb-6 border border-accent px-3 py-1.5 w-fit">
          University IT &amp; Software Developer
        </div>

        <div className="mb-8">
          <h1 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-foreground">
            Alex
            <br />
            <em className="font-light italic text-accent">Morgan</em>
          </h1>
        </div>

        <p className="text-sm leading-7 text-muted-foreground max-w-[400px] mb-12">
          Building intelligent library systems for academic institutions — where
          code meets knowledge infrastructure. Specialised in LMS architecture,
          digital cataloguing, and campus software ecosystems.
        </p>

        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#projects"
            className="group relative overflow-hidden bg-foreground text-background px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.08em] font-mono inline-block"
            data-hover
          >
            <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="border border-foreground px-7 py-3 text-[0.72rem] uppercase tracking-[0.08em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
            data-hover
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right — hero photo */}
      <div className="relative hidden lg:block overflow-hidden" data-hover>
        <img
          className="w-full h-full object-cover object-center block hover:scale-[1.03] transition-transform duration-600"
          src={profilePhoto}
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />

        {/* Float cards */}
        <div className="absolute top-[60px] right-8 bg-background border border-border px-4 py-3 text-[0.68rem] tracking-wider font-mono shadow-[4px_4px_0_hsl(var(--border))] animate-card-float z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mr-1.5 align-middle" />
          LMS Active
        </div>
        <div className="absolute top-[180px] left-6 bg-background border border-border px-4 py-3 text-[0.68rem] tracking-wider font-mono shadow-[4px_4px_0_hsl(var(--border))] animate-card-float [animation-delay:1s] z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block mr-1.5 align-middle" />
          12,400 Records
        </div>
        <div className="absolute bottom-[140px] right-6 bg-background border border-border px-4 py-3 text-[0.68rem] tracking-wider font-mono shadow-[4px_4px_0_hsl(var(--border))] animate-card-float [animation-delay:2s] z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mr-1.5 align-middle" />
          API v3.2
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-2.5 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground z-10">
        <div className="w-10 h-px bg-muted-foreground relative overflow-hidden">
          <span className="absolute top-0 left-[-100%] w-full h-full bg-accent animate-scroll-pulse" />
        </div>
        Scroll to explore
      </div>

      {/* Counter */}
      <div className="absolute top-36 right-6 md:right-12 z-10 text-right hidden lg:block">
        <div className="font-display text-[5rem] font-light leading-none text-border tabular-nums">
          {String(counter).padStart(2, "0")}
        </div>
        <div className="text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground">
          Projects Shipped
        </div>
      </div>
    </section>
  );
}
