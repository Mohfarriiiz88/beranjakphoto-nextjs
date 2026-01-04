'use client'

import { ReactNode } from 'react'

type TiltedCardProps = {
  imageSrc: string
  altText: string
  captionText?: string
  containerHeight: string
  containerWidth: string
  rotateAmplitude?: number
  scaleOnHover?: number
  overlayContent?: ReactNode
}

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight,
  containerWidth,
  rotateAmplitude = 10,
  scaleOnHover = 1.1,
  overlayContent,
}: TiltedCardProps) {
  return (
    <div
      className="relative rounded-xl overflow-hidden transition-transform duration-300"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      <div
        className="w-full h-full transform-gpu transition-transform duration-300 hover:scale-110 hover:rotate-1"
        style={{
          transformOrigin: 'center',
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {overlayContent && (
        <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
          {overlayContent}
        </div>
      )}
    </div>
  )
}
