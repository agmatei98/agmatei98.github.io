import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Lede,
  EmailCapture,
  PhoneFrame,
  ScreenMock,
} from "@ds/primitives";

/**
 * HeroFloating - hero with a "floating" preview card overlapping into
 * the section below. Adds depth without animation. The visual hangs
 * 80–120px below the hero's bottom, so the next section needs `pt-32`
 * (or similar) to make room.
 *
 * The pattern handles its own bottom offset, so just compose it normally
 * and add the next section directly afterwards.
 */
export function HeroFloating({
  eyebrow = "Pre-launch · UK only",
  headline,
  lede,
  ctaLabel = "Get early access",
  screenVariant = "home",
}: {
  eyebrow?: string;
  headline: string;
  lede: string;
  ctaLabel?: string;
  screenVariant?: "home" | "receipt" | "mtd-done";
}) {
  return (
    <Section background="paper" spacing="lg" className="relative pb-40 md:pb-56">
      <Container width="default">
        <div className="mx-auto max-w-[40rem] text-center">
          <div className="reveal-fade flex justify-center">
            <Eyebrow withDot>{eyebrow}</Eyebrow>
          </div>

          <Heading level="display-xl" className="reveal-fade mt-6" >
            {headline}
          </Heading>

          <div
            className="reveal-fade mt-6 flex justify-center"
            style={{ animationDelay: "200ms" }}
          >
            <Lede align="center">{lede}</Lede>
          </div>

          <div
            className="reveal-fade mt-9 mx-auto max-w-[28rem]"
            style={{ animationDelay: "350ms" }}
          >
            <EmailCapture ctaLabel={ctaLabel} />
          </div>
        </div>
      </Container>

      {/* Floating preview - absolute-positioned to overlap the next section. */}
      <div
        className="reveal-fade pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-32 md:-bottom-44 z-10"
        style={{ animationDelay: "500ms" }}
      >
        <div className="pointer-events-auto w-[260px] md:w-[300px]">
          <PhoneFrame>
            <ScreenMock variant={screenVariant} />
          </PhoneFrame>
        </div>
      </div>
    </Section>
  );
}
