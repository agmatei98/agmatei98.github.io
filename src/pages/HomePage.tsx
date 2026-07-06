import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  ScanLine,
  Send,
  MessageCircle,
  LineChart,
  Check,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Nav,
  Footer,
  FeatureSplit,
  PricingPlans,
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
  Grid,
  IconCircle,
  Illustration,
} from "@ds/primitives";
import { cn } from "@ds/cn";
import { SIGNUP_URL, SIGNIN_URL } from "@/config/site";
import { InvoiceMock } from "@ds/patterns/visuals/InvoiceMock";
import { OtherIncomeMock } from "@ds/patterns/visuals/OtherIncomeMock";
import { InfoBoxMock } from "@ds/patterns/visuals/InfoBoxMock";
import { CsvImportMock } from "@ds/patterns/visuals/CsvImportMock";

const faqs: FaqEntry[] = [
  {
    question: "Is Ledgeraa really HMRC-recognised?",
    answer: (
      <>
        We're in the process of getting there. Ledgeraa is pending inclusion on
        HMRC's list of recognised Making Tax Digital software. HMRC recognises
        software; it doesn't endorse or recommend any one product, so
        "recognised" means exactly that: once we've passed their process, you can
        send your tax straight to them through us.
      </>
    ),
  },
  {
    question: "I'm not an accountant. Will I actually understand it?",
    answer: (
      <>
        Most likely, yes. We've done our best to strip out the accountant-speak,
        and every field has a plain-English note telling you what it needs and
        where to find it. If something's ever fiddly, we walk you through it. You
        don't need to know a single tax term to get your return done.
      </>
    ),
  },
  {
    question: "Do I still need an accountant?",
    answer: (
      <>
        Ledgeraa is a bookkeeping and submission tool. We handle everything as
        best we can, but your business is unique to you. If you're ever in doubt
        about anything, it's important to consult an accountant.
      </>
    ),
  },
  {
    question: "What if I'm not great with phones or computers?",
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
        run it from home. Most accounting software costs more because it has more
        salespeople than coders. You're paying for their sales team, not your tax
        return.
      </>
    ),
  },
  {
    question: "What's coming next?",
    answer: (
      <>
        Plenty, and it lands as it's ready, at no extra charge. On the way: a
        bank connection that matches your transactions as they happen, mileage
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
        <EverythingYouNeed />

        {/* ── Feature walkthrough: six compact features, alternating L/R ── */}
        <div id="features">
          <FeatureSplit
            compact
            eyebrow="Invoices & PDFs"
            heading="Professional invoices in seconds"
            lede="Fill in the details, choose a template, and you're ready to send. Your customer gets a clean, professional PDF with your name (and even your logo) on it."
            bullets={[
              "Professional PDF templates, ready to print and email",
              "Every detail easy to fill, all with plain-English explanations",
              "See at a glance what's been paid and what's still owed",
              "Set up repeat invoices and watch them appear automatically",
            ]}
            visual={<InvoiceMock />}
            orientation="right"
            background="canvas"
          />
          <FeatureSplit
            compact
            eyebrow="Expenses & receipt scanning"
            heading="You snap the receipt. We do the typing."
            lede="Whether you've just bought ingredients, materials, or shiny new equipment, all you need is a photo of your receipt. Ledgeraa reads it and fills in the details for you, so every expense is logged and ready for your tax return in seconds."
            bullets={[
              "Details captured automatically from a single photo of your receipt",
              "Just pick the right category and you're ready to submit",
              "Bank connection with automatic transaction matching (coming soon)",
              "Set recurring expenses once and let them log themselves",
            ]}
            footnote="Always double-check that the captured details match your receipt. Automated scanning can make mistakes."
            visual={
              <PhoneFrame>
                <ScreenMock variant="receipt" />
              </PhoneFrame>
            }
            orientation="left"
            background="white"
          />
          <div id="mtd">
          <FeatureSplit
            compact
            eyebrow="Making Tax Digital"
            heading="Don't let digital taxes scare you off doing what you do best."
            lede="Making Tax Digital is here, and it can feel daunting. We're here to make sure you don't let digital taxes put you off self-employment. We're (soon) HMRC-recognised and connected, and we guide you through every step. Your updates go straight to HMRC, which means no spreadsheets, no portals, no late-night panic."
            bullets={[
              "HMRC-recognised (coming soon). Your numbers never go to a third party",
              "Quarterly and yearly updates, fully guided in-app",
              "Nudges and notifications (if you want them) before every deadline, so nothing sneaks up",
            ]}
            visual={
              <PhoneFrame>
                <ScreenMock variant="mtd-done" />
              </PhoneFrame>
            }
            orientation="right"
            background="canvas"
          />
          </div>
          <FeatureSplit
            compact
            eyebrow="Real-time income logging"
            heading="Catch every bit of income, as it happens."
            lede="Cash job? One-off sale? A little rent on the side? Log “other income” the moment it lands, and year-end stops being a scramble through your memory."
            bullets={[
              "Record “other income” the moment it happens",
              "Add the extra expenses you'd otherwise forget",
              "Easy, effortless year-end declarations",
            ]}
            visual={<OtherIncomeMock />}
            orientation="left"
            background="white"
          />
          <FeatureSplit
            compact
            eyebrow="Plain English support"
            heading="Never wonder what a box means again."
            lede="Tax forms love a confusing label. We do not. Every field has a little plain-English note telling you exactly what's expected of you, and where to find it. So you're never stuck, never second-guessing, never Googling a term at 11pm (unless that's your thing)."
            bullets={[
              "Plain-English hints on every field",
              "Tells you where to find the answer, not just what it's called",
              "No accountant-speak, no guessing",
            ]}
            visual={<InfoBoxMock />}
            orientation="right"
            background="canvas"
          />
          <FeatureSplit
            compact
            eyebrow="Easy switching"
            heading="Already use another bookkeeping tool? Switching is easy."
            lede="We know there are many options out there, but Ledgeraa is made exclusively for sole traders like you. That's why we made it really easy to switch and bring all your past records to us, free of charge."
            bullets={[
              "Import invoices, sales records, or expenses as Excel or CSV files",
              "Easy matching of your data to our format",
              "Export your Ledgeraa logs any time, in any date range",
            ]}
            visual={<CsvImportMock />}
            orientation="left"
            background="white"
          />
        </div>

        {/* ── Pricing teaser ── */}
        <Section background="canvas" spacing="base" id="pricing">
          <Container>
            <div className="mx-auto max-w-[44rem] text-center">
              <Eyebrow>Pricing</Eyebrow>
              <Heading level="display-md" as="h2" className="mt-5">
                £4.99/month for everything you need. No increases, no 'special'
                offers.
              </Heading>
              <Lede className="mt-4" align="center">
                Three plans tailored to your needs and preferences, no add-ons,
                no nasty surprises.
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

        {/* ── FAQ ── */}
        <FaqAccordion
          eyebrow="Common questions"
          heading="Frequently Asked Questions"
          items={faqs}
          illustration={
            <Illustration
              src="/illustrations/idea.svg"
              className="max-w-[180px] md:max-w-[200px]"
            />
          }
        />

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
              We mind your tax. You mind your business.
            </Heading>
            <Lede className="mt-6">
              Everything you need as a sole trader. Nothing else.
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
              MTD-compliant plan at £4.99/month, always. No 'special' offers.
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
  const rowOne = [
    { icon: ScanLine, label: "Scan receipts" },
    { icon: Send, label: "Send invoices" },
    { icon: LineChart, label: "Get real-time tax estimates" },
  ];
  const rowTwo = [
    { icon: ShieldCheck, label: "HMRC recognition coming soon" },
    { icon: FileCheck2, label: "MTD-ready" },
    { icon: MessageCircle, label: "Plain English" },
  ];
  const renderRow = (items: { icon: LucideIcon; label: string }[]) => (
    <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
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
  );
  return (
    <Section background="canvas" spacing="none" bordered>
      <Container>
        <div className="flex flex-col items-center gap-4 py-6">
          {renderRow(rowOne)}
          {renderRow(rowTwo)}
        </div>
      </Container>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * EverythingYouNeed - overview of the whole scope (Money In / Money Out),
 * placed before the detailed feature walkthrough. Money In carries a green
 * accent so income pops; Money Out is muted neutral (still a check, not a
 * cross - spending isn't "bad", just visually secondary).
 * ──────────────────────────────────────────────────────────────────────── */
const MONEY_IN = [
  "Create and send professional invoices in seconds",
  "Record your daily sales in a couple of taps",
  "Log every other bit of income as it lands, including foreign property",
];

const MONEY_OUT = [
  "Scan expenses on the fly, all you need is the receipt",
  "Track your pension contributions as you pay them",
  "Categorise everything as you go, ready for your return",
];

function BulletColumn({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
  accent: "in" | "out";
}) {
  const isIn = accent === "in";
  const circleClass = isIn
    ? "bg-[var(--color-success-50)] text-[var(--color-success-700)] ring-1 ring-[var(--color-success-200)]"
    : "bg-[var(--color-neutral-50)] text-[var(--color-neutral-600)] ring-1 ring-[var(--color-neutral-200)]";
  const checkBg = isIn
    ? "bg-[var(--color-success-50)]"
    : "bg-[var(--color-neutral-100)]";
  const checkColor = isIn
    ? "text-[var(--color-success-700)]"
    : "text-[var(--color-neutral-600)]";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--color-neutral-200)] md:p-7">
      <div className="flex items-center gap-3">
        <IconCircle size={44} tone="neutral" className={circleClass}>
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
        </IconCircle>
        <h3 className="text-[18px] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
          {title}
        </h3>
      </div>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
          >
            <span
              className={cn(
                "mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full",
                checkBg
              )}
            >
              <Check className={cn("h-3 w-3", checkColor)} strokeWidth={3.5} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EverythingYouNeed() {
  return (
    <Section background="white" spacing="base" id="what-you-get">
      <Container>
        <div className="mx-auto max-w-[46rem] text-center">
          <Eyebrow>Complete Bookkeeping for Sole Traders</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            Everything you need as a sole trader. Nothing else.
          </Heading>
          <Lede className="mt-4" align="center">
            All your bookkeeping in one place, designed only for sole traders.
            Say goodbye to shoebox receipts. Instead, capture every transaction
            as it happens, whatever the transaction is.
          </Lede>
          <Illustration
            src="/illustrations/finance.svg"
            className="mx-auto mt-10 max-w-[240px] md:max-w-[280px]"
          />
        </div>

        <Grid cols={{ base: 1, md: 2 }} gap={6} className="mt-12">
          <BulletColumn
            icon={ArrowDownToLine}
            title="Money In"
            items={MONEY_IN}
            accent="in"
          />
          <BulletColumn
            icon={ArrowUpFromLine}
            title="Money Out"
            items={MONEY_OUT}
            accent="out"
          />
        </Grid>
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
            Let us take tax off your plate. Send your first invoice or snap your
            first receipt in the next ten minutes. Free to start, and we'll
            handle the hard part from here.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={SIGNUP_URL}
              variant="secondary"
              size="lg"
              trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
            >
              Start now
            </Button>
          </div>
          <p className="mt-4 text-sm text-[var(--color-primary-300)]">
            UK-based · Your data stays in the UK
          </p>
        </div>
      </Container>
    </Section>
  );
}
