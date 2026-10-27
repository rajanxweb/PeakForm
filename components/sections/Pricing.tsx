import React from "react";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Pricing Section — Transparent rates with zero lock-in contracts.
 * - 3-column architectural grid with aligned bottom CTA anchors.
 * - Middle tier ("Dedicated 1:1") is inverted (#141412 Ink) and +24px taller,
 *   highlighted with the orange "[MOST CHOSEN]" top tag.
 */
export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section className="w-full bg-bone py-20 lg:py-28 border-b border-line" id="pricing">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Pricing Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <SectionLabel
              number={pricing.sectionNumber}
              title={pricing.sectionTitle}
            />
            <h2 className="font-display text-display-lg uppercase text-ink tracking-tight">
              {pricing.heading}
            </h2>
            <p className="font-sans text-body text-stone max-w-[48ch] mt-2 leading-relaxed">
              {pricing.description}
            </p>
          </div>
          <div>
            <p className="font-mono text-label uppercase text-stone tracking-wider">
              {pricing.billingNote}
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12 lg:items-end">
          {pricing.tiers.map((tier) => {
            const isInverted = tier.highlighted;

            return (
              <div
                key={tier.name}
                className={cn(
                  "p-8 flex flex-col justify-between border transition-all duration-150",
                  isInverted
                    ? "bg-ink text-bone min-h-[584px] relative border-line-dark order-first lg:order-none pt-12 lg:pt-8"
                    : "bg-paper text-ink min-h-[560px] border-line"
                )}
              >
                {/* Top Badge for Inverted Tier */}
                {tier.topTag && (
                  <div className="absolute top-0 left-0 right-0 lg:top-auto lg:left-8 lg:right-auto lg:-top-3 bg-accent text-ink px-4 lg:px-3 py-2 lg:py-1 font-mono text-label uppercase font-black tracking-wider select-none text-center lg:text-left">
                    {tier.topTag}
                  </div>
                )}

                <div>
                  {/* Tier Subhead */}
                  <div className={cn("flex justify-between items-center mb-4", isInverted && "mt-2")}>
                    <span
                      className={cn(
                        "font-mono text-label uppercase tracking-wider",
                        isInverted ? "text-stone-dark" : "text-stone"
                      )}
                    >
                      {tier.tierNumber}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-label uppercase tracking-wider font-bold",
                        isInverted ? "text-accent" : "text-ink"
                      )}
                    >
                      {tier.subtag}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3
                    className={cn(
                      "font-display text-display-md uppercase mb-2",
                      isInverted ? "text-bone" : "text-ink"
                    )}
                  >
                    {tier.name}
                  </h3>

                  <div
                    className={cn(
                      "font-mono text-display-md md:text-display-lg font-black mb-4 tabular-nums",
                      isInverted ? "text-bone" : "text-ink"
                    )}
                  >
                    {tier.price}{" "}
                    <span
                      className={cn(
                        "font-sans text-body-sm font-normal",
                        isInverted ? "text-stone-dark" : "text-stone"
                      )}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "font-sans text-body-sm mb-6 pb-6 border-b leading-relaxed",
                      isInverted
                        ? "text-stone-dark border-line-dark"
                        : "text-stone border-line"
                    )}
                  >
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 font-sans text-body-sm">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-center gap-2.5",
                          isInverted ? "text-bone" : "text-ink"
                        )}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 shrink-0",
                            isInverted ? "bg-accent" : "bg-ink"
                          )}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6">
                  <Button
                    href={tier.cta.href}
                    variant={isInverted ? "dark-primary" : "secondary"}
                    size="full"
                    showArrow
                  >
                    {tier.cta.text}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Note */}
        {pricing.guaranteeNote ? (
          <div className="mt-12 text-left">
            <p className="font-mono text-label uppercase text-stone tracking-wider">
              {pricing.guaranteeNote}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Pricing;
