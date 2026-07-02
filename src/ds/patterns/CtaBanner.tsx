import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  Button,
} from "@ds/primitives";
import { cn } from "@ds/cn";

/**
 * CtaBanner - full-width strip CTA, single line of copy, single button.
 * Good for between-section "by the way, sign up" without taking a whole
 * section break. Lighter than CalloutCard, lighter than BigCta.
 */
export function CtaBanner({
  text,
  ctaLabel = "Get early access",
  ctaHref = "#waitlist",
  tone = "tinted",
}: {
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "tinted" | "dark" | "neutral";
}) {
  const isDark = tone === "dark";
  return (
    <Section
      background={tone === "dark" ? "dark" : tone === "tinted" ? "canvas-tinted" : "canvas"}
      spacing="sm"
      bordered={!isDark}
    >
      <Container>
        <div
          className={cn(
            "flex flex-col items-center gap-5 text-center",
            "md:flex-row md:justify-between md:gap-6 md:text-left"
          )}
        >
          <p
            className={cn(
              "max-w-[38em] text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] font-medium text-pretty",
              isDark ? "text-white" : "text-[var(--color-ink)]"
            )}
          >
            {text}
          </p>
          <div className="flex-shrink-0">
            <Button
              href={ctaHref}
              variant={isDark ? "secondary" : "primary"}
              size="md"
              trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
