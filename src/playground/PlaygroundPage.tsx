import { Camera, Heart, Wrench, Send } from "lucide-react";
import {
  Container,
  Section,
  Stack,
  Cluster,
  Grid,
  Heading,
  Lede,
  Eyebrow,
  Prose,
  Quote,
  Button,
  Input,
  EmailCapture,
  PhoneFrame,
  ScreenMock,
  IconCircle,
  Avatar,
  MetricStat,
  Card,
  StepCard,
  PromiseCard,
  FeatureCard,
  QuoteCard,
  FaqItem,
} from "@ds/primitives";
import { Logo, Footer } from "@ds/patterns";

/**
 * Playground - every primitive, every variant. The contract for a
 * future designer/dev: "if it's not in here, it doesn't exist yet."
 */
export function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)]">
      {/* Sticky local nav */}
      <nav className="sticky top-0 z-30 border-b border-[var(--color-neutral-100)] bg-[color:var(--color-canvas)]/85 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="no-underline hover:no-underline">
              <Logo />
            </a>
            <span className="text-sm font-medium text-[var(--color-ink-muted)]">
              Design system playground
            </span>
            <a href="/" className="text-sm font-semibold">
              ← Back to homepage
            </a>
          </div>
        </Container>
      </nav>

      {/* Title */}
      <Section background="paper" spacing="sm">
        <Container>
          <Eyebrow>Playground</Eyebrow>
          <Heading level="display-lg" className="mt-5">
            Ledgeraa marketing - design system
          </Heading>
          <Lede className="mt-4">
            Every primitive in the system, every variant, in isolation. If a
            section feels off, fix the primitive - never the page that uses it.
          </Lede>
        </Container>
      </Section>

      {/* COLOUR */}
      <PlayBlock title="1 · Colour tokens">
        <Stack gap={6}>
          <SwatchRow
            label="Primary"
            shades={[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]}
            varBase="--color-primary-"
          />
          <SwatchRow
            label="Neutral"
            shades={[0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]}
            varBase="--color-neutral-"
          />
          <Cluster gap={3}>
            <Swatch label="canvas" varName="--color-canvas" />
            <Swatch label="canvas-soft" varName="--color-canvas-soft" />
            <Swatch label="canvas-cool" varName="--color-canvas-cool" />
            <Swatch label="canvas-tinted" varName="--color-canvas-tinted" />
            <Swatch label="ink" varName="--color-ink" />
            <Swatch label="ink-muted" varName="--color-ink-muted" />
          </Cluster>
        </Stack>
      </PlayBlock>

      {/* TYPE */}
      <PlayBlock title="2 · Type ramp">
        <Stack gap={6}>
          <TypeRow label="display-xl · Inter 800 · hero only">
            <Heading level="display-xl">Sort your tax in ten minutes a month.</Heading>
          </TypeRow>
          <TypeRow label="display-lg · Inter 800 · big section heads">
            <Heading level="display-lg">Three things you'll do with it.</Heading>
          </TypeRow>
          <TypeRow label="display-md · Inter · default H2">
            <Heading level="display-md">Why we built this</Heading>
          </TypeRow>
          <TypeRow label="h2 · Inter · medium">
            <Heading level="h2">Common questions</Heading>
          </TypeRow>
          <TypeRow label="h3 · Inter">
            <Heading level="h3">Plain English, end to end.</Heading>
          </TypeRow>
          <TypeRow label="lede">
            <Lede>
              Built for UK sole traders. MTD-ready for April 2026. £4.99 a month -
              no first-year discount, no surprises.
            </Lede>
          </TypeRow>
          <TypeRow label="body (default)">
            <p>
              Your data lives in the UK, encrypted, on Microsoft Azure. We never
              sell it. If you stop paying, you keep read-only access forever - it's
              yours, not ours.
            </p>
          </TypeRow>
          <TypeRow label="quote · Inter bold · pull-quote">
            <Quote cite="- Adrian, co-founder">
              I watched my dad spend every January in a panic over a carrier bag of
              receipts.
            </Quote>
          </TypeRow>
          <TypeRow label="prose (long-form)">
            <Prose>
              <p>
                Making Tax Digital is HMRC's new way of doing your tax. It applies
                to anyone who is <strong>self-employed</strong> and earns over a
                set amount.
              </p>
              <ul>
                <li>April 2026: over £50,000</li>
                <li>April 2027: over £30,000</li>
                <li>April 2028: over £20,000</li>
              </ul>
              <p>
                Read the <a href="#">plain-English MTD guide</a> for what you need
                to do, in real words.
              </p>
            </Prose>
          </TypeRow>
        </Stack>
      </PlayBlock>

      {/* EYEBROWS */}
      <PlayBlock title="3 · Eyebrows">
        <Cluster gap={3}>
          <Eyebrow>How it works</Eyebrow>
          <Eyebrow withDot>Pre-launch · UK only</Eyebrow>
          <Eyebrow tone="neutral">Making Tax Digital</Eyebrow>
        </Cluster>
      </PlayBlock>

      {/* BUTTONS */}
      <PlayBlock title="4 · Buttons">
        <Stack gap={5}>
          <Cluster gap={3}>
            <Button variant="primary" size="lg">
              Get early access
            </Button>
            <Button variant="primary" size="md">
              Get early access
            </Button>
            <Button variant="primary" size="sm">
              Read more
            </Button>
          </Cluster>
          <Cluster gap={3}>
            <Button variant="secondary" size="lg">
              Read the MTD guide
            </Button>
            <Button variant="secondary" size="md">
              Read the MTD guide
            </Button>
            <Button variant="secondary" size="sm">
              Cancel
            </Button>
          </Cluster>
          <Cluster gap={3}>
            <Button variant="ghost">Skip for now</Button>
            <Button variant="primary" size="md" disabled>
              Disabled
            </Button>
            <Button
              variant="primary"
              size="md"
              leading={<Heart className="h-4 w-4" />}
            >
              With leading icon
            </Button>
          </Cluster>
        </Stack>
      </PlayBlock>

      {/* INPUTS */}
      <PlayBlock title="5 · Inputs & Email capture">
        <Stack gap={5}>
          <div className="max-w-md">
            <Input placeholder="your@email.co.uk" />
          </div>
          <div className="max-w-lg">
            <EmailCapture />
          </div>
        </Stack>
      </PlayBlock>

      {/* PHONE + SCREENS */}
      <PlayBlock title="6 · Phone frames & screens">
        <Grid cols={{ base: 1, md: 3 }} gap={8}>
          <div>
            <Label>variant=&quot;home&quot;</Label>
            <PhoneFrame>
              <ScreenMock variant="home" />
            </PhoneFrame>
          </div>
          <div>
            <Label>variant=&quot;receipt&quot;</Label>
            <PhoneFrame>
              <ScreenMock variant="receipt" />
            </PhoneFrame>
          </div>
          <div>
            <Label>variant=&quot;mtd-done&quot;</Label>
            <PhoneFrame>
              <ScreenMock variant="mtd-done" />
            </PhoneFrame>
          </div>
        </Grid>

        <div className="mt-10">
          <Label>tilt=true (hero only)</Label>
          <div className="max-w-[340px]">
            <PhoneFrame tilt>
              <ScreenMock variant="home" />
            </PhoneFrame>
          </div>
        </div>
      </PlayBlock>

      {/* ICON CIRCLE & AVATAR */}
      <PlayBlock title="7 · Icon circles & avatars">
        <Stack gap={6}>
          <Cluster gap={4}>
            <IconCircle size={32} tone="purple">
              <Camera className="h-4 w-4" />
            </IconCircle>
            <IconCircle size={44} tone="purple">
              <Camera className="h-5 w-5" />
            </IconCircle>
            <IconCircle size={56} tone="purple">
              <Camera className="h-6 w-6" />
            </IconCircle>
            <IconCircle size={80} tone="purple">
              <Camera className="h-8 w-8" />
            </IconCircle>
            <IconCircle size={56} tone="lavender">
              <Wrench className="h-6 w-6" />
            </IconCircle>
            <IconCircle size={56} tone="neutral">
              <Send className="h-6 w-6" />
            </IconCircle>
          </Cluster>

          <Cluster gap={4} className="items-end">
            <Avatar initial="A" size={56} alt="Adrian" />
            <Avatar initial="A" size={96} alt="Adrian" />
            <Avatar initial="S" size={128} alt="Sam" />
          </Cluster>
        </Stack>
      </PlayBlock>

      {/* METRIC STAT */}
      <PlayBlock title="8 · Metric stat">
        <Cluster gap={6}>
          <MetricStat value="£4.99" label="per month" tone="primary" size="xl" />
          <MetricStat value="10 min" label="per month" size="lg" />
          <MetricStat value="£200" label="to a high-street accountant" tone="muted" size="md" />
        </Cluster>
      </PlayBlock>

      {/* CARDS */}
      <PlayBlock title="9 · Cards">
        <Grid cols={{ base: 1, md: 2 }} gap={6}>
          <Card variant="default">
            <strong className="font-semibold">Card · default</strong>
            <p className="mt-1 text-sm">White, soft border, light shadow.</p>
          </Card>
          <Card variant="tinted">
            <strong className="font-semibold">Card · tinted</strong>
            <p className="mt-1 text-sm">Primary-50 wash. For founder block, callouts.</p>
          </Card>
          <Card variant="soft">
            <strong className="font-semibold">Card · soft</strong>
            <p className="mt-1 text-sm">Lavender canvas-soft wash. For calm callouts.</p>
          </Card>
          <Card variant="dark">
            <strong className="font-semibold">Card · dark</strong>
            <p className="mt-1 text-sm text-[var(--color-primary-200)]">
              Primary-950 with white text. For high-contrast callouts.
            </p>
          </Card>
          <Card variant="bordered">
            <strong className="font-semibold">Card · bordered</strong>
            <p className="mt-1 text-sm">No shadow, just border. For dense layouts.</p>
          </Card>
          <Card variant="default" interactive>
            <strong className="font-semibold">Card · interactive</strong>
            <p className="mt-1 text-sm">
              Hover me. The signature site lift: -2px and shadow sm → md.
            </p>
          </Card>
        </Grid>
      </PlayBlock>

      {/* COMPOSED CARDS */}
      <PlayBlock title="10 · Composed cards">
        <Stack gap={8}>
          <div>
            <Label>StepCard</Label>
            <Grid cols={{ base: 1, md: 3 }} gap={6}>
              <StepCard
                number={1}
                title="Snap a receipt"
                body="One tap. Standing in a hardware store with paint on your hands."
                visual={
                  <IconCircle size={56} tone="purple">
                    <Camera className="h-7 w-7" strokeWidth={1.8} />
                  </IconCircle>
                }
              />
              <StepCard
                number={2}
                title="See what you owe"
                body="Real money, in plain English. Updated as you go."
              />
              <StepCard
                number={3}
                title="Hit the green button"
                body="When HMRC asks, we tell you. One tap and your update is gone."
              />
            </Grid>
          </div>

          <div>
            <Label>PromiseCard</Label>
            <Grid cols={{ base: 1, md: 3 }} gap={10}>
              <PromiseCard
                title="Plain English, end to end."
                body="No accountant-speak. If we have to use a tax word, we explain it."
              />
              <PromiseCard
                title="£4.99 a month. Forever."
                body="No first-year discount that doubles in year two."
              />
              <PromiseCard
                title="Your data stays yours."
                body="Stop paying any time and you keep read-only access. Forever."
              />
            </Grid>
          </div>

          <div>
            <Label>FeatureCard</Label>
            <Grid cols={{ base: 1, md: 3 }} gap={5}>
              <FeatureCard
                icon={<Camera className="h-5 w-5" />}
                title="Receipt scanning"
                body="Snap, we read, you confirm. 10 seconds, paint on your hands."
              />
              <FeatureCard
                icon={<Send className="h-5 w-5" />}
                title="One-tap MTD updates"
                body="Quarterly updates and year-end declaration, sent direct to HMRC."
              />
              <FeatureCard
                icon={<Wrench className="h-5 w-5" />}
                title="Mileage tracking"
                body="HMRC's flat-rate, calculated automatically as you drive."
              />
            </Grid>
          </div>

          <div>
            <Label>QuoteCard</Label>
            <div className="max-w-[680px]">
              <QuoteCard
                initial="A"
                cite="- Adrian, co-founder"
              >
                I watched my dad spend every January in a panic over a carrier bag
                of receipts. There had to be a simpler way. So we're building one.
              </QuoteCard>
            </div>
          </div>

          <div>
            <Label>FaqItem</Label>
            <div className="max-w-[680px]">
              <FaqItem question="Will this be ready in time for April 2026?">
                Yes - that's the whole point. We're aiming for HMRC-recognised
                status by October 2026, well before the April 2027 deadline.
              </FaqItem>
              <FaqItem question="Do I still need an accountant?">
                If your business is simple - receipts, invoices, mileage - Ledgeraa
                does the lot. If your tax is complicated, keep your accountant.
              </FaqItem>
              <FaqItem question="What happens to my data?">
                Your data lives in the UK, encrypted, on Microsoft Azure. We
                never sell it.
              </FaqItem>
            </div>
          </div>
        </Stack>
      </PlayBlock>

      <Footer />
    </div>
  );
}

/* ---- helpers --------------------------------------------------------- */

function PlayBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Section background="canvas" spacing="sm" bordered>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-[-0.025em] text-[var(--color-ink)]">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </Section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
      {children}
    </div>
  );
}

function TypeRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-t border-[var(--color-neutral-100)] pt-5 md:grid-cols-[180px_1fr] md:gap-6">
      <div className="text-xs font-mono text-[var(--color-ink-muted)] pt-1">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function SwatchRow({
  label,
  shades,
  varBase,
}: {
  label: string;
  shades: number[];
  varBase: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {shades.map((s) => (
          <Swatch key={s} label={String(s)} varName={`${varBase}${s}`} />
        ))}
      </div>
    </div>
  );
}

function Swatch({ label, varName }: { label: string; varName: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="h-14 w-14 rounded-lg ring-1 ring-[var(--color-neutral-100)]"
        style={{ background: `var(${varName})` }}
        title={varName}
      />
      <span className="text-[11px] font-mono text-[var(--color-ink-muted)]">
        {label}
      </span>
    </div>
  );
}
