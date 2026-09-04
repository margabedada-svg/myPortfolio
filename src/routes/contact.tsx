import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader, Section } from "@/components/site/Section";
import {
  contactSchema,
  sendContactMessage,
} from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Me" },
      {
        name: "description",
        content:
          "Start a conversation about your next project. Share a few details and I'll reply within two business days.",
      },
      { property: "og:title", content: "Contact — Aurelia Studio" },
      {
        property: "og:description",
        content: "Start a conversation about your next project.",
      },
    ],
  }),
  component: Contact,
});

const empty = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const send = useServerFn(sendContactMessage);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  const update =
    (k: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      const next: Record<string, string> = {};

      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }

      setErrors(next);
      return;
    }

    setErrors({});
    setPending(true);

    try {
      await send({ data: parsed.data });

      toast.success("Message sent — I'll be in touch shortly.");

      setForm(empty);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const field =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's begin"
        intro="Tell me about the project, the timeline and what success looks like. I read every message personally."
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-8">
            {[
              {
                Icon: Mail,
                k: "Email",
                v: "margabedada@gmail.com",
              },
              {
                Icon: Phone,
                k: "Phone",
                v: "+251 979 232 380",
              },
              {
                Icon: MapPin,
                k: "Location",
                v: "Ambo · Ethiopia",
              },
              {
                Icon: Clock,
                k: "Response",
                v: "Typically within two business days",
              },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="flex gap-4">
                <Icon
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-primary">
                    {k}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {v}
                  </p>
                </div>
              </div>
            ))}

            <div className="hairline" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              Prefer a call? Include your availability and I'll send an
              invitation.
            </p>
          </aside>

          <form
            onSubmit={onSubmit}
            className="luxe-card space-y-6 p-8 sm:p-10"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow block">
                  Name
                </label>

                <input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  className={`${field} mt-3`}
                  placeholder="Your name"
                  maxLength={100}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="eyebrow block">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className={`${field} mt-3`}
                  placeholder="you@company.com"
                  maxLength={255}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="eyebrow block">
                Subject
              </label>

              <input
                id="subject"
                value={form.subject}
                onChange={update("subject")}
                className={`${field} mt-3`}
                placeholder="New brand site, product work…"
                maxLength={150}
              />

              {errors.subject && (
                <p className="mt-2 text-xs text-destructive">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="eyebrow block">
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={update("message")}
                className={`${field} mt-3 resize-none`}
                placeholder="A few lines about the project…"
                maxLength={2000}
              />

              {errors.message && (
                <p className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-primary px-8 py-3.5 text-xs tracking-[0.25em] uppercase text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {pending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}