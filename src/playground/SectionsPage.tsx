import {
  Camera,
  ChartBar,
  FileSpreadsheet,
  PiggyBank,
  Receipt,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  Container,
  Section,
  Heading,
  PhoneFrame,
  ScreenMock,
} from "@ds/primitives";
import {
  Logo,
  Nav,
  Footer,
  PromoBar,
  HeroSplit,
  HeroCentered,
  HeroFloating,
  HeroQuiet,
  AudienceStrip,
  StepsRow,
  PromisesRow,
  FeatureBento,
  FeatureSplit,
  FeatureStack,
  FeatureWalkthrough,
  StatStrip,
  SingleQuote,
  CompareBlock,
  PricingHero,
  HmrcBadgeBlock,
  DataResidency,
  CalloutCard,
  CtaBanner,
  MtdExplainerInline,
  FoundersBlock,
  FaqAccordion,
  BigCta,
} from "@ds/patterns";
import type { FaqEntry } from "@ds/patterns";

/**
 * SectionsPage - every section pattern, in order, in a single scrollable
 * page. Annotated with chip-labels showing which pattern is which, so
 * a future designer/dev can visually map "this thing → this component".
 *
 * NOTE: intentionally heavy. This page is a spec, not a marketing surface.
 */
export function SectionsPage() {
  return (
    <div className="bg-[var(--color-canvas)]">
      {/* Local header */}
      <Section background="canvas" spacing="sm" bordered>
        <Container>
          <div className="flex items-center justify-between">
            <a href="/" className="no-underline hover:no-underline">
              <Logo />
            </a>
            <span className="text-sm font-medium text-[var(--color-ink-muted)]">
              Section patterns - all variants
            </span>
            <div className="flex gap-3">
              <a href="/playground" className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]">
                ← Primitives
              </a>
              <a href="/" className="text-sm font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]">
                Homepage
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <PatternLabel name="<PromoBar>" />
      <PromoBar />

      <PatternLabel name="<Nav>" />
      <Nav current="/playground" />

      {/* HEROES */}
      <SectionGroup title="1 · Hero variants">
        <PatternLabel name="<HeroSplit> - homepage default" />
        <HeroSplit
          headline="Sort your tax in ten minutes a month."
          lede="Built for UK sole traders. MTD-ready for April 2026. £4.99 a month - no first-year discount, no surprises."
        />

        <PatternLabel name="<HeroCentered> - text-centred + optional stat strip" />
        <HeroCentered
          headline="The bookkeeping app you can use one-handed."
          lede="Built for tradespeople, market traders, side hustlers. Plain English, phone-first, MTD-ready."
          stats={[
            { value: "April 2026", label: "Mandatory MTD start" },
            { value: "£30,000", label: "Threshold from April 2027" },
            { value: "£4.99/mo", label: "Forever - no upgrade tier" },
          ]}
        />

        <PatternLabel name="<HeroFloating> - phone overlaps next section" />
        <HeroFloating
          headline="Bookkeeping that fits in your pocket."
          lede="See what Ledgeraa does in 30 seconds - without reading a feature list."
          screenVariant="home"
        />
        {/* Spacer to absorb the floating phone */}
        <Section background="canvas" spacing="none">
          <Container>
            <div className="h-32" />
          </Container>
        </Section>

        <PatternLabel name="<HeroQuiet> - text only, narrow" />
        <HeroQuiet
          eyebrow="Privacy"
          headline="Your data lives in the UK, encrypted, and stays yours."
          lede="The plain-English version of how we keep your records safe - and how you can take them back any time."
        />
      </SectionGroup>

      {/* SOCIAL / AUDIENCE */}
      <SectionGroup title="2 · Audience + social-proof">
        <PatternLabel name="<AudienceStrip> - purple-soft wash (was yellow, now neutral)" />
        <AudienceStrip />

        <PatternLabel name="<StatStrip> - light, regulatory facts" />
        <StatStrip
          intro="The April 2026 Making Tax Digital deadline is real, dated, and arriving. Here's what it means for sole traders."
          items={[
            { value: "April 2026", label: "Over £50,000" },
            { value: "April 2027", label: "Over £30,000" },
            { value: "April 2028", label: "Over £20,000" },
          ]}
        />

        <PatternLabel name="<StatStrip> - dark variant" />
        <StatStrip
          background="dark"
          items={[
            { value: "3.2 m", label: "UK sole traders" },
            { value: "46%", label: "Don't know what MTD is", hint: "HMRC research, 2025" },
            { value: "39%", label: "Find tax more stressful than starting their business" },
            { value: "£200", label: "Average accountant bill they're trying to avoid" },
          ]}
        />

        <PatternLabel name="<SingleQuote> - anchor testimonial" />
        <SingleQuote
          quote="It told me, in plain English, that I owed HMRC £318 - three months before my tax return was due. I'd never had a number that wasn't a guess."
          attribution="Mark"
          role="Painter-decorator"
          city="Stoke"
          avatarInitial="M"
        />
      </SectionGroup>

      {/* FEATURES */}
      <SectionGroup title="3 · Feature sections">
        <PatternLabel name="<StepsRow> - numbered steps (homepage)" />
        <StepsRow />

        <PatternLabel name="<FeatureStack> - n-up icon row, no numbers" />
        <FeatureStack
          heading="What you get for £4.99."
          lede="Everything below comes in the £4.99/mo plan. No add-ons, no upgrade tier."
          features={[
            {
              id: "receipts",
              icon: <Camera className="h-5 w-5" />,
              title: "Receipt scanning",
              body: "Snap, we read, you confirm. Works in 10 seconds with paint on your hands.",
            },
            {
              id: "mileage",
              icon: <Wrench className="h-5 w-5" />,
              title: "Mileage tracking",
              body: "HMRC's flat-rate, calculated as you drive. No spreadsheets, no fiddly logbooks.",
            },
            {
              id: "invoices",
              icon: <Send className="h-5 w-5" />,
              title: "Invoices",
              body: "Send by text, WhatsApp or email. Marked paid the moment your bank shows it.",
            },
            {
              id: "tax",
              icon: <PiggyBank className="h-5 w-5" />,
              title: "'Set aside' tax figure",
              body: "Updated as you go. No nasty January surprise.",
            },
            {
              id: "mtd",
              icon: <FileSpreadsheet className="h-5 w-5" />,
              title: "MTD updates",
              body: "Quarterly updates and year-end Self Assessment, sent direct to HMRC.",
            },
            {
              id: "reports",
              icon: <ChartBar className="h-5 w-5" />,
              title: "Plain reports",
              body: "Money in, money out, profit. One screen. No ledgers, no journal entries.",
            },
          ]}
          columns={3}
        />

        <PatternLabel name="<FeatureSplit> - single feature, side-by-side" />
        <FeatureSplit
          eyebrow="Capture"
          heading="Snap it. We'll do the rest."
          lede="Most receipts are read in under three seconds. The few that aren't, you correct in two taps."
          bullets={[
            "Reads date, amount, supplier, VAT - automatically",
            "Categorises against HMRC's SA103 boxes for you",
            "Works offline. Syncs when you've got signal again",
            "Search any receipt by who or what, two years back",
          ]}
          visual={
            <PhoneFrame>
              <ScreenMock variant="receipt" />
            </PhoneFrame>
          }
          orientation="right"
        />

        <PatternLabel name="<FeatureSplit> - orientation=&quot;left&quot;" />
        <FeatureSplit
          eyebrow="File"
          heading="One green button, four times a year."
          lede="When HMRC asks for an update, we tell you. You tap once. We send the figures and bring back the receipt."
          bullets={[
            "We remind you 7 days before each deadline",
            "One-tap send to HMRC, with a confirmation receipt",
            "Year-end Self Assessment included - no upsell",
            "Late? We tell you exactly what to do next, calmly",
          ]}
          visual={
            <PhoneFrame>
              <ScreenMock variant="mtd-done" />
            </PhoneFrame>
          }
          orientation="left"
          background="canvas-soft"
        />

        <PatternLabel name="<FeatureBento> - asymmetric grid, Linear-style" />
        <FeatureBento
          heading="One app. The whole job."
          lede="Six features that cover what a UK sole trader actually does. Nothing for limited companies, nothing for landlords with twelve properties."
          cells={[
            {
              id: "snap",
              icon: <Camera className="h-5 w-5" />,
              title: "Snap a receipt",
              body: "Photograph it once. We read it, file it, never lose it.",
              tone: "feature",
              span: "wide",
              visual: (
                <Sparkles
                  className="h-12 w-12 text-[var(--color-primary-500)]"
                  strokeWidth={1.4}
                />
              ),
            },
            {
              id: "set-aside",
              icon: <PiggyBank className="h-5 w-5" />,
              title: "Tax set aside",
              body: "Real money, updated daily. No more January panic.",
            },
            {
              id: "mileage",
              icon: <Wrench className="h-5 w-5" />,
              title: "Mileage",
              body: "HMRC's flat rate. Auto-calculated.",
            },
            {
              id: "invoice",
              icon: <Send className="h-5 w-5" />,
              title: "Invoice in 30 seconds",
              body: "Send by text, WhatsApp or email. Paid the moment your bank shows it.",
            },
            {
              id: "mtd",
              icon: <FileSpreadsheet className="h-5 w-5" />,
              title: "MTD ready",
              body: "Quarterly updates straight to HMRC. One green button.",
              tone: "dark",
              span: "wide",
              visual: (
                <Receipt
                  className="h-12 w-12 text-[var(--color-primary-300)]"
                  strokeWidth={1.4}
                />
              ),
            },
          ]}
        />

        <PatternLabel name="<FeatureWalkthrough> - alternating L/R tour" />
        <FeatureWalkthrough
          heading="From shoebox to filed, in three steps."
          lede="The whole tour, in three minutes. No accountant required."
          steps={[
            {
              id: "step-1",
              eyebrow: "Step 1",
              heading: "Snap a receipt.",
              lede: "Standing at the till, paint on your hands, signal patchy. We don't care.",
              bullets: [
                "Reads receipt in seconds",
                "Files against HMRC categories for you",
                "Works offline",
              ],
              visual: (
                <PhoneFrame>
                  <ScreenMock variant="receipt" />
                </PhoneFrame>
              ),
            },
            {
              id: "step-2",
              eyebrow: "Step 2",
              heading: "Watch the tax set-aside grow.",
              lede: "One number, one screen. The amount HMRC will want, in real money.",
              bullets: [
                "Updated as you snap and earn",
                "No nasty surprises in January",
                "Confidence, replacing dread",
              ],
              visual: (
                <PhoneFrame>
                  <ScreenMock variant="home" />
                </PhoneFrame>
              ),
            },
            {
              id: "step-3",
              eyebrow: "Step 3",
              heading: "Tap once. HMRC done.",
              lede: "We tell you when an update is due. You tap. We send. You're done.",
              bullets: [
                "Quarterly updates direct to HMRC",
                "Year-end Self Assessment included",
                "Confirmation receipt every time",
              ],
              visual: (
                <PhoneFrame>
                  <ScreenMock variant="mtd-done" />
                </PhoneFrame>
              ),
            },
          ]}
        />
      </SectionGroup>

      {/* PROMISES + COMPARE */}
      <SectionGroup title="4 · Promises + comparison">
        <PatternLabel name="<PromisesRow>" />
        <PromisesRow />

        <PatternLabel name="<CompareBlock> - today vs Ledgeraa" />
        <CompareBlock
          beforeLines={[
            "Carrier bag of receipts in the van",
            "Excel sheet you half-remember",
            "Panic in January",
            "£200 to a high-street accountant",
            "'Did I miss something?'",
          ]}
          afterLines={[
            "Photo of the receipt, two seconds",
            "One screen, one number",
            "One green button, four times a year",
            "£4.99 a month, forever",
            "'I'm done. HMRC's happy.'",
          ]}
        />
      </SectionGroup>

      {/* PRICING */}
      <SectionGroup title="5 · Pricing">
        <PatternLabel name="<PricingHero> - the giant £4.99 + twin lists" />
        <PricingHero
          included={[
            "Receipt scanning, unlimited",
            "Mileage tracking",
            "Invoices - text, WhatsApp, email",
            "Live 'set aside for tax' figure",
            "MTD quarterly updates",
            "Year-end Self Assessment",
            "Bank feed (when available)",
            "Read-only access for your accountant",
            "UK-based human help",
            "Cancel any time",
            "Your data, exportable any time",
            "Updates and new features - forever",
          ]}
          excluded={[
            "Per-user fees",
            "Payroll add-on",
            "Setup fee",
            "Cancellation fee",
            "Data export fee",
            "'Pro' tier upsells",
            "Mid-year price rises",
          ]}
        />
      </SectionGroup>

      {/* TRUST */}
      <SectionGroup title="6 · Trust">
        <PatternLabel name="<HmrcBadgeBlock> - applying state" />
        <HmrcBadgeBlock status="applying" />

        <PatternLabel name="<HmrcBadgeBlock> - recognised state (post-Oct-2026)" />
        <HmrcBadgeBlock
          status="recognised"
          recognisedSince="October 2026"
          govListingHref="https://www.gov.uk/"
        />

        <PatternLabel name="<DataResidency>" />
        <DataResidency />
      </SectionGroup>

      {/* INLINE / CTA */}
      <SectionGroup title="7 · Inline + CTA family">
        <PatternLabel name="<MtdExplainerInline>" />
        <MtdExplainerInline />

        <PatternLabel name="<CalloutCard> - tinted variant" />
        <CalloutCard
          heading="Be ready before the April 2026 deadline."
          body="Join the waitlist. We'll email you the day we open up - and a calm reminder when each MTD threshold drops."
          variant="tinted"
        />

        <PatternLabel name="<CalloutCard> - bordered (lighter) variant" />
        <CalloutCard
          heading="Want to read the plain-English MTD guide first?"
          body="No signup needed. We wrote the explainer we wished we'd had."
          ctaLabel="Read the guide"
          variant="bordered"
          background="canvas-soft"
        />

        <PatternLabel name="<CtaBanner> - tinted" />
        <CtaBanner
          text="Be the first to know when we open up. £4.99/month, forever."
          tone="tinted"
        />

        <PatternLabel name="<CtaBanner> - dark" />
        <CtaBanner
          text="Be the first to know when we open up. £4.99/month, forever."
          tone="dark"
        />

        <PatternLabel name="<FoundersBlock>" />
        <FoundersBlock />

        <PatternLabel name="<FaqAccordion>" />
        <FaqAccordion items={demoFaqs} />

        <PatternLabel name="<BigCta> - final CTA, dark aurora gradient (purple-only)" />
        <BigCta />
      </SectionGroup>

      <Footer />
    </div>
  );
}

/* ---- helpers --------------------------------------------------------- */

function SectionGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Section background="canvas" spacing="sm">
        <Container>
          <Heading level="display-md" as="h2" className="text-[var(--color-primary-700)]">
            {title}
          </Heading>
        </Container>
      </Section>
      {children}
    </>
  );
}

function PatternLabel({ name }: { name: string }) {
  return (
    <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
      <div className="my-6 flex items-center gap-3">
        <span className="inline-flex items-center rounded-md bg-[var(--color-neutral-950)] px-2.5 py-1 font-mono text-[12px] font-semibold text-white">
          {name}
        </span>
        <div className="h-px flex-1 bg-[var(--color-neutral-200)]" />
      </div>
    </div>
  );
}

const demoFaqs: FaqEntry[] = [
  {
    question: "Will this be ready in time for April 2026?",
    answer:
      "Yes - we're aiming for HMRC-recognised software status by October 2026, well before the April 2027 deadline that affects most sole traders.",
  },
  {
    question: "Do I still need an accountant?",
    answer:
      "If your tax is simple - receipts, invoices, mileage - Ledgeraa does the lot. If it's complicated, keep your accountant. They can read your records too, free.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You keep read-only access to your records, forever. Your data is yours. Export to CSV any time.",
  },
];
