import { Info } from "lucide-react";
import { cn } from "@ds/cn";

/**
 * InfoBoxMock - a static "form field with a help box" card for the
 * "help on every screen" feature. Shows a labelled field plus the small
 * plain-English info box that sits under every field in the app. Decorative;
 * colours/tokens match the app DS.
 */
export function InfoBoxMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-[var(--color-neutral-200)]",
        className
      )}
      aria-hidden
    >
      {/* Screen heading */}
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-[22%] bg-[var(--color-primary-700)] text-[15px] font-extrabold text-white">
          1
        </span>
        <div>
          <p className="text-[15px] font-bold leading-tight text-[var(--color-ink)]">
            Your details
          </p>
          <p className="text-[12px] text-[var(--color-neutral-500)]">
            Step 1 of 3
          </p>
        </div>
      </div>

      <div className="my-5 h-px bg-[var(--color-neutral-100)]" />

      {/* The field */}
      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
        Legal Name
      </label>
      <div className="flex items-center rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-neutral-200)]">
        Jordan A. Smith
      </div>

      {/* The info box - the point of the mock */}
      <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-[var(--color-primary-50)] px-3.5 py-3 ring-1 ring-[var(--color-primary-100)]">
        <Info
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary-700)]"
          strokeWidth={2.25}
        />
        <p className="text-[13px] leading-snug text-[var(--color-primary-900)]">
          This is the name you'd find on an identification document or passport.
        </p>
      </div>

      {/* Footer chip */}
      <div className="mt-5 rounded-xl bg-[var(--color-canvas-soft)] px-4 py-2.5 text-center text-[12px] font-medium text-[var(--color-ink-muted)] ring-1 ring-[var(--color-neutral-100)]">
        Every field has one · Help on every screen
      </div>
    </div>
  );
}
