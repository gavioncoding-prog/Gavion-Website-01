import type { Metadata } from "next";

import { ApplySheet } from "@/components/careers/apply-sheet";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { culturePillars, openings } from "@/data/careers";
import { site } from "@/data/site";
import { canonicalPath } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Gavion Group — project managers, field engineers, finance, and technology roles across India.",
  alternates: canonicalPath("/careers"),
  openGraph: {
    title: "Careers | Gavion Group",
    description: "We are hiring across operations, engineering, accounts, and IT.",
  },
};

export default function CareersPage() {
  const careersEmail = site.directory.emails.find((e) =>
    e.address.startsWith("careers@")
  )?.address;

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Careers
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          We are hiring
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Bring rigor, curiosity, and respect for the field. We build things that outlast election
          cycles and quarterly decks.
        </p>
        {careersEmail ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer email over forms? Send your CV and a short note to{" "}
            <a href={`mailto:${careersEmail}`} className="font-medium text-primary hover:underline">
              {careersEmail}
            </a>{" "}
            — reference the role title in the subject line.
          </p>
        ) : null}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {openings.map((job) => (
            <article
              key={job.id}
              className="flex flex-col rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>{job.team}</span>
                <span aria-hidden>·</span>
                <span>{job.location}</span>
                <span aria-hidden>·</span>
                <span>{job.type}</span>
              </div>
              <h2 className="font-heading mt-4 text-xl font-semibold">{job.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{job.summary}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ApplySheet jobTitle={job.title} jobId={job.id} />
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24 border-t border-border pt-20">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Culture
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              How we work when nobody is giving a speech.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {culturePillars.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border/60 bg-muted/30 p-8">
                  <h3 className="font-heading text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
