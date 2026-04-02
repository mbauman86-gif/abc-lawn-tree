import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";

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
    description:
      "Safe, efficient removal of hazardous, dead, or unwanted trees from your property.",
  },
  {
    href: "/tree-trimming",
    icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z",
    title: "Tree Trimming & Pruning",
    description:
      "Expert pruning to promote health, improve shape, and reduce storm risk.",
  },
  {
    href: "/emergency-tree-service",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Emergency Tree Service",
    description:
      "24/7 response for storm damage, fallen trees, and dangerous limbs.",
  },
  {
    href: "/stump-grinding",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Stump Grinding",
    description:
      "Complete stump removal below grade so you can reclaim your yard.",
  },
  {
    href: "/lawn-and-landscape",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Lawn & Landscape",
    description:
      "Full-service lawn care, landscape design, mulching, and seasonal maintenance.",
  },
  {
    href: "/hardscape",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z",
    title: "Hardscape",
    description:
      "Patios, retaining walls, walkways, fire pits, and outdoor living spaces.",
  },
  {
    href: "/irrigation",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Irrigation",
    description:
      "Sprinkler system installation, repair, and seasonal maintenance.",
  },
];

const values = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
    title: "Family Owned",
    description: "Locally operated from Willow Springs, NC since day one.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Licensed & Insured",
    description:
      "Full liability and workers&apos; comp coverage on every job.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Tree-First Expertise",
    description:
      "ISA-informed practices that prioritize the long-term health of your trees.",
  },
  {
    icon: "M5 13l4 4L19 7",
    title: "Clean Job Sites",
    description:
      "We leave your property cleaner than we found it — every single time.",
  },
];

const reviews: { name: string; rating: number; text: string }[] = [];

const serviceAreas = [
  "Fuquay-Varina",
  "Holly Springs",
  "Apex",
  "Garner",
  "Angier",
  "Willow Springs",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Wake County&apos;s Trusted Tree & Landscape Experts"
        subtitle="Professional tree removal, trimming, lawn care, hardscaping, and irrigation for homeowners and businesses across Southern Wake County."
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Our Services
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              From towering oaks to backyard patios — we handle every aspect of
              your outdoor property.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-border rounded-xl p-8 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={s.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-primary transition">
                  {s.title}
                </h3>
                <p className="text-[15px] text-charcoal-light leading-relaxed">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Why Choose ABC Lawn &amp; Tree?
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              We treat every property like it&apos;s our own.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={v.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-1">
                  {v.title}
                </h3>
                <p className="text-[15px] text-charcoal-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10">
            Why Choose ABC Lawn &amp; Tree
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <h3 className="font-bold text-charcoal mb-2">Years of Experience</h3>
              <p className="text-[15px] text-charcoal-light leading-relaxed">
                Family-owned since 1998. We know Southern Wake County&apos;s trees, soil, and weather.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <h3 className="font-bold text-charcoal mb-2">Licensed &amp; Insured</h3>
              <p className="text-[15px] text-charcoal-light leading-relaxed">
                Full liability and workers&apos; comp coverage on every job. Your property is protected.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Free</div>
              <h3 className="font-bold text-charcoal mb-2">Estimates</h3>
              <p className="text-[15px] text-charcoal-light leading-relaxed">
                No-obligation quotes usually delivered within 24 hours. No surprises, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Proudly Serving Southern Wake County
          </h2>
          <p className="text-white/75 mb-8">
            Based in Willow Springs, NC — serving homeowners and businesses
            throughout the area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/85 mb-8 text-lg">
            Get a free, no-obligation estimate for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-white text-accent hover:bg-cream px-8 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
            >
              Request Free Estimate
            </Link>
            <a
              href="tel:9196061130"
              className="border-2 border-white/40 hover:border-white text-white px-8 py-3.5 rounded-lg font-bold text-sm transition"
            >
              Call (919) 606-1130
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
