export const metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for using Guwahati Tours & Visits.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold text-tea-dark">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Bookings &amp; Enquiries</h2>
            <p className="mt-2">
              Submitting a booking query or booking through this site is a request for
              service and does not guarantee availability until confirmed by our team.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Pricing</h2>
            <p className="mt-2">
              Prices shown are indicative and may vary based on season, availability and
              final itinerary. Final pricing is confirmed before any payment is taken.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Cancellations &amp; Refunds</h2>
            <p className="mt-2">
              Cancellation and refund terms depend on the specific tour, hotel, cab or
              flight booked. These will be shared with you at the time of confirmation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Liability</h2>
            <p className="mt-2">
              We act as a facilitator between you and local service providers. We take
              reasonable care in selecting verified partners but are not liable for
              circumstances beyond our reasonable control.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
              <a href="mailto:contact@guwahatitours.co" className="font-medium text-tea hover:underline">
                contact@guwahatitours.co
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
