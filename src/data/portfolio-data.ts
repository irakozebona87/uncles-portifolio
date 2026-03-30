export const skills = [
  {
   // icon: "📚",
    name: "Library Systems",
    bars: [
      { label: "Koha ILS", pct: 95 },
      { label: "DSpace / EPrints", pct: 88 },
      { label: "MARC21 / Dublin Core", pct: 90 },
      { label: "RFID / Barcode", pct: 82 },
    ],
  },
  {
    //icon: "💻",
    name: "Development",
    bars: [
      { label: "Python / Django", pct: 92 },
      { label: "JavaScript / React", pct: 85 },
      { label: "PHP / Laravel", pct: 80 },
      { label: "REST API Design", pct: 90 },
    ],
  },
  {
    //icon: "🗄️",
    name: "Data & Infrastructure",
    bars: [
      { label: "MySQL / PostgreSQL", pct: 93 },
      { label: "Linux Server Admin", pct: 88 },
      { label: "Docker / CI/CD", pct: 78 },
      { label: "Network Monitoring", pct: 85 },
    ],
  },
];

export const projects = [
  {
    num: "01",
    featured: true,
    tags: ["LMS", "Python", "PostgreSQL", "RFID"],
    title: "UniLib — Integrated Library Management Platform",
    desc: "End-to-end redesign of the university's legacy Koha installation — custom Python middleware, unified patron portal, RFID self-checkout kiosks, and real-time circulation analytics. Serves 18,000 active borrowers across 3 campus libraries.",
  },
  {
    num: "02",
    featured: false,
    tags: ["Institutional Repository", "DSpace"],
    title: "Open Access Research Archive",
    desc: "Configured and customised a DSpace 7 institutional repository hosting 40,000+ theses, journals, and faculty publications with full-text search indexing.",
  },
  {
    num: "03",
    featured: false,
    tags: ["API", "React"],
    title: "Book Discovery & Recommendation Engine",
    desc: "ML-backed recommendation API integrated into the student portal — increasing inter-library loan requests by 34% in the first semester.",
  },
];

export const experience = [
  {
    date: "2020 — Present",
    title: "Senior Software Developer & IT Systems Lead",
    company: "ST LAWRENCE — Central Library",
    desc: "Lead developer for all library-facing software systems. Oversee a team of 3 junior developers, manage campus network infrastructure, and architect the next-gen LMS migration from monolith to microservices.",
  },
  {
    date: "2017 — 2020",
    title: "Library Systems Developer",
    company: "Meridian University — IT Department",
    desc: "Built and maintained Koha ILS customisations, developed the first patron self-service portal, and integrated barcode + RFID hardware across two new library branches.",
  },
  {
    date: "2016 — 2017",
    title: "SENIOR IT Support Technician",
    company: "ST LAWARENCE University — IT Help Desk",
    desc: "Hardware and software support for 4,000 staff and students. First exposure to library network infrastructure and the university's legacy catalogue systems.",
  },
];

export const marqueeItems = [
  "Library Management System",
  "University IT Infrastructure",
  "Full-Stack Development",
  "Digital Cataloguing",
  "API Architecture",
  "Database Administration",
  "RFID Integration",
  "Network Systems",
];

export const contactLinks = [
  { label: "olivieruwirangiye@gmail.com", tag: "Email →" },
  { label: "OLIVIER UWIRANGIYE", tag: "LinkedIn →" },
  { label: "OLIVIER UWIRANGIYE", tag: "GitHub →" },
];

export const stats = [
  { num: "8+", desc: "Years in university IT" },
  { num: "24", desc: "Systems deployed" },
  { num: "99%", desc: "Uptime record" },
  { num: "60k", desc: "Catalogued records" },
];

export const navLinks = ["about", "skills", "projects", "experience", "contact"];
