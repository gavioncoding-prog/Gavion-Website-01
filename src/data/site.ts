/**
 * Sample contact data for demo / staging. Replace with live details before production.
 */
export const site = {
  name: "Gavion Group",
  shortName: "Gavion",
  legalName: "Gavion Group Private Limited",
  tagline:
    "Engineering, construction, and technology — delivered with precision across North-East India and beyond.",
  /** Primary inbox (maps to directory.emails[0]) */
  email: "info@gavion.in",
  /** Main switchboard */
  phone: "+91 70202 03304",
  address: {
    line1: "4th Floor, Novotel",
    line2: "Asset No. 2, Aerocity Hospitality District",
    city: "New Delhi",
    region: "Delhi",
    postal: "110037",
    country: "India",
  },
  /** Extended directory for contact page, footer, and footers in PDFs */
  directory: {
    emails: [
      {
        address: "info@gavion.in",
        label: "General inquiries & new business",
      },
      {
        address: "proposals@gavion.in",
        label: "RFPs, tenders & pre-bid meetings",
      },
      {
        address: "careers@gavion.in",
        label: "Careers, internships & campus hiring",
      },
      {
        address: "media@gavion.in",
        label: "Press, speaking & brand partnerships",
      },
      {
        address: "vendors@gavion.in",
        label: "Vendor registration & subcontractor onboarding",
      },
      {
        address: "ethics@gavion.in",
        label: "Ethics line (confidential)",
      },
    ] as const,
    phones: [{ number: "+91 70202 03304", label: "Main reception" }] as const,
    hours:
      "Monday–Friday, 9:30 AM – 6:00 PM IST · Saturday by appointment · Closed Sundays & national holidays",
    /** Illustrative registration numbers — replace with real CIN / GSTIN */
    registrations: {
      gstin: "07AABCG4521H1Z5",
      cin: "U45201DL2012PTC189403",
    },
  },
  /**
   * Public social / profile URLs for JSON-LD `sameAs`. Leave empty until links are live
   * (invalid URLs can dilute rich-result quality).
   */
  socialSameAs: [] as readonly string[],
} as const;

/** Primary navigation — ordered for Hick’s Law: limited top-level choices. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceIconKey =
  | "landmark"
  | "cpu"
  | "hard-hat"
  | "users"
  | "monitor"
  | "heart-pulse"
  | "hand-heart"
  | "sprout";

export const servicesPreview = [
  {
    title: "Architecture",
    description:
      "Concept-to-detail design language rooted in climate, culture, and constructibility.",
    icon: "landmark" as const,
  },
  {
    title: "Engineering",
    description:
      "Structural, civil, and MEP systems coordinated in federated models with field feedback loops.",
    icon: "cpu" as const,
  },
  {
    title: "Construction",
    description:
      "Disciplined site operations, safety culture, and transparent controls from mobilization to handover.",
    icon: "hard-hat" as const,
  },
  {
    title: "Consulting",
    description:
      "Owner’s representation, risk workshops, and procurement strategy for complex programs.",
    icon: "users" as const,
  },
] as const;
