import type { ReactNode } from "react";
import { cn } from "@ds/cn";

/**
 * PhoneFrame - a CSS-only phone shell. Houses a <ScreenMock>.
 *
 * Visual rule: rendered with CSS, not an image, so it's crisp on every
 * screen and we can swap the screen contents without re-cutting assets.
 *
 * The optional `tilt` prop adds the subtle 3D pose used in the hero -
 * the only 3D move on the entire site.
 */
export function PhoneFrame({
  tilt,
  className,
  children,
}: {
  tilt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[320px] aspect-[9/19]",
        "rounded-[44px] p-[10px]",
        "bg-[var(--color-neutral-950)]",
        "ring-1 ring-[var(--color-neutral-800)]",
        "shadow-xl",
        // The signature tilt - only on the hero phone.
        tilt && "[transform:perspective(1400px)_rotateY(-6deg)_rotateX(2deg)]",
        className
      )}
    >
      {/* Notch */}
      <div
        aria-hidden
        className="absolute top-[18px] left-1/2 -translate-x-1/2 z-10 h-[24px] w-[96px] rounded-full bg-[var(--color-neutral-950)]"
      />
      {/* Side button hints */}
      <div
        aria-hidden
        className="absolute -left-[2px] top-[120px] h-[60px] w-[3px] rounded-l-sm bg-[var(--color-neutral-800)]"
      />
      <div
        aria-hidden
        className="absolute -right-[2px] top-[160px] h-[80px] w-[3px] rounded-r-sm bg-[var(--color-neutral-800)]"
      />
      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[var(--color-canvas)]">
        {children}
      </div>
    </div>
  );
}
