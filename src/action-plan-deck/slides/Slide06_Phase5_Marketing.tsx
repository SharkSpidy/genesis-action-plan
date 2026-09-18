import type { LucideIcon } from 'lucide-react'
import { Gamepad2, Globe, Megaphone, School, TicketCheck } from 'lucide-react'
import { OPS_PHASES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'

interface MarketingTrack {
  readonly id: string
  readonly icon: LucideIcon
  readonly title: string
  readonly copy: string
  readonly stat?: string
}

const TRACKS: readonly MarketingTrack[] = [
  {
    id: 'digital-launch',
    icon: Globe,
    title: 'Digital Launch',
    copy: 'Push the official website live alongside the first phase of the Creative team\u2019s social media grid.',
  },
  {
    id: 'registrations',
    icon: TicketCheck,
    title: 'Early-Bird Registrations',
    copy: 'Open paid registration immediately to generate working capital ahead of the event.',
    stat: '75 Hackathon teams + eSports brackets',
  },
  {
    id: 'influencer',
    icon: School,
    title: 'Influencer Activation',
    copy: 'Deploy the street team to neighboring colleges and trigger the influencer/streamer hype strategy.',
  },
]

const phase = OPS_PHASES[4]

export default function Slide06_Phase5_Marketing() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.08),transparent_45%)]" />

      <div className="relative">
        <PhaseHeader phase={phase} subtitle="Drive initial cash flow through early registrations, not just brand awareness." />

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TRACKS.map((t) => {
            const Icon = t.icon
            return (
              <div
                key={t.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-emerald/10 text-neon-emerald">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-base font-semibold text-white">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{t.copy}</p>
                {t.stat && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                    <Gamepad2 size={13} className="shrink-0 text-neon-emerald" />
                    <span className="font-mono text-xs font-semibold text-neon-emerald">{t.stat}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mb-8 flex items-center gap-2 rounded-xl border border-neon-emerald/30 bg-neon-emerald/5 px-4 py-3 backdrop-blur-md">
          <Megaphone size={16} className="text-neon-emerald" />
          <p className="text-sm text-zinc-300">
            Every registration opened here is revenue in hand before a single sponsor cheque
            clears.
          </p>
        </div>

        <PhaseTimeline currentPhase={5} />
      </div>
    </section>
  )
}
