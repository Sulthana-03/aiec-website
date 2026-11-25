import CtaLink from "./CtaLink";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Our Services</span>
          <h2>From the first lift to the thousandth trip</h2>
          <p>We support new installations and give building owners and facility managers a clear route to service.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s) => (
            <Reveal as="article" className="svc" delay={s.delay} key={s.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.alt} loading="lazy" />
              <div className="sbody">
                <span className="eyebrow">{s.eyebrow}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <CtaLink href="#contact" className="btn btn-red btn-sm" type={s.type}>
                  {s.cta} <Icon id="i-arrow" />
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
