import CtaLink from "./CtaLink";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-label="Introduction">
        <div className="hero-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt="City skyline at night with towers lit up and light trails on a highway"
            fetchPriority="high"
          />
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">Hitachi joint venture · Kuwait</span>
            <h1>
              Elevators &amp; escalators for Kuwait’s <em>finest buildings.</em>
            </h1>
            <p className="lead">
              Supply, installation and after-sales service of elevators, escalators, moving walks and façade cleaning
              systems — where technology and reliability have been at work for decades.
            </p>
            <div className="hero-btns">
              <CtaLink href="#contact" className="btn btn-red" type="quote">
                Request a Quote <Icon id="i-arrow" />
              </CtaLink>
              <a href="#products" className="btn btn-ghost">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="wrap">
          <Reveal className="stats-card">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>
                  {s.value}
                  {s.suffix && <i>{s.suffix}</i>}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </>
  );
}
