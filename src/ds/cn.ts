/**
 * Tiny class-name helper. Filters falsy values so we can write
 *
 *   cn("p-4", isActive && "bg-primary-50", error && "text-error-600")
 *
 * without the noise of `clsx`/`classnames` for a small surface like ours.
 */

type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
