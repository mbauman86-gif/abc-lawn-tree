import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping | Fuquay-Varina NC | ABC Lawn & Tree",
  description:
    "Full-service lawn care and landscaping in Fuquay-Varina, Willow Springs, and Southern Wake County, NC. Mowing, flower beds, fertilization, aeration, garden ponds, and seasonal cleanup. Free estimates.",
  keywords:
    "lawn care landscaping Fuquay-Varina NC, lawn maintenance Willow Springs, landscaping Southern Wake County, flower bed installation, fertilization weed control Wake County",
};

const services = [
  {
    title: "Lawn Maintenance",
    description:
      "Weekly and bi-weekly mowing, edging, and blowing for a clean, professional look all season. We keep your Fuquay-Varina or Willow Springs lawn at the ideal height for your turf type.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Flower Beds & Planting",
    description:
      "Custom flower bed design, mulching, shrub installation, and seasonal color rotations that enhance your home&apos;s curb appeal year-round throughout Southern Wake County.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Fertilization & Weed Control",
    description:
      "Science-based fertilization programs and targeted weed control treatments tailored to North Carolina soil conditions. We test, plan, and apply on a schedule that maximizes results.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.41a2.25 2.25 0 01-2.133 1.59H8.603a2.25 2.25 0 01-2.134-1.59L5 14.5m14 0H5" />
      </svg>
    ),
  },
  {
    title: "Aeration & Overseeding",
    description:
      "Core aeration breaks up compacted soil so water, air, and nutrients reach the root zone. Paired with premium overseeding, it&apos;s the fastest way to thicken a thin Wake County lawn.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    ),
  },
  {
    title: "Garden Ponds",
    description:
      "Design and installation of garden ponds, water features, and koi ponds that bring tranquility and wildlife to your backyard. Full maintenance plans available for homeowners across the area.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    title: "Seasonal Cleanup",
    description:
      "Spring and fall cleanups including leaf removal, bed edging, debris hauling, and pre-season prep. We get your property in Willow Springs or Holly Springs looking sharp before every season change.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
];

export default function LawnAndLandscapePage() {
  return (
    <>
      <Hero
        title="Complete Lawn Care &amp; Landscaping"
        subtitle="Full-service lawn maintenance, landscape design, and outdoor beautification for homes and businesses in Fuquay-Varina, Willow Springs, and Southern Wake County."
      />
      <TrustBar />

      {/* Sub-Service Cards Grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Lawn &amp; Landscape Services
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              From routine mowing to complete landscape transformations, ABC Lawn &amp; Tree
              delivers dependable results across Southern Wake County. Every service is
              backed by our satisfaction guarantee.
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

      {/* Recurring Maintenance Plans Callout */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Recurring Maintenance Plans
          </h2>
          <p className="text-white/75 max-w-3xl mx-auto leading-relaxed mb-6">
            Lock in a year-round lawn care plan and never worry about scheduling again.
            Our maintenance agreements include regular mowing, fertilization, weed control,
            and seasonal cleanups, all at a predictable monthly rate. Homeowners in
            Fuquay-Varina, Willow Springs, Holly Springs, and Apex save an average of 15%
            compared to one-time service pricing.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <h3 className="font-bold text-white mb-1">Weekly Plan</h3>
              <p className="text-white/75 text-[15px]">Mowing, edging, blowing, and spot weed treatment every week during the growing season. Ideal for properties that need to stay pristine.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <h3 className="font-bold text-white mb-1">Bi-Weekly Plan</h3>
              <p className="text-white/75 text-[15px]">All core lawn maintenance on a two-week rotation. A great balance of cost and curb appeal for most Southern Wake County homeowners.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <h3 className="font-bold text-white mb-1">Full-Service Annual</h3>
              <p className="text-white/75 text-[15px]">Everything included: mowing, fertilization, aeration, overseeding, flower bed maintenance, and seasonal cleanups. One price, zero hassle.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#estimate"
              className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
            >
              Get a Maintenance Quote
            </a>
            <a
              href="tel:9196061130"
              className="border-2 border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-lg font-bold text-sm transition"
            >
              Call (919) 606-1130
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm service="lawn-landscape" heading="Request Your Lawn & Landscape Estimate" />
        </div>
      </section>
    </>
  );
}
