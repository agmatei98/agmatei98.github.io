import { Check, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow, Heading, Lede, Button } from "@ds/primitives";
import { cn } from "@ds/cn";
import { PLANS, SIGNUP_URL, type MarketingPlan } from "@/config/site";

/**
 * PricingPlans - the three-tier plan cards (Free / Standard / Unlimited).
 *
 * The middle plan (`featured`) gets the brand highlight: primary ring, a
 * lifted position, and a "Most popular" badge in the app's amber accent.
 * Every CTA goes to the real app sign-up. Data comes from `@/config/site`
 * so the cards can never drift from the app's actual tiers.
 *
 * `compact` renders the homepage teaser variant (no section chrome, tighter).
 */
export function PricingPlans({
  eyebrow = "Pricing",
  heading = "One price when you’re ready. Free until then.",
  lede = "Start free, upgrade when Making Tax Digital kicks in. No first-year discount that doubles later - the price you see is the price you pay.",
  compact = false,
}: {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  compact?: boolean;
}) {
  const cards = (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-3",
        // Let the featured card sit slightly proud on desktop.
        "md:items-start"
      )}
    >
      {PLANS.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );

  if (compact) {
    return <div className="mt-12">{cards}</div>;
  }

  return (
    <Section background="canvas" spacing="base" id="pricing">
      <Container>
        <div className="mx-auto max-w-[44rem] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
          <Lede className="mt-4" align="center">
            {lede}
          </Lede>
        </div>
        <div className="mt-14">{cards}</div>
      </Container>
    </Section>
  );
}

function PlanCard({ plan }: { plan: MarketingPlan }) {
  const featured = plan.featured;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl p-7 md:p-8",
        featured
          ? "bg-white shadow-xl ring-2 ring-[var(--color-primary-500)] md:-mt-3 md:pb-10"
          : "bg-white shadow-sm ring-1 ring-[var(--color-neutral-200)]"
      )}
    >
      {featured && (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2",
            "rounded-full bg-[var(--color-accent)] px-3 py-1",
            "text-[12px] font-bold uppercase tracking-[0.05em] text-white shadow-sm"
          )}
        >
          Most popular
        </span>
      )}

      <h3 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[var(--color-primary-700)]">
        {plan.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-sans text-[3rem] font-extrabold leading-none tracking-[-0.03em] text-[var(--color-ink)] tabular-nums">
          {plan.priceMain}
        </span>
        {plan.priceCadence && (
          <span className="text-[15px] font-medium text-[var(--color-ink-muted)]">
            {plan.priceCadence}
          </span>
        )}
      </div>

      <p className="mt-3 min-h-[2.75em] text-[15px] text-[var(--color-ink-muted)]">
        {plan.tagline}
      </p>

      <Button
        href={SIGNUP_URL}
        variant={featured ? "primary" : "secondary"}
        size="md"
        block
        trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
        className="mt-6"
      >
        {plan.ctaLabel}
      </Button>

      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
          >
            <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-700)]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.note && (
        <p className="mt-6 border-t border-[var(--color-neutral-100)] pt-4 text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
          {plan.note}
        </p>
      )}
    </div>
  );
}
