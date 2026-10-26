import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "muted" | "ink" | "outline" | "telemetry";
  withDot?: boolean;
}

/**
 * Badge — boxed status chip / telemetry tag adhering to PeakForm Design System:
 * - Always JetBrains Mono (text-label), uppercase, 0.08em tracking
 * - Radius: 0px (strictly square)
 * - Accent tag: Solid Accent fill with Ink typography (never white on orange)
 */
export function Badge({
  className,
  variant = "muted",
  withDot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-mono text-label uppercase tracking-wider select-none px-2.5 py-1";

  const variantStyles = {
    // Active / Accent: Solid Orange with deep Ink text
    accent: "bg-accent text-ink font-bold border-none",
    // Muted: Bone background with 1px hairline border and Stone text
    muted: "bg-bone text-stone border border-line",
    // Deep Ink: Heavy Ink fill with Bone text
    ink: "bg-ink text-bone border-none",
    // Clean Outline: Transparent with 1px hairline
    outline: "bg-transparent text-stone border border-line",
    // Telemetry: Ink container with 6px orange square bullet
    telemetry: "bg-ink text-bone border-none",
  }[variant];

  return (
    <span className={cn(baseStyles, variantStyles, className)} {...props}>
      {(withDot || variant === "telemetry") && (
        <span
          className="w-1.5 h-1.5 bg-accent shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
