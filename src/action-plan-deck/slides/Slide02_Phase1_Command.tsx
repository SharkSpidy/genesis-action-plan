import type { LucideIcon } from 'lucide-react'
import { Clapperboard, FileSignature, Gamepad2, Megaphone, Palette, Settings2, Users } from 'lucide-react'
import { OPS_PHASES, MILESTONES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'
import { formatMilestoneDate } from '../lib/formatDate'

interface DepartmentHead {
  readonly id: string
  readonly icon: LucideIcon
  readonly department: string
}

const DEPARTMENT_HEADS: readonly DepartmentHead[] = [
  { id: 'ops', icon: Settings2, department: 'Operations' },
  { id: 'creative', icon: Palette, department: 'Creative' },
  { id: 'film', icon: Clapperboard, department: 'Film' },
  { id: 'gaming', icon: Gamepad2, department: 'Gaming' },
  { id: 'marketing', icon: Megaphone, department: 'Marketing' },
  { id: 'sponsorships', icon: Users, department: 'Sponsorships' },
]

const phase = OPS_PHASES[0]
const venueMeeting = MILESTONES.find((m) => m.id === 'venue-meeting')

export default function Slide02_Phase1_Command() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.08),transparent_45%)]" />

      <div className="relative">
        <PhaseHeader
          phase={phase}
          subtitle="Without a confirmed venue, sponsors will not commit. This phase locks both the leadership structure and the ground it will operate on."
        />

        {venueMeeting && (
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-amber-400/40 bg-amber-400/5 px-4 py-3 backdrop-blur-md">
            <span className="rounded-full bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950">
              Confirmed
            </span>
            <p className="text-sm text-zinc-200">
              <span className="font-semibold text-amber-400">{formatMilestoneDate(venueMeeting.date)}</span> —
              {' '}first meeting with the Jain University venue team.
            </p>
          </div>
        )}

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Department heads */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Appoint department heads — your executive team
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {DEPARTMENT_HEADS.map((d) => {
                const Icon = d.icon
                return (
                  <div
                    key={d.id}
                    className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-medium text-zinc-100">{d.department}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Venue lock / MOU */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">Secure the venue</h3>
            <div className="flex h-full flex-col justify-between rounded-xl border border-neon-emerald/30 bg-neon-emerald/5 p-5 backdrop-blur-md">
              <div>
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neon-emerald/10 text-neon-emerald">
                  <FileSignature size={19} />
                </span>
                <p className="mb-1 font-display text-lg font-semibold text-white">Jain University MOU</p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Draft a formal venue proposal covering auditorium, labs, and grounds. Execute an
                  MOU that locks the exact February dates and establishes Jain University as a{' '}
                  <span className="text-neon-emerald">Co-Presenter</span>.
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                {['Auditorium access', 'Lab space', 'Outdoor grounds', 'Co-Presenter status'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="h-1 w-1 rounded-full bg-neon-emerald" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PhaseTimeline currentPhase={1} />
      </div>
    </section>
  )
}
