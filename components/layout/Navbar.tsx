'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY

      // kalau scroll ke bawah dan sudah lewat sedikit (biar gak jitter)
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true)
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
        'fixed top-0 z-50 flex w-full items-center justify-between px-16 py-6 text-white transition-transform duration-300',
        hidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      <h1 style={{ fontFamily: 'EleganteClassica' }} className="text-lg">
        Beranjak
      </h1>

      <ul className="flex gap-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/booking">Booking</Link></li>
        <li><Link href="/gallery">Galeri Photo</Link></li>
        <li><Link href="/kalender">Kalender</Link></li>
      </ul>

      <Link href="/login" className="rounded-full bg-black px-6 py-2">
        Login
      </Link>
    </nav>
  )
}
