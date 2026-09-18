import type { BudgetLineItem } from '../data/budget'

export type Accent = BudgetLineItem['accent']

interface AccentStyle {
  /** Hex value for SVG fills/strokes (donut chart, glows) where Tailwind classes don't apply. */
  hex: string
  text: string
  dot: string
  ring: string
  bg: string
}

/**
 * Every Tailwind class referenced anywhere in this map is written out in full
 * (never `text-${accent}-400`) so Tailwind's content scanner can find it at
 * build time. Dynamically interpolated class names are silently dropped.
 */
export const ACCENT_STYLES: Record<Accent, AccentStyle> = {
  cyan: {
    hex: '#22d3ee',
    text: 'text-cyan-400',
    dot: 'bg-cyan-400',
    ring: 'ring-cyan-400/30',
    bg: 'bg-cyan-400/10',
  },
  emerald: {
    hex: '#34d399',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-400/30',
    bg: 'bg-emerald-400/10',
  },
  amber: {
    hex: '#fbbf24',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
    ring: 'ring-amber-400/30',
    bg: 'bg-amber-400/10',
  },
  violet: {
    hex: '#a78bfa',
    text: 'text-violet-400',
    dot: 'bg-violet-400',
    ring: 'ring-violet-400/30',
    bg: 'bg-violet-400/10',
  },
  rose: {
    hex: '#fb7185',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
    ring: 'ring-rose-400/30',
    bg: 'bg-rose-400/10',
  },
  sky: {
    hex: '#38bdf8',
    text: 'text-sky-400',
    dot: 'bg-sky-400',
    ring: 'ring-sky-400/30',
    bg: 'bg-sky-400/10',
  },
}
