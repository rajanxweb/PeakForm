import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Shared variant + size maps ───────────────────────────────────────────────

const variantStyles = {
  /** Light section: Orange fill → hover Ink fill */
  primary: "bg-accent text-ink hover:bg-ink hover:text-bone border-none",
  /** Light section: Transparent with Ink border → hover Ink fill */
  secondary:
    "bg-transparent text-ink border-[1.5px] border-ink hover:bg-ink hover:text-bone",
  /** Dark section: Orange fill → hover Bone fill */
  "dark-primary":
    "bg-accent text-ink hover:bg-bone hover:text-ink border-none",
  /** Dark section: Transparent with Bone border → hover Bone fill */
  "dark-secondary":
    "bg-transparent text-bone border-[1.5px] border-bone hover:bg-bone hover:text-ink",
  /** Deep Ink fill → hover Accent */
  ink: "bg-ink text-bone hover:bg-accent hover:text-ink border-none",
} as const;

const sizeStyles = {
  sm: "h-[44px] px-5 text-[14px]",
  default: "h-[52px] px-6 text-[16px]",
  lg: "h-[56px] px-8 text-[16px]",
  full: "w-full h-[52px] px-6 text-[16px]",
} as const;

const baseStyles =
  "group inline-flex items-center justify-center font-display font-bold uppercase tracking-wider select-none " +
  "transition-[color,background-color,border-color,transform] duration-150 ease-out " +
  "active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed " +
  "focus-visible:outline-3 focus-visible:outline-focus focus-visible:outline-offset-2";

// ── Prop types ───────────────────────────────────────────────────────────────

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface BaseButtonProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// When href is provided → renders <Link> or <a>
interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  // Disallow native <button> props
  type?: never;
  disabled?: never;
}

// When href is omitted → renders <button>
interface NativeButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
  external?: never;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

// ── Component ────────────────────────────────────────────────────────────────

/**
 * Button — strictly rectilinear athletic trigger following PeakForm Design System.
 * - Radius: 0px (enforced globally)
 * - When `href` is supplied renders a Next.js `<Link>` (or `<a>` if external).
 * - When `href` is absent renders a native `<button>`.
 * - ArrowUpRight icon translates 2px up/right on hover.
 */
export function Button({
  variant = "primary",
  size = "default",
  showArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const arrow = showArrow && (
    <ArrowUpRight
      className="ml-2 w-[18px] h-[18px] shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
      strokeWidth={2}
      aria-hidden="true"
    />
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow}
    </>
  );

  // ── Link / anchor variant ──────────────────────────────────────────────────
  if ("href" in rest && rest.href !== undefined) {
    const { href, external, onClick, ...linkRest } = rest as LinkButtonProps;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
          {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  // ── Native button variant ─────────────────────────────────────────────────
  const { disabled, type = "button", ...buttonRest } =
    rest as NativeButtonProps;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...buttonRest}
    >
      {content}
    </button>
  );
}

Button.displayName = "Button";
export default Button;
