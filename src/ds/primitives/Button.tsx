import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@ds/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base = cn(
  "inline-flex items-center justify-center gap-2",
  "font-semibold whitespace-nowrap",
  "rounded-lg transition-all duration-[var(--duration-fast)] ease-[var(--ease-out-soft)]",
  "select-none",
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
);

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-[var(--color-primary-700)] text-white shadow-xs",
    "hover:bg-[var(--color-primary-800)] hover:shadow-sm hover:-translate-y-px",
    "active:bg-[var(--color-primary-900)] active:translate-y-0 active:shadow-xs"
  ),
  secondary: cn(
    "bg-white text-[var(--color-ink)] shadow-xs",
    "border border-[var(--color-neutral-200)]",
    "hover:bg-[var(--color-neutral-50)] hover:border-[var(--color-neutral-300)]"
  ),
  ghost: cn(
    "bg-transparent text-[var(--color-ink-muted)]",
    "hover:bg-[var(--color-neutral-50)] hover:text-[var(--color-ink)]"
  ),
};

const sizes: Record<Size, string> = {
  // 44px - for inline secondary actions
  sm: "h-11 px-4 text-sm",
  // 52px - default body button
  md: "h-[52px] px-5 text-base",
  // 60px - hero CTA
  lg: "h-[60px] px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  /** Optional leading icon. */
  leading?: ReactNode;
  /** Optional trailing icon (defaults to a quiet arrow on primary CTAs). */
  trailing?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Button - primary visual primitive for action.
 *
 * Three variants, three sizes. Renders as <a> when `href` is provided,
 * otherwise <button>. Respects `prefers-reduced-motion` via the global
 * motion-suppressor in globals.css.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    block,
    leading,
    trailing,
    className,
    children,
    ...rest
  } = props;

  const content = (
    <>
      {leading}
      <span>{children}</span>
      {trailing}
    </>
  );

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    block && "w-full",
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
