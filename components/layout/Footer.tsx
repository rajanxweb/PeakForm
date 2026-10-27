import React from "react";
import { siteConfig } from "@/config/site-config";

/**
 * Footer — deep ink architectural anchor adhering to PeakForm Design System:
 * - Surface: Ink (#141412) with bone/stone typography
 * - Clean 1px hairline dividers (#34322D)
 * - 4-column structured ledger
 * - All hash links use native <a> + scrollIntoView (Next.js Link breaks same-page scrolling).
 */

export function Footer() {
  return (
    <footer className="w-full bg-ink text-bone border-t border-line-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Wordmark & Bio */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-accent shrink-0" aria-hidden="true" />
              <span className="font-display text-[22px] font-extrabold tracking-tighter uppercase text-bone">
                {siteConfig.footer.wordmark}
              </span>
            </div>
            <p className="font-sans text-body-sm text-stone-dark leading-relaxed max-w-[28ch]">
              {siteConfig.footer.bio}
            </p>
          </div>

          {/* Col 2: Programs */}
          <div>
            <h4 className="font-mono text-label uppercase text-stone-dark mb-4 tracking-wider">
              {siteConfig.footer.programsTitle}
            </h4>
            <ul className="space-y-2 font-sans text-body-sm text-bone">
              {siteConfig.footer.programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-mono text-label uppercase text-stone-dark mb-4 tracking-wider">
              {siteConfig.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 font-sans text-body-sm text-bone">
              {siteConfig.footer.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Channels */}
          <div>
            <h4 className="font-mono text-label uppercase text-stone-dark mb-4 tracking-wider">
              {siteConfig.footer.channelsTitle}
            </h4>
            <ul className="space-y-2 font-sans text-body-sm text-bone">
              {siteConfig.footer.channels.map((channel) => (
                <li key={channel.label}>
                  {channel.isExternal ? (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={channel.ariaLabel}
                      className="hover:text-accent transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus"
                    >
                      {channel.label}
                    </a>
                  ) : (
                    <a
                      href={channel.href}
                      aria-label={channel.ariaLabel}
                      className="hover:text-accent transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus"
                    >
                      {channel.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-line-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-label uppercase text-stone-dark">
            {siteConfig.footer.copyright}
          </p>
          <p className="font-mono text-label uppercase text-stone">
            {siteConfig.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
