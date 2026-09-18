import { CalendarRange, Clock3 } from 'lucide-react'
import type { OpsPhase } from '../data/actionPlanContent'

interface PhaseHeaderProps {
  phase: OpsPhase
  subtitle: string
  estimatedDate?: string
}

export default function PhaseHeader({ phase, subtitle, estimatedDate }: PhaseHeaderProps) {
  const Icon = phase.icon
  return (
    <div className="mb-8">
      <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">
        <Icon size={13} />
        Phase {phase.id} of 6
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{phase.title}</h2>
      <p className="mt-3 max-w-2xl text-base text-zinc-400 sm:text-lg">{subtitle}</p>
      {estimatedDate && (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-neon-emerald/30 bg-neon-emerald/10 px-3 py-1 font-mono text-xs text-neon-emerald">
          <CalendarRange size={12} />
          Estimated date: {estimatedDate}
        </p>
      )}
      {phase.leadTime && (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs text-amber-400">
          <Clock3 size={12} />
          {phase.leadTime}
        </p>
      )}
    </div>
  )
}
