import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  EmailCapture,
  PhoneFrame,
  ScreenMock,
} from "@ds/primitives";
import { cn } from "@ds/cn";

/**
 * HeroSplit - the homepage hero. Two-column on lg+, stacked on mobile.
 *
 * Visual signature:
 *  - Warm "paper" radial-bloom background (.bg-paper)
 *  - Massive Inter-extrabold H1 (display-xl), tight tracking
 *  - Word-by-word reveal animation on first paint (respects motion prefs)
 *  - Tilted phone mockup, the only 3D move on the site
 */
export function HeroSplit({
  eyebrow = "Pre-launch · UK only",
  headline,
  lede,
  ctaLabel = "Get early access",
  trustItems = ["No card needed", "UK-based", "Email only - no spam"],
}: {
  eyebrow?: string;
  /** Headline as plain text. Each word is wrapped in a span and revealed
   *  with a 40ms stagger. Use a non-breaking space (U+00A0) to keep word-pairs
   *  together if you don't want them to break across lines. */
  headline: string;
  lede: string;
  ctaLabel?: string;
  trustItems?: string[];
}) {
  // Split on space but keep "non-breaking space" hits as single units.
  const words = headline.split(" ");

  return (
    <Section background="paper" spacing="lg" className="overflow-hidden">
      <Container width="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left: copy + signup */}
          <div>
            <div className="reveal-fade">
              <Eyebrow withDot>{eyebrow}</Eyebrow>
            </div>

            <Heading level="display-xl" className="mt-6">
              {words.map((w, i) => (
                <span
                  key={i}
                  className={cn("reveal-word")}
                  style={{
                    animationDelay: `${100 + i * 60}ms`,
                  }}
                >
                  {w}
                  {i < words.length - 1 && " "}
                </span>
              ))}
            </Heading>

            <div
              className="reveal-fade mt-6"
              style={{ animationDelay: `${100 + words.length * 60 + 100}ms` }}
            >
              <Lede>{lede}</Lede>
            </div>

            <div
              className="reveal-fade mt-8 max-w-[28rem]"
              style={{ animationDelay: `${100 + words.length * 60 + 250}ms` }}
            >
              <EmailCapture ctaLabel={ctaLabel} />

              <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
                {trustItems.map((item, i) => (
                  <span key={i}>
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

          {/* Right: phone mockup */}
          <div
            className="reveal-fade flex justify-center lg:justify-end"
            style={{ animationDelay: "200ms" }}
          >
            <PhoneFrame tilt>
              <ScreenMock variant="home" />
            </PhoneFrame>
          </div>
        </div>
      </Container>
    </Section>
  );
}
