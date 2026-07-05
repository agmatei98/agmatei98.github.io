import { FileSpreadsheet, Check, ArrowRight } from "lucide-react";
import { cn } from "@ds/cn";

/**
 * CsvImportMock - a static "import your old records" card for the Effortless
 * Migration feature. Shows a spreadsheet mapping into Ledgeraa with a success
 * chip. Decorative; colours/tokens match the app DS.
 */
export function CsvImportMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-[var(--color-neutral-200)]",
        className
      )}
      aria-hidden
    >
      {/* File header */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-canvas-soft)] px-3 py-1.5 ring-1 ring-[var(--color-neutral-100)]">
          <FileSpreadsheet className="h-4 w-4 text-[var(--color-primary-700)]" strokeWidth={2} />
          <span className="text-[13px] font-semibold text-[var(--color-ink)]">
            invoices.csv
          </span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-success-50)] px-2.5 py-1 text-[12px] font-semibold text-[var(--color-success-700)] ring-1 ring-[var(--color-success-200)]">
          <Check className="h-3 w-3" strokeWidth={3} />
          12 rows imported
        </span>
      </div>

      {/* Column mapping (source header -> Ledgeraa field) */}
      <div className="mt-5 space-y-2.5">
        <MapRow from="Date" to="Date" />
        <MapRow from="Total" to="Amount" />
        <MapRow from="Client / Notes" to="Description" />
      </div>

      {/* Footer chip */}
      <div className="mt-5 rounded-xl bg-[var(--color-canvas-soft)] px-4 py-2.5 text-center text-[12px] font-medium text-[var(--color-ink-muted)] ring-1 ring-[var(--color-neutral-100)]">
        Import in minutes · Excel or CSV
      </div>
    </div>
  );
}

function MapRow({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="min-w-0 flex-1 truncate rounded-lg bg-[var(--color-canvas-soft)] px-3 py-2 text-[13px] font-medium text-[var(--color-neutral-600)] ring-1 ring-[var(--color-neutral-100)]">
        {from}
      </span>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-[var(--color-neutral-400)]" strokeWidth={2.2} />
      <span className="inline-flex min-w-0 flex-1 items-center justify-between gap-2 truncate rounded-lg bg-[var(--color-primary-50)] px-3 py-2 text-[13px] font-semibold text-[var(--color-primary-800)] ring-1 ring-[var(--color-primary-100)]">
        {to}
        <Check className="h-3.5 w-3.5 flex-shrink-0 text-[var(--color-primary-700)]" strokeWidth={3} />
      </span>
    </div>
  );
}
