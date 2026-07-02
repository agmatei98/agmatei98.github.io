import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  ScanLine,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  Nav,
  Footer,
  FeatureSplit,
  StepsRow,
  PricingPlans,
  CompareBlock,
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
  PhoneFrame,
  ScreenMock,
} from "@ds/primitives";
import { cn } from "@ds/cn";
import { SIGNUP_URL, SIGNIN_URL } from "@/config/site";
import { InvoiceMock } from "@ds/patterns/visuals/InvoiceMock";
import { OtherIncomeMock } from "@ds/patterns/visuals/OtherIncomeMock";
import { InfoBoxMock } from "@ds/patterns/visuals/InfoBoxMock";

const faqs: FaqEntry[] = [
  {
    question: "Is Ledgeraa really HMRC-recognised?",
    answer: (
      <>
        Yes. Ledgeraa is on HMRC's list of recognised Making Tax Digital
        software. HMRC recognises software; it doesn't endorse or recommend any
        one product, so "recognised" means exactly that: we've passed their
        process, and you can send your tax straight to them through us.
      </>
    ),
  },
  {
    question: "I'm not an accountant. Will I actually understand it?",
    answer: (
      <>
        That's the whole idea. There's no accountant-speak, and every screen has
        a plain-English note telling you what it needs and where to find it. If
        something's ever fiddly, we walk you through it. You don't need to know
        a single tax term to get your return done.
      </>
    ),
  },
  {
    question: "Do I still need an accountant?",
    answer: (
      <>
        For a straightforward sole-trader business (receipts, invoices, the odd
        bit of other income), Ledgeraa does the lot, so most people won't. If
        your tax is genuinely complicated, keep your accountant; they can read
        your records for free, and dedicated accountant access is coming soon.
      </>
    ),
  },
  {
    question: "What if I'm not great with phones?",
    answer: (
      <>
        You don't need to be. The app does one thing at a time: take a photo of
        a receipt, look at one number, tap one button. If you can use WhatsApp,
        you can use Ledgeraa.
      </>
    ),
  },
  {
    question: "How is it so much cheaper than the big names?",
    answer: (
      <>
        Two founders, no investors, no fancy office. We built the app, and we
        run it. Most accounting software costs more because it has more
        salespeople than coders. You're paying for their sales team, not your
        tax return.
      </>
    ),
  },
  {
    question: "What's coming next?",
    answer: (
      <>
        Plenty, and it lands as it's ready, at no extra charge. On the way: a
        bank connection that matches your transactions for you, mileage
        tracking, payroll, and dedicated accountant access. We're building the
        boring admin away, one piece at a time.
      </>
    ),
  },
  {
    question: "What happens to my data?",
    answer: (
      <>
        Your records live in the UK, encrypted, and we never sell them. If you
        ever stop paying, you keep read-only access forever. It's yours, not
        ours.
      </>
    ),
  },
];

