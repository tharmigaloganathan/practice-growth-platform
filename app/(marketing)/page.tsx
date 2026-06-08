import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { HeroSection } from "@/components/marketing/hero-section"
import { PlatformFeatureCards } from "@/components/marketing/platform-feature-cards"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <MarketingNav />
      <HeroSection />

      <Section id="platform" className="bg-white">
        <Container>
          <PageHeader
            eyebrow="Platform"
            title="Built for the messy gap between website traffic and booked consults."
            description="The platform is designed to sit before existing practice-management tools, helping solo wellness professionals structure inquiries, understand client intent, and route each prospective client to the right next step."
          />

          <div className="mt-12">
            <PlatformFeatureCards />
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" className="bg-stone-50">
        <Container>
          <PageHeader
            eyebrow="How it works"
            title="A low-friction workflow for solo practices."
            description="Visitors get a calm inquiry experience. Practitioners get structured information, status tracking, and a clean handoff into their existing tools."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              "Visitor explores services",
              "Guided inquiry captures context",
              "Practitioner reviews structured lead",
              "Client is routed to the next step",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border bg-white p-5">
                <p className="text-sm font-medium text-stone-500">
                  Step {index + 1}
                </p>
                <p className="mt-3 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
