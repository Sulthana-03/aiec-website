"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useEnquiry, type EnquiryType } from "./EnquiryContext";

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Enquiry type to preselect in the form (rendered as data-type). */
  type?: EnquiryType;
};

/** An in-page link that preselects the enquiry type when it has a data-type. */
export default function CtaLink({ type, onClick, children, ...rest }: CtaLinkProps) {
  const { setType } = useEnquiry();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (type) setType(type);
    onClick?.(e);
  };
  return (
    <a {...rest} data-type={type} onClick={handleClick}>
      {children}
    </a>
  );
}
