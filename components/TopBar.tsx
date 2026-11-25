import Icon from "./Icon";
import { PHONE_HREF, PHONE_TEXT } from "@/data/site";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tb-left">
          <i className="dot"></i>
          <span>Joint venture with Hitachi Limited, Japan · Serving Kuwait since 2013</span>
        </div>
        <div className="tb-right">
          <a href="#contact">
            <Icon id="i-wrench" />
            After-sales support
          </a>
          <a href={PHONE_HREF}>
            <Icon id="i-phone" />
            <span>{PHONE_TEXT}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
