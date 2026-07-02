import type { ReactNode } from "react";
import { Avatar } from "./Avatar";
import { Quote } from "./Quote";
import { Card } from "./Card";
import { cn } from "@ds/cn";

/**
 * QuoteCard - pull-quote-as-card. Used for founder voice and (post-launch)
 * customer testimonials. Big serif quotation mark in the corner is the
 * visual signature.
 */
export function QuoteCard({
  children,
  cite,
  avatar,
  initial,
  className,
}: {
  children: ReactNode;
  cite: ReactNode;
  /** Photo URL. Falls back to initial. */
  avatar?: string;
  initial?: string;
  className?: string;
}) {
  return (
    <Card
      variant="tinted"
      padding="lg"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Big decorative quotation mark */}
      <div
        aria-hidden
        className="absolute -top-2 right-6 font-serif font-bold text-[140px] leading-none text-[var(--color-primary-200)] select-none pointer-events-none"
      >
        “
      </div>

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex-shrink-0">
          <Avatar src={avatar} initial={initial} size={96} />
        </div>
        <Quote cite={cite}>{children}</Quote>
      </div>
    </Card>
  );
}
