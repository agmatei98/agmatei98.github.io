import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type ColCount = 1 | 2 | 3 | 4;
type Gap = 3 | 4 | 5 | 6 | 8 | 10 | 12;

type ColsConfig = ColCount | { base?: ColCount; md?: ColCount; lg?: ColCount };

/**
 * Build the column class chain. Tailwind needs the literal class strings
 * to be present at build time, so we keep this as a static lookup.
 */
function colsToClasses(cols: ColsConfig): string {
  if (typeof cols === "number") return `grid-cols-${cols}`;
  const parts: string[] = [];
  if (cols.base) parts.push(`grid-cols-${cols.base}`);
  if (cols.md) parts.push(`md:grid-cols-${cols.md}`);
  if (cols.lg) parts.push(`lg:grid-cols-${cols.lg}`);
  return parts.join(" ");
}

const gapClasses: Record<Gap, string> = {
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

/** Grid - responsive grid with token-mapped gap. */
export function Grid({
  cols,
  gap = 6,
  className,
  children,
}: {
  cols: ColsConfig;
  gap?: Gap;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid", colsToClasses(cols), gapClasses[gap], className)}>
      {children}
    </div>
  );
}

/* ---- Tailwind safelist hints (so the JIT picks these up) ----
   grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4
   md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4
   lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 */
