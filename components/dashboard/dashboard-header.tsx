type DashboardHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

// Header pattern for dashboard pages.
// Kept separate from marketing PageHeader because dashboard headings should be quieter.
export function DashboardHeader({
  eyebrow,
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        {title}
      </h1>

      {description ? (
        <p className="mt-3 max-w-2xl leading-7 text-stone-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}
