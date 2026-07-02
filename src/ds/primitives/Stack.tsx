import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20;
type Align = "start" | "center" | "end" | "stretch";

const gapClasses: Record<Gap, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
  20: "gap-20",
};

const alignClasses: Record<Align, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

/** Stack - vertical flex with token-mapped gap. */
export function Stack({
  gap = 4,
  align = "stretch",
  className,
  children,
  as: Tag = "div",
}: {
  gap?: Gap;
  align?: Align;
  className?: string;
  children: ReactNode;
  as?: "div" | "section" | "article" | "ul" | "ol";
}) {
  return (
    <Tag
      className={cn("flex flex-col", gapClasses[gap], alignClasses[align], className)}
    >
      {children}
    </Tag>
  );
}
