import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 bg-tea-dark text-cream">
      <div className="section grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">
            Guwahati Tours <span className="text-sunset">&amp; Visits</span>
          </h3>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            Your all-in-one platform for tours, cabs, hotels and flights across
            Guwahati and Assam. Verified local guides, 24/7 support, secure
            payments.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sunset">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/booking" className="hover:text-white">Book Now</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sunset">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT US — emails only, no phone number */}
        <div>
          <h4 className="font-semibold text-sunset">Contact Us</h4>
          <p className="mt-3 text-sm text-cream/80">
            Reach us directly by email and we&apos;ll respond promptly:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:ghytours@gmail.com" className="hover:text-white">
                ghytours@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:contact@guwahatitours.co" className="hover:text-white">
                contact@guwahatitours.co
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Guwahati Tours &amp; Visits · guwahatitours.co
      </div>
    </footer>
  );
}
