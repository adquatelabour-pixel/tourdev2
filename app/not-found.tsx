import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Guwahati Tours & Visits",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      {/* Assam-themed backdrop */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?assam,brahmaputra,mist')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tea-dark/80 via-tea-dark/70 to-tea-dark/85" />

      <div className="section text-center text-cream">
        <p className="font-display text-7xl font-extrabold text-sunset sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Lost in the mist of Assam?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream/85">
          Let&apos;s get you back on track. The page you&apos;re looking for may
          have moved, or the link might be broken.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-gold text-base">
            Back to Homepage
          </Link>
          <Link
            href="/destinations"
            className="rounded-full border border-cream/40 px-6 py-3 font-semibold text-cream transition hover:bg-cream/10"
          >
            Explore Destinations
          </Link>
        </div>

        <p className="mt-10 text-sm text-cream/60">
          Need help? Email us at{" "}
          <a href="mailto:contact@guwahatitours.co" className="underline hover:text-white">
            contact@guwahatitours.co
          </a>
        </p>
      </div>
    </section>
  );
}
