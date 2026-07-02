import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Card,
} from "@ds/primitives";
import { Check, X } from "lucide-react";
import { cn } from "@ds/cn";

export type CompareLine = string;

/**
 * CompareBlock - the "today vs Ledgeraa" two-column comparison.
 * Honest, plain, works because our buyer's "today" is genuinely worse.
 *
 * Pattern rule: BEFORE column always neutral, AFTER column always brand-tinted.
 * Don't reverse them - the visual hierarchy is intentional.
 */
export function CompareBlock({
  eyebrow = "Why switch",
  heading = "Shoebox vs Ledgeraa",
  lede,
  beforeTitle = "Today",
  afterTitle = "With Ledgeraa",
  beforeLines,
  afterLines,
  background = "canvas",
}: {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  beforeTitle?: string;
  afterTitle?: string;
  beforeLines: CompareLine[];
  afterLines: CompareLine[];
  background?: "canvas" | "canvas-soft" | "white";
}) {
  return (
    <Section background={background} spacing="base">
      <Container>
        <div className="mx-auto max-w-[42rem] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
          {lede && (
            <Lede className="mt-4" align="center">
              {lede}
            </Lede>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {/* BEFORE */}
          <Card variant="bordered" padding="lg" className="bg-[var(--color-neutral-50)] border-[var(--color-neutral-200)]">
            <div className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
              {beforeTitle}
            </div>
            <ul className="mt-5 space-y-3.5">
              {beforeLines.map((line) => (
                <li key={line} className="flex items-start gap-3 text-[15px] text-[var(--color-ink-muted)]">
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-neutral-200)]">
                    <X className="h-3 w-3 text-[var(--color-neutral-600)]" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* AFTER */}
          <Card variant="tinted" padding="lg" className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-primary-700)]">
              {afterTitle}
            </div>
            <ul className="mt-5 space-y-3.5">
              {afterLines.map((line) => (
                <li
                  key={line}
                  className={cn(
                    "flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                  )}
                >
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-700)]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
