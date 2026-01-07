'use client'

import type { CalendarEvent } from '@/lib/kalender'

function fmtTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
}

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function EventDetailPanel({
  event,
}: {
  event: CalendarEvent | null
}) {
  if (!event) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
        <div className="text-sm font-semibold text-white">Detail</div>
        <p className="mt-2 text-sm">
          Klik jadwal untuk melihat detail.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{event.title}</div>

      <div className="mt-3 space-y-2 text-sm text-white/75">
        <div className="flex items-center gap-2">
          <span className="opacity-70">📅</span>
          <span>{fmtDate(event.start)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-70">⏰</span>
          <span>
            {fmtTime(event.start)} – {fmtTime(event.end)}
          </span>
        </div>
        {event.location && (
          <div className="flex items-center gap-2">
            <span className="opacity-70">📍</span>
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {event.description && (
        <div className="mt-4">
          <div className="text-xs font-semibold text-white/80">About</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            {event.description}
          </p>
        </div>
      )}
    </div>
  )
}
