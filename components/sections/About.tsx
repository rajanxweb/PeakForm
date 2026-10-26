import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * About Section — Coach philosophy, credentials, and full-bleed photo band.
 * - Cols 1-5: 4:5 monochrome portrait of the head coach.
 * - Cols 7-12: Methodology copy, "How I Coach" 3-point hairline list, and credentials strip.
 * - Photo band: 21:9 panoramic horizontal shot of calibrated Olympic plates.
 */
export function About() {
  const { about } = siteConfig;

  return (
    <section className="w-full bg-paper pt-20 border-t border-line" id="coach">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coach Photo (Cols 1-5) */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/5] bg-bone overflow-hidden relative border border-line">
              <Image
                src={about.coachImage.src}
                alt={about.coachImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* Coach Details (Cols 7-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-4 lg:pt-0">
            <div>
              <SectionLabel
                number={about.sectionNumber}
                title={about.sectionTitle}
              />

              <h2 className="font-display text-display-lg uppercase text-ink mb-6 tracking-tight">
                {about.heading}
              </h2>

              {about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="font-sans text-body text-stone mb-4 last-of-type:mb-8 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* How I Coach List */}
              <div className="border-t border-line divide-y divide-line mb-8">
                {about.principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="py-3 flex items-start gap-4"
                  >
                    <span className="font-mono text-label text-accent font-black shrink-0">
                      {principle.number}
                    </span>
                    <p className="font-sans text-body-sm text-ink font-medium">
                      {principle.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Banner */}
            <div className="bg-bone px-4 py-3 border border-line">
              <p className="font-mono text-label uppercase text-ink tracking-wider">
                {about.credentials}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Photo Band (21:9 on desktop, 4:3 on mobile) */}
      <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-bone overflow-hidden relative border-t border-line">
        <Image
          src={about.photoBandImage.src}
          alt={about.photoBandImage.alt}
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-125"
        />
      </div>
    </section>
  );
}

export default About;
