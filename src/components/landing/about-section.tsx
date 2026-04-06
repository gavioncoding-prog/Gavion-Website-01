"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function AboutSection() {
  return (
    <section className="border-b border-border py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            About Gavion Group
          </p>
          <h2 className="font-heading mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One partner from concept to commissioning — and the digital layer beyond.
          </h2>
        </ScrollReveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.06}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Gavion Group unites architecture, engineering, construction, and technology
              under a single standard of care. We work where terrain, climate, and
              institutions intersect — especially across North-East India, delivering
              hospitals, campuses, infrastructure, and rural programs without losing sight
              of craft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-6 text-sm text-muted-foreground">
              <li className="flex gap-4 border-l-2 border-primary pl-4">
                <span className="font-medium text-foreground">Integrated delivery</span>
                — federated models, field truth, and contracts that stay readable under
                stress.
              </li>
              <li className="flex gap-4 border-l-2 border-border pl-4">
                <span className="font-medium text-foreground">Technology as infrastructure</span>
                — twins, telemetry, and cyber hygiene treated as seriously as concrete.
              </li>
              <li className="flex gap-4 border-l-2 border-border pl-4">
                <span className="font-medium text-foreground">Impact discipline</span>
                — charitable and rural programs with measurable outcomes, not vanity
                photo ops.
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
