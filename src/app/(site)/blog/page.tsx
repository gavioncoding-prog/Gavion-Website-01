import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { getAllBlogMeta } from "@/lib/content/blog";
import { canonicalPath } from "@/lib/metadata-helpers";
import { getSiteUrl } from "@/lib/site-url";

const feedUrl = `${getSiteUrl().origin}/blog/feed.xml`;

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Infrastructure, agriculture, public health, and government programmes — with a North-East India lens. Short reads, clear sources, and room to grow.",
  alternates: {
    ...canonicalPath("/blog"),
    types: {
      "application/rss+xml": feedUrl,
    },
  },
  openGraph: {
    title: "Insights | Gavion Group",
    description:
      "Articles on connectivity, water, farming, schemes, and where the region can develop next.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogMeta();

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Blog
        </p>
        <h1 className="font-heading mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Insights
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Plain-language notes on <strong className="font-medium text-foreground">infrastructure</strong>,{" "}
          <strong className="font-medium text-foreground">agriculture</strong>, and{" "}
          <strong className="font-medium text-foreground">health-linked delivery</strong> in North-East India —
          with official scheme links, credited photos, and embedded video where it helps. Always verify eligibility
          and timelines on the portal.{" "}
          <a
            href="/blog/feed.xml"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            RSS feed
          </a>
        </p>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt ?? ""}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/15 via-muted to-muted"
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="p-6 sm:p-7">
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
                    <h2 className="font-heading mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                        {post.tags.slice(0, 4).map((tag) => (
                          <li key={tag}>
                            <Badge variant="secondary" className="text-[0.65rem] font-normal uppercase tracking-wide">
                              {tag}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="mt-5 text-sm font-medium text-primary">Read article →</p>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
