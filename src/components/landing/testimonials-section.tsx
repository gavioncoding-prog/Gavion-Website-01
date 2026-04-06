"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const items = [
  {
    quote:
      "Gavion did not just build our expansion — they taught our team how to read risk in real time. That is rare.",
    name: "Dr. R. Lyngdoh",
    role: "Medical Superintendent",
    org: "Northeast Regional Health Mission",
    location: "Shillong, Meghalaya",
    email: "r.lyngdoh@nrhm-meghalaya.sample.gov.in",
  },
  {
    quote:
      "Their digital twin deliverable became our facilities bible. Maintenance finally trusts the model.",
    name: "Kunal Das",
    role: "VP — Asset Operations",
    org: "Diphlu River Hospitality Pvt. Ltd.",
    location: "Kaziranga, Assam",
    email: "kunal.das@diphluhospitality.sample.in",
  },
  {
    quote:
      "On a hillside site, clarity is currency. Gavion spent it wisely — every pour had a reason.",
    name: "Mitali Deb",
    role: "Project Director",
    org: "Brahmaputra Corridor Infra Ltd.",
    location: "Guwahati, Assam",
    email: "mitali.deb@bcinfra.sample.in",
  },
];

export function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted where stakes are highest.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Sample client personas and contact details for layout only — not affiliated endorsements.
          </p>
        </ScrollReveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.email}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex h-full flex-col rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <cite className="not-italic font-heading text-base font-semibold text-foreground">
                  {t.name}
                </cite>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.role}, {t.org}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.location}</p>
                <a
                  href={`mailto:${t.email}`}
                  className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
                >
                  {t.email}
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
