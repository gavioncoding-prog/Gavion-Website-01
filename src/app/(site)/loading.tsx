export default function SiteLoading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 py-24">
      <div
        className="size-10 animate-spin rounded-full border-2 border-muted border-t-primary"
        role="status"
        aria-label="Loading"
      />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
