import type { LucideIcon } from 'lucide-react'
import { Building2, CalendarRange, Clock, Layers, Sparkles } from 'lucide-react'
import { EVENT_META, MILESTONES, RECENT_UPDATES } from '../data/actionPlanContent'
import PhaseTimeline from '../components/PhaseTimeline'
import { formatMilestoneDate } from '../lib/formatDate'
import { ACCENT_STYLES, type Accent } from '../../lib/accent'

interface SummaryCardProps {
  icon: LucideIcon
  label: string
  value: string
  sub: string
  accent: Accent
}

function SummaryCard({ icon: Icon, label, value, sub, accent }: SummaryCardProps) {
  const style = ACCENT_STYLES[accent]
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
      <span className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${style.bg} ${style.text}`}>
        <Icon size={20} />
      </span>
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{label}</p>
      <p className={`mt-1 font-display text-2xl font-bold ${style.text}`}>{value}</p>
      <p className="mt-1 text-xs text-zinc-500">{sub}</p>
    </div>
  )
}

export default function Slide01_Action_Summary() {
  const timelineWindow = `${formatMilestoneDate(MILESTONES[0].date)} – ${formatMilestoneDate(MILESTONES[MILESTONES.length - 1].date)}`

  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(52,211,153,0.07),transparent_45%)]" />

      <div className="relative">
        <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">
          <Sparkles size={13} />
          Master Action Plan
        </p>
        <h1 className="mb-2 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          HIVE Flagship Event — Logistics Roadmap
        </h1>
        <p className="mb-8 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Six phases, one command structure. This is the internal execution plan the core
          committee is accountable to.
        </p>

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-emerald/30 bg-neon-emerald/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-emerald">
          <CalendarRange size={12} />
          Estimated window: {timelineWindow}
        </p>

        {/* Top-line metric cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SummaryCard
            icon={Building2}
            label="Venue"
            value={EVENT_META.venue}
            sub={EVENT_META.venueDetail}
            accent="cyan"
          />
          <SummaryCard
            icon={Clock}
            label="Format"
            value={EVENT_META.format}
            sub={EVENT_META.timeline}
            accent="emerald"
          />
          <SummaryCard
            icon={Layers}
            label="Scale"
            value={`${EVENT_META.verticals.length} verticals`}
            sub="Hackathon through Pro-Show"
            accent="amber"
          />
        </div>

        {/* Verticals */}
        <div className="mb-8 flex flex-wrap gap-2">
          {EVENT_META.verticals.map((v) => (
            <span
              key={v}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
            >
              {v}
            </span>
          ))}
        </div>

        {/* Recent updates */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Recent updates
          </h3>
          <ul className="space-y-2.5">
            {RECENT_UPDATES.map((u) => (
              <li key={u.id} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-emerald" aria-hidden="true" />
                <span>
                  <span className="font-medium text-zinc-100">{u.label}</span>
                  <span className="text-zinc-500"> — {u.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase progress preview — nothing active yet on the summary slide */}
        <PhaseTimeline currentPhase={0} />
      </div>
    </section>
  )
}
