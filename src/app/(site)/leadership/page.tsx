import type { Metadata } from "next";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { directorNotes, leaders } from "@/data/leadership";
import { canonicalPath } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Executive team and directors at Gavion Group — engineering, construction, and technology leadership.",
  alternates: canonicalPath("/leadership"),
  openGraph: {
    title: "Leadership | Gavion Group",
    description: "Meet the team guiding delivery and innovation.",
  },
};

export default function LeadershipPage() {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Leadership
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          People behind the work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The leadership guiding Gavion across design, manufacturing insight, planning, and
          delivery.
        </p>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person, i) => (
            <li key={person.name}>
              <ScrollReveal delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-semibold text-primary">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h2 className="font-heading mt-6 text-xl font-semibold">{person.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
                  {person.email || person.phone ? (
                    <div className="mt-4 space-y-2 text-sm">
                      {person.email ? (
                        <a
                          href={`mailto:${person.email}`}
                          className="block font-medium text-primary hover:underline"
                        >
                          {person.email}
                        </a>
                      ) : null}
                      {person.phone ? (
                        <a
                          href={`tel:${person.phone.replace(/\s/g, "")}`}
                          className="block text-muted-foreground hover:underline"
                        >
                          {person.phone}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {person.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <section className="mt-24 border-t border-border pt-20">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Notes from directors
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Short signals — not press releases.
            </p>
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {directorNotes.map((n, i) => (
              <ScrollReveal key={n.attribution} delay={i * 0.08}>
                <blockquote className="rounded-2xl border border-border/60 bg-muted/25 p-8">
                  <p className="text-base leading-relaxed text-foreground">“{n.quote}”</p>
                  <footer className="mt-6 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
                    <span className="font-medium text-foreground">— {n.attribution}</span>
                    {n.email ? (
                      <a href={`mailto:${n.email}`} className="text-primary hover:underline">
                        {n.email}
                      </a>
                    ) : null}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
