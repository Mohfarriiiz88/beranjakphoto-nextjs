'use client'

import { useState } from 'react'
import TiltedCard from '@/components/ui/TiltedCard'

const packages = [
  { id: 1, title: 'Beranjak Potrait', image: '/images/heroPotrait.JPG' },
  { id: 2, title: 'Beranjak Couple', image: '/images/heroCouple.JPG' },
  { id: 3, title: 'Beranjak Bestie', image: '/images/heroBestie.jpg' },
]

export default function HeroPackages() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="flex items-center justify-center">
      {/* ganti -space-x jadi gap + sedikit overlap pakai translate */}
      <div className="flex gap-4">
        {packages.map((item, idx) => {
          const isActive = activeId === item.id

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(isActive ? null : item.id)}
              className={[
                'relative cursor-pointer transition-all duration-500 ease-in-out',
                isActive ? 'w-[210px] z-30' : 'w-[150px] z-10',
                // trik: tetap ada stacking dikit tapi gak nempel
                idx === 1 ? '-translate-y-1' : '',
              ].join(' ')}
            >
              <div className="rounded-[28px] overflow-hidden">
                <TiltedCard
                  imageSrc={item.image}
                  altText={item.title}
                  containerHeight="360px"
                  containerWidth="100%"
                  scaleOnHover={1.05}
                  overlayContent={
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/50" />

                      {/* text vertikal kanan */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <p
                          className="text-white/95 text-sm font-semibold tracking-wide"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
