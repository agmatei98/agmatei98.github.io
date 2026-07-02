import type { ReactNode } from "react";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  FaqItem,
} from "@ds/primitives";

export type FaqEntry = {
  question: string;
  answer: ReactNode;
};

export function FaqAccordion({
  eyebrow = "Common questions",
  heading = "The five things people ask first.",
  items,
  background = "canvas-cool",
}: {
  eyebrow?: string;
  heading?: string;
  items: FaqEntry[];
  background?: "canvas" | "canvas-cool" | "white";
}) {
  return (
    <Section background={background} spacing="base" bordered>
      <Container width="narrow">
        <div className="text-center mb-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            {heading}
          </Heading>
        </div>

        <div>
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question}>
              {item.answer}
            </FaqItem>
          ))}
        </div>
      </Container>
    </Section>
  );
}
