import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/data/site";
import { buttonVariants } from "@/lib/button-variants";
import { canonicalPath } from "@/lib/metadata-helpers";
import { cn } from "@/lib/utils";

const MAP_EMBED =
  "https://maps.google.com/maps?q=Novotel+New+Delhi+Aerocity&output=embed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Gavion Group at Novotel Aerocity, New Delhi — info@gavion.in, proposals, careers, media, and more.",
  alternates: canonicalPath("/contact"),
  openGraph: {
    title: "Contact | Gavion Group",
    description: "Phones, emails, hours, and map — Aerocity, New Delhi.",
  },
};

export default function ContactPage() {
  const { directory } = site;

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Contact
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let’s build what’s next
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Share scope, geography, and timing — we respond with a clear next step, not a generic
          brochure. Sample routing below; adjust aliases before go-live.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <aside className="space-y-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Registered office
              </h2>
              <address className="mt-3 not-italic text-sm leading-relaxed text-foreground">
                {site.legalName}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
                <br />
                {site.address.country}
              </address>
              <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-foreground">GSTIN</dt>
                  <dd>{directory.registrations.gstin}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-foreground">CIN</dt>
                  <dd>{directory.registrations.cin}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone
              </h2>
              <ul className="mt-3 space-y-3 text-sm">
                {directory.phones.map((p) => (
                  <li key={p.number} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                    <a
                      href={`tel:${p.number.replace(/\s/g, "")}`}
                      className="font-medium text-foreground hover:underline"
                    >
                      {p.number}
                    </a>
                    <span className="text-muted-foreground">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </h2>
              <ul className="mt-3 space-y-3 text-sm">
                {directory.emails.map((e) => (
                  <li key={e.address}>
                    <a href={`mailto:${e.address}`} className="font-medium hover:underline">
                      {e.address}
                    </a>
                    <p className="text-xs text-muted-foreground">{e.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Hours
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{directory.hours}</p>
            </div>

            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline" }), "inline-flex h-10 w-fit")}
            >
              View projects
            </Link>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Gavion Group office location — Novotel Aerocity"
                src={MAP_EMBED}
                className="aspect-[4/3] w-full grayscale contrast-[1.05] transition-all hover:grayscale-0 dark:opacity-90 dark:hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
