import { Clapperboard, Landmark, Sparkles } from 'lucide-react'
import { OPS_PHASES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'
import { BUDGET_LINE_ITEMS } from '../../data/budget'
import { formatLakhs } from '../../lib/formatCurrency'

const GOVERNMENT_INVITEES = ['Chief Minister', 'IT Minister', 'Education Minister']

const CELEBRITY_TRACK = ['Nivin Pauly', 'Associated Directors']

const celebrityBudgetItem = BUDGET_LINE_ITEMS.find((i) => i.id === 'celebrity-vip')

const phase = OPS_PHASES[2]

export default function Slide04_Phase3_VIP() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.08),transparent_50%)]" />

      <div className="relative">
        <PhaseHeader
          phase={phase}
          subtitle="Government bureaucracy and celebrity PR management both run on their own clock. Start both tracks now."
        />

        <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Government track */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
              <Landmark size={20} />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">Government Track</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Draft formal invitations on official letterheads. Submit physically through the
              secretariats in Thiruvananthapuram.
            </p>
            <ul className="mt-4 space-y-2">
              {GOVERNMENT_INVITEES.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Celebrity track */}
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6 backdrop-blur-md">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
              <Sparkles size={20} />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">Celebrity Track</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Engage PR management teams with concrete time slots. Pitch the value of direct
              engagement with a massive, high-energy Gen-Z audience ahead of their upcoming
              releases.
            </p>
            <ul className="mt-4 space-y-2">
              {CELEBRITY_TRACK.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200"
                >
                  <Clapperboard size={13} className="shrink-0 text-amber-400" />
                  {name}
                </li>
              ))}
            </ul>
            {celebrityBudgetItem && (
              <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Buffer allocated</span>
                <span className="font-mono text-sm font-semibold text-amber-400">
                  {formatLakhs(celebrityBudgetItem.amount)}
                </span>
              </div>
            )}
          </div>
        </div>

        <PhaseTimeline currentPhase={3} />
      </div>
    </section>
  )
}
