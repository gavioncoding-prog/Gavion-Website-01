import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { compileProject, getProjectSlugs } from "@/lib/content/projects";
import { buttonVariants } from "@/lib/button-variants";
import { getSiteUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import { projectCategoryLabels } from "@/types/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await compileProject(slug);
  if (!result) return { title: "Project" };
  const { frontmatter } = result;
  const url = new URL(`/projects/${slug}`, getSiteUrl());
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: url.href },
    openGraph: {
      title: `${frontmatter.title} | Gavion Group`,
      description: frontmatter.description,
      url: url.href,
      images: [{ url: frontmatter.image, alt: frontmatter.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const result = await compileProject(slug);
  if (!result) notFound();

  const { content, frontmatter: p } = result;

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All projects
        </Link>
        <header className="mt-8 max-w-3xl">
          <Badge variant="secondary" className="uppercase tracking-wider">
            {projectCategoryLabels[p.category]}
          </Badge>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {p.location} · {p.year}
          </p>
          <p className="mt-6 text-lg text-muted-foreground">{p.description}</p>
        </header>

        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-muted max-sm:aspect-video">
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            priority
            unoptimized={!p.image.startsWith("http")}
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="min-w-0">
            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-primary">
              {content}
            </div>
          </div>
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key features
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Impact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{p.impact}</p>
            </div>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-11 w-full justify-center"
              )}
            >
              Discuss a similar program
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
