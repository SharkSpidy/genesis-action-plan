/**
 * Single source of truth for the Event Budget Proposal.
 *
 * All figures are stored in raw INR (rupees), never pre-formatted, so every
 * slide/component derives its own display string and totals can be verified
 * at runtime (see `assertBudgetIntegrity`) instead of trusted blindly.
 */

export interface PrizeSubTrack {
  readonly id: string
  readonly label: string
  readonly amount: number
}

export interface PrizePoolGroup {
  readonly id: string
  readonly label: string
  readonly amount: number
  /** Present only for groups with an internal per-track split (Gaming). */
  readonly subTracks?: readonly PrizeSubTrack[]
}

export interface BudgetLineItem {
  readonly id: string
  readonly label: string
  readonly amount: number
  readonly description: string
  /** Tailwind color token used consistently across cards, table rows, and the donut chart. */
  readonly accent: 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'sky'
}

export const PRIZE_POOL_GAMING: readonly PrizeSubTrack[] = [
  { id: 'valorant', label: 'Valorant', amount: 200_000 },
  { id: 'cod', label: 'Call of Duty', amount: 200_000 },
  { id: 'pubg', label: 'PUBG', amount: 228_000 },
  { id: 'pes', label: 'PES', amount: 40_000 },
]

export const PRIZE_POOL_GROUPS: readonly PrizePoolGroup[] = [
  {
    id: 'gaming',
    label: 'Gaming (Esports)',
    amount: PRIZE_POOL_GAMING.reduce((sum, t) => sum + t.amount, 0),
    subTracks: PRIZE_POOL_GAMING,
  },
  { id: 'band', label: 'Band Competition', amount: 230_000 },
  { id: 'hackathon', label: 'Hackathon', amount: 180_000 },
  { id: 'film-reels', label: 'Film & Reels', amount: 210_000 },
  { id: 'art', label: 'Digital & Physical Art', amount: 120_000 },
]

export const PRIZE_POOL_TOTAL: number = PRIZE_POOL_GROUPS.reduce((sum, g) => sum + g.amount, 0)

export const BUDGET_LINE_ITEMS: readonly BudgetLineItem[] = [
  {
    id: 'prize-pool',
    label: 'Prize Pool (All Tracks)',
    amount: PRIZE_POOL_TOTAL,
    description: 'Gaming, band, hackathon, film & reels, and art competitions combined.',
    accent: 'cyan',
  },
  {
    id: 'esports-rigs',
    label: 'Esports Battle Stations',
    amount: 325_000,
    description: '10× RTX 4080/4090 rigs, 240Hz–360Hz displays, pro peripherals, LAN infrastructure.',
    accent: 'emerald',
  },
  {
    id: 'celebrity-vip',
    label: 'Celebrity & VIP Appearance Buffer',
    amount: 1_000_000,
    description: 'Talent fees, hospitality, travel and security contingency for headline guests.',
    accent: 'amber',
  },
  {
    id: 'stage-production',
    label: 'Stage & Production Logistics',
    amount: 1_100_000,
    description: 'Main stage build, sound, lighting, rigging and crew for the full footprint.',
    accent: 'violet',
  },
  {
    id: 'streaming-rig',
    label: 'YouTube Broadcast & Streaming Rig',
    amount: 225_000,
    description: 'Caster desks, capture cards, encoding hardware and multi-cam switching.',
    accent: 'rose',
  },
  {
    id: 'marketing',
    label: 'Marketing & Digital Campaigns',
    amount: 350_000,
    description: 'Paid social, creator partnerships, on-campus collateral and pre-event hype.',
    accent: 'sky',
  },
  {
    id: 'tech-exhibits',
    label: 'Tech Exhibits & Media Production',
    amount: 300_000,
    description: 'Booth builds, exhibit hardware, photo/video coverage across the event.',
    accent: 'cyan',
  },
  {
    id: 'crew-honorarium',
    label: 'Crew Honorarium (100 @ ₹2K/head)',
    amount: 200_000,
    description: 'Volunteer and operations crew compensation across all days.',
    accent: 'emerald',
  },
  {
    id: 'ticketing-security',
    label: 'Ticketing, RFID & Gate Security',
    amount: 150_000,
    description: 'RFID access control, gate staffing and entry infrastructure.',
    accent: 'amber',
  },
  {
    id: 'contingency',
    label: 'Contingency Buffer',
    amount: 200_000,
    description: 'Unallocated reserve for overruns and last-mile logistics.',
    accent: 'violet',
  },
]

export const TOTAL_EVENT_BUDGET: number = BUDGET_LINE_ITEMS.reduce((sum, i) => sum + i.amount, 0)

/**
 * Runtime guard so the deck never silently displays numbers that don't add
 * up if this file is edited later without updating every dependent total.
 */
export function assertBudgetIntegrity(): void {
  const gamingSum = PRIZE_POOL_GAMING.reduce((sum, t) => sum + t.amount, 0)
  const gamingGroup = PRIZE_POOL_GROUPS.find((g) => g.id === 'gaming')
  if (!gamingGroup || gamingGroup.amount !== gamingSum) {
    throw new Error('Budget integrity check failed: gaming sub-track total mismatch.')
  }
  if (TOTAL_EVENT_BUDGET !== 5_258_000) {
    throw new Error(`Budget integrity check failed: total is ${TOTAL_EVENT_BUDGET}, expected 52,58,000.`)
  }
}
