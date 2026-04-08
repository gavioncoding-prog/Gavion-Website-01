import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { getAllProjectsMeta } from "@/lib/content/projects";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { projectCategoryLabels } from "@/types/content";

export async function FeaturedProjectsSection() {
  const all = getAllProjectsMeta();
  const featured = all.slice(0, 3);

  return (
    <section className="border-b border-border py-24 sm:py-32" id="work">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Featured work
            </p>
            <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for North-East India — engineered for the long arc.
            </h2>
          </div>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 w-fit shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Full portfolio
          </Link>
        </div>
        <ScrollReveal className="mt-14">
          <ul className="grid gap-8 lg:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      unoptimized={!p.image.startsWith("http")}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                      {projectCategoryLabels[p.category]}
                    </Badge>
                    <h3 className="font-heading mt-3 text-lg font-semibold group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary">
                      View case study →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
