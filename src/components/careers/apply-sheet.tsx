"use client";

import { useActionState, useState } from "react";

import {
  submitCareersApplication,
  type CareersApplicationState,
} from "@/actions/submit-careers-application";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

type Props = {
  jobTitle: string;
  jobId: string;
};

const careersInbox =
  site.directory.emails.find((e) => e.address.startsWith("careers@"))?.address ??
  "careers@gavion.in";

const initial: CareersApplicationState = { ok: false };

export function ApplySheet({ jobTitle, jobId }: Props) {
  const [open, setOpen] = useState(false);
  const [instance, setInstance] = useState(0);

  return (
    <>
      <Button
        type="button"
        variant="default"
        className="h-10 min-w-[7rem]"
        onClick={() => {
          setOpen(true);
          setInstance((i) => i + 1);
        }}
      >
        Apply
      </Button>
      <Sheet
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
        }}
      >
        <SheetContent side="right" className="w-[min(100%,24rem)] overflow-y-auto">
          <ApplyFormBody
            key={instance}
            jobTitle={jobTitle}
            jobId={jobId}
            onClose={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}

function ApplyFormBody({
  jobTitle,
  jobId,
  onClose,
}: Props & { onClose: () => void }) {
  const [state, formAction, isPending] = useActionState(submitCareersApplication, initial);
  const fe = state.fieldErrors;

  return (
    <>
      <SheetHeader>
        <SheetTitle className="font-heading text-left">Apply — {jobTitle}</SheetTitle>
      </SheetHeader>
      <p className="mt-2 text-xs text-muted-foreground">
        Ref: {jobId}. Questions?{" "}
        <a href={`mailto:${careersInbox}`} className="text-primary hover:underline">
          {careersInbox}
        </a>
      </p>
      {state.ok ? (
        <div className="mt-8 space-y-4" role="status">
          <p className="text-sm text-muted-foreground">
            Thank you for applying. If your profile matches this role, our team will reach out using
            the email you provided.
          </p>
          <Button type="button" variant="outline" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      ) : (
        <form action={formAction} className="relative mt-8 space-y-4">
          <input type="hidden" name="jobId" value={jobId} />
          <input type="hidden" name="jobTitle" value={jobTitle} />
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
          <div className="space-y-2">
            <Label htmlFor={`name-${jobId}`}>Full name</Label>
            <Input
              id={`name-${jobId}`}
              name="name"
              required
              className="h-10"
              aria-invalid={Boolean(fe?.name)}
            />
            {fe?.name ? <p className="text-xs text-destructive">{fe.name}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`email-${jobId}`}>Email</Label>
            <Input
              id={`email-${jobId}`}
              name="email"
              type="email"
              required
              className="h-10"
              aria-invalid={Boolean(fe?.email)}
            />
            {fe?.email ? <p className="text-xs text-destructive">{fe.email}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`phone-${jobId}`}>Phone</Label>
            <Input id={`phone-${jobId}`} name="phone" type="tel" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`note-${jobId}`}>Cover note</Label>
            <Textarea id={`note-${jobId}`} name="note" rows={4} className="min-h-24" />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting…" : "Submit application"}
          </Button>
        </form>
      )}
    </>
  );
}
