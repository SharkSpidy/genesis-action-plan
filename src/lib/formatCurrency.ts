/** Formats a rupee amount using Indian digit grouping, e.g. 1408000 -> "₹14,08,000". */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

/** Formats a rupee amount in lakhs with two decimals, e.g. 1408000 -> "₹14.08L". */
export function formatLakhs(amount: number): string {
  return `₹${(amount / 100_000).toFixed(2)}L`
}

/** Formats a rupee amount in lakhs with no trailing zeros, e.g. 1000000 -> "₹10L". */
export function formatLakhsCompact(amount: number): string {
  const lakhs = amount / 100_000
  const rounded = Math.round(lakhs * 100) / 100
  return `₹${rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(2)}L`
}
