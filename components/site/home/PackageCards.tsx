'use client'

import { useState } from 'react'
import TiltedCard from '@/components/ui/TiltedCard'

const packages = [
  {
    id: 1,
    title: 'Wedding Package',
    image: '/images/package-wedding.jpg',
  },
  {
    id: 2,
    title: 'Prewedding Package',
    image: '/images/package-prewedding.jpg',
  },
  {
    id: 3,
    title: 'Event Package',
    image: '/images/package-event.jpg',
  },
]

export default function PackageCards() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="mt-16 flex gap-6 justify-center">
      {packages.map((item) => {
        const isActive = activeId === item.id

        return (
          <div
            key={item.id}
            onClick={() =>
              setActiveId(isActive ? null : item.id)
            }
            className={`transition-all duration-500 cursor-pointer ${
              isActive ? 'w-[360px]' : 'w-[260px]'
            }`}
          >
            <TiltedCard
              imageSrc={item.image}
              altText={item.title}
              containerHeight="340px"
              containerWidth="100%"
              scaleOnHover={1.2}
              overlayContent={
                <p className="text-lg font-semibold">
                  {item.title}
                </p>
              }
            />
          </div>
        )
      })}
    </div>
  )
}
