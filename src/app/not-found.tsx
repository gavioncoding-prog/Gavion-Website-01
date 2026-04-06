import Link from "next/link";

import { buttonVariants } from "@/lib/button-variants";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-mono text-sm font-medium text-muted-foreground">404</p>
      <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Gavion Group</p>
      <p className="mt-4 max-w-md text-muted-foreground">
        That route does not exist or has moved. Head back to the main site to continue.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default" }), "mt-8 h-10 px-6")}
      >
        Return home
      </Link>
    </div>
      </main>
      <SiteFooter />
    </>
  );
}
