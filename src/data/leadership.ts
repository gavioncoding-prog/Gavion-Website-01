export type Leader = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  email?: string;
  phone?: string;
};

export const leaders: Leader[] = [
  {
    name: "M.R. Singh",
    role: "Chief Executive Officer",
    bio: "Architect, industrial designer, and researcher with 15+ years across practice and academia. He is a graduate and master’s alumnus of DTU and IIT, with ongoing research interests that tie design rigour to how infrastructure is procured and delivered. As director and partner at BigTech, Supreme Automotive, and INAK, he connects product thinking, manufacturing ecosystems, and programme governance. His goal is to grow Gavion into one of India’s strongest infrastructure and technology companies—where research-grade clarity meets dependable execution on the ground.",
    focus: [
      "Architecture & industrial design",
      "DTU / IIT research lineage",
      "Partner leadership — BigTech, Supreme, INAK",
      "Infra, tech & delivery strategy",
    ],
  },
  {
    name: "I Kocha",
    role: "Director",
    bio: "Mechanical engineer and entrepreneur with 40+ years in manufacturing and industrial ventures. Partner and director at Supreme Automotive, he combines deep knowledge of production systems, tooling, and design-for-manufacture with hands-on leadership on the shop floor. He has worked closely with Japanese and American companies—absorbing lean discipline, quality systems, and supplier development models—and applies that lens to scale reliable manufacturing and design outcomes for clients and joint ventures.",
    focus: [
      "Manufacturing & mechanical systems",
      "Supreme Automotive leadership",
      "Japan & US industrial partnerships",
      "Design-for-production & scale",
    ],
  },
  {
    name: "Vaibhav Singh",
    role: "Director",
    bio: "Architect and town planner with 12+ years leading complex buildings and urban frameworks. He is especially strong on design integration and statutory planning at city and campus scale, with significant exposure to projects in the United Kingdom and the Netherlands—bringing European planning discipline together with Indian codes, climate, and stakeholder realities. He focuses on coherent master plans, movement networks, and built form so large programmes stay legible from first sketch through occupation and long-term adaptability.",
    focus: [
      "Architecture & urban design",
      "Town & master planning",
      "UK & Netherlands project experience",
      "Campus & mixed-use programmes",
    ],
  },
  {
    name: "B. Luwang",
    role: "Director",
    bio: "Technology leader with 20+ years designing, building, and shipping software and digital products for demanding users in France and across global markets. He has led end-to-end product cycles—from discovery and architecture to release and scale—working with cross-border teams and enterprise-grade expectations. He is focused on raising the bar for how Indian organisations conceive, deliver, and operate technology: clearer roadmaps, stronger engineering culture, and products that hold up internationally, not only on launch day but through years of use.",
    focus: [
      "Product design & engineering",
      "France & global market delivery",
      "Enterprise & platform scale",
      "India IT transformation",
    ],
  },
  {
    name: "H.R. Singh",
    role: "Director",
    bio: "Engineer and researcher with 20+ years in biotechnology, genomics, and life-science systems. His work spans assay design, instrumentation interfaces, and the data pipelines that turn biological signal into reliable clinical insight. He is committed to accelerating high-impact change in India’s health sector—especially diagnostics—by connecting rigorous R&D with manufacturable, regulator-aware products that clinicians and patients can trust.",
    focus: [
      "Biotech & genomics",
      "Diagnostics & health systems",
      "R&D to commercialisation",
      "Clinical & lab innovation",
    ],
  },
  {
    name: "L.Sonia",
    role: "Director",
    bio: "Pharmaceutical leader with 20+ years across allopathic medicines, spanning development, quality, supply, and market access. She holds a master’s in pharmaceutical sciences and deep command of drug lifecycles—from molecule selection and formulation stability to pharmacovigilance and ethical promotion. She aims to strengthen how India’s pharma industry innovates and serves patients: evidence-led portfolios, transparent standards, and therapies that align medical need with sustainable, compliant delivery.",
    focus: [
      "Allopathic medicines & portfolios",
      "Formulation, QA & compliance",
      "Drug development lifecycle",
      "India pharma strategy",
    ],
  },
];

export type DirectorNote = {
  quote: string;
  attribution: string;
  email?: string;
};

export const directorNotes: DirectorNote[] = [
  {
    quote:
      "Our edge is simple: we treat every line on a drawing as a promise someone will have to keep on site. Design, research, and delivery have to speak the same language.",
    attribution: "M.R. Singh",
  },
  {
    quote:
      "Manufacturing taught me that pride is measured in repeatability—same quality on unit one and unit ten thousand. That mindset is how we approach construction partnerships.",
    attribution: "I Kocha",
  },
  {
    quote:
      "A plan is only as good as the city that can read it. We obsess over clarity—for authorities, communities, and the teams who will build and maintain what we envisage.",
    attribution: "Vaibhav Singh",
  },
  {
    quote:
      "Shipping for Paris or Bengaluru should teach the same lesson: the user does not care about your stack—they care whether the product disappears into their day. That is the craft we chase.",
    attribution: "B. Luwang",
  },
  {
    quote:
      "Diagnostics is where medicine meets mathematics and ethics. If we get sensitivity, specificity, and access right together, we change outcomes—not headlines.",
    attribution: "H.R. Singh",
  },
  {
    quote:
      "Every tablet carries a chain of decisions—excipient, stability, label, patient. Leadership in pharma is owning that chain with humility and science.",
    attribution: "L.Sonia",
  },
];
