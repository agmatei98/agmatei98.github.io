/**
 * Site config - single source of truth for external URLs, plan data, and nav.
 *
 * The marketing site is a separate origin from the app; every "sign up" / "get
 * started" / plan CTA sends the user to the real app's sign-up flow. Keep the
 * host in ONE place (`APP_ORIGIN`) so dev→prod is a one-line change.
 *
 * Plan data is copied VERBATIM from the app's onboarding source of truth
 * (`ledgeraa_fe/src/pages/onboarding/copy.ts`) so the marketing site can never
 * drift from what a user actually sees on sign-up - EXCEPT the £5 tier's
 * display name, which is intentionally rebranded here (see `PLANS`).
 */

/**
 * Where the live app lives. In dev the app runs on :3000 (see ledgeraa_fe
 * vite.config). Override at build time with VITE_APP_ORIGIN for staging/prod.
 */
export const APP_ORIGIN: string =
  import.meta.env.VITE_APP_ORIGIN ?? "http://localhost:3000";

/** Sign-up entry point. The app redirects /auth/sign-up → /onboarding. */
export const SIGNUP_URL = `${APP_ORIGIN}/auth/sign-up`;
/** Returning users. */
export const SIGNIN_URL = `${APP_ORIGIN}/auth/sign-in`;

/** Primary nav links (marketing routes are same-origin; app links are absolute). */
export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#mtd", label: "MTD" },
];

// ─── Plans ───────────────────────────────────────────────────────────────────

export type PlanId = "free" | "standard" | "unlimited";

export interface MarketingPlan {
  id: PlanId;
  /** Display name on the marketing site. */
  name: string;
  /** "£0" | "£5" | "£8" */
  priceMain: string;
  /** "/mo" - omitted for Free. */
  priceCadence?: string;
  tagline: string;
  /** Positive entitlements only (verbatim from the app). */
  features: string[];
  /** Honest limitation, rendered muted without a check. */
  note?: string;
  /** Highlight as the recommended tier ("Most popular"). */
  featured?: boolean;
  /** CTA label on the plan card. */
  ctaLabel: string;
}

/**
 * The three real tiers. Names/prices/features track the app's copy.ts, with the
 * middle tier rebranded "Sole Trader's Best Friend" → **Standard** (approved).
 * To change the middle-tier name, edit ONLY the `name` below.
 */
export const PLANS: readonly MarketingPlan[] = [
  {
    id: "free",
    name: "Free",
    priceMain: "£0",
    tagline: "Send proper invoices for £0, forever.",
    features: [
      "Unlimited invoices as PDFs",
      "Manual expense tracking",
      "Export your data any time",
    ],
    note: "Invoices carry a small Ledgeraa watermark. Automated receipt reading, “other income” and MTD submissions aren’t on Free.",
    ctaLabel: "Start free",
  },
  {
    id: "standard",
    name: "Standard",
    priceMain: "£5",
    priceCadence: "/mo",
    tagline: "Receipts read for you and MTD sorted, the sweet spot.",
    features: [
      "3 customisable PDF invoice templates",
      "Automated receipt reading, up to 2 scans per expense",
      "“Other income” declaration",
      "Complete MTD compatibility",
    ],
    featured: true,
    ctaLabel: "Get Standard",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    priceMain: "£8",
    priceCadence: "/mo",
    tagline: "Every limit removed, for traders going full throttle.",
    features: [
      "Everything in Standard, plus:",
      "Unlimited receipt scanning",
      "All invoice templates, fully customisable",
    ],
    ctaLabel: "Get Unlimited",
  },
] as const;

/**
 * Comparison-table model - feature rows × plan columns. A cell is either a
 * boolean (✓ / -) or a short string. Derived from PLANS; kept explicit so the
 * table reads cleanly and stays defensible.
 */
export interface CompareRow {
  label: string;
  free: boolean | string;
  standard: boolean | string;
  unlimited: boolean | string;
}

export const COMPARE_ROWS: readonly CompareRow[] = [
  { label: "Unlimited PDF invoices", free: true, standard: true, unlimited: true },
  {
    label: "Invoice templates",
    free: "1 (watermarked)",
    standard: "3, customisable",
    unlimited: "All, fully customisable",
  },
  { label: "Manual expense tracking", free: true, standard: true, unlimited: true },
  {
    label: "Automated receipt scanning",
    free: false,
    standard: "Up to 2 / expense",
    unlimited: "Unlimited",
  },
  { label: "“Other income” declaration", free: false, standard: true, unlimited: true },
  { label: "Full MTD / HMRC submission", free: false, standard: true, unlimited: true },
  { label: "Export your data", free: true, standard: true, unlimited: true },
] as const;
