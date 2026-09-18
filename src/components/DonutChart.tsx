import { useId, useState } from 'react'

export interface DonutSegment {
  readonly id: string
  readonly label: string
  readonly value: number
  /** Hex color used for the arc stroke and legend dot. */
  readonly color: string
}

interface DonutChartProps {
  segments: readonly DonutSegment[]
  size?: number
  strokeWidth?: number
  centerLabel: string
  centerSubLabel: string
}

/**
 * Dependency-free SVG donut chart. Segments are drawn as stacked stroke-dasharray
 * arcs on a shared circle so the whole thing is a handful of <circle> elements —
 * no charting library required for one chart.
 */
export default function DonutChart({
  segments,
  size = 260,
  strokeWidth = 30,
  centerLabel,
  centerSubLabel,
}: DonutChartProps) {
  const gradientId = useId()
  const [activeId, setActiveId] = useState<string | null>(null)

  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  let offsetAccumulator = 0

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <defs>
            <filter id={`${gradientId}-glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />

          {segments.map((segment) => {
            const fraction = total > 0 ? segment.value / total : 0
            const dash = fraction * circumference
            const gap = circumference - dash
            const dashOffset = -offsetAccumulator
            offsetAccumulator += dash
            const isActive = activeId === segment.id

            return (
              <circle
                key={segment.id}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={isActive ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                filter={isActive ? `url(#${gradientId}-glow)` : undefined}
                className="cursor-pointer transition-all duration-200"
                opacity={activeId && !isActive ? 0.35 : 1}
                onMouseEnter={() => setActiveId(segment.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <title>{`${segment.label}: ${((fraction) * 100).toFixed(1)}%`}</title>
              </circle>
            )
          })}
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-display text-2xl font-bold text-white sm:text-3xl">{centerLabel}</span>
          <span className="mt-1 text-xs uppercase tracking-widest text-zinc-400">{centerSubLabel}</span>
        </div>
      </div>

      <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1">
        {segments.map((segment) => {
          const fraction = total > 0 ? (segment.value / total) * 100 : 0
          const isActive = activeId === segment.id
          return (
            <li
              key={segment.id}
              onMouseEnter={() => setActiveId(segment.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`flex items-center justify-between gap-4 rounded-lg px-2 py-1.5 transition-colors ${
                isActive ? 'bg-white/5' : ''
              }`}
            >
              <span className="flex items-center gap-2 text-sm text-zinc-300">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: segment.color, boxShadow: `0 0 8px ${segment.color}` }}
                  aria-hidden="true"
                />
                {segment.label}
              </span>
              <span className="font-mono text-sm text-zinc-400">{fraction.toFixed(1)}%</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
