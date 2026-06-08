import { db } from "@/lib/db"

export default async function DashboardPage() {
  const tenants = await db.tenant.findMany({
    include: {
      services: true,
      forms: {
        include: {
          versions: true,
        },
      },
    },
  })

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Practice Growth Dashboard
        </h1>

        <div className="mt-8 space-y-6">
          {tenants.map((tenant) => (
            <section
              key={tenant.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div>
                <p className="text-sm uppercase tracking-wide text-stone-500">
                  {tenant.vertical}
                </p>
                <h2 className="text-2xl font-medium">{tenant.name}</h2>
                <p className="mt-1 text-stone-500">/{tenant.slug}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium">Services</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-600">
                  {tenant.services.map((service) => (
                    <li key={service.id}>{service.name}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-medium">Forms</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-600">
                  {tenant.forms.map((form) => (
                    <li key={form.id}>
                      {form.name} — {form.versions.length} version(s)
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
