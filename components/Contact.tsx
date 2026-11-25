import CtaLink from "./CtaLink";
import EnquiryForm from "./EnquiryForm";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { ADDRESS, EMAIL, PHONE_HREF, PHONE_TEXT, contactCards } from "@/data/site";

export default function Contact() {
  return (
    <section className="section alt" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <div className="sec-head" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Contact Us</span>
            <h2>Let’s move your project forward</h2>
            <p>New project enquiries go to our sales team; after-sales requests go straight to our service team.</p>
          </div>
          <div className="cards-col">
            {contactCards.map((c) => (
              <div className="ccard" key={c.title}>
                <span className="ic">
                  <Icon id={c.icon} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  {c.link && (
                    <CtaLink href="#enq" className="link-arrow" type={c.link.type}>
                      {c.link.label} <Icon id="i-arrow" />
                    </CtaLink>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="office">
            <div>
              <Icon id="i-pin" />
              <span>
                <b>Ahmadiah International Elevator Co. W.L.L</b>
                <br />
                {ADDRESS}
                <br />
                <small style={{ opacity: 0.7 }}>Ahmadiah group head office</small>
              </span>
            </div>
            <div>
              <Icon id="i-phone" />
              <span>
                <a href={PHONE_HREF}>{PHONE_TEXT}</a> &nbsp;·&nbsp; Fax +965 222-66-333
              </span>
            </div>
            <div>
              <Icon id="i-mail" />
              <span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </span>
            </div>
            <div>
              <Icon id="i-clock" />
              <span>
                <b>Working hours:</b> Sat – Thu, 8:00 AM – 5:00 PM
                <br />
                <small style={{ opacity: 0.7 }}>Friday closed</small>
              </span>
            </div>
          </div>
        </Reveal>

        <EnquiryForm />
      </div>
    </section>
  );
}
