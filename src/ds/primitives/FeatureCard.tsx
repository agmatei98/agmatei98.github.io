import type { ReactNode } from "react";
import { Card } from "./Card";
import { IconCircle } from "./IconCircle";
import { Heading } from "./Heading";
import { cn } from "@ds/cn";

/**
 * FeatureCard - small, icon-led card for the /how-it-works features grid.
 * Lighter than StepCard - no number chip, no large visual slot.
 */
export function FeatureCard({
  icon,
  title,
  body,
  className,
}: {
  icon: ReactNode;
  title: string;
  body: ReactNode;
  className?: string;
}) {
  return (
    <Card variant="default" padding="md" interactive className={cn("flex flex-col h-full", className)}>
      <IconCircle size={44}>{icon}</IconCircle>
      <Heading level="h4" className="mt-4">
        {title}
      </Heading>
      <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">{body}</p>
    </Card>
  );
}
