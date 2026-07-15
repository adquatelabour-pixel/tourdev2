"use client";
import { useState } from "react";
import type { Faq } from "@/lib/faqs";

function AccordionItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-tea/5"
      >
        <span className="font-medium text-tea-dark">{item.q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tea/10 text-tea transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {/* Grid-rows trick for a smooth height animation without measuring */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionItem key={item.q} item={item} />
      ))}
    </div>
  );
}
