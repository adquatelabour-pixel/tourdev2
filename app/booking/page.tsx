"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { isValidEmail, isValidPhone, isNonEmpty, toPositiveInt } from "@/lib/validation";

const steps = ["Your Details", "Trip & Dates", "Payment", "Confirmed"];

function BookingInner() {
  const params = useSearchParams();
  const pkg = params.get("pkg") ?? "Custom Guwahati Package";
  const total = params.get("total");
  const prefillDate = params.get("date") ?? "";

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: prefillDate, travellers: 2, notes: "",
  });

  const update = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // Per-field validity used to gate step transitions and show inline errors.
  const nameOk = isNonEmpty(form.name);
  const emailOk = isValidEmail(form.email);
  const phoneOk = isValidPhone(form.phone);
  const step0Valid = nameOk && emailOk && phoneOk;

  // Called on "Pay" — emails you the booking, then confirms.
  async function confirmBooking() {
    setSubmitting(true);
    setError("");
    try {
      /* PAYMENT INTEGRATION:
         Mount Razorpay / Stripe / Cashfree here first. Create an order on the
         server (amount = total), open the checkout widget, and only run the
         code below on a successful payment callback. */
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, pkg, total }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      next();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section py-16">
      <div className="mx-auto max-w-3xl">
        {/* Package summary */}
        <div className="mb-8 rounded-2xl bg-tea/5 p-5">
          <p className="text-sm text-gray-500">You are booking</p>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-display text-lg font-bold text-tea-dark">{pkg}</p>
            {total && (
              <p className="font-display text-xl font-bold text-tea">
                ₹{Number(total).toLocaleString("en-IN")}
              </p>
            )}
          </div>
        </div>

        {/* Step indicator */}
        <ol className="mb-10 flex items-center">
          {steps.map((label, i) => (
            <li key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center">
                <span className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition ${
                  i <= step ? "bg-tea text-white" : "bg-gray-200 text-gray-500"
                }`}>{i < step ? "✓" : i + 1}</span>
                <span className={`mt-1.5 hidden text-xs sm:block ${
                  i <= step ? "text-tea-dark" : "text-gray-400"
                }`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className={`mx-2 h-0.5 flex-1 ${i < step ? "bg-tea" : "bg-gray-200"}`} />
              )}
            </li>
          ))}
        </ol>

        <div className="rounded-3xl bg-white p-8 shadow-premium">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl font-bold text-tea-dark">Your Details</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <input className="field" placeholder="Full name *" value={form.name}
                  onChange={(e) => update("name", e.target.value)} />
                <div>
                  <input className="field" placeholder="Phone *" value={form.phone}
                    onChange={(e) => update("phone", e.target.value)} />
                  {form.phone && !phoneOk && (
                    <p className="mt-1 text-xs text-red-500">Enter a valid phone number.</p>
                  )}
                </div>
              </div>
              <div>
                <input className="field" type="email" placeholder="Email *" value={form.email}
                  onChange={(e) => update("email", e.target.value)} />
                {form.email && !emailOk && (
                  <p className="mt-1 text-xs text-red-500">Enter a valid email address.</p>
                )}
              </div>
              <button onClick={next} disabled={!step0Valid}
                className="btn-primary w-full">Continue</button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl font-bold text-tea-dark">Trip & Dates</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Travel date</label>
                  <input type="date" className="field" value={form.date}
                    onChange={(e) => update("date", e.target.value)} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Travellers</label>
                  <input type="number" min={1} max={99} className="field" value={form.travellers}
                    onChange={(e) => update("travellers", toPositiveInt(e.target.value, 1))} />
                </div>
              </div>
              <textarea className="field resize-none" rows={4} placeholder="Special requests (optional)"
                value={form.notes} onChange={(e) => update("notes", e.target.value)} />
              <div className="flex gap-3">
                <button onClick={back} className="flex-1 rounded-full border border-tea/30 py-3 font-semibold text-tea hover:bg-tea/5">Back</button>
                <button onClick={next} disabled={!form.date} className="btn-primary flex-1">Continue</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl font-bold text-tea-dark">Payment</h2>
              <div className="rounded-2xl border-2 border-dashed border-tea/30 bg-tea/5 p-8 text-center">
                <p className="font-semibold text-tea-dark">🔒 Secure Payment Gateway</p>
                <p className="mt-2 text-sm text-gray-600">
                  Connect Razorpay, Stripe or Cashfree here. This is a UI placeholder —
                  no real charge is made. Clicking Pay emails the booking to our team.
                </p>
              </div>
              {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
              <div className="flex gap-3">
                <button onClick={back} className="flex-1 rounded-full border border-tea/30 py-3 font-semibold text-tea hover:bg-tea/5">Back</button>
                <button onClick={confirmBooking} disabled={submitting} className="btn-gold flex-1">
                  {submitting ? "Processing…" : total ? `Pay ₹${Number(total).toLocaleString("en-IN")}` : "Confirm"}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-tea text-3xl text-white">✓</div>
              <h2 className="mt-5 font-display text-2xl font-bold text-tea-dark">Booking Confirmed!</h2>
              <p className="mt-2 text-gray-600">
                Thank you {form.name || "traveller"}. A confirmation will be sent to{" "}
                <span className="font-medium text-tea-dark">{form.email}</span>.
              </p>
              <Link href="/" className="btn-primary mt-8">Back to Home</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="section py-20 text-center text-gray-500">Loading…</div>}>
      <BookingInner />
    </Suspense>
  );
}
