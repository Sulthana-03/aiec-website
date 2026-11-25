"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type EnquiryType = "quote" | "service" | "general";

interface EnquiryContextValue {
  type: EnquiryType;
  setType: (type: EnquiryType) => void;
}

const EnquiryContext = createContext<EnquiryContextValue>({
  type: "quote",
  setType: () => {},
});

/** Shares the selected enquiry type between the CTA links (data-type) and the form. */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [type, setType] = useState<EnquiryType>("quote");
  const value = useMemo(() => ({ type, setType }), [type]);
  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  return useContext(EnquiryContext);
}
