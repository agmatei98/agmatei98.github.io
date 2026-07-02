import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Grid,
  FeatureCard,
} from "@ds/primitives";

export type FeatureStackItem = {
  id: string;
  icon: ReactNode;
  title: string;
  body: ReactNode;
};

/**
 * FeatureStack - n-up icon row of FeatureCard. Supports 3 or 4 columns
 * on desktop (default 3). Lighter than StepsRow (no numbering, no
 * embedded visual slot) - for the "what's in it" feature list at scale.
 */
export function FeatureStack({
  eyebrow = "What you get",
  heading,
  lede,
  features,
  columns = 3,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  features: FeatureStackItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <Section background="white" spacing="base" bordered>
      <Container>
        <div className="mx-auto max-w-[42rem] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
          {lede && (
            <Lede className="mt-4" align="center">
              {lede}
            </Lede>
          )}
        </div>

        <Grid
          cols={
            columns === 4
              ? { base: 1, md: 2, lg: 4 }
              : columns === 2
                ? { base: 1, md: 2 }
                : { base: 1, md: 3 }
          }
          gap={5}
          className="mt-12"
        >
          {features.map((f) => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title} body={f.body} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
