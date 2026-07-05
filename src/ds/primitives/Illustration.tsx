import { cn } from "@ds/cn";

/**
 * Illustration - decorative spot art (the recoloured line-art set in
 * /public/illustrations). Reuses the `.reveal-fade` entrance (which respects
 * prefers-reduced-motion via the global suppressor in globals.css).
 *
 * Decorative by default: the art repeats the copy's meaning, so `alt=""` →
 * aria-hidden. Pass a real `alt` only if an illustration ever carries meaning
 * the text doesn't.
 */
export function Illustration({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      loading="lazy"
      className={cn(
        "reveal-fade w-full max-w-full select-none object-contain",
        className
      )}
    />
  );
}
