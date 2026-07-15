import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { topFaqs } from "@/lib/faqs";

// Simplified "Top 4 FAQs" block for the Home page.
export default function HomeFaqPreview() {
  return (
    <section className="section py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-river/10 px-4 py-1 text-sm font-semibold text-river">
          Good to Know
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-tea-dark sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={topFaqs} />
        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-primary">
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
