"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/data/site";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-16 text-primary-foreground sm:px-14 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_30%,white,transparent_45%),radial-gradient(circle_at_80%_70%,oklch(0.7_0.15_250),transparent_40%)]"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to engineer what is next?
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Share your brief — hospital, campus, infrastructure, or digital program. We will
              respond with a clear path to the next milestone.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-11 min-w-[140px] border-0 bg-background text-foreground hover:bg-background/90"
                )}
              >
                Contact us
              </Link>
              <a
                href={`mailto:${site.email}?subject=Project%20inquiry`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 min-w-[140px] border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
