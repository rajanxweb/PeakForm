import React from "react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";

/**
 * FinalCTA Section — Loud high-contrast closing trigger.
 * - 8px solid Accent Orange bar on top edge.
 * - Deep Ink band (#141412) with bone typography.
 * - Cols 1-8: Headline.
 * - Cols 9-12: Brief copy and primary call-to-action button.
 */
export function FinalCta() {
  const { finalCta } = siteConfig;

  return (
    <section className="w-full bg-ink text-bone relative border-b border-line-dark">
      {/* Top 8px Accent Bar */}
      <div className="w-full h-2 bg-accent" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Cols 1-8: Display H2 */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-[32px] md:text-display-lg lg:text-display-xl uppercase text-bone tracking-tight leading-tight mb-4">
              {finalCta.heading}
            </h2>
          </div>

          {/* Cols 9-12: Copy & Action */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-6">
            <p className="font-sans text-body text-stone-dark leading-relaxed">
              {finalCta.description}
            </p>
            <div>
              <Button
                href={finalCta.cta.href}
                variant="primary"
                size="default"
                showArrow
              >
                {finalCta.cta.text.replace(" ↗", "")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
