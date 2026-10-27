import React from "react";
import { siteConfig } from "@/config/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "./ContactForm";

/**
 * Contact Section — Intro call booking and direct coach inquiry.
 * - Left (Cols 1-5): "What Happens Next" 3-step transparent protocol.
 * - Right (Cols 7-12): Accessible direct inquiry form integrated with Web3Forms.
 */
export function Contact() {
  const { contact } = siteConfig;

  return (
    <section className="w-full bg-bone py-20 lg:py-28 border-b border-line" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Cols 1-5 */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <SectionLabel
              number={contact.sectionNumber}
              title={contact.sectionTitle}
            />

            <h2 className="font-display text-display-lg uppercase text-ink mb-6 tracking-tight">
              {contact.heading}
            </h2>

            <p className="font-sans text-body text-stone mb-10 leading-relaxed">
              {contact.description}
            </p>

            {/* What Happens Next Protocol */}
            <div className="space-y-6 border-t border-line pt-6">
              <span className="font-mono text-label uppercase text-stone block tracking-wider font-semibold">
                {contact.stepsHeading}
              </span>

              <ol className="space-y-6 list-none p-0 m-0">
                {contact.steps.map((step) => (
                  <li key={step.step} className="flex items-start gap-4">
                    <span
                      className="font-mono text-display-md text-accent font-black shrink-0 leading-none"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                    <div>
                      <strong className="font-display text-[16px] md:text-body-lg uppercase text-ink font-bold leading-snug block">
                        {step.title}
                      </strong>
                      <p className="font-sans text-body-sm text-stone leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Form (Cols 7-12) */}
          <div className="lg:col-span-7 bg-paper p-6 sm:p-8 lg:p-12 border border-line mt-6 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
