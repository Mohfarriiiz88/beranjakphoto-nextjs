'use client'

import { addDays, formatMonthTitle, startOfDay, toDateKey } from '@/lib/kalender'

type Props = {
  selectedDate: Date
  monthCursor: Date
  onChangeDate: (d: Date) => void
  onChangeMonth: (d: Date) => void
  hasEvents?: (dateKey: string) => boolean
}

export default function MiniMonthCalendar({
  selectedDate,
  monthCursor,
  onChangeDate,
  onChangeMonth,
  hasEvents,
}: Props) {
  const first = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1)
  const startWeekday = (first.getDay() + 6) % 7 // Monday = 0
  const gridStart = addDays(first, -startWeekday)

  const days = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i))
  const monthTitle = formatMonthTitle(monthCursor)

  const weekDays = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onChangeMonth(new Date(monthCursor.getFullYear(), monthCursor.getMonth() - 1, 1))}
          className="rounded-lg px-2 py-1 text-white/70 hover:bg-white/10"
        >
          ‹
        </button>
        <div className="text-sm font-semibold text-white">{monthTitle}</div>
        <button
          onClick={() => onChangeMonth(new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 1))}
          className="rounded-lg px-2 py-1 text-white/70 hover:bg-white/10"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-white/60">
        {weekDays.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {days.map((d) => {
          const isCurrentMonth = d.getMonth() === monthCursor.getMonth()
          const isSelected = toDateKey(startOfDay(d)) === toDateKey(startOfDay(selectedDate))
          const key = toDateKey(d)
          const dot = hasEvents?.(key)

          return (
            <button
              key={key}
              onClick={() => onChangeDate(d)}
              className={[
                'relative flex h-9 w-9 items-center justify-center rounded-full text-sm transition',
                isSelected ? 'bg-yellow-800 text-white' : 'text-white/85 hover:bg-white/10',
                !isCurrentMonth ? 'opacity-40' : '',
              ].join(' ')}
            >
              {d.getDate()}
              {dot && (
                <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-yellow-300" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
