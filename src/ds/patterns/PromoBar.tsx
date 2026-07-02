import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@ds/cn";

/**
 * PromoBar - the calm one-line MTD urgency anchor at the top of every
 * page. Calm, dated, declarative. Not a countdown.
 */
export function PromoBar({
  href = "/mtd",
  className,
  children,
}: {
  href?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "border-b border-[var(--color-primary-100)]",
        "bg-[var(--color-primary-50)]",
        "text-[var(--color-primary-900)]",
        className
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
        <a
          href={href}
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-2 gap-y-1",
            "py-2.5 text-center text-sm font-medium",
            "text-[var(--color-primary-900)] hover:text-[var(--color-primary-700)]",
            "no-underline hover:no-underline"
          )}
        >
          <span>
            {children ??
              "From April 2026, HMRC needs sole traders online. We make it painless."}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 decoration-[var(--color-primary-300)]">
            Read more
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </a>
      </div>
    </div>
  );
}
