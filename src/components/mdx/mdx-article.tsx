import Image from "next/image";
import type { ReactNode } from "react";

type FigureProps = {
  src: string;
  alt: string;
  /** Attribution line, e.g. "Photo: Name / Unsplash" or "Wikimedia Commons — Author, License" */
  credit: string;
  /** Optional link to original source or license page */
  href?: string;
};

export function Figure({ src, alt, credit, href }: FigureProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-muted">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-border/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        <span>{credit}</span>
        {href ? (
          <>
            <span aria-hidden className="text-border">
              ·
            </span>
            <a href={href} className="font-medium text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              View source
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}

type YouTubeProps = {
  videoId: string;
  title?: string;
};

export function YouTube({ videoId, title = "Video" }: YouTubeProps) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
      <div className="relative aspect-video w-full bg-muted">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="border-t border-border/60 px-4 py-2 text-xs text-muted-foreground">
        Video via YouTube — playback may use Google&apos;s privacy policy.
      </p>
    </div>
  );
}

type KeyTakeawaysProps = {
  title?: string;
  children: ReactNode;
};

export function KeyTakeaways({ title = "Key takeaways", children }: KeyTakeawaysProps) {
  return (
    <aside className="my-10 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-6 dark:bg-primary/10">
      <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground [&_ul]:my-2 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-primary">
        {children}
      </div>
    </aside>
  );
}

type SchemeProps = {
  name: string;
  ministry?: string;
  url: string;
  children: ReactNode;
};

export function Scheme({ name, ministry, url, children }: SchemeProps) {
  return (
    <div className="my-6 rounded-xl border border-border bg-muted/30 px-5 py-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div>
          <p className="font-heading text-base font-semibold text-foreground">{name}</p>
          {ministry ? <p className="text-xs text-muted-foreground">{ministry}</p> : null}
        </div>
        <a
          href={url}
          className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official portal →
        </a>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{children}</p>
  );
}

export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="relative my-14 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-card to-card px-6 py-10 text-center shadow-sm sm:px-10">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <blockquote className="relative font-heading text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.65rem] md:leading-snug">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="relative mt-5 text-sm font-medium text-muted-foreground">— {attribution}</figcaption>
      ) : null}
    </figure>
  );
}

export type VideoResourceEntry = { label: string; href: string; source: string };

/** One row inside `<VideoResourceList>` — MDX-friendly (avoid array props). */
export function VideoResourceRow({ label, href, source }: VideoResourceEntry) {
  return (
    <li className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card/50 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <a
        href={href}
        className="font-medium text-primary underline-offset-4 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      <span className="text-xs text-muted-foreground sm:text-right">{source}</span>
    </li>
  );
}

export function VideoResourceList({
  title = "Video & broadcast sources",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-10 rounded-2xl border border-border/80 bg-muted/25 px-5 py-5">
      <p className="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</p>
      <ul className="mt-4 list-none space-y-3 p-0 text-sm">{children}</ul>
    </aside>
  );
}
