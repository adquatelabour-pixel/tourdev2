"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { cabOptions, hotelOptions, templeVisitOptions } from "@/lib/data";
import { toPositiveInt } from "@/lib/validation";

type Choice = { id: string; label: string; price: number } | null;

function OptionCard({
  label,
  price,
  active,
  onClick,
  suffix,
}: {
  label: string;
  price: number;
  active: boolean;
  onClick: () => void;
  suffix?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition ${
        active
          ? "border-tea bg-tea/5 shadow-card"
          : "border-gray-200 bg-white hover:border-tea/40"
      }`}
    >
      <span className="font-medium text-gray-800">{label}</span>
      <span className="font-display font-bold text-tea-dark">
        ₹{price.toLocaleString("en-IN")}
        {suffix && <span className="text-xs font-normal text-gray-500">{suffix}</span>}
      </span>
    </button>
  );
}

export default function ItineraryBuilder() {
  const [cab, setCab] = useState<Choice>(null);
  const [hotel, setHotel] = useState<Choice>(null);
  const [temple, setTemple] = useState<Choice>(null);
  const [nights, setNights] = useState(1);
  const [travellers, setTravellers] = useState(2);

  // Live running total
  const total = useMemo(() => {
    const cabCost = cab?.price ?? 0;
    const hotelCost = (hotel?.price ?? 0) * nights;
    const templeCost = (temple?.price ?? 0) * travellers;
    return cabCost + hotelCost + templeCost;
  }, [cab, hotel, temple, nights, travellers]);

  const selectedCount = [cab, hotel, temple].filter(Boolean).length;

  return (
    <section className="section py-20">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-river/10 px-4 py-1 text-sm font-semibold text-river">
          Build Your Own Package
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-tea-dark sm:text-4xl">
          Custom Itinerary Builder
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Combine a cab, hotel and temple visit into one seamless package. Watch
          your total update live.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Choices */}
        <div className="space-y-8 lg:col-span-2">
          {/* Cab */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-tea-dark">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-tea text-sm text-white">1</span>
              Choose a Cab
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {cabOptions.map((o) => (
                <OptionCard key={o.id} label={o.label} price={o.price}
                  active={cab?.id === o.id}
                  onClick={() => setCab(cab?.id === o.id ? null : o)} />
              ))}
            </div>
          </div>

          {/* Hotel */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-tea-dark">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-tea text-sm text-white">2</span>
              Choose a Hotel
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {hotelOptions.map((o) => (
                <OptionCard key={o.id} label={o.label} price={o.price} suffix="/night"
                  active={hotel?.id === o.id}
                  onClick={() => setHotel(hotel?.id === o.id ? null : o)} />
              ))}
            </div>
          </div>

          {/* Temple visit */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-tea-dark">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-tea text-sm text-white">3</span>
              Add a Temple / Experience
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {templeVisitOptions.map((o) => (
                <OptionCard key={o.id} label={o.label} price={o.price} suffix="/person"
                  active={temple?.id === o.id}
                  onClick={() => setTemple(temple?.id === o.id ? null : o)} />
              ))}
            </div>
          </div>

          {/* Quantities */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Nights</label>
              {/* toPositiveInt guards against empty, NaN or pasted junk values */}
              <input type="number" min={1} max={99} value={nights}
                onChange={(e) => setNights(toPositiveInt(e.target.value, 1))} className="field" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Travellers</label>
              <input type="number" min={1} max={99} value={travellers}
                onChange={(e) => setTravellers(toPositiveInt(e.target.value, 1))} className="field" />
            </div>
          </div>
        </div>

        {/* Live summary — sticky on desktop */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-tea-dark p-7 text-cream shadow-premium">
            <h3 className="font-display text-xl font-bold">Your Package</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-cream/70">Cab</span>
                <span>{cab ? `₹${cab.price.toLocaleString("en-IN")}` : "—"}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-cream/70">Hotel × {nights} night(s)</span>
                <span>{hotel ? `₹${(hotel.price * nights).toLocaleString("en-IN")}` : "—"}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-cream/70">Experience × {travellers}</span>
                <span>{temple ? `₹${(temple.price * travellers).toLocaleString("en-IN")}` : "—"}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-end justify-between">
              <span className="text-cream/70">Total</span>
              <span className="font-display text-3xl font-extrabold text-sunset">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Passes the built package to checkout via query params.
                When nothing is selected we render a real disabled button so
                keyboard/screen-reader users can't trigger a dead link. */}
            {selectedCount === 0 ? (
              <button type="button" disabled className="btn-gold mt-6 w-full opacity-50">
                Select options
              </button>
            ) : (
              <Link
                href={{
                  pathname: "/booking",
                  query: {
                    pkg: [cab?.label, hotel?.label, temple?.label].filter(Boolean).join(" + "),
                    total,
                  },
                }}
                className="btn-gold mt-6 w-full"
              >
                Continue to Booking
              </Link>
            )}
            <p className="mt-3 text-center text-xs text-cream/60">
              No payment yet · free to customise
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
