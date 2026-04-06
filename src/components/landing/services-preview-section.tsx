"use client";

import Link from "next/link";
import {
  Cpu,
  HardHat,
  Landmark,
  Users,
} from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { servicesPreview } from "@/data/site";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const icons = {
  landmark: Landmark,
  cpu: Cpu,
  "hard-hat": HardHat,
  users: Users,
} as const;

export function ServicesPreviewSection() {
  return (
    <section className="border-b border-border bg-muted/25 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Services
            </p>
            <h2 className="font-heading mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Capabilities that compound.
            </h2>
          </div>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 w-fit shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Explore all services
          </Link>
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {servicesPreview.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-heading mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
