import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent fill-current"><path d="M12 2L8 10h3l-4 8h3L5 22h14l-5-4h3l-4-8h3z"/></svg>
              </div>
              <div className="font-bold text-lg text-white">ABC Lawn & Tree</div>
            </div>
            <p className="text-white/75 text-[15px] leading-relaxed mb-5">Family-owned tree care & landscaping serving Southern Wake County for 25+ years. Licensed, insured, and dedicated to excellence.</p>
            <a href="tel:9196061130" className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:text-accent-light transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (919) 606-1130
            </a>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Tree Services</h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              <li><Link href="/tree-removal" className="hover:text-white transition">Tree Removal</Link></li>
              <li><Link href="/tree-trimming" className="hover:text-white transition">Tree Trimming & Pruning</Link></li>
              <li><Link href="/emergency-tree-service" className="hover:text-white transition">Emergency Tree Service</Link></li>
              <li><Link href="/stump-grinding" className="hover:text-white transition">Stump Grinding</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Landscape Services</h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              <li><Link href="/lawn-and-landscape" className="hover:text-white transition">Lawn & Landscape</Link></li>
              <li><Link href="/hardscape" className="hover:text-white transition">Hardscape & Patios</Link></li>
              <li><Link href="/irrigation" className="hover:text-white transition">Irrigation</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Free Estimate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">Service Areas</h3>
            <ul className="space-y-2.5 text-[15px] text-white/75">
              {["Willow Springs","Fuquay-Varina","Holly Springs","Apex","Garner","Angier"].map(c => (
                <li key={c}><Link href="/service-areas" className="hover:text-white transition">{c}, NC</Link></li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/15">
              <div className="text-sm text-white/60 space-y-1">
                <div>Mon–Fri: 7:00 AM – 6:00 PM</div>
                <div>Saturday: 8:00 AM – 2:00 PM</div>
                <div>Emergency: 24/7</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2025 ABC Lawn & Tree, Inc. All rights reserved.</p>
          <p>Licensed & Insured · Willow Springs, NC · Serving Southern Wake County</p>
        </div>
      </div>
    </footer>
  );
}
