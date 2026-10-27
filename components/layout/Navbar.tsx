import React from "react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-bone border-b border-line">
      <div className="max-w-[1440px] h-full mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#content-start"
          aria-label="PeakForm - Return to top"
          className="flex items-center gap-2 group focus-visible:outline-3 focus-visible:outline-focus select-none cursor-pointer"
        >
          <svg
            aria-hidden="true"
            className="w-7 h-7 fill-accent shrink-0 transition-transform duration-150 group-hover:scale-105"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 19.5H7.5L12 11.5L16.5 19.5H22L12 2Z" />
          </svg>
          <span className="font-display text-[22px] font-extrabold tracking-tighter uppercase text-ink group-hover:text-accent transition-colors duration-150">
            {siteConfig.brand.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 h-full"
        >
          {siteConfig.brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="h-full flex items-center font-sans text-body text-stone hover:text-ink transition-colors duration-150 border-b-2 border-transparent hover:border-accent focus-visible:outline-3 focus-visible:outline-focus cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Header CTAs & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button
              href={siteConfig.brand.cta.href}
              variant="primary"
              size="sm"
              showArrow
            >
              {siteConfig.brand.cta.label}
            </Button>
          </div>

          {/* Full-Screen Mobile Drawer & Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
