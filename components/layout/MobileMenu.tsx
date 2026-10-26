"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu — Full-screen rectilinear mobile overlay.
 * Conforms to PeakForm Design System:
 * - Large display-md navigation links
 * - Strictly zero radius and 1px hairline dividing rules
 * - Focus trapped (Tab / Shift+Tab cycle)
 * - Esc closes the menu
 * - Body scroll locked while open
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key handler & focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const container = containerRef.current;
        if (!container) return;

        const focusableElements = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[100] bg-bone flex flex-col justify-between overflow-y-auto"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="h-[72px] border-b border-line px-4 sm:px-8 flex items-center justify-between shrink-0">
        <Link
          href="#"
          onClick={onClose}
          className="flex items-center gap-2 font-display text-[20px] font-bold tracking-tighter uppercase text-ink focus-visible:outline-3 focus-visible:outline-focus"
        >
          <span className="w-2.5 h-2.5 bg-accent" aria-hidden="true" />
          <span>{siteConfig.brand.name}</span>
        </Link>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="h-11 w-11 flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-bone transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus"
        >
          <X className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      {/* Main Nav Links Stack */}
      <nav className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-8 divide-y divide-line">
        {siteConfig.brand.nav.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-center justify-between py-5 font-display text-display-md uppercase text-ink hover:text-accent transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-focus"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-label text-stone">
                0{index + 1}
              </span>
              <span>{item.label}</span>
            </span>
            <ArrowUpRight
              className="w-6 h-6 text-stone group-hover:text-accent transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        ))}
      </nav>

      {/* Bottom CTA Block */}
      <div className="p-4 sm:px-8 pb-8 pt-4 border-t border-line shrink-0 space-y-4">
        <Button
          href={siteConfig.brand.cta.href}
          onClick={onClose}
          variant="primary"
          size="full"
          showArrow
        >
          {siteConfig.brand.cta.label}
        </Button>
        <p className="font-mono text-label text-stone text-center uppercase tracking-wider">
          {siteConfig.hero.note}
        </p>
      </div>
    </div>
  );
}

export default MobileMenu;
