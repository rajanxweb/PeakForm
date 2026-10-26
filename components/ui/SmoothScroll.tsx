"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — Global client component that intercepts internal hash anchor clicks.
 *
 * Ensures all <a href="#section"> and internal hash targets:
 * 1. Scroll smoothly to the target element using scrollIntoView
 * 2. Work reliably even if the browser URL hash already matches the target
 * 3. Keep Server Components clean and pure (no event handler serialization errors)
 */
export function SmoothScroll() {
  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Handle top / skip-link
      if (href === "#" || href === "#content-start") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== href) {
          window.history.pushState(null, "", href);
        }
      }
    }

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}

export default SmoothScroll;
