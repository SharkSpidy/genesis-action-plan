/** Formats an ISO date string as e.g. "30 Sep 2026". */
export function formatMilestoneDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

/** True if the ISO date is strictly before `now`. */
export function isPastDate(iso: string, now: Date): boolean {
  return new Date(iso).getTime() < now.getTime()
}
