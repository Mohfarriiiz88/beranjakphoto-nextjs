'use client'

import { useState } from 'react'

type Message = {
  from: 'user' | 'bot'
  text: string
}

export default function AirisChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Halo 👋 Aku Airis. Ada yang bisa aku bantu?',
    },
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg: Message = { from: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // dummy response (nanti ganti API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: 'Terima kasih! Untuk sekarang Airis masih belajar 😊',
        },
      ])
    }, 600)
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full bg-white text-black
          shadow-xl hover:brightness-110 transition
        "
        aria-label="Chat Airis"
      >
        Airis
      </button>

      {/* CHAT POPUP */}
      {open && (
        <div className="
          fixed bottom-24 right-6 z-50
          w-[320px] sm:w-[360px]
          rounded-2xl bg-zinc-900 text-white
          shadow-2xl border border-white/10
          flex flex-col overflow-hidden
        ">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-800">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-black">
                A
              </div>
              <div>
                <div className="text-sm font-semibold">Airis</div>
                <div className="text-xs text-white/60">Virtual Assistant</div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 p-4 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={[
                    'max-w-[80%] rounded-xl px-3 py-2',
                    m.from === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white/90',
                  ].join(' ')}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Tulis pesan..."
              className="
                flex-1 rounded-xl bg-white/10 px-3 py-2
                text-sm text-white outline-none
                placeholder:text-white/40
              "
            />
            <button
              onClick={sendMessage}
              className="rounded-xl bg-white px-4 text-sm font-semibold text-black hover:brightness-110"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  )
}