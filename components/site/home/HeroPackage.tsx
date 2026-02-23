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
    <div className="w-full overflow-hidden">
      {/* MOBILE: horizontal scroll */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          px-6
          pb-4
          md:overflow-visible
          md:justify-center
        "
      >
        {packages.map((item, idx) => {
          const isActive = activeId === item.id

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(isActive ? null : item.id)}
              className={[
                'relative shrink-0 cursor-pointer transition-all duration-500 ease-in-out',
                // MOBILE
                'w-[240px]',
                isActive ? 'scale-[1.04]' : 'scale-100',
                // DESKTOP
                'md:shrink md:w-[150px]',
                isActive ? 'md:w-[210px] md:z-30' : 'md:z-10',
                idx === 1 ? 'md:-translate-y-1' : '',
              ].join(' ')}
            >
              <div className="overflow-hidden rounded-[28px]">
                <TiltedCard
                  imageSrc={item.image}
                  altText={item.title}
                  containerHeight="360px"
                  containerWidth="100%"
                  scaleOnHover={1.05}
                  overlayContent={
                    <div className="absolute inset-0">
                      {/* SOFT OVERLAY (tidak terlalu gelap) */}
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-b
                          from-black/5
                          via-black/10
                          to-black/30
                          md:from-black/5
                          md:via-black/15
                          md:to-black/40
                        "
                      />

                      {/* MOBILE: text bawah */}
                      <div className="absolute bottom-4 left-4 right-4 md:hidden">
                        <div className="rounded-lg bg-black/20 px-3 py-2 backdrop-blur-sm">
                          <p className="text-sm font-semibold tracking-wide text-white">
                            {item.title}
                          </p>
                        </div>
                      </div>

                      {/* DESKTOP: text vertikal */}
                      <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 md:block">
                        <p
                          className="text-sm font-semibold tracking-wide text-white/95"
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