import { cn } from "@/lib/utils"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

// Shared header component for pages/sections where we want strong hierarchy.
// "Eyebrow" is the small uppercase label above a title.
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-stone-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}
