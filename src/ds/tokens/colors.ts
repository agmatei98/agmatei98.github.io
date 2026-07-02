/**
 * Color tokens - single source of truth in TypeScript.
 *
 * KEEP IN SYNC with `/src/globals.css` (`@theme` block), which itself mirrors
 * the real app (`ledgeraa_fe/src/styles/globals.css`). The CSS variables are
 * what ships to the browser; this file exists so component code can reference
 * colors by name (eg `colors.primary[700]`) without stringly-typed lookups.
 *
 * Neutrals are the app's SLATE ramp (cool), not the old marketing lavender.
 */

export const colors = {
  primary: {
    50: "#f5f2ff",
    100: "#ece6ff",
    200: "#d9cfff",
    300: "#bfadff",
    400: "#a080ff",
    500: "#7c4dfc",
    600: "#6b30f0",
    700: "#5b22d6",
    800: "#4c1caf",
    900: "#3f198c",
    950: "#271060",
    /** The app's semantic --primary alias (rings, links, chart-1). */
    DEFAULT: "#8b5cf6",
  },
  secondary: {
    50: "#fefbe8",
    100: "#fef5c3",
    200: "#fee98a",
    300: "#fed647",
    400: "#fcc515",
    500: "#ecad08",
    600: "#cc8604",
    700: "#a35f07",
    800: "#874b0e",
    900: "#733d12",
    950: "#431f06",
  },
  /** SLATE ramp - matches the app's shadcn neutrals. */
  neutral: {
    0: "#ffffff",
    25: "#fafbfc",
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020817",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    /** app --success */
    DEFAULT: "#10b981",
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },
  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
  },
  /** The app's amber accent - for badges/highlights, never CTAs. */
  accent: "#f59e0b",
  // Marketing surfaces (app values)
  canvas: "#faf8fc",
  canvasCool: "#f1f5f9",
  canvasSoft: "#f8fafc",
  canvasTinted: "#f3eeff",
  card: "#ffffff",
  ink: "#09090b",
  inkMuted: "#64748b",
} as const;
