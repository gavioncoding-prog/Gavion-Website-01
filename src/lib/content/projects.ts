import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxMapping } from "@/components/mdx/mdx-mapping";
import type { ProjectFrontmatter } from "@/types/content";

const DIR = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjectMetaBySlug(slug: string): ProjectFrontmatter | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);
  return data as ProjectFrontmatter;
}

export function getAllProjectsMeta(): ProjectFrontmatter[] {
  return getProjectSlugs()
    .map((slug) => getProjectMetaBySlug(slug))
    .filter((m): m is ProjectFrontmatter => m !== null)
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export async function compileProject(slug: string) {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, "utf8");
  return compileMDX<ProjectFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: mdxMapping,
  });
}
