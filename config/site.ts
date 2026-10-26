/**
 * PeakForm site configuration.
 * Single source of truth for nav links, social handles, contact details, etc.
 */

export const siteConfig = {
  name: "PeakForm",
  description:
    "High-performance athletic coaching. Personalized strength training built around your life.",
  url: "https://peakform.co",
  nav: [
    { label: "Programs", href: "#programs" },
    { label: "Coach",    href: "#coach" },
    { label: "Results",  href: "#results" },
    { label: "Pricing",  href: "#pricing" },
    { label: "FAQ",      href: "#faq" },
  ],
  cta: {
    primary: { label: "Book intro call", href: "#contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
