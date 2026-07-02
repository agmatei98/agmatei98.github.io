import {
  Container,
  Section,
  Heading,
  EmailCapture,
} from "@ds/primitives";

/**
 * BigCta - the page's exit ramp. Lives at the bottom of every page.
 * Uses the dark "aurora" background - one of only two places that
 * gradient appears on the entire site.
 */
export function BigCta({
  heading = "Don't get stuck in shoeboxes.",
  body = "Be the first to know when we open up. We send one email a month - what we built, what's coming. No upsells.",
  ctaLabel = "Get early access",
  trustItems = ["No card needed", "UK-based", "Email only - no spam"],
}: {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  trustItems?: string[];
}) {
  return (
    <Section background="dark" spacing="lg">
      <Container width="narrow">
        <div className="text-center">
          <Heading
            level="display-lg"
            as="h2"
            className="text-white"
          >
            {heading}
          </Heading>
          <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
            {body}
          </p>

          <div className="mt-10 mx-auto max-w-[28rem]">
            <EmailCapture ctaLabel={ctaLabel} tone="dark" />

            <p className="mt-4 text-sm text-[var(--color-primary-300)]">
              {trustItems.map((item, i) => (
                <span key={i}>
                  {item}
                  {i < trustItems.length - 1 && (
                    <span className="mx-2 text-[var(--color-primary-700)]" aria-hidden>
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
