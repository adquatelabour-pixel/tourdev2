import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import ItineraryBuilder from "@/components/ItineraryBuilder";
import HomeFaqPreview from "@/components/HomeFaqPreview";
import LeadForm from "@/components/LeadForm";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guwahati Tours & Visits | Book Tours, Cabs, Hotels & Flights in Assam",
  description:
    "Explore Guwahati like a local. Book tours to Kamakhya Temple, Umananda, Brahmaputra cruises, plus cabs, hotels and flights — all with verified local guides.",
  alternates: { canonical: "/" },
};

// LocalBusiness structured data so search engines understand our business.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  description:
    "All-in-one platform for booking tours, cabs, hotels and flights in Guwahati, Assam.",
  url: SITE_URL,
  image: OG_IMAGE,
  email: "contact@guwahatitours.co",
  areaServed: "Guwahati, Assam, India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
};

const destinations = [
  {
    name: "Kamakhya Temple",
    blurb: "The revered Shakti Peetha atop Nilachal Hill.",
    img: "https://source.unsplash.com/800x600/?kamakhya,temple,assam",
  },
  {
    name: "Umananda Temple",
    blurb: "Serene Shiva temple on the world's smallest river island.",
    img: "https://source.unsplash.com/800x600/?umananda,brahmaputra,island",
  },
  {
    name: "Brahmaputra River Cruise",
    blurb: "Golden sunset cruises on the mighty Brahmaputra.",
    img: "https://source.unsplash.com/800x600/?brahmaputra,river,sunset",
  },
  {
    name: "Assam State Zoo",
    blurb: "Home to the one-horned rhino and tropical wildlife.",
    img: "https://source.unsplash.com/800x600/?assam,rhino,wildlife",
  },
  {
    name: "Pobitora Sanctuary",
    blurb: "Rhino safaris in the greenest corner of Assam.",
    img: "https://source.unsplash.com/800x600/?assam,safari,green",
  },
  {
    name: "Guwahati Tea Gardens",
    blurb: "Walk through lush, misty Assam tea estates.",
    img: "https://source.unsplash.com/800x600/?assam,tea,garden",
  },
];

const trust = [
  { title: "24/7 Local Support", desc: "Real people in Guwahati, always reachable." },
  { title: "Verified Driver-Guides", desc: "Background-checked, local-language guides." },
  { title: "Secure Payments", desc: "Encrypted checkout with trusted gateways." },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD: LocalBusiness / TravelAgency schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        {/* Replace this bg image with a high-quality photo/video of Kamakhya or the Brahmaputra */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?assam,temple,river')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tea-dark/70 via-tea-dark/50 to-tea-dark/80" />

        <div className="section flex flex-col items-center py-24 text-center text-white sm:py-32">
          <span className="animate-fade-up rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
            Discover the heart of Assam
          </span>
          <h1 className="animate-fade-up mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Explore Guwahati Like a <span className="text-sunset">Local</span>
          </h1>
          <p className="animate-fade-up mt-5 max-w-xl text-lg text-cream/90">
            Book tours, cabs, hotels and flights — all in one place, with
            verified local guides.
          </p>

          {/* ── BOOKING WIDGET ── */}
          <div className="animate-fade-up mt-10 w-full max-w-3xl">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* ── POPULAR DESTINATIONS ───────────────────────── */}
      <section className="section py-20">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-sunset/15 px-4 py-1 text-sm font-semibold text-sunset">
            Popular Destinations
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-tea-dark sm:text-4xl">
            Iconic Places in Guwahati
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium"
            >
              <div className="relative h-56 overflow-hidden">
                {/* Swap placeholder for real high-res photo */}
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-tea-dark">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{d.blurb}</p>
                <div className="mt-5 flex gap-3">
                  <Link href="/booking" className="btn-primary flex-1 !py-2 text-sm">
                    Book Now
                  </Link>
                  <Link
                    href="/destinations"
                    className="flex-1 rounded-full border border-tea/30 py-2 text-center text-sm font-semibold text-tea transition hover:bg-tea/5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CUSTOM ITINERARY BUILDER ───────────────────── */}
      <ItineraryBuilder />

      {/* ── TRUST SIGNALS ──────────────────────────── */}
      <section className="bg-white py-16">
        <div className="section grid gap-8 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="rounded-3xl bg-cream p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-tea text-2xl text-white">
                ✓
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-tea-dark">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOP FAQs (preview) ──────────────────────── */}
      <HomeFaqPreview />

      {/* ── LEAD / BOOKING QUERY FORM ─────────────────── */}
      <LeadForm />
    </>
  );
}
