import { useState, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ChevronDown, Clapperboard, DollarSign, Gamepad2, ShieldCheck, Trophy } from 'lucide-react'
import {
  BUDGET_LINE_ITEMS,
  PRIZE_POOL_GAMING,
  PRIZE_POOL_GROUPS,
  PRIZE_POOL_TOTAL,
  TOTAL_EVENT_BUDGET,
  assertBudgetIntegrity,
} from '../data/budget'
import { formatINR, formatLakhs } from '../lib/formatCurrency'
import { ACCENT_STYLES } from '../lib/accent'
import DonutChart from '../components/DonutChart'

assertBudgetIntegrity()

interface MetricCardData {
  readonly id: string
  readonly icon: LucideIcon
  readonly label: string
  readonly amount: number
  readonly sub: string
  readonly accentText: string
  readonly accentBg: string
  readonly accentRing: string
}

const STAGE_PRODUCTION_ITEM = BUDGET_LINE_ITEMS.find((i) => i.id === 'stage-production')

const METRIC_CARDS: readonly MetricCardData[] = [
  {
    id: 'total',
    icon: DollarSign,
    label: 'Total Event Budget',
    amount: TOTAL_EVENT_BUDGET,
    sub: 'Across 10 budget lines',
    accentText: 'text-neon-cyan',
    accentBg: 'bg-neon-cyan/10',
    accentRing: 'ring-neon-cyan/30',
  },
  {
    id: 'prize-pool',
    icon: Trophy,
    label: 'Prize Pool',
    amount: PRIZE_POOL_TOTAL,
    sub: `${PRIZE_POOL_GROUPS.length} competition tracks`,
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentRing: 'ring-amber-400/30',
  },
  {
    id: 'production',
    icon: Clapperboard,
    label: 'Event Production',
    amount: STAGE_PRODUCTION_ITEM?.amount ?? 0,
    sub: 'Stage & production logistics',
    accentText: 'text-violet-400',
    accentBg: 'bg-violet-400/10',
    accentRing: 'ring-violet-400/30',
  },
]

