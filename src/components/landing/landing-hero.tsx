"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { LandingPathBackground } from "@/components/ui/background-paths";
import { buttonVariants } from "@/lib/button-variants";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const easeOut = [0.22, 1, 0.36, 1] as const;

export function LandingHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 100]);
  const pathY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.38, 0.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 32]);

  const showMotion = !reduce;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(92vh,920px)] flex-col justify-center overflow-hidden border-b border-border"
    >
      <motion.div style={{ y: pathY }} className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
        <LandingPathBackground />
      </motion.div>

      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-muted/45 via-background/95 to-background dark:from-muted/25 dark:via-background/90" />
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.08_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.08_255/0.05)_1px,transparent_1px)] [background-size:48px_48px] dark:bg-[linear-gradient(to_right,oklch(0.85_0.02_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.85_0.02_255/0.04)_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,oklch(0.55_0.12_250/0.12),transparent_65%)] dark:bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,oklch(0.65_0.11_250/0.18),transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-28"
      >
        <motion.div
          initial={showMotion ? "hidden" : undefined}
          animate={showMotion ? "show" : undefined}
          variants={
            showMotion
              ? {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
                  },
                }
              : undefined
          }
        >
          <motion.div
            variants={
              showMotion
                ? {
                    hidden: { opacity: 0, y: 28 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.72, ease: easeOut },
                    },
                  }
                : undefined
            }
          >
            <h1 className="font-heading max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05]">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/85 bg-clip-text text-transparent">
                Engineering the Future.
              </span>
              <span className="mt-1 block bg-gradient-to-br from-muted-foreground via-muted-foreground to-muted-foreground/75 bg-clip-text text-transparent sm:mt-0">
                Building with Precision.
              </span>
            </h1>
            <motion.div
              initial={showMotion ? { scaleX: 0 } : { scaleX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, delay: 0.35, ease: easeOut }}
              className="mt-6 h-px max-w-[min(100%,20rem)] origin-left bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.p
            variants={
              showMotion
                ? {
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.65, ease: easeOut },
                    },
                  }
                : undefined
            }
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={
              showMotion
                ? {
                    hidden: { opacity: 0, y: 18 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.62, ease: easeOut },
                    },
                  }
                : undefined
            }
            className="mt-12 flex flex-wrap gap-3"
          >
            <MotionLink
              href="/projects"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 min-w-[140px] px-6 shadow-md shadow-primary/15"
              )}
            >
              View projects
            </MotionLink>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 min-w-[140px] border-border/80 bg-background/40 px-6 backdrop-blur-sm"
              )}
            >
              Contact us
            </MotionLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
