import CtaLink from "./CtaLink";
import CurrentYear from "./CurrentYear";
import Icon from "./Icon";
import { footerColumns } from "@/data/footer";
import { allPartners } from "@/data/partners";
import { ADDRESS, EMAIL, PHONE_HREF, PHONE_TEXT } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="ft-cta">
          <div>
            <h3>Planning a project or need service?</h3>
            <p>Our sales and after-sales teams are ready to help.</p>
          </div>
          <div className="ft-cta-btns">
            <CtaLink className="btn btn-red" href="#contact" type="quote">
              Request a Quote <Icon id="i-arrow" />
            </CtaLink>
            <a className="btn btn-ghost" href={PHONE_HREF}>
              <Icon id="i-phone" />
              {PHONE_TEXT}
            </a>
          </div>
        </div>
        <div className="ft-grid">
          <div className="ft-brand">
            <a href="#home" className="ft-logo" aria-label="Ahmadiah – back to top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="Ahmadiah logo" width={436} height={93} loading="lazy" />
            </a>
            <p>
              <b>Ahmadiah International Elevator Co. W.L.L (AIEC)</b>
              <br />A joint venture between Ahmadiah Contracting &amp; Trading Co. and Hitachi Limited, Japan.
            </p>
            <ul className="ft-contact">
              <li>
                <Icon id="i-pin" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <Icon id="i-phone" />
                <a href={PHONE_HREF}>{PHONE_TEXT}</a>
              </li>
              <li>
                <Icon id="i-mail" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
          {footerColumns.map((col) => (
            <nav aria-label={col.title} key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <CtaLink href={l.href} type={l.type}>
                      {l.label}
                    </CtaLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="ft-partners">
          <span>Our partner brands</span>
          <div>
            {allPartners.map((p) => (
              <a href="#partners" className="ft-chip" key={p.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.chipAlt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
        <div className="ft-bottom">
          <span>
            © <CurrentYear /> Ahmadiah International Elevator Co.
            W.L.L (AIEC). All rights reserved.
          </span>
          <span className="ft-credit" id="photoCredit">
            Photos:{" "}
            <a href="https://www.pexels.com" target="_blank" rel="noopener">
              Pexels
            </a>{" "}
            · Brand logos are trademarks of their owners.
          </span>
          <a href="#home" className="ft-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
