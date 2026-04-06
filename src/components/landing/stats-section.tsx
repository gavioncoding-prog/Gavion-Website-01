"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects delivered", value: 50, suffix: "+", animate: false },
  { label: "North-East districts touched", value: 42, suffix: "" },
  { label: "Beds & homes in pipeline", value: 18, suffix: "k" },
  { label: "Client repeat rate", value: 84, suffix: "%" },
] as const;

function AnimatedNumber({
  value,
  suffix,
  reduceMotion,
}: {
  value: number;
  suffix: string;
  reduceMotion: boolean | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let cancelled = false;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      setN(Math.round(value * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [inView, value, reduceMotion]);

  if (reduceMotion) {
    return (
      <span ref={ref} className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
      {inView ? n : 0}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          By the numbers
        </motion.p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Scale with accountability.
        </motion.h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="rounded-2xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm"
            >
              {"animate" in s && s.animate === false ? (
                <span className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                  {s.value}
                  {s.suffix}
                </span>
              ) : (
                <AnimatedNumber value={s.value} suffix={s.suffix} reduceMotion={reduce} />
              )}
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
