import type { InputHTMLAttributes } from "react";
import { cn } from "@ds/cn";

/**
 * Input - single visual variant, big tap target. Email-focused styling
 * (left-aligned, generous padding, soft 4px focus ring). For our audience,
 * inputs need to be obvious and forgiving on touch.
 */
export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "block w-full h-[60px]",
        "px-4 text-base",
        "bg-white",
        "rounded-lg border border-[var(--color-neutral-200)]",
        "text-[var(--color-ink)] placeholder:text-[var(--color-neutral-400)]",
        "transition-all duration-[var(--duration-fast)] ease-[var(--ease)]",
        "focus:outline-none focus:border-[var(--color-primary-500)]",
        "focus:ring-4 focus:ring-[color:var(--color-primary-500)]/15",
        "disabled:bg-[var(--color-neutral-50)] disabled:text-[var(--color-neutral-400)] disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}
