"use client";

import { useEffect } from "react";
import Link from "next/link";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[site error]", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Error
      </p>
      <h1 className="font-heading mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        This section could not be rendered. You can retry or return to the home page.
      </p>
      {process.env.NODE_ENV === "development" ? (
        <pre className="mt-6 max-w-lg overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-left text-xs text-destructive">
          {error.message}
        </pre>
      ) : null}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className={cn(buttonVariants({ variant: "default" }), "h-10 px-6")}
        >
          Try again
        </button>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "h-10 px-6")}>
          Back home
        </Link>
      </div>
    </div>
  );
}
