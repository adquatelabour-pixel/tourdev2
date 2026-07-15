"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book Now" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  // Root-relative anchor so it works from every page, not just Home.
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/85 backdrop-blur-lg">
      <nav className="section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-tea font-display text-lg font-bold text-white">
            G
          </span>
          <span className="font-display text-lg font-bold text-tea-dark">
            Guwahati Tours <span className="text-sunset">&amp; Visits</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-gray-700 transition hover:text-tea"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#lead-form" className="btn-primary !px-5 !py-2 text-sm">
              Enquire Now
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-tea-dark" />
            <span className="block h-0.5 w-6 bg-tea-dark" />
            <span className="block h-0.5 w-6 bg-tea-dark" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 bg-cream px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-tea/10 hover:text-tea"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
