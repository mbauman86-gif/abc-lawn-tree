import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "ABC Lawn & Tree, Inc. | Tree Service & Landscaping in Southern Wake County, NC",
  description:
    "Family-owned tree removal, trimming, lawn care, hardscape & irrigation serving Fuquay-Varina, Holly Springs, Apex, Garner, Angier & Willow Springs NC. Licensed & insured. Free estimates.",
  keywords:
    "tree service Wake County NC, tree removal Fuquay-Varina, landscaping Holly Springs NC, tree trimming Apex NC, lawn care Southern Wake County, hardscape Garner NC",
};

const services = [
  {
    href: "/tree-removal",
    icon: "M6 18L18 6M6 6l12 12",
    title: "Tree Removal",
    description: "Safe, efficient removal of hazardous, dead, or unwanted trees. From small ornamentals to the biggest oaks.",
  },
  {
    href: "/tree-trimming",
    icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z",
    title: "Tree Trimming & Pruning",
    description: "Expert pruning to promote health, improve shape, and reduce storm risk for your trees.",
  },
  {
    href: "/stump-grinding",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Stump Grinding",
    description: "Complete stump removal below grade so you can reclaim your yard and landscape freely.",
  },
  {
    href: "/lawn-and-landscape",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Lawn & Landscape",
    description: "Full-service lawn care, landscape design, mulching, planting, and seasonal maintenance.",
  },
  {
    href: "/hardscape",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z",
    title: "Hardscape & Patios",
    description: "Patios, retaining walls, walkways, fire pits, and complete outdoor living spaces.",
  },
  {
    href: "/irrigation",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Irrigation Systems",
    description: "Sprinkler system installation, repair, winterization, and seasonal maintenance.",
  },
];

const serviceAreas = ["Fuquay-Varina", "Holly Springs", "Apex", "Garner", "Angier", "Willow Springs"];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Wake County&apos;s Trusted Tree & Landscape Experts"
        subtitle="Professional tree removal, trimming, lawn care, hardscaping, and irrigation for homeowners and businesses across Southern Wake County. Family-owned since 1998."
      />
      <TrustBar />

      {/* Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[76rem] mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">What We Do</div>
              <h2 className="text-charcoal mb-4">Complete Tree &amp; Landscape Services</h2>
              <p className="text-charcoal-light text-lg leading-relaxed">
                From towering oaks to backyard patios — one team handles every aspect of your outdoor property.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 60}>
                <Link href={s.href} className="service-card group block bg-warm-white border border-border rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition">{s.title}</h3>
                  <p className="text-[15px] text-charcoal-light leading-relaxed">{s.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            {/* Commercial CTA card */}
            <ScrollReveal delay={services.length * 60}>
              <Link href="/commercial" className="service-card group block rounded-2xl p-8 h-full border-2 border-dashed border-accent/30 bg-accent-pale/30 hover:bg-accent-pale/50 hover:border-accent/50">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Commercial Services</h3>
                <p className="text-[15px] text-charcoal-light leading-relaxed">Grounds maintenance contracts for HOAs, offices, retail centers, and commercial properties.</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Get a commercial quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-[76rem] mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Why Choose Us</div>
              <h2 className="text-charcoal mb-3">Built on 25 Years of Trust</h2>
              <p className="text-charcoal-light max-w-xl mx-auto text-lg">We treat every property like it&apos;s our own. That&apos;s why our customers keep coming back.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "25+", label: "Years in Business", desc: "Family-owned since 1998. We know Southern Wake County\u2019s trees, soil, and seasons." },
              { num: "4.9", label: "Google Rating", desc: "87+ five-star reviews from homeowners and businesses across the Triangle." },
              { num: "100%", label: "Licensed & Insured", desc: "Full liability and workers\u2019 comp on every job. Your property is always protected." },
              { num: "Free", label: "Estimates", desc: "No-obligation quotes delivered within 24 hours. No surprises. No hidden fees." },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="bg-warm-white rounded-2xl p-8 border border-border text-center">
                  <div className="stat-num mb-2">{stat.num}</div>
                  <h3 className="font-bold text-charcoal mb-2">{stat.label}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Band */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7A1515 0%, #C41E1E 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23fff'/%3E%3C/svg%3E\")"}} />
        <div className="relative max-w-[76rem] mx-auto px-6 sm:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Storm Damage? Tree Emergency?</h3>
              <p className="text-white/75 text-lg">24/7 emergency response. Call now for immediate dispatch.</p>
            </div>
          </div>
          <a
            href="tel:9196061130"
            className="cta-lift inline-flex items-center gap-3 bg-white text-emergency-dark px-10 py-5 rounded-xl font-bold text-lg shadow-xl flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            (919) 606-1130
          </a>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-28" style={{ background: "linear-gradient(135deg, #4A1420 0%, #6B1D2A 50%, #8B2E3D 100%)" }}>
        <div className="max-w-[76rem] mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Our Coverage</div>
            <h2 className="text-white mb-4">Proudly Serving Southern Wake County</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">
              Based in Willow Springs, NC — serving homeowners and businesses throughout the area for over 25 years.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {serviceAreas.map((city) => (
                <span key={city} className="bg-white/8 border border-white/15 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                  {city}, NC
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent-light transition text-lg">
              View all service areas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA + Estimate Form */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[76rem] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">Get Started</div>
                <h2 className="text-charcoal mb-5">Ready for Your Free Estimate?</h2>
                <p className="text-charcoal-light text-lg leading-relaxed mb-10">
                  Tell us about your project and we&apos;ll get back to you within 24 hours with a no-obligation quote. Or call us right now.
                </p>

                {/* Phone CTA */}
                <a
                  href="tel:9196061130"
                  className="cta-lift flex items-center gap-5 bg-primary text-white p-6 rounded-2xl shadow-lg hover:bg-primary-light transition mb-6"
                >
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/30">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl">(919) 606-1130</div>
                    <div className="text-white/60 text-sm">Call now for immediate help</div>
                  </div>
                </a>

                {/* Hours */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-warm-white rounded-xl p-5 border border-border text-center">
                    <div className="text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1">Mon–Fri</div>
                    <div className="font-bold text-charcoal text-lg">7 AM – 6 PM</div>
                  </div>
                  <div className="bg-warm-white rounded-xl p-5 border border-border text-center">
                    <div className="text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1">Saturday</div>
                    <div className="font-bold text-charcoal text-lg">8 AM – 2 PM</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <EstimateForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
