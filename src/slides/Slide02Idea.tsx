import Hex from '../components/Hex'

const ARENAS = [
  { title: 'Hackathon', copy: '75 teams, 300 builders, one weekend to ship.' },
  { title: 'Esports Arena', copy: 'Valorant, COD, PUBG and PES — three competitive tracks.' },
  { title: 'Design & Art', copy: "Open competitions for the campus's creative talent." },
  { title: 'Film & Reels', copy: 'Short film and reels tracks built for social reach.' },
  { title: 'Band Competition', copy: 'Live music, live crowd, live energy.' },
  { title: 'Auto-Show & Pro-Show', copy: 'The headline spectacle that closes the weekend.' },
]

export default function Slide02Idea() {
  return (
    <section className="slide" id="slide-2">
      <div className="slide-head">
        <p className="kicker">The idea</p>
        <h2>Six worlds, one campus takeover</h2>
        <p className="lede">
          HIVE stitches a hackathon, three esports arenas, design and art competitions, a short
          film and reels track, a band competition, and a headline auto-show and pro-show into a
          single continuous event. It's built for students who code in the morning and perform at
          night — and for a host that wants to be known for both.
        </p>
      </div>
      <div className="arena-grid">
        {ARENAS.map((a) => (
          <div className="arena-card" key={a.title}>
            <Hex size={14} />
            <h3>{a.title}</h3>
            <p>{a.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
