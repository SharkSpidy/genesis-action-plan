import type { LucideIcon } from 'lucide-react'
import { Building, Cpu, FileStack, Soup, Target } from 'lucide-react'
import { OPS_PHASES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'
import { PRIZE_POOL_TOTAL, TOTAL_EVENT_BUDGET } from '../../data/budget'
import { formatLakhs } from '../../lib/formatCurrency'

interface OutreachTarget {
  readonly id: string
  readonly icon: LucideIcon
  readonly label: string
  readonly note: string
}

const OUTREACH_TARGETS: readonly OutreachTarget[] = [
  { id: 'infopark', icon: Building, label: 'Infopark tech firms', note: 'Local tech ecosystem, easiest first calls' },
  { id: 'hardware', icon: Cpu, label: 'ASUS, Acer & hardware brands', note: 'Natural fit for the esports arena' },
  { id: 'fnb', icon: Soup, label: 'Local F&B partners', note: 'On-ground vendor + pouring-rights potential' },
]

const phase = OPS_PHASES[1]

export default function Slide03_Phase2_Finance() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(251,191,36,0.08),transparent_45%)]" />

      <div className="relative">
        <PhaseHeader phase={phase} subtitle="Your primary tool for raising working capital before major outlays begin." />

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Master deck */}
          <div className="flex flex-col justify-between rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6 backdrop-blur-md lg:col-span-2">
            <div>
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                <FileStack size={20} />
              </span>
              <p className="font-display text-lg font-semibold text-white">Build the Master Deck</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                A high-impact, 10-slide presentation covering demographics, footfall, event
                formats, and tiered sponsorship deliverables — logo placement, stage time, data
                access.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Budget already scoped</span>
              <span className="font-mono text-sm font-semibold text-amber-400">
                {formatLakhs(TOTAL_EVENT_BUDGET)} total · {formatLakhs(PRIZE_POOL_TOTAL)} prize pool
              </span>
            </div>
          </div>

          {/* Outreach targets */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <Target size={13} />
              Launch B2B outreach
            </h3>
            <div className="space-y-3">
              {OUTREACH_TARGETS.map((t) => {
                const Icon = t.icon
                return (
                  <div
                    key={t.id}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-100">{t.label}</p>
                      <p className="text-xs text-zinc-500">{t.note}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Goal: secure seed funding commitments before making major financial outlays.
            </p>
          </div>
        </div>

        <PhaseTimeline currentPhase={2} />
      </div>
    </section>
  )
}
