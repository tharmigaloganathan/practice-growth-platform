import { cn } from "@/lib/utils"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

// Centralizes the app's max-width and horizontal padding so pages stay
// visually consistent as the marketing site and dashboard grow.
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  )
}
