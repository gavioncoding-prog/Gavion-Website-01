import { site } from "@/data/site";
import { getAllBlogMeta } from "@/lib/content/blog";
import { getSiteUrl } from "@/lib/site-url";
import { escapeXml } from "@/lib/xml";

export async function GET() {
  const base = getSiteUrl().origin;
  const blogUrl = `${base}/blog`;
  const feedUrl = `${base}/blog/feed.xml`;
  const posts = getAllBlogMeta();

  const items = posts
    .map((post) => {
      const link = `${base}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <author>${escapeXml(post.author)}</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} — Insights`)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <description>${escapeXml(site.tagline)}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
