export default function ProgressBar({ index, total }: { index: number; total: number }) {
  const pct = ((index + 1) / total) * 100
  return <div className="progress" style={{ width: `${pct}%` }} />
}
