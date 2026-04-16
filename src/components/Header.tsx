"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Tree Removal", href: "/tree-removal" },
  { name: "Tree Trimming & Pruning", href: "/tree-trimming" },
  { name: "Emergency Tree Service", href: "/emergency-tree-service" },
  { name: "Stump Grinding", href: "/stump-grinding" },
  { name: "Lawn & Landscape", href: "/lawn-and-landscape" },
  { name: "Hardscape", href: "/hardscape" },
  { name: "Irrigation", href: "/irrigation" },
  { name: "Commercial Services", href: "/commercial" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary-dark text-white text-xs py-2.5 px-6 sm:px-10">
        <div className="max-w-[76rem] mx-auto flex justify-between items-center">
          <span className="hidden sm:inline text-white/70">Serving Fuquay-Varina · Holly Springs · Apex · Garner · Angier · Willow Springs</span>
          <span className="sm:hidden text-white/70">Serving Southern Wake County, NC</span>
          <a href="tel:9196061130" className="font-bold text-accent hover:text-accent-light transition">(919) 606-1130</a>
        </div>
      </div>

      {/* Main sticky header */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="max-w-[76rem] mx-auto px-6 sm:px-10 h-[84px] md:h-[92px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="ABC Lawn & Tree — Home">
            <img
              src="/brand/logo-horizontal-cream.png"
              alt="ABC Lawn & Tree — Est. 1998"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px]">
            <Link href="/" className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition">Home</Link>
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition flex items-center gap-1">
                Services <svg className="w-3 h-3 opacity-60" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-border rounded-xl shadow-2xl py-2 w-60">
                    {services.map(s => (
                      <Link key={s.href} href={s.href} className="block px-5 py-3 text-[15px] text-charcoal hover:bg-primary hover:text-white transition">{s.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/service-areas" className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition">Areas</Link>
            <Link href="/gallery" className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition">Gallery</Link>
            <Link href="/about" className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition">About</Link>
            <Link href="/contact" className="px-3.5 py-2 rounded-md text-white/90 font-medium hover:text-white hover:bg-white/10 transition">Contact</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="tel:9196061130" className="hidden md:flex items-center gap-2 text-white font-bold text-sm">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (919) 606-1130
            </a>
            <Link href="/contact" className="cta-gold bg-accent hover:bg-accent-light text-primary-dark px-6 py-3 rounded-lg font-bold text-sm shadow-md">
              Free Estimate
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-primary-dark pb-4">
            <div className="px-4 pt-2 space-y-1">
              <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 font-medium transition">Home</Link>
              <div className="px-4 pt-3 pb-1 text-[10px] font-bold text-accent/60 uppercase tracking-[0.15em]">Services</div>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block px-6 py-3 rounded-lg text-white/75 hover:bg-white/10 hover:text-white transition">{s.name}</Link>
              ))}
              <Link href="/service-areas" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 font-medium transition">Service Areas</Link>
              <Link href="/gallery" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 font-medium transition">Gallery</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 font-medium transition">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 font-medium transition">Contact</Link>
              <a href="tel:9196061130" className="block mt-3 text-center bg-accent text-primary-dark py-4 rounded-xl font-bold text-lg">Call (919) 606-1130</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
