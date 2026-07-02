import type { ReactNode } from "react";
import { Container, Section, Eyebrow, Heading, Lede } from "@ds/primitives";
import { FeatureSplit } from "./FeatureSplit";

export type WalkthroughStep = {
  id: string;
  eyebrow?: string;
  heading: string;
  lede?: string;
  bullets?: string[];
  visual: ReactNode;
};

/**
 * FeatureWalkthrough - alternating L/R FeatureSplit blocks, with an
 * optional intro section. Stripe-style "the tour" pattern.
 *
 * Composes FeatureSplit; pattern of last resort if you need to deviate
 * (e.g. to insert a non-FeatureSplit block) - just compose your own
 * sequence directly. This is the nice default.
 */
export function FeatureWalkthrough({
  eyebrow = "How it works",
  heading,
  lede,
  steps,
}: {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  steps: WalkthroughStep[];
}) {
  return (
    <>
      {(heading || lede) && (
        <Section background="canvas" spacing="base">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow>{eyebrow}</Eyebrow>
              {heading && (
                <Heading level="display-md" as="h2" className="mt-5">
                  {heading}
                </Heading>
              )}
              {lede && (
                <Lede className="mt-4" align="center">
                  {lede}
                </Lede>
              )}
            </div>
          </Container>
        </Section>
      )}

      {steps.map((step, idx) => (
        <FeatureSplit
          key={step.id}
          eyebrow={step.eyebrow ?? `Step ${idx + 1}`}
          heading={step.heading}
          lede={step.lede}
          bullets={step.bullets}
          visual={step.visual}
          orientation={idx % 2 === 0 ? "right" : "left"}
          background={idx % 2 === 0 ? "canvas" : "canvas-soft"}
        />
      ))}
    </>
  );
}
