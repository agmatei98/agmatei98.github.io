import type { ReactNode } from "react";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { cn } from "@ds/cn";

/**
 * StepCard - the numbered step card used by StepsRow.
 *
 * Props:
 *  - number: the step index, rendered in a circular Eyebrow-toned chip
 *  - title:  short verb-led heading
 *  - body:   short prose, 2-3 lines
 *  - visual: optional slot for the small visual illustration / mock
 */
export function StepCard({
  number,
  title,
  body,
  visual,
  className,
}: {
  number: number;
  title: string;
  body: ReactNode;
  visual?: ReactNode;
  className?: string;
}) {
  return (
    <Card variant="default" padding="md" interactive className={cn("flex flex-col h-full", className)}>
      <span
        className={cn(
          "inline-flex items-center justify-center",
          "h-10 w-10 rounded-full",
          "bg-[var(--color-primary-50)] text-[var(--color-primary-700)]",
          "ring-1 ring-[var(--color-primary-100)]",
          "text-base font-bold tabular-nums"
        )}
        aria-hidden
      >
        {number}
      </span>

      <Heading level="h3" className="mt-5">
        {title}
      </Heading>
      <p className="mt-2 text-[var(--color-ink-muted)]">{body}</p>

      {visual && (
        <div className="mt-6 grid place-items-center rounded-xl bg-[var(--color-canvas-soft)] ring-1 ring-[var(--color-neutral-100)] p-6 min-h-[140px]">
          {visual}
        </div>
      )}
    </Card>
  );
}
