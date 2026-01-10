import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

export default function GalleryBanner() {
  return (
    <section id="galeri" className="bg-zinc-950 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal y={20}>
          <div
            className={[
              'relative overflow-hidden rounded-[28px]',
              'border border-white/10 bg-white/5',
              'shadow-2xl shadow-black/50',
              'h-[220px] sm:h-[260px] lg:h-[300px]',
            ].join(' ')}
          >
            {/* Background image */}
            <Image
              src="/images/glr.JPG"
              alt="Galeri Photo"
              fill
              priority={false}
              className="object-cover blur-[2px] scale-105"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />

            {/* Overlay gelap + vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-between gap-6 px-8 sm:px-12">
              {/* Left text */}
              <div className="max-w-xl">
                <Reveal y={16}>
                  <h2
                    style={{ fontFamily: 'EleganteClassica' }}
                    className="text-3xl sm:text-4xl text-white"
                  >
                    Galeri Photo
                  </h2>
                </Reveal>

                <Reveal delay={120} y={16}>
                  <p className="mt-2 text-white/90 text-base sm:text-lg leading-snug">
                    Eksplorasi setiap jepretan kamera <br className="hidden sm:block" />
                    dari kami
                  </p>
                </Reveal>
              </div>

              {/* Right button */}
              <Reveal delay={220} y={10}>
                <Link
                  href="/gallery"
                  className={[
                    'shrink-0 rounded-full',
                    'bg-white/85 text-black font-semibold',
                    'px-10 py-3 sm:px-12 sm:py-4',
                    'shadow-xl shadow-black/20',
                    'hover:bg-white transition-colors',
                  ].join(' ')}
                >
                  Lihat
                </Link>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