export function HomePage() {
  return (
    <>
      <Nav current="/" />

      <main>
        <Hero />
        <TrustStrip />

        {/* ── Feature walkthrough: four features, alternating L/R ── */}
        <div id="features">
          <FeatureSplit
            eyebrow="Invoices & PDFs"
            heading="Send a proper invoice in under a minute."
            lede="Pick a template, add the job, send it. Your customer gets a clean, professional PDF with your name on it, not a scribbled note in a group chat, and you get back to the actual work."
            bullets={[
              "Professional PDF invoices, ready to email",
              "Templates that make a one-person business look the part",
              "See at a glance what's been paid and what's still owed",
            ]}
            visual={<InvoiceMock />}
            orientation="right"
            background="canvas"
          />
          <FeatureSplit
            eyebrow="Expenses & receipt scanning"
            heading="Snap the receipt. We do the typing."
            lede="Standing in the shop with paint on your hands? Take one photo. Ledgeraa reads the shop, the date, the amount and the category for you, so every expense is logged and ready for your tax return without you touching a keyboard."
            bullets={[
              "Photograph a receipt, we fill in the rest",
              "Shop, date, amount and category, sorted for you",
              "Bank connection with automatic transaction matching (coming soon)",
            ]}
            visual={
              <PhoneFrame>
                <ScreenMock variant="receipt" />
              </PhoneFrame>
            }
            orientation="left"
            background="canvas-soft"
          />
          <FeatureSplit
            eyebrow="Making Tax Digital"
            heading="The scary new HMRC thing? We handle it."
            lede="Making Tax Digital is here, and it worries a lot of people. It needn't. Ledgeraa is HMRC-recognised and connected, so your updates go straight to HMRC in the background, no spreadsheets, no portals, no late-night panic. Included in every paid plan."
            bullets={[
              "HMRC-recognised and connected end to end",
              "Your quarterly update sent in one tap",
              "We nudge you before every deadline, so nothing sneaks up",
            ]}
            visual={
              <PhoneFrame>
                <ScreenMock variant="mtd-done" />
              </PhoneFrame>
            }
            orientation="right"
            background="canvas"
          />
          <FeatureSplit
            eyebrow="Capture income all year"
            heading="Catch every bit of income, as it happens."
            lede="Cash job? One-off sale? A little rent on the side? Log “other income” the moment it lands, and year-end stops being a scramble through your memory. It's already done, sitting there waiting."
            bullets={[
              "Record “other income” the day it happens",
              "Add the extra expenses you'd otherwise forget",
              "Year-end is already sorted, all year round",
            ]}
            visual={<OtherIncomeMock />}
            orientation="left"
            background="canvas-soft"
          />
          <FeatureSplit
            eyebrow="Help on every screen"
            heading="Never wonder what a box means again."
            lede="Tax forms love a confusing label. Ledgeraa doesn't. Every field has a little plain-English note telling you exactly what it wants, and where to find it, so you're never stuck, never second-guessing, never Googling a term at 11pm."
            bullets={[
              "A plain-English hint on every field",
              "Tells you where to find the answer, not just what it's called",
              "No accountant-speak, no guessing",
            ]}
            visual={<InfoBoxMock />}
            orientation="right"
            background="canvas"
          />
        </div>

        {/* ── How it works ── */}
        <div id="how-it-works">
          <StepsRow />
        </div>

        {/* ── Pricing teaser ── */}
        <Section background="canvas" spacing="base" id="pricing">
          <Container>
            <div className="mx-auto max-w-[44rem] text-center">
              <Eyebrow>Pricing</Eyebrow>
              <Heading level="display-md" as="h2" className="mt-5">
                Free to start. £5 when tax gets real.
              </Heading>
              <Lede className="mt-4" align="center">
                Three plans, no add-ons, no nasty surprises. Stay free as long as
                you like, and only pay when Making Tax Digital actually applies
                to you.
              </Lede>
            </div>
            <PricingPlans compact />
            <div className="mt-10 text-center">
              <Button href="/pricing" variant="secondary" size="md">
                Compare all plans
              </Button>
            </div>
          </Container>
        </Section>

        {/* ── How we compare ── */}
        <CompareBlock
          eyebrow="Why switch"
          heading="The shoebox vs Ledgeraa"
          lede="Most sole traders are still doing tax the hard way, and dreading it. Here's what changes."
          beforeTitle="Doing it the old way"
          afterTitle="With Ledgeraa"
          beforeLines={[
            "Receipts in a shoebox, sorted every January in a panic",
            "Guessing what you owe until the bill lands",
            "Spreadsheets that don't talk to HMRC",
            "£30+/month to the big names for features you never touch",
          ]}
          afterLines={[
            "Every receipt read and filed the second you snap it",
            "See what you owe in real money, all year, with no January shock",
            "Your return sent straight to HMRC in one tap",
            "Free to start, and £5 when MTD applies to you",
          ]}
          background="canvas"
        />

        {/* ── MTD explainer (live-reframed) ── */}
        <MtdExplainer />

        {/* ── FAQ (before testimonials, per verified pattern) ── */}
        <FaqAccordion
          eyebrow="Common questions"
          heading="The things people ask first."
          items={faqs}
        />

        {/* ── Social proof placeholder - no fabricated stats ── */}
        {/* TODO: drop in real customer quotes when available (see plan). */}

        {/* ── Final CTA ── */}
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Hero - inline (drives to the live app sign-up, not an email waitlist).
 * Keeps the signature bg-paper wash + tilted phone mock.
 * ──────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <Section background="paper" spacing="lg" className="overflow-hidden">
      <Container width="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow withDot>For UK sole traders</Eyebrow>
            <Heading level="display-xl" className="mt-6">
              You mind your business. We mind your tax.
            </Heading>
            <Lede className="mt-6">
              Everything a sole trader needs. Nothing else.
              <br />
              Always plain English. <strong>Always £4.99 a month.</strong>
            </Lede>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={SIGNUP_URL}
                variant="primary"
                size="lg"
                trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
              >
                Get Started
              </Button>
              <Button href={SIGNIN_URL} variant="ghost" size="lg">
                Log In
              </Button>
            </div>
            <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
              Free to start, no card required.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame tilt>
              <ScreenMock variant="home" />
            </PhoneFrame>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * TrustStrip - hero-adjacent trust signals (highest-impact placement).
 * Compliance-safe wording: "HMRC-recognised", never "approved/endorsed".
 * ──────────────────────────────────────────────────────────────────────── */
function TrustStrip() {
  const items = [
    { icon: ScanLine, label: "Scan receipts" },
    { icon: Send, label: "Send invoices" },
    { icon: ShieldCheck, label: "HMRC-recognised" },
    { icon: FileCheck2, label: "MTD-ready" },
    { icon: MessageCircle, label: "Plain English help" },
  ];
  return (
    <Section background="canvas" spacing="none" bordered>
      <Container>
        <ul className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-10">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-[var(--color-neutral-700)]"
            >
              <Icon
                className="h-5 w-5 text-[var(--color-accent)]"
                strokeWidth={2}
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * MtdExplainer - short, anxiety-reducing "MTD is here" block.
 * ──────────────────────────────────────────────────────────────────────── */
function MtdExplainer() {
  return (
    <Section background="canvas-tinted" spacing="base" bordered id="mtd">
      <Container width="narrow">
        <div className="text-center">
          <Eyebrow>Making Tax Digital</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            MTD is coming. Don't panic, we've got it.
          </Heading>
          <Lede className="mt-4" align="center">
            Making Tax Digital changes how sole traders report to HMRC: digital
            records and updates through the year instead of one big return. It
            sounds like a headache, and everyone's a bit worried about it. With
            Ledgeraa there's nothing to dread. Keep snapping receipts as you go,
            and when HMRC wants an update, it's already sitting there ready to
            send.
          </Lede>
          <div className="mt-8 flex justify-center">
            <Button
              href={SIGNUP_URL}
              variant="primary"
              size="md"
              trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              Get MTD-ready
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * FinalCta - the page's exit ramp. Dark aurora, links to sign-up.
 * ──────────────────────────────────────────────────────────────────────── */
function FinalCta() {
  return (
    <Section background="dark" spacing="lg">
      <Container width="narrow">
        <div className={cn("text-center")}>
          <Heading level="display-lg" as="h2" className="text-white">
            Get back to the work you actually enjoy.
          </Heading>
          <p className="mx-auto mt-5 max-w-[36em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-primary-200)] text-pretty">
            Let us take the tax off your plate. Send your first invoice and snap
            your first receipt in the next ten minutes. Free to start, and we'll
            handle the hard part from here.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={SIGNUP_URL}
              variant="secondary"
              size="lg"
              trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
            >
              Start free
            </Button>
          </div>
          <p className="mt-4 text-sm text-[var(--color-primary-300)]">
            No card needed · UK-based · Your data stays in the UK
          </p>
        </div>
      </Container>
    </Section>
  );
}
