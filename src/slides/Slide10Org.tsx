type Vertical = { name: string; ready?: boolean }

const VERTICALS: Vertical[] = [
  { name: 'Operations', ready: true },
  { name: 'Discipline' },
  { name: 'Logistics' },
  { name: 'Creative' },
  { name: 'Film' },
  { name: 'Gaming' },
  { name: 'Marketing' },
  { name: 'Sponsorships' },
  { name: 'Pro-Show' },
  { name: 'Auto-Show' },
  { name: 'Hackathon' },
  { name: 'Media' },
]

export default function Slide10Org() {
  return (
    <section className="slide" id="slide-10">
      <div className="slide-head">
        <p className="kicker">Execution</p>
        <h2>Built to run clean, on someone else's campus</h2>
        <p className="lede">
          Operations is already in place. The remaining verticals are being staffed and structured
          now, ahead of any venue commitment.
        </p>
      </div>
      <div className="org-grid">
        {VERTICALS.map((v) => (
          <div className={`org-chip${v.ready ? ' ready' : ''}`} key={v.name}>
            <span className="name">{v.name}</span>
            <span className="status">{v.ready ? 'In place' : 'Building'}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
