import { marqueeItems } from "@/data/portfolio-data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-t border-b border-border overflow-hidden py-3.5 bg-foreground">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="px-8 text-[0.7rem] tracking-[0.12em] uppercase text-background/70 flex items-center gap-8"
          >
            {item}
            <span className="text-accent text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
