"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { buttonVariants } from "@/lib/button-variants";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function LandingHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.15]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(92vh,920px)] flex-col justify-center overflow-hidden border-b border-border"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background dark:from-muted/20" />
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.08_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.08_255/0.08)_1px,transparent_1px)] [background-size:48px_48px] dark:bg-[linear-gradient(to_right,oklch(0.85_0.02_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.85_0.02_255/0.06)_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,oklch(0.55_0.12_250/0.12),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,oklch(0.7_0.1_250/0.15),transparent)]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05]"
        >
          Engineering the Future.
          <span className="block text-muted-foreground">Building with Precision.</span>
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 min-w-[140px] px-6 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 min-w-[140px] border-border/80 px-6 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
