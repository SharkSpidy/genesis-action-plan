import { Check } from 'lucide-react'
import { OPS_PHASES } from '../data/actionPlanContent'

interface PhaseTimelineProps {
  /** 0 = plan not yet underway (used on the summary slide), 1–6 = the active phase. */
  currentPhase: number
}

/**
 * One instance of this, parameterized by `currentPhase`, is dropped into
 * every slide so progression from Phase 1 to Phase 6 reads consistently
 * across the whole deck.
 */
export default function PhaseTimeline({ currentPhase }: PhaseTimelineProps) {
  return (
    <div className="w-full" role="list" aria-label="Action plan phase progress">
      <div className="flex items-start">
        {OPS_PHASES.map((phase, i) => {
          const Icon = phase.icon
          const isDone = currentPhase > phase.id
          const isActive = currentPhase === phase.id
          const isLast = i === OPS_PHASES.length - 1

          return (
            <div key={phase.id} className={`flex items-center ${isLast ? '' : 'flex-1'}`} role="listitem">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-neon-cyan bg-neon-cyan/15 text-neon-cyan shadow-neon-cyan'
                      : isDone
                        ? 'border-neon-emerald/60 bg-neon-emerald/10 text-neon-emerald'
                        : 'border-white/15 bg-white/5 text-zinc-500'
                  }`}
                >
                  {isDone ? <Check size={16} /> : <Icon size={16} />}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-40 animate-ping"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span
                  className={`hidden text-center font-mono text-[10px] uppercase tracking-wider sm:block ${
                    isActive ? 'text-neon-cyan' : isDone ? 'text-neon-emerald' : 'text-zinc-600'
                  }`}
                >
                  {phase.shortLabel}
                </span>
              </div>

              {!isLast && (
                <div
                  className={`mx-1.5 h-0.5 flex-1 rounded transition-colors duration-300 sm:mb-5 ${
                    isDone ? 'bg-neon-emerald/50' : 'bg-white/10'
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
