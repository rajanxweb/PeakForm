import React from "react";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Results Section — Audited client telemetry logs.
 * - Surface: Deep Ink (#141412) with bone/stone typography
 * - Stacked 12-column log entries separated by 1px hairlines (#34322D)
 * - Tabular numbers with Signal Accent Orange progress arrows
 * - Replaces generic before/after photo carousels with hard capability data.
 */
export function Results() {
  const { results } = siteConfig;

  return (
    <section className="w-full bg-ink text-bone py-20 lg:py-28 border-b border-line-dark" id="results">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel
            number={results.sectionNumber}
            title={results.sectionTitle}
            variant="dark"
          />
          <h2 className="font-display text-display-lg uppercase text-bone mb-4 tracking-tight">
            {results.heading}
          </h2>
          <p className="font-sans text-body text-stone-dark max-w-[54ch] leading-relaxed">
            {results.description}
          </p>
        </div>

        {/* 3 Full-Width Stacked Log Entries */}
        <div className="border-t border-line-dark divide-y divide-line-dark">
          {results.entries.map((entry) => (
            <div
              key={entry.client}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline"
            >
              {/* Client Info (Cols 1-4) */}
              <div className="lg:col-span-4">
                <span className="font-display text-[20px] md:text-display-md text-bone uppercase block mb-1 font-bold">
                  {entry.client}
                </span>
                <span className="font-sans text-body-sm text-stone-dark block mb-2">
                  {entry.roleDuration}
                </span>
                <span className="font-mono text-label text-accent uppercase block tracking-wider">
                  {entry.goal}
                </span>
              </div>

              {/* Audited Metrics Table (Cols 5-12 / lg:col-span-8) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#181818] p-6 border border-line-dark">
                {entry.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="font-mono text-label text-stone-dark uppercase block mb-1">
                      {metric.label}
                    </span>
                    <span className="font-mono text-[17px] md:text-[18px] text-bone font-semibold tabular-nums">
                      {metric.before} <span className="text-accent">→</span>{" "}
                      <span className="text-accent font-bold">{metric.after}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Demonstration Disclaimer */}
        <div className="mt-8 pt-4 border-t border-line-dark">
          <p className="font-mono text-label uppercase text-stone">
            {results.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Results;
