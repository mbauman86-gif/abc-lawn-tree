import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

      <div className="max-w-[76rem] mx-auto px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <img
              src="/brand/logo-horizontal-cream.png"
              alt="ABC Lawn & Tree — Est. 1998"
              className="h-16 md:h-20 w-auto mb-6"
            />
            <p className="text-white/60 text-[15px] leading-relaxed mb-6">Family-owned tree care &amp; landscaping serving Southern Wake County for 25+ years. Licensed, insured, and dedicated to excellence.</p>
            <a href="tel:9196061130" className="inline-flex items-center gap-2.5 bg-accent/15 border border-accent/25 rounded-xl px-5 py-3 text-accent font-bold text-lg hover:bg-accent/25 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (919) 606-1130
            </a>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-accent">Tree Services</h3>
            <ul className="space-y-3 text-[15px] text-white/60">
              <li><Link href="/tree-removal" className="hover:text-white transition">Tree Removal</Link></li>
              <li><Link href="/tree-trimming" className="hover:text-white transition">Tree Trimming &amp; Pruning</Link></li>
              <li><Link href="/emergency-tree-service" className="hover:text-white transition">Emergency Tree Service</Link></li>
              <li><Link href="/stump-grinding" className="hover:text-white transition">Stump Grinding</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-accent">Landscape Services</h3>
            <ul className="space-y-3 text-[15px] text-white/60">
              <li><Link href="/lawn-and-landscape" className="hover:text-white transition">Lawn &amp; Landscape</Link></li>
              <li><Link href="/hardscape" className="hover:text-white transition">Hardscape &amp; Patios</Link></li>
              <li><Link href="/irrigation" className="hover:text-white transition">Irrigation</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition">Commercial Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Project Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-accent">Service Areas</h3>
            <ul className="space-y-3 text-[15px] text-white/60">
              {["Willow Springs","Fuquay-Varina","Holly Springs","Apex","Garner","Angier"].map(c => (
                <li key={c}><Link href="/service-areas" className="hover:text-white transition">{c}, NC</Link></li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-white/45 space-y-1.5">
                <div>Mon–Fri: 7:00 AM – 6:00 PM</div>
                <div>Saturday: 8:00 AM – 2:00 PM</div>
                <div className="text-accent/70 font-medium">Emergency: 24/7</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; 2025 ABC Lawn &amp; Tree, Inc. All rights reserved.</p>
          <p>Licensed &amp; Insured · Willow Springs, NC · Serving Southern Wake County</p>
        </div>
      </div>
    </footer>
  );
}
