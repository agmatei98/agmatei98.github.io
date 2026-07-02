import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
} from "@ds/primitives";

/**
 * HeroSimple - single-column hero. Used on /how-it-works, /pricing,
 * /about, /mtd. No phone mockup, no signup form - just eyebrow, H1,
 * lede, and (optionally) inline children for a CTA or extra slot.
 */
export function HeroSimple({
  eyebrow,
  headline,
  lede,
  align = "start",
  children,
}: {
  eyebrow?: string;
  headline: string;
  lede?: string;
  align?: "start" | "center";
  children?: ReactNode;
}) {
  return (
    <Section background="canvas" spacing="lg">
      <Container width={align === "center" ? "narrow" : "default"}>
        <div className={align === "center" ? "text-center" : ""}>
          {eyebrow && (
            <div className={align === "center" ? "flex justify-center" : ""}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}

          <Heading level="display-lg" className={eyebrow ? "mt-5" : undefined}>
            {headline}
          </Heading>

          {lede && (
            <Lede className="mt-5" align={align}>
              {lede}
            </Lede>
          )}

          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </Section>
  );
}
