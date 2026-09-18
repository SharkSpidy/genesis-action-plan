const CARDS = [
  { title: 'Band Competition', copy: 'Live sets on the main stage — the sound that carries across campus all weekend.' },
  { title: 'Design Competition', copy: "A showcase for the campus's visual design talent, judged by working professionals." },
  { title: 'Art Competition', copy: 'Open-format art, giving traditional and digital artists equal footing.' },
  { title: 'Short Film Competition', copy: 'Student filmmaking, judged with input from the visiting director and crew.' },
  { title: 'Reels Competition', copy: 'Youth-driven, phone-shot content — the fastest-moving, most shareable track on campus.' },
  { title: 'Why it matters here', copy: "Every one of these tracks generates content that carries the host institution's name organically, well past the weekend itself." },
]

export default function Slide06Creative() {
  return (
    <section className="slide" id="slide-6">
      <div className="slide-head">
        <p className="kicker">Creative & culture</p>
        <h2>Where students perform, not just build</h2>
      </div>
      <div className="creative-grid">
        {CARDS.map((c) => (
          <div className="creative-card" key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
