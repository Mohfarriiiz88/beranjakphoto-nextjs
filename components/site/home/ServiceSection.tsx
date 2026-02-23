import Reveal from '@/components/ui/Reveal'

const services = [
  {
    title: 'Beranjak Portrait',
    image: '/images/heroPotrait.JPG',
  },
  {
    title: 'Beranjak Couple',
    image: '/images/heroCouple.JPG',
  },
  {
    title: 'Beranjak Bestie',
    image: '/images/heroBestie.jpg',
  },
]

export default function ServiceSection() {
  return (
    <section className="bg-zinc-950 py-20 text-white overflow-hidden">
      {/* Title */}
      <Reveal y={20}>
        <h2
          style={{ fontFamily: 'EleganteClassica' }}
          className="text-center text-4xl mb-4"
        >
          Tersedia untukmu
        </h2>
      </Reveal>

      {/* Subtitle */}
      <Reveal delay={120} y={20}>
        <p className="text-center text-2xl mb-20">
          Pilih dan pesan paket yang tersedia
          <br />
          dan abadikan setiap momenmu
        </p>
      </Reveal>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
        {services.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 140} y={26}>
            <div className="rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-[360px] w-full object-cover"
              />
              <p className="text-center mt-4 text-white/90">
                {item.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
