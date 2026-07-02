import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
} from "@ds/primitives";

/**
 * HeroQuiet - H1 + lede + optional inline children. No CTA, no visual.
 * The most restrained hero in the family - for /privacy, /terms, error
 * pages, or any utility surface where the page IS the message.
 *
 * Differs from HeroSimple: HeroSimple has CTA-shaped slot expectations
 * (and a children slot below the lede). HeroQuiet is just three text
 * elements, narrowed.
 */
export function HeroQuiet({
  eyebrow,
  headline,
  lede,
  children,
}: {
  eyebrow?: string;
  headline: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <Section background="canvas" spacing="lg">
      <Container width="narrow">
        <div className="text-center">
          {eyebrow && (
            <div className="flex justify-center">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <Heading level="display-lg" className={eyebrow ? "mt-5" : undefined}>
            {headline}
          </Heading>
          {lede && (
            <Lede className="mt-5" align="center">
              {lede}
            </Lede>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </Section>
  );
}
