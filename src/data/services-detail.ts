import type { ServiceIconKey } from "@/data/site";

export type ServiceDetail = {
  title: string;
  icon: ServiceIconKey;
  summary: string;
  details: string[];
};

export const servicesFull: ServiceDetail[] = [
  {
    title: "Architecture",
    icon: "landmark",
    summary:
      "Human-centered spaces that respect place — from Himalayan campuses to urban mixed-use.",
    details: [
      "Concept design through construction administration with BIM-native deliverables.",
      "Façade and daylight studies tuned for monsoon humidity and highland solar angles.",
      "Heritage-sensitive adaptive reuse alongside modern code compliance.",
    ],
  },
  {
    title: "Engineering",
    icon: "cpu",
    summary:
      "Quantified safety margins, honest load paths, and models that survive first field visit.",
    details: [
      "Structural, geotechnical, and seismic packages for institutional and industrial scale.",
      "Floodplain and landslide interface studies with instrumentation where stakes are high.",
      "Peer review and value engineering without value stripping.",
    ],
  },
  {
    title: "Construction",
    icon: "hard-hat",
    summary:
      "Execution that treats schedule, quality, and safety as a single system — not competing KPIs.",
    details: [
      "Design-build and EPC delivery with integrated planning and lookahead discipline.",
      "Lean site logistics for constrained urban and hillside sites.",
      "Commissioning-ready closeout with digital O&M handover.",
    ],
  },
  {
    title: "Consulting",
    icon: "users",
    summary:
      "Clarity for boards and public agencies — scope, risk, and governance in plain language.",
    details: [
      "Feasibility, PMO setup, and tender strategy for greenfield and expansion programs.",
      "Claims avoidance through contemporaneous documentation habits.",
      "Stakeholder alignment workshops with decision logs you can audit.",
    ],
  },
  {
    title: "IT Services",
    icon: "monitor",
    summary:
      "Secure digital infrastructure for the built environment — from site trailers to SOC.",
    details: [
      "Network, identity, and Zero Trust patterns for project site and corporate HQ.",
      "Data platforms for digital twins, IoT telemetry, and executive dashboards.",
      "Managed services with uptime SLAs aligned to construction calendars.",
    ],
  },
  {
    title: "Healthcare Solutions",
    icon: "heart-pulse",
    summary:
      "Clinical workflows, medical gases, and infection control engineered as one thread.",
    details: [
      "Imaging suite vibration budgets and RF shielding coordination.",
      "RTLS, nurse call, and BMS integration tested with clinical scenarios.",
      "Regulatory dossiers packaged for state and national review cycles.",
    ],
  },
  {
    title: "Charitable Projects",
    icon: "hand-heart",
    summary:
      "Pro-bono and subsidized delivery for community assets — schools, shelters, and resilience hubs.",
    details: [
      "Volunteer engineer pairing with local masons and fabricators.",
      "Material donation logistics coordinated with transparent procurement.",
      "Post-occupancy training so communities can operate and maintain facilities.",
    ],
  },
  {
    title: "Agriculture & Rural Development",
    icon: "sprout",
    summary:
      "Civil works, cold chain, telemetry, and training for cooperatives across the Brahmaputra basin and hills.",
    details: [
      "Irrigation, grading, and drainage designed for flash-flood recurrence intervals.",
      "Renewable-powered pumping and monitoring with farmer-first UX.",
      "Horticulture envelopes with export-grade environmental controls.",
    ],
  },
];
