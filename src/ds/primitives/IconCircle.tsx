import type { ReactNode } from "react";
import { cn } from "@ds/cn";

type Size = 32 | 44 | 56 | 80;
type Tone = "purple" | "lavender" | "neutral";

const sizeClasses: Record<Size, string> = {
  32: "h-8 w-8",
  44: "h-11 w-11",
  56: "h-14 w-14",
  80: "h-20 w-20",
};

const toneClasses: Record<Tone, string> = {
  purple:
    "bg-[var(--color-primary-50)] text-[var(--color-primary-700)] ring-1 ring-[var(--color-primary-100)]",
  lavender:
    "bg-[var(--color-primary-100)] text-[var(--color-primary-800)] ring-1 ring-[var(--color-primary-200)]",
  neutral:
    "bg-[var(--color-neutral-50)] text-[var(--color-ink)] ring-1 ring-[var(--color-neutral-100)]",
};

/** A circular tinted background with an icon inside. */
export function IconCircle({
  size = 44,
  tone = "purple",
  className,
  children,
}: {
  size?: Size;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-full",
        sizeClasses[size],
        toneClasses[tone],
        className
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
