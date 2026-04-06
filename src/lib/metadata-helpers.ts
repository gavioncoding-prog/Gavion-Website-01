import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site-url";

/** Canonical URL for static routes (path starts with `/`, e.g. `/contact`). */
export function canonicalPath(path: string): Metadata["alternates"] {
  const base = getSiteUrl();
  const normalized = path === "" || path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return { canonical: new URL(normalized, base).href };
}
