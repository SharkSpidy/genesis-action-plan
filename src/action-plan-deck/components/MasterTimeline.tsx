import { useMemo } from 'react'
import { CalendarClock, MapPin } from 'lucide-react'
import { MILESTONES } from '../data/actionPlanContent'
import { formatMilestoneDate, isPastDate } from '../lib/formatDate'

/**
 * Dated milestone list, anchored to the one confirmed date (the Jain venue
 * meeting) and running through the rest of the plan. Marks the nearest
 * milestone that hasn't happened yet as "Next up" based on the real
 * current date, so this stays accurate without manual updates.
 */
export default function MasterTimeline() {
  const now = useMemo(() => new Date(), [])
  const nextId = useMemo(() => {
    const upcoming = MILESTONES.find((m) => !isPastDate(m.date, now))
    return upcoming?.id ?? null
  }, [now])

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2">
        <CalendarClock size={16} className="text-neon-cyan" />
        <h3 className="font-display text-base font-semibold text-white">Master timeline</h3>
      </div>

      <ol className="relative border-l border-white/10 pl-6">
        {MILESTONES.map((m) => {
          const past = isPastDate(m.date, now)
          const isNext = m.id === nextId

          return (
            <li key={m.id} className="relative mb-5 last:mb-0">
              <span
                className={`absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full border-2 ${
                  isNext
                    ? 'animate-pulse-slow border-amber-400 bg-amber-400 shadow-neon-cyan'
                    : past
                      ? 'border-neon-emerald bg-neon-emerald'
                      : 'border-white/20 bg-zinc-900'
                }`}
                aria-hidden="true"
              />
              <div
                className={`rounded-xl border p-4 backdrop-blur-md ${
                  isNext ? 'border-amber-400/40 bg-amber-400/5' : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`font-mono text-xs uppercase tracking-wider ${
                      isNext ? 'text-amber-400' : 'text-zinc-500'
                    }`}
                  >
                    {formatMilestoneDate(m.date)}
                  </span>
                  {isNext && (
                    <span className="rounded-full bg-amber-400 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950">
                      Next up
                    </span>
                  )}
                  {m.isKeyMeeting && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
                      <MapPin size={10} />
                      Venue meeting
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold text-zinc-100">{m.label}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{m.detail}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
