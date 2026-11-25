import CtaLink from "./CtaLink";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section style={{ paddingBottom: "clamp(48px,7vw,88px)" }} aria-label="Get in touch">
      <div className="wrap">
        <Reveal className="cta">
          <div>
            <h2>Planning a new building or servicing an existing one?</h2>
            <p>Tell us about your project and the right AIEC team — sales or after-sales — will get back to you.</p>
          </div>
          <div className="btns">
            <CtaLink href="#contact" className="btn btn-red" type="quote">
              Request a Quote
            </CtaLink>
            <CtaLink href="#contact" className="btn btn-ghost" type="service">
              Request Service
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
