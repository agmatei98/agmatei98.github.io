import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  EmailCapture,
} from "@ds/primitives";

export type StatStripItem = {
  value: string;
  label: string;
};

/**
 * HeroCentered - single-column centered hero. The page's pitch is
 * the visual; no phone, no illustration. Optionally followed by a
 * small stat-strip ("Pre-launch · UK only · April 2026 deadline").
 *
 * Use when:
 *  - The headline is so important it shouldn't compete with imagery.
 *  - The page is utility-led (/pricing, /privacy).
 *  - We want a faster, lighter hero than HeroSplit.
 */
export function HeroCentered({
  eyebrow = "Pre-launch · UK only",
  headline,
  lede,
  ctaLabel = "Get early access",
  trustItems = ["No card needed", "UK-based", "Email only - no spam"],
  stats,
  children,
}: {
  eyebrow?: string;
  headline: string;
  lede: string;
  ctaLabel?: string;
  trustItems?: string[];
  stats?: StatStripItem[];
  children?: ReactNode;
}) {
  // Word-by-word reveal for the H1 (matches HeroSplit's signature animation).
  const words = headline.split(" ");

  return (
    <Section background="paper" spacing="lg">
      <Container width="default">
        <div className="mx-auto max-w-[40rem] text-center">
          <div className="reveal-fade flex justify-center">
            <Eyebrow withDot>{eyebrow}</Eyebrow>
          </div>

          <Heading level="display-xl" className="mt-6">
            {words.map((w, i) => (
              <span
                key={i}
                className="reveal-word"
                style={{ animationDelay: `${100 + i * 60}ms` }}
              >
                {w}
                {i < words.length - 1 && " "}
              </span>
            ))}
          </Heading>

          <div
            className="reveal-fade mt-6 flex justify-center"
            style={{ animationDelay: `${100 + words.length * 60 + 100}ms` }}
          >
            <Lede align="center">{lede}</Lede>
          </div>

          <div
            className="reveal-fade mt-9 mx-auto max-w-[28rem]"
            style={{ animationDelay: `${100 + words.length * 60 + 250}ms` }}
          >
            <EmailCapture ctaLabel={ctaLabel} />
            <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
              {trustItems.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < trustItems.length - 1 && (
                    <span className="mx-2 text-[var(--color-neutral-300)]" aria-hidden>
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Optional stat strip below the fold-line */}
        {stats && stats.length > 0 && (
          <div
            className="reveal-fade mt-16 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3 sm:divide-x sm:divide-[var(--color-neutral-200)]"
            style={{ animationDelay: "600ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 text-center">
                <div className="text-3xl font-extrabold tracking-[-0.03em] text-[var(--color-primary-700)] tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm font-medium text-[var(--color-ink-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {children}
      </Container>
    </Section>
  );
}
