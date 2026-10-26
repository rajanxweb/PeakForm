import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Input — flat rectangular field adhering to PeakForm Design System:
 * - Height: 52px
 * - Radius: 0px (strictly square)
 * - Background: paper (#FBF9F4)
 * - Border: 1px field-border / ink
 * - High-contrast focus state with 3px outline
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-mono text-label uppercase text-ink tracking-wider mb-2"
          >
            {label}
            {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full h-[52px] bg-paper px-4 font-sans text-body text-ink border",
            "transition-colors duration-150 ease-out",
            "placeholder:text-stone/60",
            "focus:outline-none focus:border-ink focus-visible:outline-3 focus-visible:outline-focus focus-visible:outline-offset-2",
            error
              ? "border-error focus:border-error focus-visible:outline-error"
              : "border-ink hover:border-ink/80",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 font-sans text-body-sm text-error" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="mt-1.5 font-sans text-body-sm text-stone">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
