import type { LucideIcon } from 'lucide-react'
import { AlertTriangle, Megaphone, ShieldCheck, Star, Truck, Wallet } from 'lucide-react'

/* ---------------------------------------------------------------------- */
/*  The six operational phases — shared by PhaseTimeline and every slide  */
/* ---------------------------------------------------------------------- */

export interface OpsPhase {
  readonly id: number
  readonly title: string
  readonly shortLabel: string
  readonly icon: LucideIcon
  readonly leadTime?: string
}

export const OPS_PHASES: readonly OpsPhase[] = [
  { id: 1, title: 'Assemble Core Command & Lock the Venue', shortLabel: 'Command', icon: ShieldCheck },
  { id: 2, title: 'Financial Engine & Master Pitch Deck', shortLabel: 'Finance', icon: Wallet },
  { id: 3, title: 'VIP Outreach & Protocol', shortLabel: 'VIP', icon: Star, leadTime: '60–90 days lead time' },
  { id: 4, title: 'Vendor Lockdown & Tech Infrastructure', shortLabel: 'Vendors', icon: Truck },
  { id: 5, title: 'Marketing & Revenue Generation', shortLabel: 'Marketing', icon: Megaphone },
  { id: 6, title: 'The Tabletop Exercise', shortLabel: 'Tabletop', icon: AlertTriangle, leadTime: '30 days out' },
]

/* ---------------------------------------------------------------------- */
/*  Event metadata (from the Master Action Plan)                          */
/* ---------------------------------------------------------------------- */

export interface EventMeta {
  readonly venue: string
  readonly venueDetail: string
  readonly timeline: string
  readonly format: string
  readonly verticals: readonly string[]
}

export const EVENT_META: EventMeta = {
  venue: 'Jain University',
  venueDetail: 'Kochi Campus',
  timeline: 'February',
  format: '48-Hour Continuous Operations',
  verticals: [
    '300+ Hackathon Participants',
    'eSports Arena',
    'Band Competitions',
    'Auto-Show',
    'Pro-Show',
  ],
}

/* ---------------------------------------------------------------------- */
/*  Master timeline — dated milestones                                    */
/* ---------------------------------------------------------------------- */

export interface Milestone {
  readonly id: string
  /** ISO date, e.g. '2026-09-30'. */
  readonly date: string
  readonly label: string
  readonly detail: string
  readonly phaseId: number
  readonly isKeyMeeting?: boolean
}

/** The one date the committee has actually confirmed — everything else below is estimated off it. */
export const PLAN_START_DATE = '2026-09-30'

/**
 * PLACEHOLDER — no exact event date has been given yet, only "February".
 * Every milestone after the venue meeting is spaced off this guess so the
 * timeline has *a* shape to review, not because these dates are locked.
 * Replace this and re-derive the milestones below once the MOU confirms
 * real February dates.
 */
export const ASSUMED_EVENT_DATE = '2027-02-20'

export const MILESTONES: readonly Milestone[] = [
  {
    id: 'venue-meeting',
    date: PLAN_START_DATE,
    label: 'Jain University venue meeting',
    detail: 'First sit-down with the Jain venue team — confirm dates, spaces, and MOU terms.',
    phaseId: 1,
    isKeyMeeting: true,
  },
  {
    id: 'command-lock',
    date: '2026-10-10',
    label: 'Department heads confirmed',
    detail: 'Operations, Creative, Film, Gaming, Marketing, and Sponsorships leads locked in.',
    phaseId: 1,
  },
  {
    id: 'master-deck',
    date: '2026-10-25',
    label: 'Master pitch deck complete',
    detail: 'Sponsor deck ready to go into B2B outreach.',
    phaseId: 2,
  },
  {
    id: 'vip-outreach-start',
    date: '2026-11-22',
    label: 'VIP outreach begins',
    detail: 'Government letters submitted; celebrity PR conversations opened. (~90 days out)',
    phaseId: 3,
  },
  {
    id: 'vendor-lock',
    date: '2026-12-20',
    label: 'Vendor contracts signed',
    detail: 'Stage, AV, lighting, ISP, and generators locked after the 3-quote review.',
    phaseId: 4,
  },
  {
    id: 'registrations-open',
    date: '2027-01-05',
    label: 'Early-bird registrations open',
    detail: 'Hackathon and eSports brackets open for paid sign-up.',
    phaseId: 5,
  },
  {
    id: 'tabletop',
    date: '2027-01-21',
    label: 'Tabletop exercise',
    detail: '30 days out — disaster scenarios rehearsed with the full core committee.',
    phaseId: 6,
  },
  {
    id: 'event',
    date: ASSUMED_EVENT_DATE,
    label: 'HIVE Flagship Event',
    detail: '48-hour continuous operations begin.',
    phaseId: 6,
  },
]

/* ---------------------------------------------------------------------- */
/*  Recent updates strip (Slide 1)                                        */
/* ---------------------------------------------------------------------- */

export interface RecentUpdate {
  readonly id: string
  readonly label: string
  readonly detail: string
}

/**
 * Reflects real milestones already reached in this project — the budget
 * dashboard and sponsor deck built earlier — not aspirational placeholder
 * copy. Update this list as the committee actually clears each phase.
 */
export const RECENT_UPDATES: readonly RecentUpdate[] = [
  {
    id: 'budget',
    label: 'Budget dashboard live',
    detail: '₹55.58L event budget finalized and verified line-by-line',
  },
  {
    id: 'sponsor-deck',
    label: 'Sponsor pitch deck drafted',
    detail: 'Audience, ROI, and tier slides ready for B2B outreach',
  },
  {
    id: 'venue',
    label: 'Venue MOU in progress',
    detail: 'Jain University Co-Presenter agreement pending signature',
  },
]
