export type ProjectCategory =
  | "healthcare"
  | "residential"
  | "hospitality"
  | "commercial"
  | "education"
  | "agriculture"
  | "horticulture";

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  impact: string;
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  readingMinutes: number;
  coverImage?: string;
  coverAlt?: string;
  /** Shown under the hero image, e.g. photo credit */
  coverCredit?: string;
  /** Topic chips on listing and article */
  tags?: string[];
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  healthcare: "Healthcare",
  residential: "Residential",
  hospitality: "Hospitality",
  commercial: "Commercial",
  education: "Education & skills",
  agriculture: "Agriculture",
  horticulture: "Horticulture",
};
