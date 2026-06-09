import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"

export function HeroSection() {
  return (
    <Section className="bg-stone-50">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <PageHeader
            eyebrow="Practice Growth Platform"
            title="A calmer path from first inquiry to first consult."
            description="A modular client-acquisition and onboarding platform for wellness practices, combining a conversion-focused website, guided intake flow, lead tracking, and practice-management handoff."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/inquiry">Start a consult request</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#platform">Explore platform</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <div className="rounded-[1.5rem] bg-stone-100 p-5">
            <p className="text-sm font-medium text-stone-500">
              New inquiry
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-medium">Prospective client</p>
                <p className="mt-1 text-sm text-stone-500">
                  Interested in ADHD support and evening availability.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-medium">Recommended next step</p>
                <p className="mt-1 text-sm text-stone-500">
                  Send consult booking link through existing practice tool.
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-medium">Status</p>
                <p className="mt-1 text-sm text-stone-500">
                  New → Consult requested
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
