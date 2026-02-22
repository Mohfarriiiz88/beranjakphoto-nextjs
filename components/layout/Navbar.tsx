'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true)
        setIsOpen(false) // tutup menu saat scroll
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed left-0 right-0 z-50',
        'top-4', // ✅ jarak dari atas
        'transition-transform duration-300 ease-out',
        hidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-black/40 px-6 py-3 backdrop-blur-md">
        
        {/* Logo */}
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

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden md:inline-flex rounded-full bg-white px-6 py-2 text-sm font-semibold text-black"
          >
            Booking
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-black/80 px-6 py-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-6 text-white">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Galeri Photo</Link></li>
            <li><Link href="/kalender" onClick={() => setIsOpen(false)}>Kalender</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}