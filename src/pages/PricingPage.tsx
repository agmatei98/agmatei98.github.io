import { ArrowRight } from "lucide-react";
import {
  Nav,
  Footer,
  PricingPlans,
  PricingTable,
  FaqAccordion,
} from "@ds/patterns";
import type { FaqEntry } from "@ds/patterns";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Button,
} from "@ds/primitives";
import { SIGNUP_URL } from "@/config/site";

const pricingFaqs: FaqEntry[] = [
  {
    question: "Do I need a card to start on Free?",
    answer: (
      <>
        No. Free is genuinely free, forever: no card, no trial timer. You only
        add a card if and when you move to a paid plan.
      </>
    ),
  },
  {
    question: "Can I switch plans later?",
    answer: (
      <>
        Any time, in a couple of taps. Start on Free, move to Standard when
        Making Tax Digital applies to you, jump to Unlimited if you scan a lot
        of receipts. Changes take effect straight away.
      </>
    ),
  },
  {
    question: "What happens if I stop paying?",
    answer: (
      <>
        You keep read-only access to your records forever. It's your data, not
        ours. You can export everything at any time, on any plan.
      </>
    ),
  },
  {
    question: "Is Making Tax Digital included?",
    answer: (
      <>
        Yes. Full MTD submission to HMRC is included on every paid plan
        (Standard and Unlimited), with no add-on fees. Ledgeraa is
        HMRC-recognised software.
      </>
    ),
  },
  {
    question: "Do new features cost extra?",
    answer: (
      <>
        No. What's on the way (a bank connection that matches your transactions,
        mileage tracking, payroll, and accountant access) lands on your plan as
        it's ready, at no extra charge. The price you signed up at is the price
        you keep.
      </>
    ),
  },
  {
    question: "Why so much cheaper than the big names?",
    answer: (
      <>
        Two founders, no investors, no sales team. We built the app and we run
        it. Most accounting software costs more because it has more salespeople
        than engineers.
      </>
    ),
  },
];

export function PricingPage() {
  return (
    <>
      <Nav current="/pricing" />

      <main>
        {/* Header */}
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Simple, honest pricing</Eyebrow>
              <Heading level="display-lg" className="mt-6">
                Free to start. £5 when tax gets real.
              </Heading>
              <Lede className="mt-5" align="center">
                Three plans, no add-ons, no first-year discount that doubles in
                year two. The price you see is the price you pay.
              </Lede>
              <div className="mt-8 flex justify-center">
                <Button
                  href={SIGNUP_URL}
                  variant="primary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Start free, no card needed
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Three plan cards (no extra section chrome - header above sets context) */}
        <Section background="canvas" spacing="sm">
          <Container>
            <PricingPlans compact />
          </Container>
        </Section>

        {/* Full comparison table */}
        <PricingTable />

        {/* Pricing FAQ */}
        <FaqAccordion
          eyebrow="Pricing questions"
          heading="What people ask before they upgrade."
          items={pricingFaqs}
        />

        {/* Exit CTA */}
        <Section background="dark" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Heading level="display-lg" as="h2" className="text-white">
                Start free today.
              </Heading>
              <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
                Send your first invoice in minutes and let us worry about the
                tax. Stay free as long as you like, and upgrade only when Making
                Tax Digital applies to you.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  href={SIGNUP_URL}
                  variant="secondary"
                  size="lg"
                  trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
                >
                  Create your free account
                </Button>
              </div>
              <p className="mt-4 text-sm text-[var(--color-primary-300)]">
                No card needed · UK-based · Your data stays in the UK
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
