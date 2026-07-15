import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqCategories } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about visiting Guwahati, Kamakhya Temple darshan timings and passes, and our cab & travel packages.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data built from every Q&A so results can show rich snippets.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD: FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-tea-dark py-20 text-center text-cream">
        <div className="section">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Frequently Asked <span className="text-sunset">Questions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Everything you need to know about visiting Guwahati, Kamakhya Temple,
            and booking cabs and tours with us.
          </p>
        </div>
      </section>

      <section className="section py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="mb-5 font-display text-2xl font-bold text-tea-dark">
                {cat.category}
              </h2>
              <FaqAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
