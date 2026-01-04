import Image from 'next/image'
import Link from 'next/link'
import HeroPackages from './HeroPackage'
import Reveal from '@/components/ui/Reveal'

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white overflow-hidden">
      <Image
        src="/images/galerrypreview.jpg"
        alt="Beranjak Photo"
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="relative z-10 flex h-full items-center px-16">
        <div className="grid w-full grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>
            <Reveal y={30}>
              <h1
                style={{ fontFamily: "EleganteClassica" }}
                className="text-[90px] leading-none"
              >
                <span className="block">Beranjak</span>
                <span className="-mt-5 block">Photo</span>
              </h1>
            </Reveal>

            <Reveal delay={150} y={20}>
              <p className="mt-4 text-lg max-w-md">
                Abadikan setiap momentmu bersama fotografer profesional.
              </p>
            </Reveal>

            <Reveal delay={250} y={20}>
              <Link href="/booking">
                <button className="mt-6 rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90">
                  Booking Sekarang
                </button>
              </Link>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <Reveal delay={150} y={30}>
              <HeroPackages />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
