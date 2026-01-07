'use client'

import { useMemo, useState } from 'react'
import type { CalendarEvent } from '@/lib/kalender'
import { addDays, formatHeaderDate, startOfDay, toDateKey } from '@/lib/kalender'
import MiniMonthCalendar from './MiniMonthCalendar'
import EventDetailPanel from './EventDetailPanel'

const HOUR_HEIGHT = 72 // px per hour (eye-catching)
const DAY_START = 6     // start jam 06:00
const DAY_END = 24      // sampai 24:00

function minutesSinceStart(date: Date) {
  return (date.getHours() - DAY_START) * 60 + date.getMinutes()
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function colorClasses(color?: CalendarEvent['color']) {
  switch (color) {
    case 'purple':
      return 'bg-violet-500/20 border-violet-400/40 text-violet-50'
    case 'amber':
      return 'bg-amber-500/20 border-amber-400/40 text-amber-50'
    case 'rose':
      return 'bg-rose-500/20 border-rose-400/40 text-rose-50'
    default:
      return 'bg-sky-500/20 border-sky-400/40 text-sky-50'
  }
}

export default function CalendarDayView({
  initialDate,
  events,
}: {
  initialDate?: Date
  events: CalendarEvent[]
}) {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate ?? new Date())
  const [monthCursor, setMonthCursor] = useState<Date>(
    new Date((initialDate ?? new Date()).getFullYear(), (initialDate ?? new Date()).getMonth(), 1)
  )
  const [activeEvent, setActiveEvent] = useState<CalendarEvent | null>(null)

  const selectedKey = toDateKey(startOfDay(selectedDate))

  const dayEvents = useMemo(() => {
    return events
      .filter((e) => toDateKey(startOfDay(new Date(e.start))) === selectedKey)
      .sort((a, b) => +new Date(a.start) - +new Date(b.start))
  }, [events, selectedKey])

  const hasEvents = (dateKey: string) => {
    return events.some((e) => toDateKey(startOfDay(new Date(e.start))) === dateKey)
  }

  const hours = Array.from({ length: DAY_END - DAY_START + 1 }, (_, i) => DAY_START + i)

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-23">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm">
              <div className="text-center leading-tight">
                <div className="text-[10px] text-white/60">
                  {selectedDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                </div>
                <div className="text-lg font-semibold">{selectedDate.getDate()}</div>
              </div>
            </div>

            <div>
              <div className="text-lg font-semibold">{formatHeaderDate(selectedDate)}</div>
              <div className="text-xs text-white/60">
                {selectedDate.toLocaleDateString('id-ID', { week: 'numeric' } as any) /* optional */}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const d = new Date()
                setSelectedDate(d)
                setMonthCursor(new Date(d.getFullYear(), d.getMonth(), 1))
                setActiveEvent(null)
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            >
              Today
            </button>

            <button
              onClick={() => {
                const d = addDays(selectedDate, -1)
                setSelectedDate(d)
                setActiveEvent(null)
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              aria-label="Previous day"
            >
              ‹
            </button>

            <button
              onClick={() => {
                const d = addDays(selectedDate, 1)
                setSelectedDate(d)
                setActiveEvent(null)
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              aria-label="Next day"
            >
              ›
            </button>

            <div className="ml-2 hidden sm:flex items-center gap-2">
              <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                Day view
              </button>
              <button className="rounded-xl bg-yellow-800 px-4 py-2 text-sm font-semibold text-white hover:opacity-95">
                + Add event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[1fr_340px]">
        {/* Left: timeline */}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="flex">
            {/* time column */}
            <div className="w-16 shrink-0 border-r border-white/10 bg-black/20">
              {hours.map((h) => (
                <div
                  key={h}
                  className="relative flex items-start justify-center text-[11px] text-white/55"
                  style={{ height: `${HOUR_HEIGHT}px` }}
                >
                  <span className="mt-[-8px]">
                    {String(h).padStart(2, '0')}:00
                  </span>
                </div>
              ))}
            </div>

            {/* grid column */}
            <div className="relative flex-1">
              {/* hour grid lines */}
              {hours.map((h) => (
                <div
                  key={h}
                  className="border-t border-white/10"
                  style={{ height: `${HOUR_HEIGHT}px` }}
                />
              ))}

              {/* event blocks */}
              <div className="absolute inset-0 p-3">
                {dayEvents.map((e) => {
                  const start = new Date(e.start)
                  const end = new Date(e.end)

                  // posisi & tinggi berdasarkan menit
                  const startMin = clamp(minutesSinceStart(start), 0, (DAY_END - DAY_START) * 60)
                  const endMin = clamp(minutesSinceStart(end), 0, (DAY_END - DAY_START) * 60)
                  const top = (startMin / 60) * HOUR_HEIGHT
                  const height = Math.max(((endMin - startMin) / 60) * HOUR_HEIGHT, 32)

                  return (
                    <button
                      key={e.id}
                      onClick={() => setActiveEvent(e)}
                      className={[
                        'absolute left-3 right-3 rounded-xl border p-3 text-left shadow-xl shadow-black/20',
                        'transition hover:brightness-110 focus:outline-none',
                        colorClasses(e.color),
                      ].join(' ')}
                      style={{ top, height }}
                    >
                      <div className="text-sm font-semibold">{e.title}</div>
                      <div className="mt-1 text-xs opacity-85">
                        {start.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} –{' '}
                        {end.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </button>
                  )
                })}

                {/* empty state */}
                {dayEvents.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-white/60">
                    Tidak ada booking untuk hari ini.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          <MiniMonthCalendar
            selectedDate={selectedDate}
            monthCursor={monthCursor}
            onChangeDate={(d) => {
              setSelectedDate(d)
              setActiveEvent(null)
            }}
            onChangeMonth={setMonthCursor}
            hasEvents={hasEvents}
          />

          <EventDetailPanel event={activeEvent} />
        </div>
      </div>
    </div>
  )
}
