import {
  Briefcase,
  Hammer,
  Scissors,
  ShoppingBag,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import {
  Container,
  Section,
  Heading,
  Lede,
  Cluster,
} from "@ds/primitives";
import { cn } from "@ds/cn";

const trades = [
  { label: "Plumbers", icon: Wrench },
  { label: "Electricians", icon: Zap },
  { label: "Hairdressers", icon: Scissors },
  { label: "Market traders", icon: ShoppingBag },
  { label: "Cleaners", icon: Sparkles },
  { label: "Painters", icon: Hammer },
  { label: "Drivers", icon: Truck },
  { label: "Side hustles", icon: Briefcase },
];

/**
 * AudienceStrip - the self-identification band. Reads each user's own job
 * back to themselves before they read any features. Soft purple wash -
 * sits between canvas and the deeper sections.
 */
export function AudienceStrip() {
  return (
    <Section background="canvas-soft" spacing="base" bordered>
      <Container>
        <div className="text-center">
          <Heading level="display-md" as="h2">
            Built for trades, side hustles, market stalls.
          </Heading>
          <Lede className="mt-4" align="center">
            Not for accountants. Not for big-team finance directors. For you,
            and for the way you actually work.
          </Lede>
        </div>

        <Cluster gap={3} justify="center" className="mt-10 mx-auto max-w-[44rem]">
          {trades.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className={cn(
                "inline-flex items-center gap-2.5",
                "rounded-full bg-white px-4 py-2.5",
                "text-[15px] font-semibold text-[var(--color-ink)]",
                "ring-1 ring-[var(--color-primary-100)]",
                "shadow-xs"
              )}
            >
              <Icon
                className="h-[18px] w-[18px] text-[var(--color-primary-700)]"
                strokeWidth={2.2}
                aria-hidden
              />
              {label}
            </span>
          ))}
        </Cluster>
      </Container>
    </Section>
  );
}