export default function Slide11Ask() {
  const [expandedItem, setExpandedItem] = useState<string | null>('prize-pool')
  const [expandedGroup, setExpandedGroup] = useState<string | null>('gaming')

  const donutSegments = BUDGET_LINE_ITEMS.map((item) => ({
    id: item.id,
    label: item.label,
    value: item.amount,
    color: ACCENT_STYLES[item.accent].hex,
  }))

  return (
    <section className="slide !justify-start overflow-y-auto bg-zinc-950 !p-0 font-body text-zinc-100" id="slide-11">
      <div className="relative min-h-full w-full bg-grid-fade bg-grid px-6 py-10 sm:px-10 sm:py-14 lg:px-20">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-neon-emerald/30 bg-neon-emerald/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-emerald">
            <ShieldCheck size={13} />
            The financial ask
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Event Budget Proposal
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            A complete, line-itemized ask — every rupee accounted for across production, prizing,
            talent, and campus operations.
          </p>
        </div>

        {/* Metric cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {METRIC_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md ring-1 ${card.accentRing}`}
              >
                <span className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.accentBg} ${card.accentText}`}>
                  <Icon size={20} />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{card.label}</p>
                <p className={`mt-1 font-display text-3xl font-bold ${card.accentText}`}>
                  {formatLakhs(card.amount)}
                </p>
                <p className="mt-2 text-xs text-zinc-500">{card.sub}</p>
              </div>
            )
          })}
        </div>

        {/* Chart + table */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Donut chart: major expense categories */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md lg:col-span-2">
            <h3 className="mb-6 font-display text-base font-semibold text-white">Expense breakdown by category</h3>
            <DonutChart
              segments={donutSegments}
              centerLabel={formatLakhs(TOTAL_EVENT_BUDGET)}
              centerSubLabel="Total budget"
            />
          </div>

          {/* Detailed budget table */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md lg:col-span-3">
            <div className="border-b border-white/10 px-6 py-4">
              <h3 className="font-display text-base font-semibold text-white">Detailed budget lines</h3>
              <p className="mt-0.5 text-xs text-zinc-500">Tap the prize pool row to see the per-track split</p>
            </div>
            <div className="max-h-[420px] overflow-y-auto px-2 py-2 sm:px-4">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {BUDGET_LINE_ITEMS.map((item) => {
                    const accent = ACCENT_STYLES[item.accent]
                    const pct = ((item.amount / TOTAL_EVENT_BUDGET) * 100).toFixed(1)
                    const isPrizePool = item.id === 'prize-pool'
                    const isOpen = expandedItem === item.id

                    return (
                      <FragmentRow key={item.id}>
                        <tr
                          className={`group border-b border-white/5 ${isPrizePool ? 'cursor-pointer' : ''}`}
                          onClick={() => isPrizePool && setExpandedItem(isOpen ? null : item.id)}
                        >
                          <td className="py-3 pl-2 pr-3">
                            <div className="flex items-center gap-2.5">
                              <span className={`h-2 w-2 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                              <div>
                                <p className="font-medium text-zinc-100">{item.label}</p>
                                <p className="hidden text-xs text-zinc-500 sm:block">{item.description}</p>
                              </div>
                              {isPrizePool && (
                                <ChevronDown
                                  size={15}
                                  className={`ml-1 shrink-0 text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                />
                              )}
                            </div>
                          </td>
                          <td className="py-3 pr-2 text-right align-top font-mono text-xs text-zinc-500">{pct}%</td>
                          <td className="py-3 pl-3 pr-2 text-right align-top font-mono font-semibold text-zinc-100">
                            {formatINR(item.amount)}
                          </td>
                        </tr>

                        {isPrizePool &&
                          isOpen &&
                          PRIZE_POOL_GROUPS.map((group) => {
                            const isGaming = group.id === 'gaming'
                            const groupOpen = expandedGroup === group.id
                            return (
                              <FragmentRow key={group.id}>
                                <tr
                                  className={`border-b border-white/5 bg-white/[0.02] ${isGaming ? 'cursor-pointer' : ''}`}
                                  onClick={() => isGaming && setExpandedGroup(groupOpen ? null : group.id)}
                                >
                                  <td className="py-2 pl-8 pr-3 text-zinc-300">
                                    <div className="flex items-center gap-2">
                                      {group.label}
                                      {isGaming && (
                                        <ChevronDown
                                          size={13}
                                          className={`text-zinc-600 transition-transform ${groupOpen ? 'rotate-180' : ''}`}
                                        />
                                      )}
                                    </div>
                                  </td>
                                  <td className="py-2 pr-2 text-right font-mono text-xs text-zinc-600">
                                    {((group.amount / TOTAL_EVENT_BUDGET) * 100).toFixed(1)}%
                                  </td>
                                  <td className="py-2 pl-3 pr-2 text-right font-mono text-zinc-300">
                                    {formatINR(group.amount)}
                                  </td>
                                </tr>

                                {isGaming &&
                                  groupOpen &&
                                  PRIZE_POOL_GAMING.map((track) => (
                                    <tr key={track.id} className="border-b border-white/5 bg-white/[0.015]">
                                      <td className="py-1.5 pl-14 pr-3 text-xs text-zinc-500">
                                        <span className="inline-flex items-center gap-1.5">
                                          <Gamepad2 size={11} />
                                          {track.label}
                                        </span>
                                      </td>
                                      <td className="py-1.5 pr-2" />
                                      <td className="py-1.5 pl-3 pr-2 text-right font-mono text-xs text-zinc-500">
                                        {formatINR(track.amount)}
                                      </td>
                                    </tr>
                                  ))}
                              </FragmentRow>
                            )
                          })}
                      </FragmentRow>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-4 pl-2 font-display font-semibold text-white">Total</td>
                    <td className="pt-4" />
                    <td className="pt-4 pr-2 text-right font-mono text-lg font-bold text-white">
                      {formatINR(TOTAL_EVENT_BUDGET)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Lets a table row and its conditional child rows share one React key without an extra DOM wrapper. */
function FragmentRow({ children }: { children: ReactNode }) {
  return <>{children}</>
}
