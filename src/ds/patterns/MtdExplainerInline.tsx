import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Button,
} from "@ds/primitives";

/**
 * MtdExplainerInline - the calm narrow-column MTD primer that lives mid-page.
 * Sends curious readers to /mtd for the full plain-English guide.
 */
export function MtdExplainerInline({
  href = "/mtd",
}: {
  href?: string;
}) {
  return (
    <Section background="canvas-cool" spacing="base" bordered>
      <Container width="narrow">
        <Eyebrow>Making Tax Digital</Eyebrow>
        <Heading level="display-md" as="h2" className="mt-5">
          What's "MTD" - and does it apply to you?
        </Heading>

        <div className="mt-6 space-y-5 text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-ink-muted)]">
          <p>
            Making Tax Digital is HMRC's new way of doing your tax. From{" "}
            <strong className="font-semibold text-[var(--color-ink)]">
              April 2026
            </strong>
            , if you're self-employed and earn over{" "}
            <strong className="font-semibold text-[var(--color-ink)]">
              £50,000
            </strong>
            , you'll need to keep your records on a phone or computer and send
            HMRC an update <strong className="font-semibold text-[var(--color-ink)]">four times a year</strong>.
          </p>
          <p>
            From April 2027, that drops to £30,000. From April 2028, £20,000.
            Most sole traders we know will be in by then.
          </p>
        </div>

        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            size="md"
            trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Read the plain-English MTD guide
          </Button>
        </div>
      </Container>
    </Section>
  );
}
