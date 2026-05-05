/**
 * MetaPixel — Facebook/Meta Pixel for ABC Salutes ad attribution.
 *
 * Pixel ID: 1317450700337450 (associated with the ABC Salutes Facebook page).
 *
 * Loaded site-wide via root layout.tsx so PageView fires on every route. Because
 * this is the App Router (SPA-style navigation), an effect tied to `usePathname`
 * additionally re-fires PageView on client-side route changes — without it,
 * only the first server-rendered page would be counted.
 *
 * Pixel IDs are public-by-design (browsers receive them in network requests),
 * so hard-coding here is fine. Swap to `NEXT_PUBLIC_META_PIXEL_ID` env var only
 * if/when staging vs production split is needed.
 *
 * Site context: this same Next.js app serves both abclawnandtree.com and
 * abcsalutes.com (per netlify.toml — root rewrites to /veterans on the
 * salutes domain). The Pixel will fire on all pages of both domains, which is
 * what we want for ABC Salutes ad attribution AND general retargeting.
 */
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "1317450700337450";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
  }
}

export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Initial PageView fires from the inline script below; this effect catches
    // SPA route changes that the inline script alone would miss.
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
        `}
      </Script>
      {/* Noscript 1x1 — fires PageView even when JS is disabled */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
