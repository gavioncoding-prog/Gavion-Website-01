import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesFull } from "@/data/services-detail";
import { canonicalPath } from "@/lib/metadata-helpers";
import {
  Cpu,
  HandHeart,
  HardHat,
  HeartPulse,
  Landmark,
  Monitor,
  Sprout,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, engineering, construction, consulting, IT, healthcare solutions, charitable programs, and agriculture & rural development.",
  alternates: canonicalPath("/services"),
  openGraph: {
    title: "Services | Gavion Group",
    description: "Eight integrated practices — progressive disclosure for depth.",
  },
};

const icons = {
  landmark: Landmark,
  cpu: Cpu,
  "hard-hat": HardHat,
  users: Users,
  monitor: Monitor,
  "heart-pulse": HeartPulse,
  "hand-heart": HandHeart,
  sprout: Sprout,
} as const;

export default function ServicesPage() {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Services
        </p>
        <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          What we do
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Start with the headline — expand only what you need. Built for Hick’s Law and busy
          executives.
        </p>

        <Accordion defaultValue={[]} multiple={false} className="mt-16 w-full space-y-3">
          {servicesFull.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <AccordionItem
                key={s.title}
                value={`svc-${i}`}
                className="rounded-2xl border border-border/80 bg-card px-2 shadow-sm"
              >
                <AccordionTrigger className="px-4 py-5 text-left hover:no-underline">
                  <span className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="font-heading block text-lg font-semibold">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-sm font-normal text-muted-foreground">
                        {s.summary}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pl-[4.25rem]">
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
