import { Check } from "lucide-react";
import { cn } from "@ds/cn";

/**
 * InvoiceMock - a static "invoice PDF" card for the Invoices & PDFs feature.
 * Restrained, screenshot-like; colours/tokens match the app DS. Decorative.
 */
export function InvoiceMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-[var(--color-neutral-200)]",
        className
      )}
      aria-hidden
    >
      {/* Paid stamp */}
      <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-success-50)] px-2.5 py-1 text-[12px] font-bold text-[var(--color-success-700)] ring-1 ring-[var(--color-success-200)]">
        <Check className="h-3 w-3" strokeWidth={3} />
        Paid
      </span>

      {/* Header */}
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-[22%] bg-[var(--color-primary-700)] text-[15px] font-extrabold text-white">
          D
        </span>
        <div>
          <p className="text-[15px] font-bold leading-tight text-[var(--color-ink)]">
            Dave's Plumbing
          </p>
          <p className="text-[12px] text-[var(--color-neutral-500)]">
            Invoice #0042
          </p>
        </div>
      </div>

      <div className="my-5 h-px bg-[var(--color-neutral-100)]" />

      {/* Line items */}
      <div className="space-y-2.5">
        <LineItem label="Kitchen tap fitting" amount="£140.00" />
        <LineItem label="Radiator bleed & service" amount="£90.00" />
        <LineItem label="Call-out" amount="£45.00" />
      </div>

      <div className="my-4 h-px bg-[var(--color-neutral-100)]" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
          Total due
        </span>
        <span className="font-sans text-[24px] font-extrabold tracking-[-0.02em] text-[var(--color-primary-700)] tabular-nums">
          £275.00
        </span>
      </div>

      {/* Footer chip */}
      <div className="mt-5 rounded-xl bg-[var(--color-canvas-soft)] px-4 py-2.5 text-center text-[12px] font-medium text-[var(--color-ink-muted)] ring-1 ring-[var(--color-neutral-100)]">
        Sent as a PDF · Due in 14 days
      </div>
    </div>
  );
}

function LineItem({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-center justify-between text-[14px]">
      <span className="text-[var(--color-ink-muted)]">{label}</span>
      <span className="font-semibold text-[var(--color-ink)] tabular-nums">
        {amount}
      </span>
    </div>
  );
}
