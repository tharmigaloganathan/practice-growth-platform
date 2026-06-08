import { db } from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default async function DashboardPage() {
  const tenant = await db.tenant.findFirst({
    where: {
      slug: "willow-and-well",
    },
    include: {
      services: true,
      forms: {
        include: {
          versions: true,
        },
      },
      inquiries: true,
      analyticsEvents: true,
    },
  })

  if (!tenant) {
    return (
      <DashboardShell>
        <DashboardHeader
          title="No practice found"
          description="Run the database seed command to create the demo practice."
        />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <DashboardHeader
        eyebrow="Demo practice"
        title={tenant.name}
        description="A fictional wellness practice used to test the platform's intake, inquiry management, analytics, and handoff workflows."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <MetricCard title="Services" value={tenant.services.length} />
        <MetricCard title="Forms" value={tenant.forms.length} />
        <MetricCard title="Inquiries" value={tenant.inquiries.length} />
        <MetricCard title="Events" value={tenant.analyticsEvents.length} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tenant.services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border bg-stone-50 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium">{service.name}</p>
                  <Badge variant={service.isActive ? "default" : "secondary"}>
                    {service.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>

                {service.description ? (
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {service.description}
                  </p>
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Forms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tenant.forms.map((form) => (
              <div key={form.id} className="rounded-xl border bg-stone-50 p-4">
                <p className="font-medium">{form.name}</p>
                {form.description ? (
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {form.description}
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-stone-500">
                  {form.versions.length} version(s)
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

function MetricCard({ title, value }: { title: string; value: number }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-stone-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  )
}
