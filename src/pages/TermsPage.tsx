import { Nav, Footer } from "@ds/patterns";
import { Container, Section, Eyebrow, Heading, Lede } from "@ds/primitives";

// ponytail: placeholder — full terms land next.
export function TermsPage() {
  return (
    <>
      <Nav current="/terms" />
      <main>
        <Section background="paper" spacing="lg">
          <Container width="narrow">
            <div className="text-center">
              <Eyebrow withDot>Legal</Eyebrow>
              <Heading level="display-xl" className="mt-6">
                Terms &amp; Conditions
              </Heading>
              <Lede className="mt-6" align="center">
                Our full terms are being finalised. Check back shortly.
              </Lede>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
