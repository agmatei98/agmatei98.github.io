import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Variant = "default" | "tinted" | "soft" | "dark" | "bordered";
type Padding = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  default:
    "bg-white border border-[var(--color-neutral-100)] shadow-sm",
  tinted:
    "bg-[var(--color-primary-50)] border border-[var(--color-primary-100)]",
  soft:
    "bg-[var(--color-canvas-soft)] border border-[var(--color-primary-100)]",
  dark:
    "bg-[var(--color-primary-950)] text-white",
  bordered:
    "bg-white border border-[var(--color-neutral-200)]",
};

const paddings: Record<Padding, string> = {
  sm: "p-5",
  md: "p-6 md:p-7",
  lg: "p-8 md:p-10",
};

/**
 * Card - base surface primitive. Other card primitives compose this.
 *
 * `interactive` adds the signature site hover lift: translateY(-2px) and a
 * shadow shift sm → md over 220ms. **Nothing else hovers** on the site -
 * one consistent move, applied everywhere.
 */
export function Card({
  variant = "default",
  padding = "md",
  interactive,
  className,
  children,
  as: Tag = "div",
}: {
  variant?: Variant;
  padding?: Padding;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "section";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl",
        variants[variant],
        paddings[padding],
        interactive &&
          "transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </Tag>
  );
}
