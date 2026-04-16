import type { Metadata } from "next";
import Link from "next/link";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "ABC Lawn & Tree, Inc. | Tree Service & Landscaping — Southern Wake & Harnett Counties, NC",
  description:
    "Family-owned tree removal, trimming, stump grinding, and emergency storm response serving Fuquay-Varina, Holly Springs, Apex, Garner, Angier, and Willow Springs. 25+ years. Licensed & insured. Free estimates.",
};

export default function HomePage() {
  return (
    <>
      {/* EMERGENCY BANNER */}
      <div className="bg-emergency text-white py-3 relative z-30">
        <div className="max-w-[76rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 font-serif font-bold italic tracking-wide">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>TREE DOWN? STORM DAMAGE? 24/7 EMERGENCY RESPONSE</span>
          </div>
          <a className="font-serif font-black tracking-tighter hover:underline decoration-2" href="tel:9196061130">
            CALL (919) 606-1130
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[760px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional tree service crew removing a large oak"
            className="w-full h-full object-cover"
            src="/images/hero.jpg"
          />
          <div className="absolute inset-0 bg-primary-dark/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[76rem] mx-auto px-6 py-24 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-accent font-semibold tracking-[0.15em] text-sm uppercase mb-6 bg-primary-dark/40 px-4 py-2 rounded-full border border-accent/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              SINCE 1998 &middot; LICENSED &amp; INSURED
            </div>
            <h1 className="text-white font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8">
              When the tree has to come down, call the crew that has been doing it for 25&nbsp;years.
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 font-medium mb-12 leading-relaxed">
              Tree removal, trimming, emergency storm response, and stump grinding across Southern Wake and Harnett counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#estimate"
                className="cta-gold bg-accent text-primary-dark font-headline font-bold text-lg px-10 py-5 rounded-lg shadow-2xl hover:brightness-110 transition text-center"
              >
                GET A FREE ESTIMATE
              </a>
              <a
                href="tel:9196061130"
                className="bg-emergency hover:brightness-110 text-white font-headline font-bold text-lg px-10 py-5 rounded-lg shadow-2xl transition flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                CALL NOW &middot; (919) 606-1130
              </a>
            </div>
          </div>
        </div>

        {/* HERO TRUST BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/95 backdrop-blur-sm border-t border-primary-light/40">
          <div className="max-w-[76rem] mx-auto px-6 py-6 grid grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-headline font-black text-accent">25+</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">Years Experience</span>
            </div>
            <div className="flex flex-col items-center md:border-l border-primary-light/40">
              <span className="text-3xl font-headline font-black text-accent">FULLY</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">Licensed &amp; Insured</span>
            </div>
            <div className="flex flex-col items-center md:border-l border-primary-light/40">
              <span className="text-3xl font-headline font-black text-accent">FREE</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* TREE SERVICES GRID */}
      <section className="py-24 md:py-32 px-6 bg-cream">
        <div className="max-w-[76rem] mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4">Every tree job. Handled expertly.</h2>
            <div className="w-24 h-1 bg-accent mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tree Removal */}
            <Link href="/tree-removal" className="service-card bg-warm-white rounded-2xl overflow-hidden border border-border group block">
              <div className="h-48 relative overflow-hidden">
                <img src="/images/tree-removal.jpg" alt="Tree removal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-headline font-bold text-primary mb-4">Tree Removal</h3>
                <p className="text-charcoal-light mb-6 text-sm leading-relaxed">Safe, precise extraction of hazardous or unwanted trees near structures and power lines.</p>
                <span className="text-accent font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>

            {/* Emergency */}
            <Link href="/emergency-tree-service" className="service-card bg-warm-white rounded-2xl overflow-hidden border-2 border-emergency/25 group block">
              <div className="h-48 relative overflow-hidden">
                <img src="/images/emergency.jpg" alt="Emergency storm response" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-emergency/20"></div>
                <div className="absolute top-4 left-4 bg-emergency text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Priority Response</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-headline font-bold text-emergency mb-4">Emergency Service</h3>
                <p className="text-charcoal-light mb-6 text-sm leading-relaxed">Rapid response for storm-damaged trees that pose immediate risk to your home or safety.</p>
                <span className="text-emergency font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Get Help Now
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                </span>
              </div>
            </Link>

            {/* Tree Trimming */}
            <Link href="/tree-trimming" className="service-card bg-warm-white rounded-2xl overflow-hidden border border-border group block">
              <div className="h-48 relative overflow-hidden">
                <img src="/images/tree-trimming.jpg" alt="Tree trimming and pruning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-headline font-bold text-primary mb-4">Tree Trimming</h3>
                <p className="text-charcoal-light mb-6 text-sm leading-relaxed">Aesthetic and structural pruning to improve tree health, clearance, and storm resistance.</p>
                <span className="text-accent font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>

            {/* Stump Grinding */}
            <Link href="/stump-grinding" className="service-card bg-warm-white rounded-2xl overflow-hidden border border-border group block">
              <div className="h-48 relative overflow-hidden">
                <img src="/images/stump-grinding.jpg" alt="Stump grinding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-headline font-bold text-primary mb-4">Stump Grinding</h3>
                <p className="text-charcoal-light mb-6 text-sm leading-relaxed">Removing unsightly stumps and roots to clear the way for new landscaping or fresh turf.</p>
                <span className="text-accent font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECONDARY SERVICES BAND */}
      <section className="bg-primary py-14 px-6">
        <div className="max-w-[76rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-white font-headline font-bold text-3xl italic">Also available.</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/lawn-and-landscape" className="text-accent-pale hover:text-white font-semibold transition-colors border-b border-transparent hover:border-accent pb-1">
                Lawn &amp; Landscape
              </Link>
              <Link href="/hardscape" className="text-accent-pale hover:text-white font-semibold transition-colors border-b border-transparent hover:border-accent pb-1">
                Hardscape
              </Link>
              <Link href="/irrigation" className="text-accent-pale hover:text-white font-semibold transition-colors border-b border-transparent hover:border-accent pb-1">
                Irrigation
              </Link>
              <Link href="/commercial" className="text-accent-pale hover:text-white font-semibold transition-colors border-b border-transparent hover:border-accent pb-1">
                Commercial Maintenance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ABC */}
      <section className="py-24 md:py-32 px-6 bg-warm-white">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-8 leading-tight">
              Southern Wake and Harnett&rsquo;s local tree experts since 1998.
            </h2>
            <p className="text-charcoal text-lg mb-8 leading-relaxed">
              We started as a family-run operation with a single truck and a commitment to doing the job right. Today, ABC Lawn &amp; Tree is the most trusted name for massive tree removals and complex emergency storm recovery in Fuquay-Varina and the surrounding towns.
            </p>
            <p className="text-lg mb-10 leading-relaxed font-semibold italic text-primary-light">
              &ldquo;When it is too big for the other guys, they call us. When it is too risky for you, you should too.&rdquo;
            </p>
            <Link href="/about" className="cta-lift inline-flex items-center gap-3 bg-primary text-white font-bold px-10 py-5 rounded-lg shadow-xl hover:bg-primary-light transition">
              OUR STORY
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="bg-cream p-10 md:p-12 rounded-2xl shadow-inner border border-border">
            <div className="space-y-8">
              {[
                { title: "Fully Licensed & Insured", body: "Comprehensive liability and workers' comp for your complete protection and peace of mind." },
                { title: "Decades of Local Expertise", body: "We understand Wake and Harnett county soils, species, and storm patterns — thousands of trees of experience." },
                { title: "Modern Equipment Fleet", body: "Cranes, bucket trucks, and chippers maintained for safe, efficient operations on tight or difficult sites." },
                { title: "100% Satisfaction Guarantee", body: "We do not leave until the site is clean and you are completely satisfied with the result." },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <svg className="w-9 h-9 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-primary-dark mb-2">{item.title}</h4>
                    <p className="text-charcoal-light">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 md:py-20 px-6 bg-cream border-y border-border">
        <div className="max-w-[76rem] mx-auto text-center">
          <h3 className="text-sm font-bold tracking-[0.2em] text-primary-dark uppercase mb-10">Our Primary Service Areas</h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-primary font-headline font-bold text-lg">
            {["Fuquay-Varina", "Holly Springs", "Apex", "Garner", "Angier", "Willow Springs", "Clayton", "Lillington", "Raleigh"].map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="py-24 md:py-32 px-6 bg-warm-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary mb-4">Get a free estimate.</h2>
            <p className="text-charcoal-light text-xl">Schedule your site visit today. Most estimates provided within 24&ndash;48 hours.</p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
