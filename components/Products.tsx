import CtaLink from "./CtaLink";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="section alt" id="products">
      <div className="wrap">
        <div className="sec-top">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Products</span>
            <h2>Four product ranges, engineered to move people</h2>
            <p>
              From passenger elevators to façade access systems — each category is supplied, installed and supported by
              one accountable team.
            </p>
          </Reveal>
        </div>
        <div className="grid-4">
          {products.map((p) => (
            <Reveal as="article" className="pcard" delay={p.delay} key={p.num}>
              <div className="pimg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="pbody">
                <span className="num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <CtaLink href="#contact" className="link-arrow" type="quote">
                  Enquire now <Icon id="i-arrow" />
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
