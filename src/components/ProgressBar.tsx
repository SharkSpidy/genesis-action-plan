export default function ProgressBar({ index, total }: { index: number; total: number }) {
  const pct = total === 0 ? 0 : ((index + 1) / total) * 100
  return <div className="progress" style={{ width: `${pct}%` }} />
}
