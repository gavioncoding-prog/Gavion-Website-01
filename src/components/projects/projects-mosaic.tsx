"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  projectCategoryLabels,
  type ProjectCategory,
  type ProjectFrontmatter,
} from "@/types/content";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "healthcare", label: "Healthcare" },
  { id: "residential", label: "Residential" },
  { id: "hospitality", label: "Hospitality" },
  { id: "commercial", label: "Commercial" },
  { id: "education", label: "Education" },
  { id: "agriculture", label: "Agriculture" },
  { id: "horticulture", label: "Horticulture" },
];

export function ProjectsMosaic({ projects }: { projects: ProjectFrontmatter[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => {
          const isOn = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={isOn}
              onClick={() => setActive(f.id)}
              className={cn(
                "min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                isOn
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border/80 bg-card text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {projectCategoryLabels[p.category]}
                </Badge>
                <h2 className="font-heading mt-3 text-lg font-semibold group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.location} · {p.year}
                </p>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Case study →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
