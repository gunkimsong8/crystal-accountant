"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_ID;
const consentKey = "crystal-analytics-consent";
const consentEvent = "crystal-consent-change";

type Consent = "accepted" | "declined" | null | "loading";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(consentEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(consentEvent, callback);
  };
}

function getConsent(): Consent {
  const saved = window.localStorage.getItem(consentKey);
  return saved === "accepted" || saved === "declined" ? saved : null;
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => "loading");

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event(consentEvent));
  }

  if (!measurementId || consent === "loading") return null;
  const safeId = JSON.stringify(measurementId).replace(/</g, "\\u003c");

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",${safeId},{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <aside className="consentBanner" aria-label="Analytics preference">
          <p><strong>Help us improve this website</strong><br />With your permission, we use analytics to understand which pages are useful. <a href="/privacy/#analytics">Learn more</a>.</p>
          <div>
            <button type="button" className="button buttonSmall" onClick={() => choose("accepted")}>Accept analytics</button>
            <button type="button" className="consentDecline" onClick={() => choose("declined")}>Decline</button>
          </div>
        </aside>
      )}
    </>
  );
}
