"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
// Same static fallback as the original markup; replaced by the real year on the client.
const FALLBACK_YEAR = 2026;

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => FALLBACK_YEAR);
  return <span id="yr">{year}</span>;
}
