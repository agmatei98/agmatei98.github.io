import { cn } from "@ds/cn";

type Size = 56 | 96 | 128;

const sizeClasses: Record<Size, string> = {
  56: "h-14 w-14 text-base",
  96: "h-24 w-24 text-2xl",
  128: "h-32 w-32 text-3xl",
};

/**
 * Avatar - real photo or coloured-initial fallback. Used for founders
 * (size 96/128) and inline credits (size 56).
 *
 * No image source = pure typographic fallback. Lets us ship without a
 * photo shoot and add real photos in a single PR later.
 */
export function Avatar({
  src,
  alt,
  initial,
  size = 96,
  className,
}: {
  src?: string;
  alt?: string;
  /** Fallback letter when src is missing. */
  initial?: string;
  size?: Size;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? ""}
        className={cn(
          "rounded-full object-cover",
          sizeClasses[size],
          "ring-2 ring-[var(--color-canvas)] shadow-sm",
          className
        )}
      />
    );
  }
  return (
    <div
      className={cn(
        "grid place-items-center rounded-full font-bold tracking-tight",
        "bg-[var(--color-primary-100)] text-[var(--color-primary-800)]",
        "ring-2 ring-[var(--color-canvas)] shadow-sm",
        sizeClasses[size],
        className
      )}
      aria-label={alt}
    >
      {initial?.[0]?.toUpperCase()}
    </div>
  );
}
