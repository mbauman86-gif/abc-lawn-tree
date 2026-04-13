"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero({ title, subtitle, emergency = false }: { title: string; subtitle: string; emergency?: boolean }) {
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
      style={!emergency ? { background: "linear-gradient(135deg, #4A1420 0%, #6B1D2A 40%, #8B2E3D 100%)" } : undefined}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zM0 22v2h20v2H0v2h20v2H0v2h20v2H0v2h20v2H0v2h22V22H0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E\")"}} />

      {/* Gold gradient accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative max-w-[76rem] mx-auto px-6 sm:px-10 py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div className="hero-reveal opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 mb-8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 Stars</span>
            <span className="text-sm text-white/50">|</span>
            <span className="text-sm text-white/70">87+ Google Reviews</span>
          </div>

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
              { num: "25+", label: "Years" },
              { num: "87+", label: "5-Star Reviews" },
              { num: "6", label: "Cities Served" },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-black text-accent tracking-tight">{s.num}</div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
