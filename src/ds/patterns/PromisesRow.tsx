import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  Grid,
  PromiseCard,
} from "@ds/primitives";

/**
 * PromisesRow - three promises, three coloured-tab cards. The plain-language
 * counter to every "starts at $X then triples" pricing trick the incumbents pull.
 */
export function PromisesRow() {
  return (
    <Section background="white" spacing="base" bordered>
      <Container>
        <div className="text-center max-w-[42rem] mx-auto">
          <Eyebrow>Why us</Eyebrow>
          <Heading level="display-md" as="h2" className="mt-5">
            Three promises.
          </Heading>
          <Lede className="mt-4" align="center">
            Most accounting software hides the catch in the small print. We
            don't have any small print.
          </Lede>
        </div>

        <Grid cols={{ base: 1, md: 3 }} gap={10} className="mt-14">
          <PromiseCard
            title="Plain English, end to end."
            body="No accountant-speak. If we have to use a tax word, we explain it next to where you see it. Year-9 reading age, on purpose."
          />
          <PromiseCard
            title="£4.99 a month. Forever."
            body={
              <>
                No "first-year discount" that doubles in year two. No tiers. No
                add-ons. The price you sign up at is the price next year.
              </>
            }
          />
          <PromiseCard
            title="Your data stays yours."
            body="Stop paying any time and you keep read-only access to your records. Forever. Your numbers belong to you, not us."
          />
        </Grid>
      </Container>
    </Section>
  );
}
