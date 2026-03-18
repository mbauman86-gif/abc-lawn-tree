import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Commercial Landscape & Tree Services | Wake County NC | ABC Lawn & Tree",
  description:
    "Commercial landscaping, grounds maintenance, and tree services for Southern Wake County, NC. Office parks, retail centers, HOAs, and commercial properties in Fuquay-Varina, Holly Springs, Apex, and Garner. Free property audits.",
  keywords:
    "commercial landscaping Wake County NC, commercial grounds maintenance Fuquay-Varina, commercial tree service Apex NC, office park landscaping Holly Springs, HOA landscape maintenance Wake County",
};

const services = [
  {
    title: "Grounds Maintenance",
    description:
      "Weekly mowing, edging, blowing, and general upkeep to keep your commercial property looking sharp year-round. Consistent crews who know your property.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0l8.955 8.955M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Seasonal Color & Bed Maintenance",
    description:
      "Seasonal flower rotations, mulch installation, shrub pruning, and weed management that keep entrances and common areas inviting for tenants and visitors.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Commercial Tree Care",
    description:
      "Tree risk assessments, pruning, removal, and stump grinding for commercial properties. We handle liability trees, storm damage, and proactive maintenance to protect your property and tenants.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L8 10h3l-4 8h3L5 22h14l-5-4h3l-4-8h3z" />
      </svg>
    ),
  },
  {
    title: "Parking Lot & Island Maintenance",
    description:
      "Keep parking areas clean, trimmed, and presentable. We maintain islands, curb lines, and perimeter landscaping that makes a strong first impression.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.375m-17.25 0V6.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v11.25" />
      </svg>
    ),
  },
  {
    title: "Irrigation Management",
    description:
      "System inspections, seasonal adjustments, repairs, and winterization. We keep your irrigation running efficiently to protect your landscape investment and reduce water waste.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Hardscape & Site Improvements",
    description:
      "Walkways, retaining walls, drainage corrections, and ADA-compliant pathway installations for commercial properties. We handle the full scope so you don&apos;t need multiple vendors.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l2.1 2.1 5.1-5.1a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-7.98 7.98a1.5 1.5 0 01-2.12.02z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "One Vendor for Trees + Landscape",
    description: "Most landscape companies can't handle tree work. We do both, which means one contract, one point of contact, and no coordination headaches for property managers.",
  },
  {
    title: "25+ Years in Business",
    description: "We've been serving Southern Wake County since day one. Our longevity means stability, reliability, and a team that understands the local climate and soil conditions.",
  },
  {
    title: "Licensed & Fully Insured",
    description: "Full general liability and workers' compensation coverage protects your property and reduces your risk. We carry documentation ready for any vendor onboarding process.",
  },
  {
    title: "Dedicated Account Manager",
    description: "Every commercial client gets a single point of contact who knows your property, your expectations, and your schedule. No call centers, no runaround.",
  },
  {
    title: "Flexible Contract Terms",
    description: "Monthly, seasonal, or annual agreements tailored to your property's needs and budget. We offer a 5% discount on annual prepay contracts.",
  },
  {
    title: "Emergency Response",
    description: "Storm damage doesn't wait for business hours. Our emergency tree crew is available to clear hazards and restore safety to your commercial property fast.",
  },
];

const propertyTypes = [
  "Office Parks & Corporate Campuses",
  "Retail Centers & Strip Malls",
  "Churches & Houses of Worship",
  "HOAs & Planned Communities",
  "Medical & Dental Offices",
  "Banks & Credit Unions",
  "Multi-Tenant Commercial Properties",
  "Industrial & Warehouse Facilities",
];

export default function CommercialPage() {
  return (
    <>
      <Hero
        title="Commercial Landscape &amp; Tree Services"
        subtitle="Grounds maintenance, tree care, and site improvements for commercial properties across Fuquay-Varina, Holly Springs, Apex, Garner, and Southern Wake County."
      />
      <TrustBar />

      {/* Services Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Commercial Services We Offer
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              ABC Lawn &amp; Tree is the single vendor solution for commercial
              properties that need both landscape maintenance and professional
              tree care — no subcontractors, no finger-pointing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{svc.title}</h3>
                <p className="text-[15px] text-charcoal-light leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Property Managers Choose ABC
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              Commercial properties need a landscape partner they can count on week after week. Here&apos;s why property managers across Wake County trust us with their grounds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-cream/50">
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-[15px] text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties We Serve */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Properties We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-[15px] text-charcoal font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Free Commercial Property Audit
          </h2>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;ll walk your property, photograph issues, and present a detailed improvement plan with a competitive maintenance proposal — completely free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#estimate" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-bold text-[17px] transition shadow-lg">
              Request Your Free Audit
            </a>
            <a href="tel:9196060774" className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-[17px] transition bg-transparent">
              Call (919) 606-0774
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { stat: "25+", label: "Years in Business" },
              { stat: "100%", label: "Licensed & Insured" },
              { stat: "4.9", label: "Google Rating" },
              { stat: "1", label: "Vendor for Everything" },
            ].map((item) => (
              <div key={item.label} className="p-5">
                <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-sm text-charcoal-light">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm
            service="commercial-landscape"
            propertyType="commercial"
            heading="Request a Free Commercial Property Audit"
          />
        </div>
      </section>
    </>
  );
}
