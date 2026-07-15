"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      // Calls our Next.js API route -> forwards to your two emails via Resend
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to send");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="lead-form" className="section py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-premium sm:p-12">
        <div className="mb-8 text-center">
          <span className="rounded-full bg-tea/10 px-4 py-1 text-sm font-semibold text-tea">
            Booking Query
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-tea-dark sm:text-4xl">
            Plan Your Assam Journey
          </h2>
          <p className="mt-3 text-gray-600">
            Send us your booking query and our local experts will get back to you.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl bg-tea/10 p-8 text-center">
            <p className="font-display text-xl font-bold text-tea-dark">
              Thank you! 🎉
            </p>
            <p className="mt-2 text-gray-600">
              Your query has been sent. Our team will contact you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-primary mt-6"
            >
              Send another query
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input id="name" name="name" type="text" required placeholder="Your full name" className="field" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="Your phone number" className="field" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className="field" />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                Your Booking Query Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us your travel dates, group size, and what you'd like to book (tours, cabs, hotels, flights)…"
                className="field resize-none"
              />
            </div>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}. Please try again or email us directly.
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-gold w-full text-base">
              {status === "sending" ? "Sending…" : "SEND"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
