import Reveal from '@/components/ui/Reveal'

const steps = [
  { id: 1, label: 'Booking' },
  { id: 2, label: 'Pemotretan' },
  { id: 3, label: 'Edit' },
  { id: 4, label: 'Finish' },
]

export default function StepsSection() {
  return (
    <section className="bg-zinc-950 py-24 text-white text-center overflow-hidden">
      {/* Title */}
      <Reveal y={20}>
        <h2
          style={{ fontFamily: 'EleganteClassica' }}
          className="mb-12 text-3xl leading-tight"
        >
          Hanya Empat Langkah untuk Mendapatkan
          <br />
          Foto yang Menakjubkan
        </h2>
      </Reveal>

      {/* Steps */}
      <div className="flex justify-center gap-12">
        {steps.map((step, idx) => (
          <Reveal key={step.id} delay={idx * 120} y={24}>
            <div>
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-black">
                {step.id}
              </div>
              <p className="text-white/90">{step.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
