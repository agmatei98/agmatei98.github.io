import { cn } from "@ds/cn";

type Size = "sm" | "md" | "lg";
type Tone = "default" | "inverted";

const sizeClasses: Record<Size, { mark: string; text: string }> = {
  sm: { mark: "h-7 w-7", text: "text-[16px]" },
  md: { mark: "h-8 w-8", text: "text-[18px]" },
  lg: { mark: "h-10 w-10", text: "text-[22px]" },
};

/**
 * Logo - the Ledgeraa lockup: app logo mark + Inter-bold wordmark.
 *
 * The mark is the real app icon at /public/logo-mark.png (copied from
 * ledgeraa_fe). It's an asset so a designer can drop in an updated file
 * without touching code. The wordmark is text so we can recolor it for
 * dark sections via the `inverted` tone.
 */
export function Logo({
  size = "md",
  tone = "default",
  showWordmark = true,
  className,
}: {
  size?: Size;
  tone?: Tone;
  showWordmark?: boolean;
  className?: string;
}) {
  const { mark, text } = sizeClasses[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        "font-sans font-bold tracking-[-0.02em]",
        text,
        tone === "inverted" ? "text-white" : "text-[var(--color-ink)]",
        className
      )}
    >
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden
        className={cn(mark, "shrink-0 rounded-[22%] object-contain")}
        width={40}
        height={40}
      />
      {showWordmark && <span>Ledgeraa</span>}
    </span>
  );
}
