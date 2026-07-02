import type { ReactNode } from "react";
import { Heading } from "./Heading";
import { cn } from "@ds/cn";

/**
 * PromiseCard - the "three promises" block on the homepage.
 *
 * Visual signature: 4px coloured top-border ("divider tab") that says
 * "this is one of three." No card chrome - sits on whatever section
 * background is in play.
 */
export function PromiseCard({
  title,
  body,
  className,
}: {
  title: string;
  body: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "border-t-[3px] border-[var(--color-primary-700)]",
        "pt-6",
        className
      )}
    >
      <Heading level="h3">{title}</Heading>
      <p className="mt-3 text-[var(--color-ink-muted)]">{body}</p>
    </article>
  );
}
