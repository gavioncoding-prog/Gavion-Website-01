"use server";

import { Resend } from "resend";
import { z } from "zod";

import { site } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(254),
  organization: z
    .string()
    .trim()
    .max(200)
    .optional()
    .transform((v) => (v ? v : undefined)),
  message: z.string().trim().min(10, "Please add a bit more detail (10+ characters)").max(10000),
});

export type ContactFormState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

function buildBody(data: z.infer<typeof schema>): string {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organization ? `Organization: ${data.organization}` : null,
    "",
    data.message,
  ];
  return lines.filter(Boolean).join("\n");
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("company_website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  const orgRaw = formData.get("organization");
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    organization: typeof orgRaw === "string" ? orgRaw : undefined,
    message: formData.get("message"),
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
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const key = process.env.RESEND_API_KEY;

  if (key) {
    const resend = new Resend(key);
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Gavion Website <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `[Gavion] Inquiry from ${data.name}`,
      text: buildBody(data),
    });
    if (error) {
      console.error("Resend contact error", error);
      return {
        ok: false,
        error: "We could not send your message. Please try again or email us directly.",
      };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact] RESEND_API_KEY not set — would send to", to, buildBody(data));
  } else {
    return {
      ok: false,
      error: `Submissions are not configured yet. Please write to ${to}.`,
    };
  }

  return { ok: true };
}
