import Icon from "./Icon";
import Reveal from "./Reveal";
import { partnerGroups } from "@/data/partners";

export default function Partners() {
  return (
    <section className="section" id="partners" aria-label="Our partner brands">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Global partners</span>
          <h2>Brands we represent</h2>
          <p>AIEC brings world-recognised manufacturers to Kuwait, backed by local installation and service.</p>
        </Reveal>
        <div className="partner-groups">
          {partnerGroups.map((g) => (
            <Reveal className="pgroup" delay={g.delay} key={g.title}>
              <h3>
                <span className="ic">
                  <Icon id={g.icon} />
                </span>
                {g.title}
              </h3>
              <p>{g.text}</p>
              <div className="brands">
                {g.partners.map((p) => (
                  <a
                    className="brand-tile has-logo"
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={p.label}
                    key={p.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.alt} />
                    <span className="bn">{p.name}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="partners-note">All logos and brand names are trademarks of their respective owners.</p>
      </div>
    </section>
  );
}
