import type { LucideIcon } from 'lucide-react'
import { HeartPulse, Radio, ShieldAlert, Users2, Wifi } from 'lucide-react'
import { OPS_PHASES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'

interface DisasterScenario {
  readonly id: string
  readonly icon: LucideIcon
  readonly title: string
  readonly copy: string
}

const SCENARIOS: readonly DisasterScenario[] = [
  {
    id: 'wifi-outage',
    icon: Wifi,
    title: 'Wi-Fi outage during the hackathon',
    copy: 'Test failover to backup connectivity without stalling 300+ participants mid-build.',
  },
  {
    id: 'crowd-surge',
    icon: Users2,
    title: 'Pro-Show crowd surge',
    copy: 'Rehearse barricade holds and crowd-flow redirection at the main stage.',
  },
  {
    id: 'vip-delay',
    icon: ShieldAlert,
    title: 'VIP delays',
    copy: 'Pressure-test the run-of-show when a government or celebrity guest arrives off-schedule.',
  },
]

const EMERGENCY_PROTOCOLS = [
  { id: 'chain-of-command', icon: ShieldAlert, label: 'Clear chain of command, finalized' },
  { id: 'walkie', icon: Radio, label: 'Walkie-talkie communication channels assigned' },
  { id: 'medical-security', icon: HeartPulse, label: 'Standby medical & security personnel secured' },
]

const phase = OPS_PHASES[5]

export default function Slide07_Phase6_Tabletop() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(251,113,133,0.08),transparent_50%)]" />

      <div className="relative">
        <PhaseHeader phase={phase} subtitle="Identify the breaking points before event day, with the full core committee in the room." />

        <div className="mb-8">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Disaster scenario testing
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SCENARIOS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.id}
                  className="rounded-2xl border border-rose-400/30 bg-rose-400/5 p-5 backdrop-blur-md"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-400/10 text-rose-400">
                    <Icon size={19} />
                  </span>
                  <p className="font-display text-sm font-semibold text-white">{s.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{s.copy}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <h3 className="mb-4 font-display text-base font-semibold text-white">Emergency protocols to finalize</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {EMERGENCY_PROTOCOLS.map((p) => {
              const Icon = p.icon
              return (
                <li
                  key={p.id}
                  className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-200"
                >
                  <Icon size={15} className="shrink-0 text-neon-cyan" />
                  {p.label}
                </li>
              )
            })}
          </ul>
        </div>

        <PhaseTimeline currentPhase={6} />
      </div>
    </section>
  )
}
