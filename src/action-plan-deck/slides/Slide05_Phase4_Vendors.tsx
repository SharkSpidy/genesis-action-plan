import { FileCheck2, Server, Wrench, Zap } from 'lucide-react'
import { OPS_PHASES, PHASE_ESTIMATED_DATES } from '../data/actionPlanContent'
import PhaseHeader from '../components/PhaseHeader'
import PhaseTimeline from '../components/PhaseTimeline'

const PRODUCTION_ITEMS = [
  'Stage scaffolding',
  'Professional audio-visual systems',
  'Lighting rigs',
  'Barricades for the Pro-Show',
]

const TECH_BACKBONE_ITEMS = [
  'Dedicated leased-line ISP — Hackathon zone',
  'Dedicated leased-line ISP — Gaming zone',
  'High-capacity backup generators',
  'Zero-downtime failover plan',
]

const phase = OPS_PHASES[3]

export default function Slide05_Phase4_Vendors() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center overflow-y-auto bg-zinc-950 px-6 py-10 font-body text-zinc-100 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.08),transparent_45%)]" />

      <div className="relative">
        <PhaseHeader
          phase={phase}
          subtitle="Securing the backbone of the 48-hour continuous event."
          estimatedDate={PHASE_ESTIMATED_DATES[phase.id]}
        />

        <div className="mb-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md">
          <FileCheck2 size={16} className="text-neon-cyan" />
          <p className="text-sm text-zinc-300">
            Secure <span className="font-semibold text-white">three competitive quotes</span> before
            signing any production contract.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Production */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
              <Wrench size={20} />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">Production & Stage</h3>
            <ul className="mt-4 space-y-2">
              {PRODUCTION_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-200"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech backbone */}
          <div className="rounded-2xl border border-neon-emerald/30 bg-neon-emerald/5 p-6 backdrop-blur-md">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-emerald/10 text-neon-emerald">
              <Server size={20} />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">Tech Backbone</h3>
            <ul className="mt-4 space-y-2">
              {TECH_BACKBONE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-200"
                >
                  <Zap size={13} className="shrink-0 text-neon-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PhaseTimeline currentPhase={4} />
      </div>
    </section>
  )
}
