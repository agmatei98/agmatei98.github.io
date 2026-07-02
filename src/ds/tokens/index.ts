/**
 * DS tokens - barrel export.
 *
 * Tokens are defined in CSS variables in /src/globals.css (the @theme block),
 * and mirrored here in TypeScript for component-author ergonomics. The CSS
 * is what actually ships; this file is a typed accessor.
 */

export { colors } from "./colors";

/** Spacing token names available as Tailwind utilities. */
export const spacing = {
  section: {
    sm: "4rem",
    base: "6rem",
    lg: "8rem",
  },
  container: {
    narrow: "720px",
    default: "1120px",
    wide: "1280px",
  },
} as const;

/** Border radius tokens, in pixels. Matches the app's 12px base. */
export const radius = {
  none: 0,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  "2xl": 20,
  "3xl": 24,
  full: 9999,
} as const;

/** Motion tokens. Durations in ms. */
export const motion = {
  duration: {
    fast: 150,
    base: 200,
    slow: 300,
    deliberate: 600,
  },
  ease: {
    base: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    outSoft: "cubic-bezier(0.22, 1, 0.36, 1)",
    inOutSoft: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
} as const;

/** Breakpoint tokens (Tailwind defaults). */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
