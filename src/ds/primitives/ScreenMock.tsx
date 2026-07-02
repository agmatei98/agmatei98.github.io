import {
  Camera,
  Check,
  ChevronRight,
  Receipt,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { cn } from "@ds/cn";

type Variant = "home" | "receipt" | "mtd-done";

/**
 * ScreenMock - pre-built phone-screen contents for the marketing site.
 *
 * Three variants for v1:
 *  - home:      greeting, "set aside for tax", recent activity, primary CTA
 *  - receipt:   camera-style overlay + "We read £42.30 from B&Q" confirmation
 *  - mtd-done:  big green tick, "You're done. HMRC has it.", next-due card
 *
 * Visuals are intentionally restrained - they should feel like a screenshot,
 * not a marketing illustration. Colors and tokens match the app DS exactly.
 */
export function ScreenMock({
  variant = "home",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col bg-[var(--color-canvas)]",
        className
      )}
      aria-hidden
    >
      <StatusBar />
      <div className="flex-1 px-4 pt-3 pb-5 overflow-hidden">
        {variant === "home" && <HomeScreen />}
        {variant === "receipt" && <ReceiptScreen />}
        {variant === "mtd-done" && <MtdDoneScreen />}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */

function StatusBar() {
  return (
    <div className="flex h-[44px] items-end justify-between px-5 pb-1.5 text-[11px] font-semibold text-[var(--color-ink)]">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <SignalBars />
        <span>4G</span>
        <BatteryGlyph />
      </div>
    </div>
  );
}

function SignalBars() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0" y="7" width="2" height="3" rx="0.5" fill="currentColor" />
      <rect x="4" y="5" width="2" height="5" rx="0.5" fill="currentColor" />
      <rect x="8" y="3" width="2" height="7" rx="0.5" fill="currentColor" />
      <rect x="12" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function BatteryGlyph() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor" />
      <rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" />
    </svg>
  );
}

/* ---------- Home screen ---------------------------------------------- */

function HomeScreen() {
  return (
    <div className="flex h-full flex-col gap-3">
      {/* Greeting */}
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
          Tuesday, 6 April
        </p>
        <h2 className="text-[22px] font-bold tracking-tight leading-tight text-[var(--color-ink)] mt-1">
          Hi Dave 👋
        </h2>
      </div>

      {/* Set aside for tax - the hero card */}
      <div className="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-neutral-100)] shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
            Set aside for tax
          </p>
          <Sparkles
            className="h-3.5 w-3.5 text-[var(--color-primary-500)]"
            strokeWidth={2.5}
          />
        </div>
        <p className="mt-2 font-sans text-[28px] font-extrabold tracking-[-0.02em] text-[var(--color-primary-700)] leading-none">
          £1,243.80
        </p>
        <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[var(--color-success-700)]">
          <TrendingUp className="h-3 w-3" strokeWidth={3} />
          <span>£42 since Monday</span>
        </div>
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-neutral-100)] shadow-sm flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
          Money in this week
        </p>
        <p className="mt-1 font-sans text-[20px] font-bold text-[var(--color-ink)]">
          £6,480.00
        </p>
        <ul className="mt-3 divide-y divide-[var(--color-neutral-100)]">
          <ActivityRow label="Mrs Patel - kitchen tap" amount="+£140" />
          <ActivityRow label="7 Hill Road - radiator" amount="+£320" />
          <ActivityRow label="Bob (regulars)" amount="+£90" />
        </ul>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="flex items-center justify-between rounded-2xl bg-[var(--color-primary-700)] px-4 py-3.5 text-white shadow-sm"
      >
        <span className="flex items-center gap-2 font-semibold text-[14px]">
          <Camera className="h-4 w-4" strokeWidth={2.5} />
          Snap a receipt
        </span>
        <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}

function ActivityRow({ label, amount }: { label: string; amount: string }) {
  return (
    <li className="flex items-center justify-between py-2 text-[12px]">
      <span className="text-[var(--color-ink-muted)] truncate">{label}</span>
      <span className="font-semibold text-[var(--color-ink)]">{amount}</span>
    </li>
  );
}

/* ---------- Receipt screen ------------------------------------------- */

