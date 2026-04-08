/**
 * Canonical site URL for metadata and OG tags.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.gavion.in).
 */
export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  try {
    return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

/** Turn `/blog/x.png` or `https://...` into an absolute URL for Open Graph / JSON-LD. */
export function toAbsoluteUrl(href: string): string {
  const trimmed = href.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return new URL(path, getSiteUrl()).href;
}
