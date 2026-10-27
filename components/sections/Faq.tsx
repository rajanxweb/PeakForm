import React from "react";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * FAQ Section — Native disclosure widget.
 * - Left (Cols 1-4): Sticky header with SectionLabel and intro text.
 * - Right (Cols 5-12): Native <details>/<summary> accordion rows separated by 1px hairlines.
 * - First question open by default.
 * - Plus icon rotates 45° on open via CSS only (no external accordion library needed).
 */
export function Faq() {
  const { faq } = siteConfig;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="w-full bg-bone py-20 lg:py-28 border-b border-line" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sticky Header (Cols 1-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-[104px] pb-8 lg:pb-0">
            <SectionLabel
              number={faq.sectionNumber}
              title={faq.sectionTitle}
            />
            <h2 className="font-display text-display-lg uppercase text-ink mb-4 tracking-tight">
              {faq.heading}
            </h2>
            <p className="font-sans text-body text-stone max-w-[32ch] leading-relaxed">
              {faq.description}
            </p>
          </div>

          {/* Accordion Items (Cols 5-12) */}
          <div className="lg:col-span-8 border-t border-line divide-y divide-line">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group py-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                open={item.defaultOpen}
              >
                <summary className="flex justify-between items-center text-left list-none focus:outline-none focus-visible:outline-3 focus-visible:outline-focus">
                  <h3 className="font-display text-[18px] md:text-display-md uppercase text-ink pr-4 font-bold select-none">
                    {item.question}
                  </h3>
                  <span
                    className="font-mono text-[22px] font-bold text-stone group-open:rotate-45 transition-transform duration-200 select-none shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="pt-4 pr-6 lg:pr-12">
                  <p className="font-sans text-body text-stone leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
