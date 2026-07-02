import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Gap = 1 | 2 | 3 | 4 | 5 | 6;
type Justify = "start" | "center" | "end" | "between";

const gapClasses: Record<Gap, string> = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
};

const justifyClasses: Record<Justify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

/** Cluster - horizontal flex with wrap. For chip rows, button groups, audience pills. */
export function Cluster({
  gap = 3,
  justify = "start",
  className,
  children,
}: {
  gap?: Gap;
  justify?: Justify;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gapClasses[gap],
        justifyClasses[justify],
        className
      )}
    >
      {children}
    </div>
  );
}
