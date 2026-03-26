import { useReveal } from "@/hooks/useReveal";
import { stats } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.png";

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start"
    >
      {/* Left — text */}
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-2.5 text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-5">
          <span className="w-6 h-px bg-accent" />
          About Me
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-tight mb-8">
          Bridging code &amp;
          <br />
          <em className="font-light italic text-accent">knowledge systems</em>
        </h2>
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            I'm a software developer and IT specialist embedded in a university
            environment, focused exclusively on designing and maintaining library
            management systems that serve thousands of students and faculty daily.
          </p>
          <p>
            My work sits at the intersection of software engineering and
            institutional knowledge infrastructure — from database architecture to
            patron-facing interfaces, cataloguing APIs to network uptime
            management.
          </p>
          <p>
            I believe academic software should be invisible when it works and
            illuminating when you look closely — built for longevity, scale, and
            the quiet demands of scholarly life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-0.5 mt-10">
          {stats.map(({ num, desc }) => (
            <div
              key={desc}
              className="group bg-card p-7 transition-colors duration-300 hover:bg-foreground cursor-default"
              data-hover
            >
              <div className="font-display text-[2.6rem] font-bold leading-none tracking-tight text-foreground group-hover:text-background transition-colors">
                {num}
              </div>
              <div className="text-[0.65rem] tracking-[0.08em] uppercase text-muted-foreground mt-1.5 group-hover:text-background/70 transition-colors">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — photo */}
      <div
        className={`relative transition-all duration-700 ease-out delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative w-full aspect-[4/5] bg-card overflow-hidden" data-hover>
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-foreground/65" />
          <img
            className="w-full h-full object-cover object-top block"
            src={profilePhoto}
            alt="Profile"
            loading="lazy"
            width={800}
            height={1000}
          />
          <div className="absolute bottom-6 left-6 z-20 bg-foreground text-background px-4 py-2.5 text-[0.65rem] tracking-[0.08em] uppercase">
            BSc Computer Science — Class of 2016
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] border-2 border-accent -z-10" />
      </div>
    </section>
  );
}
