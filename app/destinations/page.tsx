import Link from "next/link";
import { destinations } from "@/lib/data";

export const metadata = {
  title: "Destinations",
  description:
    "Explore iconic Guwahati destinations: Kamakhya Temple, Umananda Temple, Brahmaputra cruise, Pobitora Sanctuary and more.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-tea-dark py-20 text-center text-cream">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x600/?assam,temple')" }}
        />
        <div className="section">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Iconic <span className="text-sunset">Destinations</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Handpicked places across Guwahati and Assam, each with verified local
            guides and transparent pricing.
          </p>
        </div>
      </section>

      {/* Alternating rich cards */}
      <section className="section space-y-14 py-20">
        {destinations.map((d, i) => (
          <article
            key={d.slug}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-3xl shadow-premium">
              {/* Replace placeholder with real high-res photo */}
              <img src={d.img} alt={d.name}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-96" />
            </div>

            <div>
              <span className="rounded-full bg-sunset/15 px-4 py-1 text-sm font-semibold text-sunset">
                {d.tagline}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-tea-dark">
                {d.name}
              </h2>
              <p className="mt-3 text-gray-600">{d.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {d.highlights.map((h) => (
                  <li key={h} className="rounded-full bg-tea/10 px-3 py-1 text-sm font-medium text-tea">
                    ✓ {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <div>
                  <p className="text-xs text-gray-500">From</p>
                  <p className="font-display text-2xl font-bold text-tea-dark">
                    ₹{d.priceFrom.toLocaleString("en-IN")}
                    <span className="text-sm font-normal text-gray-500"> /person</span>
                  </p>
                </div>
                <span className="text-sm text-gray-500">⏱ {d.duration}</span>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href={{ pathname: "/booking", query: { pkg: d.name, total: d.priceFrom } }}
                  className="btn-primary">
                  Book Now
                </Link>
                <Link href={`/destinations/${d.slug}`}
                  className="rounded-full border border-tea/30 px-6 py-3 font-semibold text-tea transition hover:bg-tea/5">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
