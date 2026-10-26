import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  charCount?: number;
  maxCharCount?: number;
}

/**
 * Textarea — rectilinear multi-line input adhering to PeakForm Design System:
 * - Minimum height: 140px
 * - Radius: 0px (strictly square)
 * - Background: paper (#FBF9F4)
 * - Border: 1px field-border / ink
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      charCount,
      maxCharCount,
      id,
      required,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full">
        {(label || maxCharCount !== undefined) && (
          <div className="flex justify-between items-center mb-2">
            {label && (
              <label
                htmlFor={textareaId}
                className="font-mono text-label uppercase text-ink tracking-wider"
              >
                {label}
                {required && (
                  <span className="text-accent ml-1" aria-hidden="true">
                    *
                  </span>
                )}
              </label>
            )}
            {maxCharCount !== undefined && (
              <span className="font-mono text-label text-stone">
                {charCount ?? 0} / {maxCharCount}
              </span>
            )}
          </div>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full min-h-[140px] bg-paper p-4 font-sans text-body text-ink border resize-none",
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

Textarea.displayName = "Textarea";
export default Textarea;
