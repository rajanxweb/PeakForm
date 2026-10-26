import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";

/**
 * Hero Section — High-impact display entrance.
 * - 12-column architectural grid
 * - Left (Cols 1-7): Eyebrow with orange indicator, display headline with highlighted "3" block,
 *   subcopy, primary CTA & programs anchor link, and reassurance microcopy.
 * - Right (Cols 8-12): 4:5 monochrome lifter photograph with telemetry data tag overlay.
 */
export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="w-full bg-bone border-b border-line">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Cols 1-7 */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Eyebrow / Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
                <p className="font-mono text-label uppercase tracking-wider text-stone">
                  {hero.eyebrow}
                </p>
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-display-xl uppercase tracking-tight text-ink mb-8 leading-[0.98]">
                {hero.headline.start}
                <span className="bg-accent text-ink px-2 font-black inline-block">
                  {hero.headline.highlight}
                </span>
                {hero.headline.end}
              </h1>

              {/* Subcopy */}
              <p className="font-sans text-body-lg text-stone max-w-[62ch] mb-10 leading-relaxed">
                {hero.description}
              </p>
            </div>

            {/* CTAs & Microcopy */}
            <div>
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <Button
                  href={hero.primaryCta.href}
                  variant="ink"
                  size="default"
                  showArrow
                >
                  {hero.primaryCta.text.replace(" ↗", "")}
                </Button>

                <a
                  href={hero.secondaryCta.href}
                  className="font-display text-[16px] font-bold uppercase tracking-wider text-ink hover:text-accent inline-flex items-center gap-1 transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
                >
                  {hero.secondaryCta.text}
                </a>
              </div>

              <p className="font-mono text-label uppercase text-stone tracking-wider">
                {hero.note}
              </p>
            </div>
          </div>

          {/* Right: Cols 8-12 */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="w-full aspect-[4/5] bg-paper overflow-hidden relative border border-line">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-125"
              />

              {/* Monochromatic Telemetry Tag */}
              {hero.image.tag && (
                <div className="absolute bottom-4 left-4 bg-ink text-bone px-3 py-2 font-mono text-label uppercase tracking-wider flex items-center gap-2 select-none">
                  <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
                  <span>{hero.image.tag}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
