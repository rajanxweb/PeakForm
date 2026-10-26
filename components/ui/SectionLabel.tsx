import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps {
  number?: string;
  title: string;
  variant?: "light" | "dark";
  className?: string;
  fillRule?: boolean;
}

/**
 * SectionLabel — standard architectural section header rule.
 * Follows PeakForm Design System: mono label (01 — NAME) with 1px hairline rule.
 */
export function SectionLabel({
  number,
  title,
  variant = "light",
  className,
  fillRule = false,
}: SectionLabelProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span
        className={cn(
          "font-mono text-label uppercase tracking-wider select-none",
          isDark ? "text-stone-dark" : "text-stone"
        )}
      >
        {number ? `${number} — ${title}` : title}
      </span>
      <span
        className={cn(
          "h-[1px]",
          fillRule ? "flex-1" : "w-12",
          isDark ? "bg-line-dark" : "bg-line"
        )}
        aria-hidden="true"
      />
    </div>
  );
}

export default SectionLabel;
