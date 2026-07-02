import type { ReactNode } from "react";
import {
  Container,
  Section,
} from "@ds/primitives";
import { cn } from "@ds/cn";

export type StatStripItem = {
  value: string;
  label: string;
  /** Optional sub-line - e.g. an asterisked source. */
  hint?: string;
};

/**
 * StatStrip - 3 or 4 big numbers in a horizontal band. Used to convey
 * regulatory urgency or, post-launch, customer-volume social proof.
 *
 * Pre-launch tip: don't fake user counts. Use regulatory facts:
 *   { value: "April 2026", label: "Mandatory MTD start" }
 *   { value: "£30,000",    label: "Threshold from April 2027" }
 *   { value: "HMRC-recognised", label: "Listing Q4 2026" }
 */
export function StatStrip({
  items,
  background = "canvas-soft",
  intro,
}: {
  items: StatStripItem[];
  background?: "canvas" | "canvas-soft" | "white" | "dark";
  intro?: ReactNode;
}) {
  const isDark = background === "dark";
  return (
    <Section background={background} spacing="sm" bordered={!isDark}>
      <Container>
        {intro && (
          <div className="mb-10 text-center">
            <p
              className={cn(
                "mx-auto max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-pretty",
                isDark ? "text-[var(--color-primary-200)]" : "text-[var(--color-ink-muted)]"
              )}
            >
              {intro}
            </p>
          </div>
        )}

        <div
          className={cn(
            "grid grid-cols-1 gap-x-10 gap-y-8 sm:divide-x",
            items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3",
            isDark ? "sm:divide-white/10" : "sm:divide-[var(--color-neutral-200)]"
          )}
        >
          {items.map((stat) => (
            <div key={stat.label} className="px-2 text-center">
              <div
                className={cn(
                  "text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] tabular-nums",
                  isDark ? "text-white" : "text-[var(--color-primary-700)]"
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-medium",
                  isDark ? "text-[var(--color-primary-200)]" : "text-[var(--color-ink-muted)]"
                )}
              >
                {stat.label}
              </div>
              {stat.hint && (
                <div
                  className={cn(
                    "mt-1 text-xs",
                    isDark ? "text-white/50" : "text-[var(--color-neutral-500)]"
                  )}
                >
                  {stat.hint}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
