import type { LucideIcon } from 'lucide-react'
import {
  Armchair,
  Cast,
  Cpu,
  Gamepad2,
  Headphones,
  Mic2,
  Monitor,
  MousePointer2,
  Radio,
  Router,
  Trophy,
  Youtube,
} from 'lucide-react'
import { PRIZE_POOL_GAMING } from '../data/budget'
import { formatINR } from '../lib/formatCurrency'

interface HardwareSpec {
  readonly id: string
  readonly icon: LucideIcon
  readonly label: string
  readonly value: string
}

interface WorkflowStep {
  readonly id: string
  readonly icon: LucideIcon
  readonly title: string
  readonly copy: string
}

const HARDWARE_SPECS: readonly HardwareSpec[] = [
  { id: 'rigs', icon: Cpu, label: 'Battle stations', value: '10× RTX 4080 / 4090 rigs' },
  { id: 'displays', icon: Monitor, label: 'Displays', value: '240Hz–360Hz competitive panels' },
  { id: 'seating', icon: Armchair, label: 'Seating', value: 'Pro-grade gaming chairs, all stations' },
  { id: 'peripherals', icon: MousePointer2, label: 'Peripherals', value: 'Tournament-grade mice, keyboards, headsets' },
  { id: 'network', icon: Router, label: 'Network', value: 'Dedicated LAN switch fabric, zero packet loss' },
  { id: 'audio', icon: Headphones, label: 'Player comms', value: 'Isolated in-ear comms per team' },
]

const WORKFLOW_STEPS: readonly WorkflowStep[] = [
  { id: 'capture', icon: Gamepad2, title: 'In-game capture', copy: 'Dedicated capture card per arena pulls a clean feed off each battle station.' },
  { id: 'cast', icon: Mic2, title: 'Caster desks', copy: 'Live commentary desks call each arena, mixed independently before the switch.' },
  { id: 'switch', icon: Cast, title: 'Multi-cam switching', copy: 'A production switcher cuts between player cams, POV feeds, and the caster desk.' },
  { id: 'broadcast', icon: Youtube, title: 'YouTube Live', copy: 'Encoded and pushed to a branded YouTube broadcast, latency-tuned for chat interaction.' },
]

export default function Slide05Esports() {
  const gamingTotal = PRIZE_POOL_GAMING.reduce((sum, t) => sum + t.amount, 0)

  return (
    <section
      className="slide !justify-start overflow-y-auto bg-zinc-950 !p-0 font-body text-zinc-100"
      id="slide-5"
    >
      <div className="relative min-h-full w-full bg-grid-fade bg-grid px-6 py-10 sm:px-10 sm:py-14 lg:px-20">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">
            <Radio size={13} className="animate-pulse-slow" />
            Dual-arena live broadcast
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The Esports Battlestation Arena
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Ten tournament-grade rigs, split across two concurrent arenas — Call of Duty and
            Valorant running simultaneously, both streamed live to a single YouTube broadcast.
          </p>
        </div>

        {/* Hardware spec grid */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {HARDWARE_SPECS.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.id}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-colors hover:border-neon-cyan/40"
              >
                <Icon size={18} className="mb-3 text-neon-cyan" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{spec.label}</p>
                <p className="mt-1 text-sm font-medium leading-snug text-zinc-100">{spec.value}</p>
              </div>
            )
          })}
        </div>

        {/* Dual arena split */}
        <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ArenaCard
            title="Arena A — Valorant"
            teams="Top 8 teams"
            prize={PRIZE_POOL_GAMING.find((t) => t.id === 'valorant')?.amount ?? 0}
            accentClass="border-neon-cyan/40 shadow-neon-cyan"
            barClass="bg-neon-cyan"
          />
          <ArenaCard
            title="Arena B — Call of Duty"
            teams="Top 8 teams"
            prize={PRIZE_POOL_GAMING.find((t) => t.id === 'cod')?.amount ?? 0}
            accentClass="border-neon-emerald/40 shadow-neon-emerald"
            barClass="bg-neon-emerald"
          />
        </div>

        {/* Streaming workflow */}
        <div className="mb-10">
          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Youtube size={18} className="text-rose-400" />
            Live-stream production workflow
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono text-xs text-zinc-500">0{i + 1}</span>
                  </div>
                  <p className="mb-1 text-sm font-semibold text-zinc-100">{step.title}</p>
                  <p className="text-xs leading-relaxed text-zinc-400">{step.copy}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer prize total (all four gaming tracks, incl. PUBG & PES not in the two live arenas) */}
        <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-neon-emerald/30 bg-neon-emerald/5 p-5 backdrop-blur-md sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Trophy size={20} className="text-neon-emerald" />
            <p className="text-sm text-zinc-300">
              Combined prize pool across all four gaming tracks — Valorant, COD, PUBG, and PES
            </p>
          </div>
          <span className="font-display text-2xl font-bold text-neon-emerald">{formatINR(gamingTotal)}</span>
        </div>
      </div>
    </section>
  )
}

interface ArenaCardProps {
  title: string
  teams: string
  prize: number
  accentClass: string
  barClass: string
}

function ArenaCard({ title, teams, prize, accentClass, barClass }: ArenaCardProps) {
  return (
    <div className={`rounded-xl border bg-white/[0.03] p-5 backdrop-blur-md ${accentClass}`}>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
        <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400">{teams}</span>
      </div>
      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div className={`h-full w-full ${barClass}`} />
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-wider text-zinc-500">1st-place prize</span>
        <span className="font-mono text-xl font-semibold text-white">{formatINR(prize)}</span>
      </div>
    </div>
  )
}
