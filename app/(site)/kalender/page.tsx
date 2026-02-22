import CalendarDayView from '@/components/kalender/CalendarDayView'
import { demoEvents } from '@/lib/kalender'

export default function KalenderPage() {
  // kamu bisa set initial date supaya demo persis di event dummy
  const initial = new Date('2026-01-07T08:00:00')

  return <CalendarDayView initialDate={initial} events={demoEvents} />
}
