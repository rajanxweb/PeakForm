import React from "react";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

/**
 * StatsStrip — Deep Ink architectural telemetry strip.
 * - Desktop: 4 columns separated by 1px vertical hairline rule lines.
 * - Mobile: 2×2 grid with tabular numerals.
 * - Stat 4 features the signal accent highlight (#FF4B1F).
 */
export function StatsStrip() {
  const { stats } = siteConfig;

  return (
    <section className="w-full bg-ink text-bone border-b border-line-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-line-dark">
          {stats.items.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "py-10 px-4 md:px-8 text-left flex flex-col justify-center",
                // Mobile 2x2 grid border styling
                index % 2 === 1 ? "pl-6 md:pl-8" : "pr-6 md:pr-8"
              )}
            >
              <span
                className={cn(
                  "font-display text-[44px] md:text-display-xl tracking-tight leading-none mb-2 font-black tabular-nums",
                  stat.highlight ? "text-accent" : "text-bone"
                )}
              >
                {stat.value}
              </span>
              <span className="font-mono text-label text-stone-dark uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
