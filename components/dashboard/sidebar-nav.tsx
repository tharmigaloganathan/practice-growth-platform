import Link from "next/link"

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Inquiries", href: "/dashboard/inquiries" },
  { label: "Services", href: "/dashboard/services" },
  { label: "Settings", href: "/dashboard/settings" },
]

// Dashboard navigation is intentionally small for the MVP.
// More modules can register their own routes later.
//
export function SidebarNav() {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-xl px-3 py-2 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-950"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
