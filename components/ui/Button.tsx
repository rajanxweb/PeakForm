import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "dark-primary"
    | "dark-secondary"
    | "ink";
  size?: "default" | "sm" | "lg" | "full";
  showArrow?: boolean;
  href?: string;
  external?: boolean;
}

/**
 * Button — strictly rectilinear athletic trigger following PeakForm Design System.
 * - Radius: 0px (universal)
 * - Transitions: 150ms on color, background-color, transform only.
 * - ArrowUpRight icon translates 2px up and right on hover.
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      showArrow = false,
      href,
      external,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-display font-bold uppercase tracking-wider select-none " +
      "transition-[color,background-color,border-color,transform] duration-150 ease-out " +
      "active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed " +
      "focus-visible:outline-3 focus-visible:outline-focus focus-visible:outline-offset-2";

    const variantStyles = {
      // Primary (Light Section): Accent Orange fill with Ink text -> hover fills Ink with Bone text
      primary:
        "bg-accent text-ink hover:bg-ink hover:text-bone border-none",
      // Secondary (Light Section): Transparent with 1.5px Ink border -> hover fills Ink with Bone text
      secondary:
        "bg-transparent text-ink border-[1.5px] border-ink hover:bg-ink hover:text-bone",
      // Dark Section Primary: Accent Orange fill with Ink text -> hover fills Bone with Ink text
      "dark-primary":
        "bg-accent text-ink hover:bg-bone hover:text-ink border-none",
      // Dark Section Secondary: Transparent with 1.5px Bone border -> hover fills Bone with Ink text
      "dark-secondary":
        "bg-transparent text-bone border-[1.5px] border-bone hover:bg-bone hover:text-ink",
      // Ink Button (Hero / Form style): Deep Ink fill with Bone text -> hover fills Accent with Ink text
      ink:
        "bg-ink text-bone hover:bg-accent hover:text-ink border-none",
    }[variant];

    const sizeStyles = {
      sm: "h-[44px] px-5 text-[14px]",
      default: "h-[52px] px-6 text-[16px]",
      lg: "h-[56px] px-8 text-[16px]",
      full: "w-full h-[52px] px-6 text-[16px]",
    }[size];

    const arrowIcon = showArrow && (
      <ArrowUpRight
        className="ml-2 w-[18px] h-[18px] shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        strokeWidth={2}
        aria-hidden="true"
      />
    );

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variantStyles, sizeStyles, className)}
          >
            <span>{children}</span>
            {arrowIcon}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(baseStyles, variantStyles, sizeStyles, className)}
        >
          <span>{children}</span>
          {arrowIcon}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        {...props}
      >
        <span>{children}</span>
        {arrowIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
