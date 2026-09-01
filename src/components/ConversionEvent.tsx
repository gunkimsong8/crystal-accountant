"use client";

import { useEffect } from "react";

export function ConversionEvent() {
  useEffect(() => {
    const analyticsWindow = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
    };
    analyticsWindow.gtag?.("event", "generate_lead", {
      event_category: "contact",
    });
  }, []);
  return null;
}
