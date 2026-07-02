import { Cloud, Lock, MapPin } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Grid,
  Card,
  IconCircle,
} from "@ds/primitives";

/**
 * DataResidency - "where your data lives" trust block. Calms the
 * audience that's been told accounting software is American/scary.
 *
 * Three pillars: location (UK), provider (Microsoft Azure), encryption.
 */
export function DataResidency({
  background = "white",
}: {
  background?: "canvas" | "canvas-soft" | "white";
}) {
  return (
    <Section background={background} spacing="base" bordered>
      <Container>
        <div className="mx-auto max-w-[42rem] text-center">
          <Eyebrow>Your data</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            Where it lives, who can see it.
          </Heading>
          <Lede className="mt-4" align="center">
            Plain answers to the question every sole trader asks before
            they hand over their books to an app.
          </Lede>
        </div>

        <Grid cols={{ base: 1, md: 3 }} gap={5} className="mt-12">
          <Card variant="bordered" padding="md">
            <IconCircle size={44} tone="purple">
              <MapPin className="h-5 w-5" strokeWidth={1.8} />
            </IconCircle>
            <h3 className="mt-4 text-[18px] font-bold tracking-[-0.015em] text-[var(--color-ink)]">
              Stored in the UK.
            </h3>
            <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
              Your records live in UK data centres. Never sent abroad,
              never sold to anyone, never used to train anything.
            </p>
          </Card>

          <Card variant="bordered" padding="md">
            <IconCircle size={44} tone="purple">
              <Cloud className="h-5 w-5" strokeWidth={1.8} />
            </IconCircle>
            <h3 className="mt-4 text-[18px] font-bold tracking-[-0.015em] text-[var(--color-ink)]">
              Microsoft Azure infrastructure.
            </h3>
            <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
              The same backbone the NHS and HMRC use. We don't have a
              cheaper, riskier setup - boring is the point.
            </p>
          </Card>

          <Card variant="bordered" padding="md">
            <IconCircle size={44} tone="purple">
              <Lock className="h-5 w-5" strokeWidth={1.8} />
            </IconCircle>
            <h3 className="mt-4 text-[18px] font-bold tracking-[-0.015em] text-[var(--color-ink)]">
              Encrypted in transit and at rest.
            </h3>
            <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
              Bank-level encryption. Even we can't read your records
              without your password - that's not a metaphor.
            </p>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
