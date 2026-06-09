import { MarketingNav } from "@/components/marketing/marketing-nav"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { WellnessInquiryForm } from "@/components/forms/wellness-inquiry-form"

export default function InquiryPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <MarketingNav />

      <Section>
        <Container className="max-w-3xl">
          <PageHeader
            eyebrow="Consult request"
            title="Take the first step at your own pace."
            description="This guided inquiry helps the practice understand what you’re looking for and route you to the right next step."
          />

          <div className="mt-10">
            <WellnessInquiryForm />
          </div>
        </Container>
      </Section>
    </main>
  )
}
