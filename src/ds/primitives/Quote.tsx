import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/**
 * Quote - pull-quote primitive. Used for the founder voice block and,
 * post-launch, customer testimonials.
 */
export function Quote({
  cite,
  className,
  children,
}: {
  cite?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure className={cn("flex flex-col gap-4", className)}>
      <blockquote className="text-[length:var(--text-quote)] leading-[var(--text-quote--line-height)] font-sans font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="text-sm font-medium text-[var(--color-ink-muted)] not-italic">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
