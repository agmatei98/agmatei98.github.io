import { Plus, Banknote, Home, Wrench } from "lucide-react";
import { cn } from "@ds/cn";

/**
 * OtherIncomeMock - a static "other income" ledger card for the
 * capture-income-year-round feature. Decorative; matches the app DS.
 */
export function OtherIncomeMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-[var(--color-neutral-200)]",
        className
      )}
      aria-hidden
    >
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
          Other income · this year
        </p>
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-700)] px-2.5 py-1 text-[12px] font-semibold text-white">
          <Plus className="h-3 w-3" strokeWidth={3} />
          Add
        </span>
      </div>

      <p className="mt-3 font-sans text-[32px] font-extrabold tracking-[-0.02em] text-[var(--color-primary-700)] tabular-nums leading-none">
        £2,140.00
      </p>
      <p className="mt-1 text-[12px] font-semibold text-[var(--color-success-700)]">
        Logged as it happened - nothing to reconstruct
      </p>

      <div className="mt-5 space-y-2.5">
        <IncomeRow
          icon={Banknote}
          label="Cash job - fence repair"
          date="12 May"
          amount="£180"
        />
        <IncomeRow
          icon={Home}
          label="Room rent (lodger)"
          date="1 May"
          amount="£650"
        />
        <IncomeRow
          icon={Wrench}
          label="Weekend call-out"
          date="27 Apr"
          amount="£110"
        />
      </div>
    </div>
  );
}

function IncomeRow({
  icon: Icon,
  label,
  date,
  amount,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  date: string;
  amount: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[var(--color-canvas-soft)] px-3.5 py-2.5 ring-1 ring-[var(--color-neutral-100)]">
      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[var(--color-primary-50)]">
        <Icon
          className="h-4 w-4 text-[var(--color-primary-700)]"
          strokeWidth={2}
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold text-[var(--color-ink)]">
          {label}
        </p>
        <p className="text-[12px] text-[var(--color-neutral-500)]">{date}</p>
      </div>
      <span className="text-[14px] font-bold text-[var(--color-ink)] tabular-nums">
        {amount}
      </span>
    </div>
  );
}
