'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type MasonryItem = {
  id: string | number
  src: string
  alt?: string
  title?: string
  category?: string
}

type Props = {
  items: MasonryItem[]
}

export default function MasonryGallery({ items }: Props) {
  const [active, setActive] = useState<MasonryItem | null>(null)

  // bikin "random-ish" tinggi yang konsisten per item biar susunannya eye-catching
  const heights = useMemo(() => {
    const presets = [220, 260, 300, 340, 380, 420]
    const map = new Map<string | number, number>()
    items.forEach((it, i) => {
      map.set(it.id, presets[(i * 7 + 3) % presets.length])
    })
    return map
  }, [items])

  return (
    <>
      {/* Masonry */}
      <div
        className={[
          // masonry pakai CSS columns
          'columns-1 sm:columns-2 lg:columns-3 xl:columns-4',
          'gap-4 sm:gap-5',
        ].join(' ')}
      >
        {items.map((item, idx) => {
          const h = heights.get(item.id) ?? 300

          return (
            <Reveal key={item.id} delay={idx * 60} y={18}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className={[
                  'group relative mb-4 sm:mb-5 w-full overflow-hidden rounded-2xl',
                  'bg-white/5 border border-white/10',
                  'shadow-[0_20px_60px_rgba(0,0,0,0.45)]',
                  'focus:outline-none',
                  // penting untuk masonry columns: jangan pecah di tengah
                  'break-inside-avoid',
                ].join(' ')}
                style={{ height: `${h}px` }}
              >
                {/* image */}
                <Image
                  src={item.src}
                  alt={item.alt ?? item.title ?? 'Gallery photo'}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/60 opacity-90" />

                {/* label */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-end justify-between gap-4">
                    <div className="text-left">
                      {item.title && (
                        <p className="text-white font-semibold tracking-wide drop-shadow">
                          {item.title}
                        </p>
                      )}
                      {item.category && (
                        <p className="text-xs text-white/75">{item.category}</p>
                      )}
                    </div>

                    {/* little tag */}
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                      View
                    </span>
                  </div>
                </div>

                {/* fancy border glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>

      {/* Lightbox Modal (optional, tapi bikin wow) */}
      {active && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={active.src}
                alt={active.alt ?? active.title ?? 'Photo'}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-4 p-4">
              <div className="text-white">
                <p className="font-semibold">{active.title ?? 'Photo'}</p>
                {active.category && (
                  <p className="text-sm text-white/70">{active.category}</p>
                )}
              </div>

              <button
                onClick={() => setActive(null)}
                className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
