import { Resend } from "resend";
import type { ContactInput } from "./contact.functions";

export async function deliverContactMessage(data: ContactInput) {
  console.log("[contact] deliverContactMessage() called");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is missing");
    throw new Error("RESEND_API_KEY is missing");
  }

  console.log("[contact] RESEND_API_KEY found");

  const resend = new Resend(apiKey);

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["margabedada@gmail.com"],
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Message</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>

          <hr />

          <h3>Message</h3>

          <p>
            ${data.message.replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend ERROR:", error);
      throw new Error(error.message);
    }

    console.log("[contact] Email sent successfully!");
    console.log("[contact] Email ID:", emailData?.id);

    return {
      ok: true as const,
      messageId: emailData?.id,
    };
  } catch (error) {
    console.error("[contact] Email sending failed:", error);

    throw error;
  }
}