import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Programs Section — 4-row structured ledger replacing generic feature cards.
 * - Left (Cols 1-4): Sticky section header with title and intro copy.
 * - Right (Cols 5-12): 4 programmatic rows separated by 1px hairlines.
 * - Hover behavior: Full row inverts to Ink background (#141412) with Bone text
 *   and Accent Orange arrow in 150ms.
 */
export function Programs() {
  const { programs } = siteConfig;

  return (
    <section className="w-full bg-bone py-20 lg:py-28 border-b border-line" id="programs">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sticky Header (Cols 1-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-[104px] pb-8 lg:pb-0">
            <SectionLabel
              number={programs.sectionNumber}
              title={programs.sectionTitle}
            />
            <h2 className="font-display text-display-lg uppercase text-ink mb-6 tracking-tight">
              {programs.heading}
            </h2>
            <p className="font-sans text-body text-stone max-w-[34ch] leading-relaxed">
              {programs.description}
            </p>
          </div>

          {/* Program Rows (Cols 5-12) */}
          <div className="lg:col-span-8 border-t border-line divide-y divide-line">
            {programs.items.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group block p-6 lg:p-8 transition-colors duration-150 bg-transparent hover:bg-ink focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  {/* Number */}
                  <div className="md:col-span-2 font-display text-[32px] md:text-display-lg font-black text-stone group-hover:text-accent transition-colors duration-150">
                    {item.number}
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-display-md uppercase text-ink group-hover:text-bone transition-colors duration-150 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-label uppercase text-accent-deep group-hover:text-accent mb-3 transition-colors duration-150">
                      {item.targetAudience}
                    </p>
                    <p className="font-sans text-body text-stone group-hover:text-stone-dark transition-colors duration-150">
                      {item.description}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="md:col-span-3 font-mono text-body uppercase text-stone group-hover:text-bone md:text-right transition-colors duration-150">
                    {item.duration}
                  </div>

                  {/* Arrow Glyphs */}
                  <div className="md:col-span-1 text-right font-display text-display-md text-ink group-hover:text-accent transition-colors duration-150">
                    ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
