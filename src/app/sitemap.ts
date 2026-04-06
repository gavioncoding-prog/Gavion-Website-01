import type { MetadataRoute } from "next";

import { getBlogSlugs } from "@/lib/content/blog";
import { getProjectSlugs } from "@/lib/content/projects";
import { getSiteUrl } from "@/lib/site-url";

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] =
  [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.95 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
    { path: "/careers", changeFrequency: "weekly", priority: 0.8 },
    { path: "/leadership", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  ];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  for (const slug of getProjectSlugs()) {
    entries.push({
      url: `${base}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getBlogSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.65,
    });
  }

  return entries;
}
