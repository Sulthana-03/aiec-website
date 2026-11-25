import Reveal from "./Reveal";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  return (
    <section className="section" id="sectors">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Sectors</span>
          <h2>Sectors we serve</h2>
          <p>From shopping malls to government buildings, AIEC supplies and maintains vertical transport for every kind of building.</p>
        </Reveal>
        <div className="proj-grid">
          {sectors.map((p) => (
            <Reveal as="a" href="#contact" className="proj" delay={p.delay} key={p.sector}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.alt} loading="lazy" />
              <div className="cap">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
