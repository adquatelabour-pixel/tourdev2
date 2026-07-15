"use client";
import { useState } from "react";
import Link from "next/link";

const tabs = ["Tours", "Cabs", "Hotels", "Flights"] as const;
type Tab = (typeof tabs)[number];

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("Tours");
  const [where, setWhere] = useState("");
  const [date, setDate] = useState("");

  const placeholder: Record<Tab, string> = {
    Tours: "e.g. Kamakhya Temple",
    Cabs: "Pickup location in Guwahati",
    Hotels: "Area or hotel name",
    Flights: "GAU → destination",
  };

  return (
    <div className="w-full max-w-3xl rounded-3xl bg-white/95 p-2 shadow-premium backdrop-blur">
      <div className="flex gap-1 rounded-2xl bg-cream p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
              activeTab === t ? "bg-tea text-white shadow" : "text-gray-600 hover:text-tea"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Search fields adapt per tab. Wire these to your search/booking backend. */}
      <div className="grid gap-3 p-4 text-left sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-gray-500">
            {activeTab === "Flights" ? "From → To" : "Where to?"}
          </label>
          <input
            className="field"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder={placeholder[activeTab]}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-500">Date</label>
          <input type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>

      <div className="p-4 pt-0">
        {/* Passes the search intent to the booking flow */}
        <Link
          href={{ pathname: "/booking", query: { pkg: `${activeTab}${where ? `: ${where}` : ""}`, date } }}
          className="btn-primary w-full"
        >
          Search {activeTab}
        </Link>
      </div>
    </div>
  );
}
