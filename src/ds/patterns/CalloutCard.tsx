import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  Heading,
  Button,
} from "@ds/primitives";
import { cn } from "@ds/cn";

/**
 * CalloutCard - narrow-column light CTA card for mid-page. Less pushy
 * than BigCta. Use on /mtd where we don't want to feel salesy.
 */
export function CalloutCard({
  heading,
  body,
  ctaLabel = "Get early access",
  ctaHref = "#waitlist",
  variant = "tinted",
  background = "canvas",
}: {
  heading: string;
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "tinted" | "bordered";
  background?: "canvas" | "canvas-soft" | "white";
}) {
  return (
    <Section background={background} spacing="sm">
      <Container width="narrow">
        <div
          className={cn(
            "rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center",
            variant === "tinted"
              ? "bg-[var(--color-primary-50)] ring-1 ring-[var(--color-primary-100)]"
              : "bg-white ring-1 ring-[var(--color-neutral-200)] shadow-sm"
          )}
        >
          <Heading
            level="display-md"
            as="h2"
            className="text-balance"
          >
            {heading}
          </Heading>
          {body && (
            <p className="mx-auto mt-4 max-w-[36em] text-pretty text-[length:var(--text-lede)] leading-[var(--text-lede--line-height)] text-[var(--color-ink-muted)]">
              {body}
            </p>
          )}
          <div className="mt-8 flex justify-center">
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
