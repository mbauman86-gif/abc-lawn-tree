import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Service Areas — Tree Service & Landscaping in Southern Wake County | ABC Lawn & Tree",
  description:
    "ABC Lawn & Tree serves Southern Wake County including Fuquay-Varina, Holly Springs, Apex, Garner, Angier, and Willow Springs. Licensed tree service, landscaping, hardscape, and lawn care. Call (919) 606-0774 for a free estimate.",
  keywords:
    "tree service Southern Wake County, landscaping Fuquay-Varina Holly Springs Apex, tree removal Garner NC, lawn care Angier NC, tree trimming Willow Springs NC",
};

const cities = [
  {
    name: "Willow Springs",
    slug: "willow-springs",
    homeBase: true,
    description:
      "Willow Springs is where ABC Lawn & Tree started and where we still call home. As your neighbors, we understand the unique landscape of this growing community — from established lots along Kennebec Road to newer developments near Willow Spring High School. Whether you need a dangerous pine removed after a storm or a complete landscape renovation, our crew is often just minutes away.",
    services: [
      "Tree Removal & Emergency Service",
      "Tree Trimming & Pruning",
      "Stump Grinding",
      "Lawn Maintenance & Fertilization",
      "Landscape Design & Installation",
      "Hardscape & Patio Construction",
      "Irrigation System Installation",
    ],
  },
  {
    name: "Fuquay-Varina",
    slug: "fuquay-varina",
    homeBase: false,
    description:
      "From the historic downtown district to fast-growing neighborhoods like Bentwinds and South Lakes, Fuquay-Varina homeowners count on ABC Lawn & Tree for professional tree and landscape services. We handle everything from clearing overgrown lots for new construction to keeping established properties along Main Street looking their best. Our team knows the local soil conditions and which species thrive here.",
    services: [
      "Tree Removal & Hazard Assessment",
      "Tree Trimming & Crown Reduction",
      "Stump Grinding & Lot Clearing",
      "Full-Service Lawn Care",
      "Landscape Design & Planting",
      "Retaining Walls & Patios",
    ],
  },
  {
    name: "Holly Springs",
    slug: "holly-springs",
    homeBase: false,
    description:
      "Holly Springs has seen tremendous growth, and ABC Lawn & Tree has been right there helping homeowners protect and improve their properties. Whether you live near Bass Lake, in the Sunset Ridge neighborhood, or along Holly Springs Road, we provide reliable tree care and landscaping services. Our crews regularly work around Holly Springs&apos; newer subdivisions where young trees need proper shaping and established oaks need expert pruning.",
    services: [
      "Tree Removal & Risk Assessment",
      "Canopy Pruning & Shaping",
      "Stump Grinding",
      "Lawn Installation & Maintenance",
      "Landscape Renovation",
      "Hardscape & Outdoor Living Spaces",
    ],
  },
  {
    name: "Apex",
    slug: "apex",
    homeBase: false,
    description:
      "Known as the Peak of Good Living, Apex deserves a landscape to match. ABC Lawn & Tree serves neighborhoods from historic downtown Apex to Beaver Creek, Scotts Mill, and Bella Casa. We understand that mature trees in older Apex neighborhoods require careful, skilled pruning, while newer developments need thoughtful landscape design that will look great for decades to come.",
    services: [
      "Large Tree Removal",
      "Precision Pruning & Deadwooding",
      "Stump Grinding & Root Management",
      "Premium Lawn Programs",
      "Custom Landscape Design",
      "Stone Patios & Walkways",
    ],
  },
  {
    name: "Garner",
    slug: "garner",
    homeBase: false,
    description:
      "ABC Lawn & Tree proudly serves Garner residents from White Oak to Timber Drive and everywhere in between. Many Garner properties have large, mature hardwoods that need regular maintenance to stay healthy and safe. Our certified team handles complex removals near homes and power lines, and we offer complete landscape services to transform your outdoor space into something your family will love.",
    services: [
      "Dangerous Tree Removal",
      "Tree Trimming & Health Assessments",
      "Stump Grinding",
      "Lawn Renovation & Seeding",
      "Shrub & Bed Maintenance",
      "Drainage Solutions & Grading",
    ],
  },
  {
    name: "Angier",
    slug: "angier",
    homeBase: false,
    description:
      "Serving the Angier community with the same dedication we bring to every job. From rural properties along NC-210 to homes in town near Angier Elementary, ABC Lawn & Tree provides dependable tree removal, trimming, and landscape services. We understand the larger lot sizes common in Angier and have the heavy equipment needed to handle big jobs efficiently and safely.",
    services: [
      "Tree Removal (Including Large Pines & Oaks)",
      "Land & Lot Clearing",
      "Tree Trimming & Storm Prep",
      "Stump Grinding",
      "Lawn Care & Landscape Maintenance",
      "Gravel Driveways & Hardscape",
    ],
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        title="Serving Southern Wake County"
        subtitle="Trusted tree service and landscaping across Fuquay-Varina, Holly Springs, Apex, Garner, Angier, and our home base of Willow Springs."
      />
      <TrustBar />

      {/* City Sections */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Communities We Serve
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Based in Willow Springs, NC, ABC Lawn &amp; Tree provides
              professional tree removal, trimming, landscaping, and hardscape
              services throughout Southern Wake County.
            </p>
          </div>

          <div className="space-y-12">
            {cities.map((city) => (
              <div
                key={city.slug}
                id={city.slug}
                className="bg-white rounded-xl border border-border shadow-sm p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                    {city.name}
                    {city.homeBase && (
                      <span className="ml-3 inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full align-middle">
                        Home Base
                      </span>
                    )}
                  </h2>
                </div>
                <p className="text-charcoal-light text-[15px] leading-relaxed mb-6">
                  {city.description}
                </p>
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                    Services Available in {city.name}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {city.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-charcoal-light text-[15px]"
                      >
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103985.77684498498!2d-78.7836!3d35.5551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8b32e5b2b0a7%3A0x2b0e7b5e2e7b5e2e!2sWillow%20Springs%2C%20NC!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            className="w-full h-80 rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ABC Lawn & Tree Service Area — Southern Wake County, NC"
          />
        </div>
      </section>

      {/* Don't See Your Area? */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-6">
              We may still be able to help. ABC Lawn &amp; Tree occasionally
              takes on projects outside our core service area in Southern Wake
              County. Give us a call and let&apos;s talk about your project.
            </p>
            <a
              href="tel:9196060774"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (919) 606-0774
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm heading="Request a Free Estimate in Your Area" />
        </div>
      </section>
    </>
  );
}
