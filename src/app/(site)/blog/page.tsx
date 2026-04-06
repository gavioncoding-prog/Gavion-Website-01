import type { Metadata } from "next";
import Link from "next/link";

import { getAllBlogMeta } from "@/lib/content/blog";
import { canonicalPath } from "@/lib/metadata-helpers";
import { getSiteUrl } from "@/lib/site-url";

const feedUrl = `${getSiteUrl().origin}/blog/feed.xml`;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering, construction, and technology perspectives from the Gavion Group team.",
  alternates: {
    ...canonicalPath("/blog"),
    types: {
      "application/rss+xml": feedUrl,
    },
  },
  openGraph: {
    title: "Insights | Gavion Group",
    description: "Articles on infrastructure, innovation, and delivery discipline.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogMeta();

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Blog
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Insights
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          MDX-authored articles — fork the pattern for your editorial calendar.{" "}
          <a
            href="/blog/feed.xml"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            RSS feed
          </a>
        </p>
        <ul className="mt-16 space-y-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
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
                <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-sm text-muted-foreground">By {post.author}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
