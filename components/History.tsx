import Icon from "./Icon";
import Reveal from "./Reveal";
import { pillars, timeline } from "@/data/site";

export default function History() {
  return (
    <section className="section dark" id="history">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow" style={{ color: "#ff6a70" }}>
            Our History
          </span>
          <h2>Decades of technology and reliability</h2>
          <p>
            What began as the Elevator Division of Ahmadiah Contracting &amp; Trading Co. has grown into a dedicated
            joint-venture company with Hitachi.
          </p>
        </Reveal>
        <div className="timeline">
          {timeline.map((t) => (
            <Reveal className="tl" delay={t.delay} key={t.year}>
              <div className="year">{t.year}</div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <Reveal className="pillar" delay={p.delay} key={p.title}>
              <span className="ic">
                <Icon id={p.icon} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
