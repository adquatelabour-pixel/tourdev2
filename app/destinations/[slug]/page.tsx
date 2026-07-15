import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, destinationDetails } from "@/lib/data";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const d = destinations.find((x) => x.slug === params.slug);
  if (!d) return { title: "Destination" };
  return {
    title: d.name,
    description: d.description,
    alternates: { canonical: `/destinations/${d.slug}` },
    openGraph: {
      title: `${d.name} | Guwahati Tours & Visits`,
      description: d.description,
      images: [{ url: d.img, alt: d.name }],
    },
  };
}

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const d = destinations.find((x) => x.slug === params.slug);
  if (!d) notFound();
  const detail = destinationDetails[d.slug];

  // Breadcrumb trail: Home > Destinations > <Name>
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: d.name, path: `/destinations/${d.slug}` },
  ]);

  // TouristAttraction schema populated from lib/data.ts
  const attractionJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: d.name,
    description: d.description,
    image: [d.img, ...(detail?.gallery ?? [])],
    url: `${SITE_URL}/destinations/${d.slug}`,
    slogan: d.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guwahati",
      addressRegion: "Assam",
      addressCountry: "IN",
    },
    ...(detail?.timings ? { openingHours: detail.timings } : {}),
    // Indicative starting price for the guided visit / experience.
    offers: {
      "@type": "Offer",
      price: d.priceFrom,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/booking`,
    },
  };

  return (
    <>
      {/* JSON-LD: BreadcrumbList + TouristAttraction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden py-24 text-center text-cream">
        <div className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url('${d.img}')` }} />
        <div className="absolute inset-0 -z-10 bg-tea-dark/65" />
        <div className="section">
          <span className="rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
            {d.tagline}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">{d.name}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">{d.description}</p>
        </div>
      </section>

      <section className="section grid gap-10 py-16 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {detail?.gallery.map((src, i) => (
              <img key={i} src={src} alt={`${d.name} ${i + 1}`}
                className="h-40 w-full rounded-2xl object-cover shadow-card" />
            ))}
          </div>

          {/* Included */}
          <h2 className="mt-10 font-display text-2xl font-bold text-tea-dark">What&apos;s Included</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {detail?.included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-tea text-xs text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Highlights */}
          <h2 className="mt-10 font-display text-2xl font-bold text-tea-dark">Highlights</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {d.highlights.map((h) => (
              <li key={h} className="rounded-full bg-sunset/15 px-3 py-1 text-sm font-medium text-sunset">
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 rounded-2xl bg-tea/5 p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-gray-500">Timings</p>
              <p className="mt-1 text-sm text-gray-800">{detail?.timings}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Best time to visit</p>
              <p className="mt-1 text-sm text-gray-800">{detail?.bestTime}</p>
            </div>
          </div>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-white p-7 shadow-premium">
            <p className="text-sm text-gray-500">From</p>
            <p className="font-display text-3xl font-extrabold text-tea-dark">
              ₹{d.priceFrom.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-gray-500"> /person</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">⏱ {d.duration}</p>

            <Link href={{ pathname: "/booking", query: { pkg: d.name, total: d.priceFrom } }}
              className="btn-primary mt-6 w-full">Book Now</Link>
            <Link href="/#lead-form"
              className="mt-3 block rounded-full border border-tea/30 py-3 text-center font-semibold text-tea transition hover:bg-tea/5">
              Ask a Question
            </Link>
          </div>

          <Link href="/destinations" className="mt-4 block text-center text-sm font-medium text-tea hover:underline">
            ← All destinations
          </Link>
        </aside>
      </section>
    </>
  );
}
