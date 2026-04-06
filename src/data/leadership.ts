export type Leader = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  /** Sample executive email — replace with real routing / assistants */
  email: string;
  /** Optional direct line (sample) */
  phone?: string;
};

export const leaders: Leader[] = [
  {
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    bio: "Civil engineer and program director with two decades delivering hospitals, campuses, and public infrastructure across South and South-East Asia.",
    focus: ["Portfolio strategy", "Public-sector partnerships", "Risk governance"],
    email: "arjun.mehta@gavion.in",
  },
  {
    name: "Dr. Neha Krishnan",
    role: "Chief Technology Officer",
    bio: "Former research lead in computational design; now bridges product-grade software discipline with field operations and owner digital roadmaps.",
    focus: ["Digital twins", "Cyber-physical systems", "R&D partnerships"],
    email: "neha.krishnan@gavion.in",
  },
  {
    name: "James Syiemlieh",
    role: "Director — Construction Operations",
    bio: "Started as a site engineer in Shillong; today oversees unified safety, quality, and productivity systems for all active megaprojects.",
    focus: ["Field excellence", "Supply chain resilience", "Training academies"],
    email: "james.syiemlieh@gavion.in",
  },
  {
    name: "Lalboi Haokip",
    role: "Director — Business & Finance",
    bio: "Chartered accountant specializing in infrastructure SPVs, multilateral funding compliance, and long-cycle cash forecasting.",
    focus: ["Capital structure", "Contract economics", "ESG reporting"],
    email: "lalboi.haokip@gavion.in",
  },
  {
    name: "Sangita Baruah",
    role: "Director — Sustainability & Impact",
    bio: "Environmental planner integrating climate risk, biodiversity buffers, and community benefit agreements into executable contracts.",
    focus: ["Climate adaptation", "Impact measurement", "CSR alignment"],
    email: "sangita.baruah@gavion.in",
  },
  {
    name: "Vikram Chhetri",
    role: "Lead Project Manager — Major Projects",
    bio: "Civil engineer with a decade on live hospital and campus sites; specializes in commissioning readiness and multi-stakeholder alignment.",
    focus: ["Integrated schedules", "Field QA", "Handover playbooks"],
    email: "vikram.chhetri@gavion.in",
  },
];

export const directorNotes = [
  {
    quote:
      "We do not win awards for drawings. We win trust when our sites stay calm under pressure — monsoon, protest day, or procurement shock.",
    attribution: "James Syiemlieh",
    email: "james.syiemlieh@gavion.in",
  },
  {
    quote:
      "Technology is not a slide deck here. It is telemetry on a pump, a twin on a tablet, and a cyber playbook everyone can find at 2 a.m.",
    attribution: "Dr. Neha Krishnan",
    email: "neha.krishnan@gavion.in",
  },
  {
    quote:
      "Capital follows clarity. Our job is to make the next rupee obvious — for taxpayers, investors, and the communities we touch.",
    attribution: "Lalboi Haokip",
    email: "lalboi.haokip@gavion.in",
  },
];
