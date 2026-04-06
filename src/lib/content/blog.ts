import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxMapping } from "@/components/mdx/mdx-mapping";
import type { BlogFrontmatter } from "@/types/content";

const DIR = path.join(process.cwd(), "content", "blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogMetaBySlug(slug: string): BlogFrontmatter | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);
  return data as BlogFrontmatter;
}

export function getAllBlogMeta(): BlogFrontmatter[] {
  return getBlogSlugs()
    .map((slug) => getBlogMetaBySlug(slug))
    .filter((m): m is BlogFrontmatter => m !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function compileBlogPost(slug: string) {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, "utf8");
  return compileMDX<BlogFrontmatter>({
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
