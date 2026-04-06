export type JobOpening = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
};

export const openings: JobOpening[] = [
  {
    id: "pm-senior",
    title: "Senior Project Manager",
    team: "Construction Operations",
    location: "Guwahati / hybrid",
    type: "Full-time",
    summary:
      "Lead multidisciplinary teams on healthcare and institutional projects from baseline schedule to commissioning.",
    responsibilities: [
      "Own integrated lookahead with engineering and procurement",
      "Chair weekly risk forums with transparent decision logs",
      "Coach junior PMs on contract literacy and field diplomacy",
    ],
  },
  {
    id: "field-engineer",
    title: "Field Engineer",
    team: "Site Delivery",
    location: "North-East India (rotational)",
    type: "Full-time",
    summary:
      "Be the engineering eyes on the slab — QA/QC, surveys, and RFIs resolved before they become claims.",
    responsibilities: [
      "Execute inspection test plans with photographic traceability",
      "Coordinate subcontractors within daily workface limits",
      "Feed as-built deltas back into BIM within 48 hours",
    ],
  },
  {
    id: "accounts-manager",
    title: "Accounts Manager",
    team: "Finance",
    location: "New Delhi",
    type: "Full-time",
    summary:
      "Manage billing, GST compliance, and project cost reporting for a portfolio of EPC contracts.",
    responsibilities: [
      "Monthly MIS for project controllers with variance commentary",
      "Liaison with auditors and banking covenants",
      "Process improvement for vendor onboarding and TDS workflows",
    ],
  },
  {
    id: "it-devops",
    title: "IT Systems Engineer",
    team: "Technology",
    location: "New Delhi / remote-friendly",
    type: "Full-time",
    summary:
      "Harden networks across corporate HQ and temporary site compounds; automate the boring parts securely.",
    responsibilities: [
      "Maintain Zero Trust policies and endpoint posture",
      "Support digital twin data pipelines and observability",
      "Incident response drills with construction leadership",
    ],
  },
];

export const culturePillars = [
  {
    title: "Field first",
    body: "Decisions earn their keep when foremen nod — not when slides animate.",
  },
  {
    title: "Radical clarity",
    body: "We document assumptions, publish trade-offs, and kill zombie tasks in the open.",
  },
  {
    title: "Long arcs",
    body: "We hire for curiosity and retention, not heroics. Infrastructure rewards patience.",
  },
];
