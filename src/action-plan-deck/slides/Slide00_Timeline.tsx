import { CalendarClock } from 'lucide-react'
import MasterTimeline from '../components/MasterTimeline'

export default function Slide00_Timeline() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.08),transparent_45%)]" />

      <div className="relative">
        <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">
          <CalendarClock size={13} />
          Master timeline
        </p>
        <h2 className="mb-2 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Where we are, what's next
        </h2>
        <p className="mb-8 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Anchored to the one confirmed date on the calendar — everything after it is a
          planning estimate until the MOU locks real February dates.
        </p>

        <MasterTimeline />
      </div>
    </section>
  )
}
