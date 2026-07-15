export const metadata = {
  title: "Privacy Policy",
  description: "How Guwahati Tours & Visits collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold text-tea-dark">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Information We Collect</h2>
            <p className="mt-2">
              When you submit a booking query or booking, we collect the details you
              provide: your name, email address, phone number, travel dates and any
              message or special requests. We do not collect payment card details on
              this site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">How We Use It</h2>
            <p className="mt-2">
              We use your information solely to respond to your enquiry, arrange your
              booking, and provide customer support. We do not sell your data to third
              parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Data Security</h2>
            <p className="mt-2">
              Your data is transmitted over encrypted HTTPS connections and processed
              securely on our servers. Form submissions are delivered to our team by
              email through a trusted provider.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-tea-dark">Contact</h2>
            <p className="mt-2">
              For any privacy questions or to request deletion of your data, email us at{" "}
              <a href="mailto:contact@guwahatitours.co" className="font-medium text-tea hover:underline">
                contact@guwahatitours.co
              </a>{" "}or{" "}
              <a href="mailto:ghytours@gmail.com" className="font-medium text-tea hover:underline">
                ghytours@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
