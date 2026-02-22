import Reveal from '@/components/ui/Reveal'

const steps = [
  { id: 1, label: 'Booking' },
  { id: 2, label: 'Pemotretan' },
  { id: 3, label: 'Edit' },
  { id: 4, label: 'Finish' },
]

export default function StepsSection() {
  return (
    <section className="bg-zinc-950 py-20 md:py-24 text-white text-center overflow-hidden">
      {/* Title */}
      <Reveal y={20}>
        <h2
          style={{ fontFamily: 'EleganteClassica' }}
          className="mb-12 px-6 text-2xl leading-snug md:px-0 md:text-3xl md:leading-tight"
        >
          Hanya Empat Langkah untuk Mendapatkan
          <br className="hidden md:block" />
          Foto yang Menakjubkan
        </h2>
      </Reveal>

      {/* Steps */}
      <div className="
        mx-auto
        flex
        max-w-md
        flex-col
        items-center
        gap-10
        md:max-w-none
        md:flex-row
        md:justify-center
        md:gap-12
      ">
        {steps.map((step, idx) => (
          <Reveal key={step.id} delay={idx * 120} y={24}>
            <div className="flex flex-col items-center">
              <div className="
                mb-3
                flex
                h-14 w-14
                items-center
                justify-center
                rounded-full
                bg-white
                text-lg
                font-semibold
                text-black
                md:h-16
                md:w-16
                md:text-xl
              ">
                {step.id}
              </div>
              <p className="text-sm text-white/90 md:text-base">
                {step.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}