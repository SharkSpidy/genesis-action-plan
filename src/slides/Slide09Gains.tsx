import Hex from '../components/Hex'

const GAINS = [
  { title: 'State-level and press visibility', copy: 'Government and film presence gives the event — and its host — a media profile few campus fests reach on their own.' },
  { title: 'Brand presence across every touchpoint', copy: 'Host-institution branding on stages, hackathon kits, livestreams, and every piece of pro-show and press material.' },
  { title: 'A genuinely full campus, for days', copy: 'Ten concurrent competitions mean sustained energy and footfall across the whole venue, not one isolated evening.' },
  { title: 'Organic social reach', copy: 'The reels track alone puts youth-made, campus-tagged content into circulation well past the event dates.' },
  { title: 'A tech-forward positioning', copy: 'A 300-participant hackathon, judged live, is a concrete claim to make in admissions and outreach material.' },
  { title: "A partner that plans for your campus, not just the show", copy: "Dedicated logistics and discipline functions built specifically to protect the venue's day-to-day operations." },
]

export default function Slide09Gains() {
  return (
    <section className="slide" id="slide-9">
      <div className="slide-head">
        <p className="kicker">For Jain University</p>
        <h2>What hosting HIVE looks like from here</h2>
      </div>
      <div className="gain-grid">
        {GAINS.map((g) => (
          <div className="gain-item" key={g.title}>
            <Hex size={12} />
            <div>
              <h3>{g.title}</h3>
              <p>{g.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
