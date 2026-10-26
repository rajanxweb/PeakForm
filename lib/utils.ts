/**
 * Utility helpers for PeakForm.
 *
 * cn() — lightweight className merger.
 * Intentionally avoids clsx/tailwind-merge to keep dependencies lean;
 * add those packages and expand this function if conditional class logic grows.
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number with a unit suffix for display in metrics / telemetry.
 * e.g. formatMetric(82.5, "KG") → "82.5 KG"
 */
export function formatMetric(value: number, unit: string): string {
  return `${value} ${unit}`;
}
