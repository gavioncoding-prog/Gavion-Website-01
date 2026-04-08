"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const items = [
  {
    quote:
      "I have known the Gavion team for many years. Their knowledge and skills in healthcare and design are exceptional.",
    name: "Dr. Pratap Chandra",
    role: "Director of Health Planning",
    org: "Government of Manipur",
    location: "Manipur, India",
  },
  {
    quote:
      "I am very happy to work with the founders of the Gavion team. All the best for your future endeavors.",
    name: "Jaiveer Singh",
    role: "Founder and Director",
    org: "Buildcon",
    location: "Delhi, India",
  },
  {
    quote:
      "We are confident and happy to see Rob and his team forming a new vertical, especially in healthcare and infrastructure. All the best — you will do great work.",
    name: "Lenny Willem",
    role: "Project Manager",
    org: "Philips",
  },
] as const;

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
            What partners and clients say about working with us.
          </p>
        </ScrollReveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
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
                {"location" in t && t.location ? (
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.location}</p>
                ) : null}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
