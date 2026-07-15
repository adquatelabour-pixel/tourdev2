import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail, isValidPhone, isNonEmpty, clampText, escapeHtml } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Strict server-side validation and length caps.
    const name = clampText(body.name, 120);
    const email = clampText(body.email, 160);
    const phone = clampText(body.phone, 40);
    const pkg = clampText(body.pkg, 300);
    const date = clampText(body.date, 40);
    const travellers = clampText(body.travellers, 10);
    const total = clampText(body.total, 20);
    const notes = clampText(body.notes, 4000);

    if (!isNonEmpty(name) || !isValidEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid name, email and phone number." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Guwahati Tours Booking <${FROM_EMAIL}>`,
      to: TO_EMAILS, // ghytours@gmail.com AND contact@guwahatitours.co
      replyTo: email,
      subject: `New Booking: ${escapeHtml(pkg || "Custom Package")} — ${escapeHtml(name)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
          <h2 style="color:#0F5138">New Booking Received</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0"><b>Package:</b></td><td>${escapeHtml(pkg || "—")}</td></tr>
            <tr><td style="padding:8px 0"><b>Name:</b></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0"><b>Email:</b></td><td>${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0"><b>Phone:</b></td><td>${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:8px 0"><b>Travel date:</b></td><td>${escapeHtml(date || "—")}</td></tr>
            <tr><td style="padding:8px 0"><b>Travellers:</b></td><td>${escapeHtml(travellers || "—")}</td></tr>
            <tr><td style="padding:8px 0"><b>Total:</b></td><td>${
              total && Number.isFinite(Number(total)) ? `₹${Number(total).toLocaleString("en-IN")}` : "—"
            }</td></tr>
            <tr><td style="padding:8px 0;vertical-align:top"><b>Notes:</b></td>
                <td>${escapeHtml(notes || "—").replace(/\n/g, "<br/>")}</td></tr>
          </table>
          <p style="color:#888;font-size:12px;margin-top:20px">
            Sent from guwahatitours.co booking flow
          </p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
