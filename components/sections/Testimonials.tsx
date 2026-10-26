import React from "react";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Testimonials Section — Unvarnished athlete check-in logs.
 * - Surface: Deep Ink (#141412) with bone/stone typography
 * - Left (Cols 1-7): Large featured blockquote with author initials box.
 * - Right (Cols 8-12): Two stacked shorter quotes separated by 1px hairlines.
 * - No fake portrait photos or decorative star ratings.
 */
export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="w-full bg-ink text-bone py-20 lg:py-28 border-b border-line-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionLabel
          number={testimonials.sectionNumber}
          title={testimonials.sectionTitle}
          variant="dark"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Cols 1-7: Featured Big Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 pb-10 lg:pb-0">
            <div>
              <span className="font-mono text-label uppercase text-accent block mb-6 tracking-wider">
                {testimonials.featured.tag}
              </span>
              <blockquote className="font-display text-[26px] md:text-display-lg uppercase text-bone tracking-tight leading-tight mb-8">
                {testimonials.featured.quote}
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-line-dark">
              <div className="w-10 h-10 bg-[#262626] text-bone font-mono text-[14px] font-bold flex items-center justify-center shrink-0 border border-line-dark">
                {testimonials.featured.author.initials}
              </div>
              <div>
                <p className="font-sans text-body-sm font-semibold text-bone">
                  {testimonials.featured.author.name}
                </p>
                <p className="font-mono text-label uppercase text-stone-dark">
                  {testimonials.featured.author.role}
                </p>
              </div>
            </div>
          </div>

          {/* Cols 8-12: Two Stacked Shorter Quotes */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-line-dark border-t lg:border-t-0 lg:border-l border-line-dark pl-0 lg:pl-8">
            {testimonials.secondary.map((item, idx) => (
              <div
                key={item.author.name}
                className={idx === 0 ? "pb-8 pt-8 lg:pt-0" : "pt-8"}
              >
                <span className="font-mono text-label uppercase text-stone-dark block mb-3 tracking-wider">
                  {item.tag}
                </span>
                <p className="font-sans text-body-lg text-bone mb-6 leading-relaxed">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#262626] text-bone font-mono text-body-sm font-bold flex items-center justify-center shrink-0 border border-line-dark">
                    {item.author.initials}
                  </div>
                  <div>
                    <p className="font-sans text-body-sm font-semibold text-bone">
                      {item.author.name}
                    </p>
                    <p className="font-mono text-label uppercase text-stone-dark">
                      {item.author.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-line-dark">
          <p className="font-mono text-label uppercase text-stone">
            {testimonials.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
