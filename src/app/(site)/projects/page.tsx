import type { Metadata } from "next";

import { ProjectsMosaic } from "@/components/projects/projects-mosaic";
import { getAllProjectsMeta } from "@/lib/content/projects";
import { canonicalPath } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "MDX-powered case studies across healthcare, residential, hospitality, commercial, education, agriculture, and horticulture in North-East India.",
  alternates: canonicalPath("/projects"),
  openGraph: {
    title: "Projects | Gavion Group",
    description:
      "Portfolio of engineering and construction programs across North-East India.",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjectsMeta();

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Portfolio
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every case study is authored in MDX — swap copy, imagery, and metrics as your program
          evolves. Filter by sector to reduce cognitive load.
        </p>
        <div className="mt-14">
          <ProjectsMosaic projects={projects} />
        </div>
      </div>
    </div>
  );
}