function ReceiptScreen() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
          Capture
        </p>
        <h2 className="text-[22px] font-bold tracking-tight leading-tight text-[var(--color-ink)] mt-1">
          Got it.
        </h2>
      </div>

      {/* Receipt preview - paper-look */}
      <div className="relative mx-auto w-[160px] rotate-[-3deg]">
        <div className="rounded-[3px] bg-white px-4 py-3 shadow-md ring-1 ring-[var(--color-neutral-100)]">
          <div className="text-center">
            <p className="text-[8px] font-bold tracking-widest text-[var(--color-ink)]">
              B&amp;Q
            </p>
            <p className="text-[6px] text-[var(--color-neutral-500)]">
              SHEFFIELD
            </p>
          </div>
          <div className="mt-2 space-y-0.5 text-[7px] text-[var(--color-ink-muted)]">
            <Row name="2L Gloss White" amount="14.50" />
            <Row name="Roller Set" amount="8.99" />
            <Row name="Masking Tape" amount="3.49" />
            <Row name="Sandpaper x4" amount="6.20" />
            <Row name="Filler Tube" amount="9.12" />
          </div>
          <div className="my-1.5 border-t border-dashed border-[var(--color-neutral-200)]" />
          <div className="flex items-center justify-between text-[8px] font-bold text-[var(--color-ink)]">
            <span>TOTAL</span>
            <span>£42.30</span>
          </div>
        </div>
      </div>

      {/* Read confirmation */}
      <div className="mt-1 rounded-2xl bg-[var(--color-primary-50)] p-3.5 ring-1 ring-[var(--color-primary-100)]">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[var(--color-primary-700)]">
            <Check
              className="h-3 w-3 text-white"
              strokeWidth={3.5}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-[var(--color-primary-900)]">
              We read it for you
            </p>
            <div className="mt-1.5 space-y-1 text-[11px]">
              <ConfirmRow label="Where" value="B&Q (Sheffield)" />
              <ConfirmRow label="When" value="6 Apr 2026" />
              <ConfirmRow label="Amount" value="£42.30" />
              <ConfirmRow label="Category" value="Materials" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2">
        <button
          type="button"
          className="rounded-xl bg-white px-3 py-2.5 text-[12px] font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-neutral-200)] shadow-xs"
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded-xl bg-[var(--color-primary-700)] px-3 py-2.5 text-[12px] font-semibold text-white shadow-sm"
        >
          Save it
        </button>
      </div>
    </div>
  );
}

function Row({ name, amount }: { name: string; amount: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="truncate">{name}</span>
      <span>£{amount}</span>
    </div>
  );
}

function ConfirmRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[var(--color-primary-700)] font-medium">{label}</span>
      <span className="font-semibold text-[var(--color-primary-900)] truncate">
        {value}
      </span>
    </div>
  );
}

/* ---------- MTD-done screen ------------------------------------------ */

function MtdDoneScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center px-2">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-success-50)] ring-8 ring-[var(--color-success-100)]/40">
        <Check
          className="h-10 w-10 text-[var(--color-success-600)]"
          strokeWidth={3}
        />
      </div>

      <h2 className="mt-6 text-[26px] font-extrabold tracking-tight leading-tight text-[var(--color-ink)] text-balance">
        You're done.
      </h2>
      <p className="mt-2 text-[13px] font-medium text-[var(--color-ink-muted)] max-w-[18ch]">
        HMRC has your Q1 update. Receipt: <span className="font-mono">#A4-9F2K</span>
      </p>

      <div className="mt-6 w-full rounded-2xl bg-white p-4 ring-1 ring-[var(--color-neutral-100)] shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
          Next thing to do
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-primary-50)]">
            <Receipt
              className="h-4 w-4 text-[var(--color-primary-700)]"
              strokeWidth={2.4}
            />
          </div>
          <div className="text-left">
            <p className="text-[13px] font-bold text-[var(--color-ink)] leading-tight">
              Q2 update
            </p>
            <p className="text-[11px] text-[var(--color-ink-muted)]">
              Due 5 August
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px] text-[var(--color-neutral-500)]">
        We'll remind you. Nothing to do until then.
      </p>
    </div>
  );
}
