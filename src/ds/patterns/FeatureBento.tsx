import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Card,
  IconCircle,
} from "@ds/primitives";
import { cn } from "@ds/cn";

export type BentoCell = {
  /** Cell key */
  id: string;
  /** Lucide icon (or any small ReactNode) */
  icon?: ReactNode;
  title: string;
  body: ReactNode;
  /** Optional visual rendered in a tinted slot at the bottom of the card. */
  visual?: ReactNode;
  /** Layout span - controls how big the cell is in the grid. */
  span?: "wide" | "tall" | "default";
  /** Variant - the "hero" cell uses tinted bg; default is white. */
  tone?: "default" | "feature" | "dark";
};

/**
 * FeatureBento - asymmetric 4–6 cell grid. Linear / Notion / Apple style.
 * Cells declare their own size; the grid auto-flows.
 *
 * Visual rule: ONE feature cell per bento (the `tone="feature"` one). It
 * gets the brand-tinted background and reads as the "hero" feature.
 */
export function FeatureBento({
  eyebrow = "What it does",
  heading,
  lede,
  cells,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  cells: BentoCell[];
}) {
  return (
    <Section background="canvas" spacing="base">
      <Container>
        <div className="mx-auto max-w-[42rem] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
          {lede && (
            <Lede className="mt-4" align="center">
              {lede}
            </Lede>
          )}
        </div>

        <div
          className={cn(
            "mt-12 grid gap-4",
            "grid-cols-1 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)]",
            "lg:gap-5"
          )}
        >
          {cells.map((cell) => (
            <BentoCellComponent key={cell.id} cell={cell} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function BentoCellComponent({ cell }: { cell: BentoCell }) {
  const span =
    cell.span === "wide"
      ? "md:col-span-2"
      : cell.span === "tall"
        ? "md:row-span-2"
        : "";

  const variant: "default" | "tinted" | "dark" =
    cell.tone === "feature"
      ? "tinted"
      : cell.tone === "dark"
        ? "dark"
        : "default";

  return (
    <Card
      variant={variant}
      padding="md"
      interactive
      className={cn("flex h-full flex-col", span)}
    >
      {cell.icon && (
        <IconCircle
          size={44}
          tone={cell.tone === "dark" ? "neutral" : "purple"}
          className={cell.tone === "dark" ? "bg-white/10 ring-white/15 text-white" : ""}
        >
          {cell.icon}
        </IconCircle>
      )}
      <h3
        className={cn(
          "mt-4 text-[20px] font-bold tracking-[-0.02em]",
          cell.tone === "dark" ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {cell.title}
      </h3>
      <div
        className={cn(
          "mt-2 text-[15px]",
          cell.tone === "dark"
            ? "text-[var(--color-primary-200)]"
            : "text-[var(--color-ink-muted)]"
        )}
      >
        {cell.body}
      </div>
      {cell.visual && (
        <div
          className={cn(
            "mt-5 flex flex-1 items-center justify-center rounded-xl p-4",
            cell.tone === "feature"
              ? "bg-white/70 ring-1 ring-[var(--color-primary-100)]"
              : cell.tone === "dark"
                ? "bg-white/5 ring-1 ring-white/10"
                : "bg-[var(--color-canvas-soft)] ring-1 ring-[var(--color-neutral-100)]"
          )}
        >
          {cell.visual}
        </div>
      )}
    </Card>
  );
}
