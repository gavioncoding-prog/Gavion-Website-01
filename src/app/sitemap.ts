import fs from "node:fs";
import path from "node:path";

import type { MetadataRoute } from "next";

import { getBlogSlugs } from "@/lib/content/blog";
import { getProjectSlugs } from "@/lib/content/projects";
import { getSiteUrl } from "@/lib/site-url";

function lastModified(segments: string[], fallback: Date): Date {
  try {
    return fs.statSync(path.join(process.cwd(), ...segments)).mtime;
  } catch {
    return fallback;
  }
}

const STATIC_PATHS: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
  mtimeSegments: string[];
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1, mtimeSegments: ["src", "app", "(site)", "page.tsx"] },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
    mtimeSegments: ["src", "app", "(site)", "services", "page.tsx"],
  },
  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.95,
    mtimeSegments: ["src", "app", "(site)", "projects", "page.tsx"],
  },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85, mtimeSegments: ["src", "app", "(site)", "blog", "page.tsx"] },
  {
    path: "/careers",
    changeFrequency: "weekly",
    priority: 0.8,
    mtimeSegments: ["src", "app", "(site)", "careers", "page.tsx"],
  },
  {
    path: "/leadership",
    changeFrequency: "monthly",
    priority: 0.75,
    mtimeSegments: ["src", "app", "(site)", "leadership", "page.tsx"],
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.9,
    mtimeSegments: ["src", "app", "(site)", "contact", "page.tsx"],
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const fallback = new Date();

  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, changeFrequency, priority, mtimeSegments }) => ({
    url: `${base}${path}`,
    lastModified: lastModified(mtimeSegments, fallback),
    changeFrequency,
    priority,
  }));

  for (const slug of getProjectSlugs()) {
    entries.push({
      url: `${base}/projects/${slug}`,
      lastModified: lastModified(["content", "projects", `${slug}.mdx`], fallback),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getBlogSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: lastModified(["content", "blog", `${slug}.mdx`], fallback),
      changeFrequency: "weekly",
      priority: 0.65,
    });
  }

  return entries;
}
