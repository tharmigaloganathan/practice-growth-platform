import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  className?: string
}

// Standard vertical rhythm for marketing and product sections.
// Keeping this reusable prevents every page from inventing its own spacing.
export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", className)}>
      {children}
    </section>
  )
}
