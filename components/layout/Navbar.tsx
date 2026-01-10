'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) setHidden(true)
      else setHidden(false)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed top-0 z-50 w-full transition-transform duration-300',
        hidden ? '-translate-y-full' : 'translate-y-0',
        'navbar-pad', // ✅ ini untuk mobile override
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          style={{ fontFamily: 'EleganteClassica' }}
          className="text-lg text-white"
        >
          Beranjak
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/gallery">Galeri Photo</Link></li>
          <li><Link href="/kalender">Kalender</Link></li>
        </ul>

        {/* Mobile CTA */}
        <Link
          href="/booking"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black md:px-6 md:py-2"
        >
          Booking
        </Link>
      </div>
    </nav>
  )
}
