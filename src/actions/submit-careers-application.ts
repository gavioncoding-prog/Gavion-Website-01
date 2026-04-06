"use server";

import { Resend } from "resend";
import { z } from "zod";

import { site } from "@/data/site";

const careersInbox =
  site.directory.emails.find((e) => e.address.startsWith("careers@"))?.address ??
  "careers@gavion.in";

const schema = z.object({
  jobId: z.string().trim().min(1).max(80),
  jobTitle: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(254),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v ? v : undefined)),
  note: z
    .string()
    .trim()
    .max(8000)
    .optional()
    .transform((v) => (v ? v : undefined)),
});

export type CareersApplicationState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

function buildBody(data: z.infer<typeof schema>): string {
  const lines = [
    `Role: ${data.jobTitle}`,
    `Ref: ${data.jobId}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    "",
    data.note ?? "(no cover note)",
  ];
  return lines.filter(Boolean).join("\n");
}

export async function submitCareersApplication(
  _prev: CareersApplicationState,
  formData: FormData,
): Promise<CareersApplicationState> {
  const honeypot = formData.get("company_website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  const phoneRaw = formData.get("phone");
  const noteRaw = formData.get("note");
  const parsed = schema.safeParse({
    jobId: formData.get("jobId"),
    jobTitle: formData.get("jobTitle"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: typeof phoneRaw === "string" ? phoneRaw : undefined,
    note: typeof noteRaw === "string" ? noteRaw : undefined,
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "_form");
      fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Please fix the fields below.", fieldErrors };
  }

  const data = parsed.data;
  const to = process.env.CAREERS_TO_EMAIL ?? careersInbox;
  const key = process.env.RESEND_API_KEY;

  if (key) {
    const resend = new Resend(key);
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Gavion Careers <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `[Gavion Careers] Application: ${data.jobTitle} (${data.jobId})`,
      text: buildBody(data),
    });
    if (error) {
      console.error("Resend careers error", error);
      return {
        ok: false,
        error: "We could not submit your application. Please email your CV instead.",
      };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[careers] RESEND_API_KEY not set — would send to", to, buildBody(data));
  } else {
    return {
      ok: false,
      error: `Applications by email are not configured yet. Please write to ${to}.`,
    };
  }

  return { ok: true };
}
