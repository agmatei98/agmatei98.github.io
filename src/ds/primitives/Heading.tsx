import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Level = "display-xl" | "display-lg" | "display-md" | "h2" | "h3" | "h4";

type AsTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const levelClasses: Record<Level, string> = {
  // Hero H1 - extrabold, very tight tracking. Typography as image.
  "display-xl":
    "font-sans text-[length:var(--text-display-xl)] leading-[var(--text-display-xl--line-height)] font-extrabold tracking-[-0.04em] text-balance",
  // Big section heads - bold, still tight.
  "display-lg":
    "font-sans text-[length:var(--text-display-lg)] leading-[var(--text-display-lg--line-height)] font-extrabold tracking-[-0.035em] text-balance",
  // Standard section H2 - bold, slightly looser.
  "display-md":
    "font-sans text-[length:var(--text-display-md)] leading-[var(--text-display-md--line-height)] font-bold tracking-[-0.025em] text-balance",
  // Smaller section/subhead.
  h2: "font-sans text-2xl md:text-3xl font-bold tracking-[-0.02em] text-balance",
  // Card titles, FAQ questions.
  h3: "font-sans text-xl font-semibold tracking-[-0.015em]",
  // Small labels.
  h4: "font-sans text-lg font-semibold tracking-[-0.01em]",
};

/**
 * Heading - single source of truth for type ramp.
 *
 * `level` controls the visual style. `as` (optional) controls the rendered
 * tag, in case the semantic level differs from the visual level.
 */
export function Heading({
  level,
  as,
  className,
  children,
  id,
}: {
  level: Level;
  as?: AsTag;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const Tag = (as ??
    (level === "display-xl"
      ? "h1"
      : level === "display-lg" || level === "display-md" || level === "h2"
        ? "h2"
        : level === "h3"
          ? "h3"
          : "h4")) as AsTag;

  return (
    <Tag
      id={id}
      className={cn("text-[var(--color-ink)]", levelClasses[level], className)}
    >
      {children}
    </Tag>
  );
}
