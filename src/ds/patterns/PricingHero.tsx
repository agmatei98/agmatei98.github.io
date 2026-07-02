import { Check, X } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Lede,
  EmailCapture,
} from "@ds/primitives";

/**
 * PricingHero - the giant £4.99 + included/excluded twin lists.
 *
 * Visual signature: 7rem-tall price display in Inter 800, primary-700,
 * tracking -0.04em. Typography as image. The most distinctive page-load
 * on the site.
 */
export function PricingHero({
  eyebrow = "Pricing",
  amount = "£4.99",
  cadence = "a month, forever",
  yearlyNote = "Or £49 a year. Save £11.",
  pitch = "No tiers. No add-ons. No upgrade path. No first-year discount that doubles in year two.",
  ctaLabel = "Lock in £4.99 forever",
  included,
  excluded,
}: {
  eyebrow?: string;
  amount?: string;
  cadence?: string;
  yearlyNote?: string;
  pitch?: string;
  ctaLabel?: string;
  included: string[];
  excluded: string[];
}) {
  return (
    <Section background="canvas" spacing="lg">
      <Container width="default">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>

          {/* The big number */}
          <div className="mt-8 leading-[0.9]">
            <span className="font-sans font-extrabold tracking-[-0.04em] text-[var(--color-primary-700)] text-[clamp(4rem,16vw,8.5rem)] tabular-nums">
              {amount}
            </span>
            <div className="mt-3 text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold text-[var(--color-ink)] tracking-[-0.02em]">
              {cadence}
            </div>
          </div>

          <Lede className="mt-6" align="center">
            {pitch}
          </Lede>

          {yearlyNote && (
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              {yearlyNote}
            </p>
          )}

          <div className="mt-10 mx-auto max-w-[28rem]">
            <EmailCapture ctaLabel={ctaLabel} />
          </div>
        </div>

        {/* Included / excluded twin lists */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary-700)]">
              What's included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]">
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-700)]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
              What we don't charge for
            </h3>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-[var(--color-ink-muted)]"
                >
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-neutral-100)]">
                    <X className="h-3 w-3 text-[var(--color-neutral-500)]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
