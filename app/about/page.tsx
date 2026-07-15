import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Guwahati Tours & Visits — your trusted local platform for tours, cabs, hotels and flights across Guwahati and Assam.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Local First", desc: "Born in Guwahati, run by locals who know every temple, road and hidden gem." },
  { title: "Verified Guides", desc: "Every driver-guide is background-checked and speaks the local language." },
  { title: "Transparent Pricing", desc: "No hidden fees. What you see in your itinerary is what you pay." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-tea-dark py-20 text-center text-cream">
        <div className="section">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            About <span className="text-sunset">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            We are an all-in-one platform helping travellers experience the best
            of Guwahati and Assam — with authentic, local expertise at every step.
          </p>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-3xl space-y-5 text-gray-700">
          <p>
            Guwahati Tours &amp; Visits was created to make exploring Assam simple,
            safe and memorable. From the sacred Kamakhya Temple to sunset cruises on
            the mighty Brahmaputra, we bring tours, cabs, hotels and flights together
            in one seamless booking experience.
          </p>
          <p>
            Unlike large global platforms, we are rooted in Guwahati. That means real
            local support, verified guides, and itineraries built by people who
            actually live here.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-cream p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-tea text-2xl text-white">
                ✓
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-tea-dark">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/#lead-form" className="btn-primary">Plan Your Trip</Link>
        </div>
      </section>
    </>
  );
}
