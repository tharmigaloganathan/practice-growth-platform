import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Convert",
    description:
      "Turn website visitors into structured, qualified inquiries through a calm guided flow.",
  },
  {
    title: "Organize",
    description:
      "Track inquiry status, client fit, source, and next steps from a lightweight practitioner dashboard.",
  },
  {
    title: "Handoff",
    description:
      "Route prospective clients into existing tools like Jane, Owl, email, or manual booking workflows.",
  },
]

// Feature content lives in data instead of repeated JSX so future verticals
// can swap copy/modules without changing the component structure.
export function PlatformFeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title} className="rounded-2xl">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="leading-7 text-stone-600">
            {feature.description}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
