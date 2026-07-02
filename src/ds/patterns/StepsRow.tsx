import { Camera, PiggyBank, Send } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Grid,
  StepCard,
  IconCircle,
} from "@ds/primitives";

/**
 * StepsRow - the "three things you'll do" pattern. Used on / and /how-it-works.
 *
 * Restraint rule: 3 steps, 3 lines of body, 3 visuals. Don't expand.
 */
export function StepsRow() {
  return (
    <Section background="canvas" spacing="base">
      <Container>
        <div className="text-center max-w-[42rem] mx-auto">
          <Eyebrow>How it works</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            Three taps. That's your side of it.
          </Heading>
          <Lede className="mt-4" align="center">
            Honestly, that's the whole app. Everything else (the sums, the
            deadlines, the HMRC bit) is us working away in the background, so
            you don't have to think about it.
          </Lede>
        </div>

        <Grid cols={{ base: 1, md: 3 }} gap={6} className="mt-12">
          <StepCard
            number={1}
            title="Snap a receipt"
            body="One tap. Standing in a hardware store with paint on your hands. We read the date, the amount, and who you paid."
            visual={
              <IconCircle size={56} tone="purple">
                <Camera className="h-7 w-7" strokeWidth={1.8} />
              </IconCircle>
            }
          />
          <StepCard
            number={2}
            title="See what you owe"
            body="Real money, in plain English. Updated as you go. No nasty surprise in January."
            visual={
              <div className="flex flex-col items-center gap-1">
                <PiggyBank
                  className="h-7 w-7 text-[var(--color-primary-700)]"
                  strokeWidth={1.8}
                />
                <p className="font-sans text-[26px] font-extrabold tracking-[-0.02em] text-[var(--color-primary-700)] leading-none">
                  £1,243
                </p>
                <p className="text-[11px] font-semibold text-[var(--color-success-700)]">
                  ▲ £42 since Mon
                </p>
              </div>
            }
          />
          <StepCard
            number={3}
            title="Hit the green button"
            body="When HMRC asks, we tell you. One tap and your quarterly update is gone, receipt and all."
            visual={
              <span
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-700)] px-4 py-2.5 text-white shadow-sm"
              >
                <Send className="h-4 w-4" strokeWidth={2.2} />
                <span className="font-semibold text-sm">Send to HMRC</span>
              </span>
            }
          />
        </Grid>
      </Container>
    </Section>
  );
}
