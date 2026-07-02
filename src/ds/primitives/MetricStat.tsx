import { cn } from "@ds/cn";

type Tone = "default" | "primary" | "muted";

const toneClasses: Record<Tone, string> = {
  default: "text-[var(--color-ink)]",
  primary: "text-[var(--color-primary-700)]",
  muted: "text-[var(--color-ink-muted)]",
};

/**
 * MetricStat - big number + label. Used in CompareBlock and the price
 * display. Inter 800, very tight tracking - typography as image.
 */
export function MetricStat({
  value,
  label,
  tone = "default",
  size = "md",
  className,
}: {
  value: string;
  label?: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-[clamp(4rem,14vw,7rem)] leading-[0.9]",
  }[size];

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-sans font-extrabold tabular-nums tracking-[-0.04em]",
          sizeClasses,
          toneClasses[tone]
        )}
      >
        {value}
      </span>
      {label && (
        <span className="text-sm font-medium text-[var(--color-ink-muted)]">
          {label}
        </span>
      )}
    </div>
  );
}
