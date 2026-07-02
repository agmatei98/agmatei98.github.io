import { CheckCircle2, ShieldCheck } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Card,
} from "@ds/primitives";

/**
 * HmrcBadgeBlock - the regulatory trust pattern.
 *
 * Two states (controlled by `status`):
 *   - "applying": pre-recognition, "we're in the queue" framing
 *   - "recognised": post-Oct-2026, badge with serial / link to gov.uk listing
 *
 * Default copy is the "applying" state. Once recognition lands, swap
 * `status="recognised"` everywhere this block appears.
 */
export function HmrcBadgeBlock({
  status = "applying",
  recognisedSince,
  govListingHref,
}: {
  status?: "applying" | "recognised";
  recognisedSince?: string;
  govListingHref?: string;
}) {
  const isRecognised = status === "recognised";

  return (
    <Section background="canvas-soft" spacing="base" bordered>
      <Container width="narrow">
        <div className="text-center">
          <Eyebrow>HMRC compliance</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {isRecognised
              ? "HMRC-recognised software."
              : "Recognised by HMRC, by Q4 2026."}
          </Heading>
          <Lede className="mt-4" align="center">
            {isRecognised
              ? "We're on HMRC's official list of recognised Making Tax Digital software for sole traders."
              : "We're on HMRC's path to recognition. The listing goes live in Q4 2026 - well before April 2027 when most sole traders need it."}
          </Lede>
        </div>

        <Card
          variant="default"
          padding="lg"
          className="mt-10 mx-auto max-w-[520px]"
        >
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-[var(--color-primary-700)] text-white shadow-sm">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] font-bold text-[var(--color-ink)] tracking-[-0.015em]">
                  {isRecognised ? "Listed by HMRC" : "Application in progress"}
                </h3>
                {isRecognised && (
                  <CheckCircle2
                    className="h-4 w-4 text-[var(--color-success-600)]"
                    aria-hidden
                  />
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                {isRecognised && recognisedSince
                  ? `Recognised since ${recognisedSince}.`
                  : "Targeting Q4 2026. We'll publish our listing the day it lands."}
              </p>
              {govListingHref && (
                <a
                  href={govListingHref}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
                >
                  View on gov.uk →
                </a>
              )}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
