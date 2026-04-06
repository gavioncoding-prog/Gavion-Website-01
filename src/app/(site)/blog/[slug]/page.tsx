import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  compileBlogPost,
  getBlogSlugs,
} from "@/lib/content/blog";
import { getSiteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await compileBlogPost(slug);
  if (!result) return { title: "Article" };
  const { frontmatter } = result;
  const url = new URL(`/blog/${slug}`, getSiteUrl());
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    alternates: { canonical: url.href },
    openGraph: {
      title: `${frontmatter.title} | Gavion Group`,
      description: frontmatter.excerpt,
      url: url.href,
      type: "article",
      publishedTime: frontmatter.date,
      ...(frontmatter.coverImage && {
        images: [{ url: frontmatter.coverImage, alt: frontmatter.coverAlt ?? "" }],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = await compileBlogPost(slug);
  if (!result) notFound();

  const { content, frontmatter: post } = result;

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All insights
        </Link>
        <header className="mt-8">
          <time
            dateTime={post.date}
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readingMinutes} min read
          </time>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
          <p className="mt-4 text-sm text-muted-foreground">By {post.author}</p>
        </header>
        {post.coverImage ? (
          <div className="relative mt-12 aspect-[2/1] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={post.coverImage}
              alt={post.coverAlt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        ) : null}
        <div className="prose prose-neutral mt-14 max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-primary">
          {content}
        </div>
      </div>
    </article>
  );
}
