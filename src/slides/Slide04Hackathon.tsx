import Hex from '../components/Hex'

export default function Slide04Hackathon() {
  return (
    <section className="slide" id="slide-4">
      <div className="two-col">
        <div>
          <p className="kicker">Flagship track</p>
          <h2 className="section-title">The Hackathon</h2>
          <p className="section-copy">
            The anchor of HIVE's tech identity: 75 teams and 300 participants building through the
            weekend, judged live on campus. It's the piece that gives an IT Minister and an
            Education Minister a genuine reason to walk the floor — and gives the host institution
            a tech-forward headline of its own.
          </p>
          <ul className="fact-list">
            <li>
              <Hex />
              <div>
                <strong>75 teams</strong>
                <span className="sub">Competing across the full event window</span>
              </div>
            </li>
            <li>
              <Hex />
              <div>
                <strong>300 participants</strong>
                <span className="sub">On-site, working in real time</span>
              </div>
            </li>
            <li>
              <Hex />
              <div>
                <strong>Live judging</strong>
                <span className="sub">A visible, credible centerpiece for guests and press</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="side-panel">
          <span className="big-num">300</span>
          <span className="big-label">
            builders on campus for the hackathon alone — before a single gaming, film or design
            entrant is counted.
          </span>
        </div>
      </div>
    </section>
  )
}
