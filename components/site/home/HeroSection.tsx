import Image from 'next/image'
import Link from 'next/link'
import HeroPackages from './HeroPackage'

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-screen text-white hero-safe">
      {/* Background */}
      <Image
        src="/images/galerrypreview.JPG"
        alt="Beranjak Photo"
        fill
        priority
        className="
          object-cover
          object-center
          brightness-75
          lg:object-cover
        "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[75vh] lg:min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
            
            {/* LEFT */}
            <div className="max-w-xl">
              <h1
                style={{ fontFamily: 'EleganteClassica' }}
                className="
                  hero-title
                  text-4xl
                  sm:text-5xl
                  lg:text-[90px]
                  leading-[0.95]
                "
              >
                Beranjak <br /> Photo
              </h1>

              <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/90">
                Abadikan setiap momentmu bersama fotografer profesional.
              </p>

              <Link href="/booking">
                <button className="
                  mt-5
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:opacity-90
                  sm:px-6
                  sm:text-base
                ">
                  Booking Sekarang
                </button>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="flex justify-start lg:justify-end">
              <HeroPackages />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}