"use client";

import { useActionState, useState } from "react";

import { submitContact, type ContactFormState } from "@/actions/submit-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

const proposalsInbox =
  site.directory.emails.find((e) => e.address.startsWith("proposals@"))?.address ??
  "proposals@gavion.in";

const initial: ContactFormState = { ok: false };

export function ContactForm() {
  const [resetKey, setResetKey] = useState(0);
  return <ContactFormInner key={resetKey} onSendAnother={() => setResetKey((k) => k + 1)} />;
}

function ContactFormInner({ onSendAnother }: { onSendAnother: () => void }) {
  const [state, formAction, isPending] = useActionState(submitContact, initial);
  const fe = state.fieldErrors;

  if (state.ok) {
    return (
      <div
        className="rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-sm"
        role="status"
      >
        <p className="font-heading text-lg font-semibold">Thanks — we received your message.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We typically acknowledge within one business day. You can also reach{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>{" "}
          directly.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={onSendAnother}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="relative space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      />
      {state.error ? (
        <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {state.error}
        </p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Priya Sharma"
            className="h-10"
            aria-invalid={Boolean(fe?.name)}
          />
          {fe?.name ? <p className="text-xs text-destructive">{fe.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="priya.sharma@hillsinfra.co.in"
            className="h-10"
            aria-invalid={Boolean(fe?.email)}
          />
          {fe?.email ? <p className="text-xs text-destructive">{fe.email}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-org">Organization</Label>
        <Input
          id="contact-org"
          name="organization"
          autoComplete="organization"
          placeholder="e.g. Assam Urban Development Agency / Acme Developers Pvt. Ltd."
          className="h-10"
          aria-invalid={Boolean(fe?.organization)}
        />
        {fe?.organization ? <p className="text-xs text-destructive">{fe.organization}</p> : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Project summary</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="250-bed district hospital, Itanagar — RFP due March 2026. Seeking design-build partner with NE India experience."
          className="min-h-32"
          aria-invalid={Boolean(fe?.message)}
        />
        {fe?.message ? <p className="text-xs text-destructive">{fe.message}</p> : null}
      </div>
      <p className="text-xs text-muted-foreground">
        Prefer email? Write directly to{" "}
        <a href={`mailto:${site.email}`} className="text-primary hover:underline">
          {site.email}
        </a>{" "}
        or tenders to{" "}
        <a href={`mailto:${proposalsInbox}`} className="text-primary hover:underline">
          {proposalsInbox}
        </a>
        .
      </p>
      <Button type="submit" className="h-10 w-full sm:w-auto" disabled={isPending}>
        {isPending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}
