'use client'

import Link from 'next/link'

const menu = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Booking', href: '/admin/bookinglist' },
  { label: 'Kalender', href: '/admin/calender' },
  { label: 'Paket', href: '/admin/paket' },
  { label: 'Klien', href: '/admin/client' },
  { label: 'Galeri', href: '/admin/galeri' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0E0E10] border-r border-white/5 px-5 py-6">
      <div className="mb-10">
        <div className="text-xl font-semibold tracking-wide">
          Beranjak
        </div>
        <div className="text-xs text-white/50">Admin Dashboard</div>
      </div>

      <nav className="space-y-2">
        {menu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="
              block rounded-lg px-3 py-2
              text-sm text-white/80
              hover:bg-white/5 hover:text-white
              transition
            "
          >
            {m.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}