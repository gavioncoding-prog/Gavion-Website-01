import Link from "next/link";

import { site } from "@/data/site";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "RSS", href: "/blog/feed.xml" },
  { label: "Careers", href: "/careers" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const quickEmails = site.directory.emails.slice(0, 4);

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-semibold">{site.legalName}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{site.tagline}</p>
            <address className="mt-6 not-italic text-sm text-muted-foreground">
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </address>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Sitemap
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-foreground hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Reach us
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium hover:underline">
                  {site.phone}
                </a>
                <p className="text-xs text-muted-foreground">Main reception</p>
              </li>
              {quickEmails.map((e) => (
                <li key={e.address}>
                  <a href={`mailto:${e.address}`} className="hover:underline">
                    {e.address}
                  </a>
                  <p className="text-xs text-muted-foreground">{e.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. Sample GSTIN / CIN shown for layout only.
        </p>
      </div>
    </footer>
  );
}
