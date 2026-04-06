/**
 * Canonical site URL for metadata and OG tags.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://gavion.example).
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
