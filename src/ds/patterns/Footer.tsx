import { ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@ds/cn";
import { NAV_LINKS, SIGNUP_URL, SIGNIN_URL, HELLO_EMAIL } from "@/config/site";

export function Footer() {
  return (
    <footer
      className={cn(
        "border-t border-[var(--color-neutral-200)]",
        "bg-[var(--color-canvas)]"
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[26em] text-[15px] text-[var(--color-ink-muted)]">
              Plain-English bookkeeping for UK sole traders. Tax made as easy as
              it can be, so you can get on with your work. Free to start,
              MTD-ready plans from £5/mo.
            </p>
            {/* HMRC / MTD trust line - compliance-safe wording only. */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--color-canvas-cool)] px-3 py-2 text-[13px] font-medium text-[var(--color-neutral-700)] ring-1 ring-[var(--color-neutral-200)]">
              <ShieldCheck
                className="h-4 w-4 text-[var(--color-accent)]"
                aria-hidden
              />
              HMRC-recognised · Making Tax Digital ready
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-[15px]">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SIGNIN_URL}
                  className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href={SIGNUP_URL}
                  className="font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
                >
                  Start free
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
              Made in the UK
            </h4>
            <ul className="mt-4 space-y-3 text-[15px] text-[var(--color-ink-muted)]">
              <li>Built and run by two founders</li>
              <li>
                <a
                  href={`mailto:${HELLO_EMAIL}`}
                  className="text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
                >
                  {HELLO_EMAIL}
                </a>
              </li>
              <li>Your data stays in the UK</li>
              <li className="text-[var(--color-neutral-500)]">
                More coming: Open Banking, mileage, payroll, accountant access
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-neutral-200)] pt-6 text-sm text-[var(--color-neutral-500)] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ledgeraa Ltd</span>
          <div className="flex gap-5">
            <a
              href="/privacy"
              className="text-[var(--color-neutral-500)] hover:text-[var(--color-ink-muted)]"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[var(--color-neutral-500)] hover:text-[var(--color-ink-muted)]"
            >
              Terms
            </a>
            <a
              href="/cookies"
              className="text-[var(--color-neutral-500)] hover:text-[var(--color-ink-muted)]"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
