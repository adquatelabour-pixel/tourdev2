import Link from "next/link";
import ItineraryBuilder from "@/components/ItineraryBuilder";
import { cabOptions, hotelOptions } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Cab rentals, hotel bookings and flight bookings across Guwahati and Assam — with verified local drivers and vetted stays.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "cabs",
    title: "Cab Rentals",
    desc: "Clean, air-conditioned cars with verified local driver-guides. Airport transfers, full-day sightseeing and outstation trips.",
    img: "https://source.unsplash.com/900x600/?taxi,car,road",
    points: cabOptions.map((c) => `${c.label} — ₹${c.price.toLocaleString("en-IN")}`),
  },
  {
    id: "hotels",
    title: "Hotel Bookings",
    desc: "From budget stays to riverside luxury resorts, all vetted for cleanliness, safety and location near key attractions.",
    img: "https://source.unsplash.com/900x600/?hotel,room,resort",
    points: hotelOptions.map((h) => `${h.label} — ₹${h.price.toLocaleString("en-IN")}/night`),
  },
  {
    id: "flights",
    title: "Flight Bookings",
    desc: "Best-fare flights to and from Guwahati (GAU). We handle search, booking and rescheduling so you don't have to.",
    img: "https://source.unsplash.com/900x600/?airplane,flight,sky",
    points: ["Domestic & international routes", "Best-fare guarantee assistance", "Group & family booking support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-tea-dark py-20 text-center text-cream">
        <div className="section">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-sunset">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Everything you need for a seamless Assam trip — cabs, hotels and flights.
          </p>
        </div>
      </section>

      <section className="section space-y-16 py-20">
        {services.map((s, i) => (
          <div key={s.id} id={s.id}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}>
            <div className="overflow-hidden rounded-3xl shadow-premium">
              <img src={s.img} alt={s.title} className="h-72 w-full object-cover sm:h-96" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-tea-dark">{s.title}</h2>
              <p className="mt-3 text-gray-600">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-tea text-xs text-white">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              {/* Wire these to your booking/search backend */}
              <Link href="/booking" className="btn-primary mt-6">
                Book {s.title}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Killer feature */}
      <ItineraryBuilder />
    </>
  );
}
