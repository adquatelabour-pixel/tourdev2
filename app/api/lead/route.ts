import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail, isValidPhone, isNonEmpty, clampText, escapeHtml } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

// Reads both recipient emails from .env.local (comma-separated)
const TO_EMAILS = (process.env.LEAD_TO_EMAIL ?? "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

const FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Strict server-side validation (never trust the client alone).
    const name = clampText(body.name, 120);
    const email = clampText(body.email, 160);
    const phone = clampText(body.phone, 40);
    const message = clampText(body.message, 4000);

    if (!isNonEmpty(name) || !isValidEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid name, email and phone number." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Guwahati Tours Lead <${FROM_EMAIL}>`,
      to: TO_EMAILS, // -> ghytours@gmail.com AND contact@guwahatitours.co
      replyTo: email, // reply goes straight to the traveller
      subject: `New Booking Query from ${escapeHtml(name)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
          <h2 style="color:#0F5138">New Booking Query</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0"><b>Name:</b></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0"><b>Email:</b></td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0"><b>Phone:</b></td><td>${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:8px 0;vertical-align:top"><b>Message:</b></td>
                <td>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</td></tr>
          </table>
          <p style="color:#888;font-size:12px;margin-top:20px">
            Sent from guwahatitours.co booking form
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

/*
  ── ALTERNATIVES (no backend / no domain needed) ──────────────
  • Formspree: replace the fetch URL in LeadForm.tsx with your Formspree
    endpoint (https://formspree.io/f/xxxx) and delete this route. Add both
    emails as recipients in the Formspree dashboard.
  • EmailJS: use @emailjs/browser in LeadForm.tsx (fully client-side).
  Resend (used here) is recommended once you verify guwahatitours.co,
  since it lets you send FROM your own domain and keeps keys server-side.
*/
