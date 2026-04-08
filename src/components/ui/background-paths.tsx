"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";

const PATH_COUNT = 36;

function buildPaths(position: number) {
  return Array.from({ length: PATH_COUNT }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.45 + i * 0.028,
  }));
}

type FloatingPathsProps = { position: number; gradientId: string };

function FloatingPaths({ position, gradientId }: FloatingPathsProps) {
  const reduce = useReducedMotion();
  const paths = buildPaths(position);
  const baseDuration = 22 + (position === 1 ? 0 : 5);

  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 696 316"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <title>Background paths</title>
          <defs>
            <linearGradient id={`${gradientId}-static`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="[stop-color:oklch(0.42_0.09_255)]" stopOpacity={0.12} />
              <stop offset="55%" className="[stop-color:oklch(0.5_0.1_250)]" stopOpacity={0.2} />
              <stop offset="100%" className="[stop-color:oklch(0.55_0.08_240)]" stopOpacity={0.14} />
            </linearGradient>
          </defs>
          {paths.map((path) => (
            <path
              key={path.id}
              d={path.d}
              stroke={`url(#${gradientId}-static)`}
              strokeWidth={path.width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full drop-shadow-[0_0_1px_rgba(255,255,255,0.08)] dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.06)]"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <title>Background paths</title>
        <defs>
          <linearGradient id={`${gradientId}-a`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" className="[stop-color:oklch(0.38_0.08_255)]" stopOpacity={0.35} />
            <stop offset="45%" className="[stop-color:oklch(0.5_0.12_250)]" stopOpacity={0.55} />
            <stop offset="100%" className="[stop-color:oklch(0.62_0.1_230)]" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id={`${gradientId}-b`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="[stop-color:oklch(0.45_0.06_255)]" stopOpacity={0.2} />
            <stop offset="100%" className="[stop-color:oklch(0.72_0.12_250)]" stopOpacity={0.45} />
          </linearGradient>
        </defs>
        {paths.map((path) => {
          const stagger = path.id * 0.12;
          const duration = baseDuration + (path.id % 9);
          const useB = path.id % 2 === 0;
          return (
            <motion.path
              key={path.id}
              d={path.d}
              stroke={useB ? `url(#${gradientId}-b)` : `url(#${gradientId}-a)`}
              strokeWidth={path.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.12, 0.42, 0.28, 0.12],
                pathOffset: [0, 0.85, 0],
              }}
              transition={{
                pathLength: { duration: 2.4, delay: stagger * 0.04, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: stagger * 0.02 },
                pathOffset: { duration: duration * 1.2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: stagger },
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/** Soft vignette + ambient orbs behind paths for depth (theme-aware). */
function HeroAmbientWash() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -left-[20%] top-[-30%] h-[70%] w-[70%] rounded-full bg-primary/[0.07] blur-[100px] dark:bg-primary/[0.12]" />
      <div className="absolute -right-[15%] bottom-[-20%] h-[55%] w-[55%] rounded-full bg-[oklch(0.65_0.14_250)]/[0.06] blur-[90px] dark:bg-[oklch(0.72_0.1_250)]/[0.1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,oklch(0.99_0.01_250)_100%)] opacity-50 dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_35%,oklch(0.12_0.02_260)_100%)] dark:opacity-70" />
    </div>
  );
}

/** Curved line backdrop — mirrored layers, gradients, ambient wash. */
export function LandingPathBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <HeroAmbientWash />
      <motion.div
        className="absolute inset-0 scale-[1.35] sm:scale-[1.2]"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <FloatingPaths position={1} gradientId="hero-paths-a" />
        <FloatingPaths position={-1} gradientId="hero-paths-b" />
      </motion.div>
      {/* Subtle grain — improves banding on large gradients */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} gradientId="demo-paths-a" />
        <FloatingPaths position={-1} gradientId="demo-paths-b" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-neutral-900 to-neutral-700/80 bg-clip-text text-transparent dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-black/10 to-white/10 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:from-white/10 dark:to-black/10">
            <Button
              variant="ghost"
              className="rounded-[1.15rem] border border-black/10 bg-white/95 px-8 py-6 text-lg font-semibold text-black backdrop-blur-md transition-all duration-300 hover:bg-white/100 hover:shadow-md group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/95 dark:text-white dark:hover:bg-black/100 dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 transition-opacity group-hover:opacity-100">Discover Excellence</span>
              <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
