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
      <div className="bg-primary-dark text-white text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">Serving Fuquay-Varina · Holly Springs · Apex · Garner · Angier · Willow Springs</span>
          <span className="sm:hidden">Serving Southern Wake County, NC</span>
          <a href="tel:9196060774" className="font-bold text-accent-light hover:text-white transition">(919) 606-0774</a>
        </div>
      </div>

      {/* Main sticky header — solid dark green */}
      <header className="sticky top-0 z-50 bg-primary shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo — white on green */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current"><path d="M12 2L8 10h3l-4 8h3L5 22h14l-5-4h3l-4-8h3z"/></svg>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-[17px]">ABC Lawn & Tree</div>
              <div className="text-[10px] text-white/60 font-medium tracking-wider uppercase">Willow Springs, NC</div>
            </div>
          </Link>

          {/* Desktop nav — white links */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px]">
            <Link href="/" className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition">Home</Link>
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition flex items-center gap-1">
                Services <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white border border-border rounded-xl shadow-xl py-2 w-56">
                    {services.map(s => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-[15px] text-charcoal hover:bg-primary hover:text-white transition">{s.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/service-areas" className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition">Areas</Link>
            <Link href="/gallery" className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition">Gallery</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition">About</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition">Contact</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="tel:9196060774" className="hidden md:flex items-center gap-1.5 text-white font-bold text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (919) 606-0774
            </a>
            <Link href="/contact" className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg font-bold text-sm transition shadow-md">
              Free Estimate
            </Link>
            {/* Hamburger — white icon */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-white/15 bg-primary pb-4">
            <div className="px-4 pt-2 space-y-1">
              <Link href="/" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white hover:bg-white/10 font-medium transition">Home</Link>
              <div className="px-3 pt-3 pb-1 text-[10px] font-bold text-white/40 uppercase tracking-widest">Services</div>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block px-5 py-2.5 rounded-md text-white/80 hover:bg-white/10 hover:text-white transition">{s.name}</Link>
              ))}
              <Link href="/service-areas" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white hover:bg-white/10 font-medium transition">Service Areas</Link>
              <Link href="/gallery" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white hover:bg-white/10 font-medium transition">Gallery</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white hover:bg-white/10 font-medium transition">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-white hover:bg-white/10 font-medium transition">Contact</Link>
              <a href="tel:9196060774" className="block mt-3 text-center bg-accent text-white py-3 rounded-lg font-bold">Call (919) 606-0774</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
