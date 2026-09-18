const STATS = [
  { num: '75 / 300', label: 'Hackathon teams and builders on-site' },
  { num: '10', label: 'Competitions running across tech, gaming, film and culture' },
  { num: '4', label: 'Dedicated esports arenas — Valorant & COD, PUBG, PES' },
  { num: '₹10L+', label: 'Combined prize money across the gaming tracks alone' },
]

export default function Slide03Stats() {
  return (
    <section className="slide" id="slide-3">
      <div className="slide-head">
        <p className="kicker">Scale, at a glance</p>
        <h2>What a flagship weekend looks like</h2>
      </div>
      <div className="stat-row">
        {STATS.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="num">{s.num}</span>
            <span className="label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
