'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Apakah saya bisa memilih fotografer?',
    answer:
      'Ya, Anda dapat memilih fotografer sesuai ketersediaan. Setiap fotografer memiliki portofolio yang bisa dilihat sebelum booking.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Pembayaran dilakukan melalui transfer bank atau e-wallet. DP diperlukan untuk mengamankan jadwal.',
  },
  {
    question: 'Apakah bisa custom paket?',
    answer:
      'Tentu. Anda dapat menyesuaikan durasi, jumlah fotografer, dan kebutuhan khusus lainnya.',
  },
  {
    question: 'Berapa lama hasil foto diterima?',
    answer:
      'Estimasi pengerjaan 7–14 hari kerja tergantung paket dan tingkat editing.',
  },
  {
    question: 'Apakah melayani luar kota?',
    answer:
      'Ya, kami melayani luar kota dengan biaya transportasi dan akomodasi menyesuaikan lokasi.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-zinc-950 py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        {/* Title */}
        <Reveal y={20}>
          <h2
            style={{ fontFamily: 'EleganteClassica' }}
            className="text-center text-3xl text-white"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
        </Reveal>

        {/* FAQ list */}
        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <Reveal key={index} delay={index * 100} y={22}>
                <div className="border border-white/15 rounded-xl bg-white/5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-white">
                      {item.question}
                    </span>

                    <span
                      className={[
                        'text-xl text-white/90 transition-transform duration-300',
                        isOpen ? 'rotate-180' : 'rotate-0',
                      ].join(' ')}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Answer with smooth expand animation */}
                  <div
                    className={[
                      'grid transition-all duration-400 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden px-6 pb-6 text-sm text-white/75 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
