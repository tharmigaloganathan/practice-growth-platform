import Link from "next/link"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"

type DashboardShellProps = {
  children: React.ReactNode
}

// The dashboard shell centralizes the authenticated app layout.
// Auth is not wired yet, but keeping this separate makes Day 4/5 easier.
export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
        <aside className="hidden border-r bg-white p-6 md:block">
          <Link href="/" className="font-semibold tracking-tight">
            Practice Growth
          </Link>

          <div className="mt-8">
            <SidebarNav />
          </div>
        </aside>

        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  )
}
