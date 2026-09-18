type NavProps = {
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`
}

export default function Nav({ index, total, onPrev, onNext }: NavProps) {
  return (
    <div className="nav">
      <button onClick={onPrev} disabled={index === 0} aria-label="Previous slide">
        ←
      </button>
      <span className="count">
        {pad(index + 1)} / {pad(total)}
      </span>
      <button onClick={onNext} disabled={index === total - 1} aria-label="Next slide">
        →
      </button>
    </div>
  )
}
