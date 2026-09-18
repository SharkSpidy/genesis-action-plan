import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { slides } from './action-plan-deck/slides'
import Nav from './components/Nav'
import ProgressBar from './components/ProgressBar'
import Hex from './components/Hex'

export default function Deck() {
  const total = slides.length
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (total === 0) {
      setIndex(0)
      return
    }

    setIndex((current) => Math.min(Math.max(current, 0), total - 1))
  }, [total])

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => {
        if (total === 0) return 0
        const next = current + delta
        if (next < 0) return 0
        if (next >= total) return total - 1
        return next
      })
    },
    [total],
  )

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [go])

  function onTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: TouchEvent) {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }

  if (total === 0) {
    return null
  }

  const safeIndex = Math.min(Math.max(index, 0), total - 1)
  const ActiveSlide = slides[safeIndex]

  return (
    <>
      <ProgressBar index={safeIndex} total={total} />
      <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {/* key={index} forces a remount so the enter animation replays per slide */}
        <div className="slide-mount" key={safeIndex}>
          <ActiveSlide />
        </div>
      </div>
      <div className="slide-footer">
        <Hex size={7} />
        <span>HIVE — Jain University Proposal</span>
      </div>
      <Nav index={safeIndex} total={total} onPrev={() => go(-1)} onNext={() => go(1)} />
    </>
  )
}
