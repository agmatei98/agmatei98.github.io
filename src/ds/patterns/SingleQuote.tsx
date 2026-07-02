import {
  Container,
  Section,
  Eyebrow,
  Avatar,
} from "@ds/primitives";

/**
 * SingleQuote - one big customer/founder quote, one face, full-width band.
 * The "anchor" testimonial pattern. Works with one real customer; do NOT
 * use it with a placeholder or generic stock person.
 *
 * Pre-launch we use it for the founder-voice block on /about. Post-launch,
 * swap in a real customer.
 */
export function SingleQuote({
  eyebrow = "From the people who build it",
  quote,
  attribution,
  role,
  city,
  avatarSrc,
  avatarInitial,
  background = "canvas-soft",
}: {
  eyebrow?: string;
  quote: string;
  attribution: string;
  role?: string;
  city?: string;
  avatarSrc?: string;
  avatarInitial?: string;
  background?: "canvas" | "canvas-soft" | "white";
}) {
  return (
    <Section background={background} spacing="lg" bordered>
      <Container width="narrow">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>

          <blockquote className="mt-8 text-balance text-[clamp(1.5rem,3.6vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[var(--color-ink)]">
            <span className="text-[var(--color-primary-400)]" aria-hidden>
              “
            </span>
            {quote}
            <span className="text-[var(--color-primary-400)]" aria-hidden>
              ”
            </span>
          </blockquote>

          <figcaption className="mt-10 flex flex-col items-center gap-3">
            <Avatar
              src={avatarSrc}
              initial={avatarInitial ?? attribution[0]}
              alt={attribution}
              size={56}
            />
            <div className="text-center">
              <div className="font-semibold text-[var(--color-ink)]">
                {attribution}
              </div>
              {(role || city) && (
                <div className="text-sm text-[var(--color-ink-muted)]">
                  {role}
                  {role && city && " · "}
                  {city}
                </div>
              )}
            </div>
          </figcaption>
        </div>
      </Container>
    </Section>
  );
}
