import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Hardscape & Outdoor Living | Patio Pavers Apex NC | ABC Lawn & Tree",
  description:
    "Expert hardscape installation in Apex, Willow Springs, and Southern Wake County, NC. Patio pavers, retaining walls, walkways, fire pits, outdoor kitchens, and drainage solutions. Free estimates.",
  keywords:
    "hardscape patio pavers Apex NC, retaining walls Southern Wake County, outdoor kitchen Fuquay-Varina, walkway installation Willow Springs, fire pit builder Wake County NC",
};

const services = [
  {
    title: "Patio Pavers",
    description:
      "Custom-designed paver patios that extend your living space outdoors. We work with natural stone, brick, and interlocking concrete pavers to match your home&apos;s style and your vision for the space.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Retaining Walls",
    description:
      "Functional and attractive retaining walls that manage slopes, prevent erosion, and create level areas for landscaping or outdoor living. Engineered for the clay-heavy soils common across Wake County.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.43 9.75m11.14 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5 2.25 17.25l4.179-2.25" />
      </svg>
    ),
  },
  {
    title: "Walkways & Pathways",
    description:
      "Elegant walkways connecting your driveway, front entry, garden, and outdoor living areas. We design paths that complement your landscape while providing safe, slip-resistant footing year-round.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    ),
  },
  {
    title: "Fire Pits & Fireplaces",
    description:
      "Custom-built stone and paver fire pits that become the centerpiece of your backyard. From simple ring designs to full outdoor fireplace structures, we build features your family will gather around for years.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 11.5a3.25 3.25 0 006.5 0c0-1.532-.458-2.957-1.138-4.286z" />
      </svg>
    ),
  },
  {
    title: "Outdoor Kitchens",
    description:
      "Fully equipped outdoor kitchens with built-in grills, countertops, storage, and seating. Perfect for entertaining in the mild Southern Wake County climate from spring through fall.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M16.5 3.75V16.5" />
      </svg>
    ),
  },
  {
    title: "Drainage Solutions",
    description:
      "French drains, channel drains, dry creek beds, and grading corrections that protect your property from water damage. Essential for many Apex and Willow Springs properties with heavy clay soils.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
  },
];

const galleryItems: string[] = [];

export default function HardscapePage() {
  return (
    <>
      <Hero
        title="Hardscape &amp; Outdoor Living"
        subtitle="Patio pavers, retaining walls, fire pits, outdoor kitchens, and more for homes across Apex, Willow Springs, and Southern Wake County."
        backgroundImage="/images/hardscape.jpg"
      />
      <TrustBar />

      {/* Services Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Hardscape Services We Offer
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              ABC Lawn &amp; Tree designs and builds hardscape features that add lasting value
              to your property. Every project is engineered for the specific soil and
              drainage conditions found across Southern Wake County.
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

      {/* Why Choose Us for Hardscape */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Why Homeowners in Apex &amp; Wake County Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { stat: "25+", label: "Years of Experience" },
              { stat: "100%", label: "Licensed & Insured" },
              { stat: "Free", label: "Design Consultations" },
              { stat: "Local", label: "Willow Springs Based" },
            ].map((item) => (
              <div key={item.label} className="p-5">
                <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-sm text-charcoal-light">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Our Work CTA */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Want to See Our Work?
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            We&apos;d love to show you examples of patios, retaining walls, fire pits, and
            walkways we&apos;ve built across Southern Wake County. Give us a call or request
            an estimate and we&apos;ll share photos of projects similar to yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
            >
              Request an Estimate
            </a>
            <a
              href="tel:9196061130"
              className="border-2 border-primary/20 hover:border-primary/40 text-primary px-7 py-3.5 rounded-lg font-bold text-sm transition"
            >
              Call (919) 606-1130
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm service="hardscape" heading="Start Your Hardscape Project" />
        </div>
      </section>
    </>
  );
}
