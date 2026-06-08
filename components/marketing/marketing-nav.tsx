import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

// Marketing navigation stays separate from the dashboard shell so the public
// website can evolve independently from authenticated app workflows.
//
export function MarketingNav() {
  return (
    <header className="border-b bg-stone-50/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Mika Logan Studios
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          <Link href="#platform" className="hover:text-stone-950">
            Platform
          </Link>
          <Link href="#how-it-works" className="hover:text-stone-950">
            How it works
          </Link>
          <Link href="/dashboard" className="hover:text-stone-950">
            Dashboard
          </Link>
        </nav>

        <Button asChild size="sm">
          <Link href="/dashboard">View demo</Link>
        </Button>
      </Container>
    </header>
  )
}
