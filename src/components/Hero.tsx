"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero({
  title,
  subtitle,
  emergency = false,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  emergency?: boolean;
  backgroundImage?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll('.hero-reveal');
    children.forEach((child, i) => {
      setTimeout(() => child.classList.add('visible'), 200 + i * 140);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${emergency ? "bg-emergency-dark" : ""}`}
      style={!emergency && !backgroundImage ? { background: "linear-gradient(135deg, #4A1420 0%, #6B1D2A 40%, #8B2E3D 100%)" } : undefined}
    >
      {/* Optional full-bleed background photograph */}
      {backgroundImage && (
        <>
          <img src={backgroundImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
        </>
      )}
      {/* Subtle texture overlay — only shown when no background photograph */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zM0 22v2h20v2H0v2h20v2H0v2h20v2H0v2h20v2H0v2h22V22H0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E\")"}} />
      )}

      {/* Gold gradient accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative max-w-[76rem] mx-auto px-6 sm:px-10 py-24 md:py-32 lg:py-36 xl:py-40 grid lg:grid-cols-[1.15fr_1fr] lg:items-center gap-12 xl:gap-20">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 text-white mb-6 leading-[1.05]">
            {title}
          </h1>

          {/* Gold accent line */}
          <div className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mb-6" />

          {/* Subtitle */}
          <p className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="cta-gold inline-flex items-center justify-center bg-accent text-primary-dark px-10 py-5 rounded-xl font-bold text-lg shadow-lg"
            >
              Get Your Free Estimate
            </Link>
            <a
              href="tel:9196061130"
              className="cta-lift inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (919) 606-1130
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "6", label: "Cities Served" },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-black text-accent tracking-tight">{s.num}</div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked logo mark — desktop only, hidden when we have a background photo */}
        {!emergency && !backgroundImage && (
          <div className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 hidden lg:flex items-center justify-center relative">
            {/* Soft radial glow backdrop */}
            <div className="absolute inset-0 -m-8 bg-[radial-gradient(ellipse_at_center,rgba(200,150,62,0.12),transparent_60%)] pointer-events-none" />
            <img
              src="/brand/logo-stacked-cream.png"
              alt=""
              aria-hidden="true"
              className="relative w-72 xl:w-80 h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}
