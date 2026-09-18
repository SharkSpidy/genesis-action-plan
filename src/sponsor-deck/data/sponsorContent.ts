import type { LucideIcon } from 'lucide-react'
import {
  Gamepad2,
  Car,
  Palette,
  Music4,
  Cpu,
  Share2,
  MapPinned,
  MonitorPlay,
  Users2,
  Crown,
  Radio,
  Layers,
} from 'lucide-react'
import { BUDGET_LINE_ITEMS, PRIZE_POOL_TOTAL } from '../../data/budget'
import { formatLakhs } from '../../lib/formatCurrency'

/* ---------------------------------------------------------------------- */
/*  Audience / footfall                                                    */
/* ---------------------------------------------------------------------- */

export interface AudienceSegment {
  readonly id: string
  readonly icon: LucideIcon
  readonly label: string
  readonly descriptor: string
}

/**
 * NOTE: intentionally no invented percentage split here (e.g. "42% gamers").
 * We were given a single verified footfall number (10,000+) and five named
 * segments, not a survey breakdown. Presenting fabricated percentages to a
 * sponsor as if they were measured data is the kind of thing that gets
 * awkward in a follow-up meeting — swap in real numbers once you have them.
 */
export const AUDIENCE_SEGMENTS: readonly AudienceSegment[] = [
  { id: 'gamers', icon: Gamepad2, label: 'Hardcore Gamers', descriptor: 'Competitive esports crowd, arena regulars' },
  { id: 'auto', icon: Car, label: 'Auto Enthusiasts', descriptor: 'Custom builds, show culture, high purchase intent' },
  { id: 'artists', icon: Palette, label: 'Digital & Physical Artists', descriptor: 'Illustrators, designers, makers' },
  { id: 'musicians', icon: Music4, label: 'Musicians', descriptor: 'Bands, producers, live performers' },
  { id: 'tech', icon: Cpu, label: 'Tech Innovators', descriptor: 'Builders, hackathon teams, early adopters' },
]

export const GUARANTEED_FOOTFALL = 10_000

/* ---------------------------------------------------------------------- */
/*  Sponsor ROI pillars                                                    */
/* ---------------------------------------------------------------------- */

export interface RoiPillar {
  readonly id: string
  readonly icon: LucideIcon
  readonly title: string
  readonly points: readonly string[]
  /** A real figure from the ops budget, used as a credibility proof point — never invented. */
  readonly proofPoint?: string
}

const streamingRig = BUDGET_LINE_ITEMS.find((i) => i.id === 'streaming-rig')
const esportsRigs = BUDGET_LINE_ITEMS.find((i) => i.id === 'esports-rigs')
const marketing = BUDGET_LINE_ITEMS.find((i) => i.id === 'marketing')

export const ROI_PILLARS: readonly RoiPillar[] = [
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Amplification',
    points: [
      'Pre-event hype campaign across every HIVE channel',
      'Live coverage and creator content during the event',
      'Post-event recap and highlight push for extended reach',
    ],
    proofPoint: marketing ? `${formatLakhs(marketing.amount)} dedicated marketing spend` : undefined,
  },
  {
    id: 'experiential',
    icon: MapPinned,
    title: 'On-Ground Experiential Marketing',
    points: [
      'Product showcases and demo zones on the festival floor',
      'Auto display bays for vehicle and lifestyle brands',
      'Branded gaming booths inside the esports arena',
    ],
  },
  {
    id: 'broadcast',
    icon: MonitorPlay,
    title: 'LED Wall & Broadcast Integration',
    points: [
      'Logo and creative on the main-stage LED array',
      'Branded overlays on the live YouTube esports broadcast',
      'Visibility across a 10-rig dual-arena tournament setup',
    ],
    proofPoint: [esportsRigs, streamingRig]
      .filter((i): i is NonNullable<typeof i> => Boolean(i))
      .map((i) => formatLakhs(i.amount))
      .join(' + ') + ' invested in arena & broadcast hardware',
  },
  {
    id: 'leadgen',
    icon: Users2,
    title: 'Lead Generation & Youth Engagement',
    points: [
      'Direct sampling and sign-ups across a 10,000+ crowd',
      'Face-to-face brand interaction with a hard-to-reach youth segment',
      'Data capture opportunities at every branded touchpoint',
    ],
  },
]

/* ---------------------------------------------------------------------- */
/*  Sponsorship tiers                                                      */
/* ---------------------------------------------------------------------- */

export type TierId = 'title' | 'powered-by' | 'category'

export interface SponsorshipTier {
  readonly id: TierId
  readonly icon: LucideIcon
  readonly name: string
  /**
   * No invented rupee figure — real sponsorship pricing depends on
   * negotiation, so this ships as an editable placeholder rather than a
   * number that could be mistaken for an actual quote.
   */
  readonly investmentLabel: string
  readonly headline: string
  readonly deliverables: readonly string[]
  readonly featured?: boolean
}

export const SPONSORSHIP_TIERS: readonly SponsorshipTier[] = [
  {
    id: 'title',
    icon: Crown,
    name: 'Title Sponsor',
    investmentLabel: 'Contact for pricing',
    headline: 'Ultimate naming rights across the entire festival',
    deliverables: [
      'Event named in association with your brand',
      'Prominent logo on the main-stage line array & every LED wall',
      'Dedicated physical pavilion on the festival grounds',
      'Maximum digital real estate across all HIVE channels',
    ],
    featured: true,
  },
  {
    id: 'powered-by',
    icon: Radio,
    name: 'Powered By Sponsor',
    investmentLabel: 'Contact for pricing',
    headline: 'Custom-named tournament ownership',
    deliverables: [
      'Recurring stage mentions across the weekend',
      'Secondary logo placement on stage & signage',
      'Custom tournament naming — e.g. "[Brand] Valorant Cup"',
    ],
  },
  {
    id: 'category',
    icon: Layers,
    name: 'Category Partner',
    investmentLabel: 'Contact for pricing',
    headline: 'Own your vertical, reach a targeted crowd',
    deliverables: [
      'Choice of Tech, Auto Expo, F&B, or Style/Apparel category',
      'Dedicated booth space in the relevant zone',
      'Targeted digital ads to the matching audience segment',
    ],
  },
]

export const TOTAL_PRIZE_POOL_LABEL = formatLakhs(PRIZE_POOL_TOTAL)
