import Icon from "./Icon";
import Reveal from "./Reveal";
import { aboutTicks } from "@/data/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about.jpg"
            alt="Bright building lobby with floor-to-ceiling glass and stone-clad walls"
            loading="lazy"
          />
          <div className="about-badge">
            <span className="ic">
              <Icon id="i-shield" />
            </span>
            <span className="ab-txt">
              <b>Hitachi Limited, Japan</b>
              <small>Joint-venture partner of AIEC</small>
            </span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay="d1">
          <span className="eyebrow">About AIEC</span>
          <h2>A leading name in vertical transportation</h2>
          <p>
            Ahmadiah International Elevator Company (AIEC) is a joint venture between{" "}
            <b>Ahmadiah Contracting and Trading Company</b> and <b>Hitachi Limited, Japan</b> — formed in 2013 and a
            leading company in Kuwait for the supply, installation and after-sales service of elevators, escalators,
            moving walks and façade cleaning products.
          </p>
          <p>
            AIEC has been involved in numerous elevator and escalator installations in Kuwait’s outstanding high-rise
            buildings, malls, hotels, banks, hospitals, governmental, residential and commercial buildings.
          </p>
          <ul className="ticks">
            {aboutTicks.map((t) => (
              <li key={t}>
                <Icon id="i-check" />
                {t}
              </li>
            ))}
          </ul>
          <a href="#history" className="btn btn-dark">
            Our History <Icon id="i-arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
