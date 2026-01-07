export type CalendarEvent = {
  id: string
  title: string
  start: string // ISO datetime
  end: string   // ISO datetime
  color?: 'blue' | 'purple' | 'amber' | 'rose'
  description?: string
  location?: string
}

export function toDateKey(d: Date) {
  // YYYY-MM-DD
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

export function addDays(d: Date, days: number) {
  const x = new Date(d)
  x.setDate(x.getDate() + days)
  return x
}

export function formatHeaderDate(d: Date) {
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatMonthTitle(d: Date) {
  return d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
}

// dummy events
export const demoEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Deep work',
    start: '2026-01-07T16:00:00',
    end: '2026-01-07T17:00:00',
    color: 'blue',
    description: 'Fokus edit + seleksi foto.',
  },
  {
    id: '2',
    title: 'One-on-one w/ Eva',
    start: '2026-01-07T17:00:00',
    end: '2026-01-07T17:30:00',
    color: 'rose',
    description: 'Diskusi kebutuhan prewedding.',
  },
  {
    id: '3',
    title: 'Design sync',
    start: '2026-01-07T17:30:00',
    end: '2026-01-07T18:15:00',
    color: 'blue',
    description: 'Koordinasi layout album.',
  },
  {
    id: '4',
    title: 'SEO planning',
    start: '2026-01-07T20:30:00',
    end: '2026-01-07T21:00:00',
    color: 'blue',
    description: 'Rencana konten untuk IG & website.',
  },
  {
    id: '5',
    title: 'Meetup event',
    start: '2026-01-07T22:00:00',
    end: '2026-01-07T23:00:00',
    color: 'amber',
    description: 'Networking vendor wedding.',
  },
]
