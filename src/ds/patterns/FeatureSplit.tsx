import type { ReactNode } from "react";
import { Check } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
} from "@ds/primitives";
import { cn } from "@ds/cn";

/**
 * FeatureSplit - single feature, side-by-side. Half text, half visual.
 * Configurable orientation: visual on the right (default) or left.
 *
 * Use when:
 *  - You're explaining ONE feature in depth (3–4 bullets max).
 *  - The visual is a real screenshot that earns its space.
 *  - Compose multiple FeatureSplits in a column with alternating
 *    orientation for the "Stripe-style" walkthrough effect.
 */
export function FeatureSplit({
  eyebrow,
  heading,
  lede,
  bullets,
  footnote,
  visual,
  orientation = "right",
  background = "canvas",
  compact = false,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  bullets?: string[];
  /** Small muted caveat/disclaimer under the bullets (e.g. a scanning note). */
  footnote?: string;
  /** The right-half (or left-half) content. Usually a screenshot or PhoneFrame. */
  visual: ReactNode;
  orientation?: "right" | "left";
  background?: "canvas" | "canvas-soft" | "white";
  /** Tighter vertical rhythm + gap, for stacking many blocks in one section. */
  compact?: boolean;
}) {
  return (
    <Section background={background} spacing={compact ? "sm" : "base"}>
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center lg:grid-cols-2",
            compact ? "gap-8 lg:gap-12" : "gap-12 lg:gap-16",
            orientation === "left" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Copy column */}
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading
              level="display-md"
              as="h2"
              className={eyebrow ? "mt-4" : undefined}
            >
              {heading}
            </Heading>
            {lede && <Lede className="mt-4">{lede}</Lede>}

            {bullets && bullets.length > 0 && (
              <ul className={cn(compact ? "mt-6" : "mt-7", "space-y-3.5")}>
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                  >
                    <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-100)]">
                      <Check
                        className="h-3 w-3 text-[var(--color-primary-700)]"
                        strokeWidth={3.5}
                      />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {footnote && (
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
                {footnote}
              </p>
            )}
          </div>

          {/* Visual column. A fixed-width, centred slot so every block's visual
              (card mock or phone frame) shares the same footprint and sits the
              same distance from the copy, on both sides and every breakpoint. */}
          <div className="flex justify-center">
            <div className="w-full max-w-[360px]">{visual}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
