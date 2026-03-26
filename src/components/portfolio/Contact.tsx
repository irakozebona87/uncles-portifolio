import { useState } from "react";
import { toast } from "sonner";
import { contactLinks } from "@/data/portfolio-data";

const EMAIL_SUGGESTIONS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "protonmail.com",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (val.includes("@") && !val.includes("@.")) {
      const [local, domain] = val.split("@");
      if (domain !== undefined && domain.length < 15) {
        const filtered = EMAIL_SUGGESTIONS.filter(
          (s) => s.startsWith(domain) && s !== domain
        );
        setEmailSuggestions(filtered.map((s) => `${local}@${s}`));
      } else {
        setEmailSuggestions([]);
      }
    } else {
      setEmailSuggestions([]);
    }
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 5000,
    });
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 3000);
  };

  const handleFieldFocus = (field: string) => {
    toast.info(`Filling in ${field} — looking forward to hearing from you!`, {
      duration: 2000,
      id: `focus-${field}`,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
    >
      {/* Left */}
      <div>
        <div className="flex items-center gap-2.5 text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-5">
          <span className="w-6 h-px bg-accent" />
          Get in Touch
        </div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-tight">
          Let's build
          <br />
          something
          <br />
          <em className="font-light italic text-accent">worth reading.</em>
        </h2>
        <p className="text-sm leading-7 text-muted-foreground mt-7 mb-10">
          Available for consulting on library system architecture, LMS
          migrations, and university IT strategy. Always open to collaboration.
        </p>
        <div className="flex flex-col gap-0.5">
          {contactLinks.map(({ label, tag }) => (
            <a
              key={label}
              href="#"
              className="flex justify-between items-center px-6 py-5 bg-card border border-border text-foreground text-[0.78rem] tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
              data-hover
            >
              {label}
              <span className="text-[0.65rem] tracking-[0.1em] uppercase opacity-50">
                {tag}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col gap-0.5">
        <input
          className="w-full bg-card border border-border border-b-0 px-5 py-4 font-mono text-sm text-foreground outline-none focus:bg-background focus:border-accent transition-all placeholder:text-muted-foreground placeholder:text-xs"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => handleFieldFocus("name")}
        />

        {/* Email with suggestions */}
        <div className="relative">
          <input
            className="w-full bg-card border border-border border-b-0 px-5 py-4 font-mono text-sm text-foreground outline-none focus:bg-background focus:border-accent transition-all placeholder:text-muted-foreground placeholder:text-xs"
            placeholder="Email address"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onFocus={() => handleFieldFocus("email")}
          />
          {emailSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-background border border-accent z-20 shadow-lg">
              {emailSuggestions.map((s) => (
                <button
                  key={s}
                  className="w-full text-left px-5 py-2.5 text-sm font-mono text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => {
                    setEmail(s);
                    setEmailSuggestions([]);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          className="w-full bg-card border border-border border-b-0 px-5 py-4 font-mono text-sm text-foreground outline-none focus:bg-background focus:border-accent transition-all placeholder:text-muted-foreground placeholder:text-xs"
          placeholder="Subject / Project type"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onFocus={() => handleFieldFocus("subject")}
        />

        <textarea
          className="w-full bg-card border border-border px-5 py-4 font-mono text-sm text-foreground outline-none focus:bg-background focus:border-accent transition-all resize-none min-h-[120px] placeholder:text-muted-foreground placeholder:text-xs"
          placeholder="Tell me about your library system challenges…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => handleFieldFocus("message")}
        />

        <button
          className={`self-start mt-0.5 px-9 py-4 font-mono text-[0.72rem] tracking-[0.1em] uppercase cursor-pointer transition-colors duration-300 ${
            submitted
              ? "bg-accent text-accent-foreground"
              : "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
          }`}
          onClick={handleSubmit}
          data-hover
        >
          {submitted ? "Message Sent ✓" : "Send Message ↗"}
        </button>
      </div>
    </section>
  );
}
