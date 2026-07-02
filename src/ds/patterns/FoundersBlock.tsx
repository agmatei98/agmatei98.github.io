import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  QuoteCard,
} from "@ds/primitives";

/**
 * FoundersBlock - a single founder pull-quote with a link to /about.
 * Humanises the brand on the homepage. Real face beats every corporate pitch.
 */
export function FoundersBlock({
  name = "Adrian",
  role = "co-founder",
  quote = "I watched my dad spend every January in a panic over a carrier bag of receipts. He'd call my sister, who'd call her boyfriend, who'd ring his mate's accountant. There had to be a simpler way. So we're building one.",
  avatar,
}: {
  name?: string;
  role?: string;
  quote?: string;
  avatar?: string;
}) {
  return (
    <Section background="canvas" spacing="base">
      <Container width="default">
        <div className="text-center max-w-[42rem] mx-auto">
          <Eyebrow>Why we built this</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            It started with a carrier bag of receipts.
          </Heading>
        </div>

        <div className="mt-12 mx-auto max-w-[680px]">
          <QuoteCard
            avatar={avatar}
            initial={name[0]}
            cite={
              <>
                - {name}, {role}
              </>
            }
          >
            {quote}
          </QuoteCard>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
          >
            Meet the team
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  );
}
