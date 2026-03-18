import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Tree Removal Fuquay-Varina & Southern Wake County NC | ABC Lawn & Tree",
  description:
    "Professional tree removal in Fuquay-Varina, Holly Springs, Apex & Southern Wake County NC. Licensed, insured, free estimates. Safe removal of hazardous, dead, and unwanted trees.",
  keywords:
    "tree removal Fuquay-Varina NC, tree removal Southern Wake County, tree cutting service Holly Springs, hazardous tree removal Apex NC, tree removal cost Wake County",
};

const included = [
  "Full hazard assessment and planning",
  "Sectional dismantling or straight felling as conditions allow",
  "All debris hauled away and site cleaned",
  "Stump grinding available as add-on",
  "Crane-assisted removal for complex jobs",
  "Wood chip or log disposal included",
];

const steps = [
  {
    num: "1",
    title: "Free On-Site Estimate",
    description:
      "We visit your property, assess the tree, and provide a detailed written quote — usually within 24 hours.",
  },
  {
    num: "2",
    title: "Scheduled Removal",
    description:
      "Our crew arrives on the agreed date with all equipment. We section the tree safely, protect surrounding structures, and remove all debris.",
  },
  {
    num: "3",
    title: "Clean & Complete",
    description:
      "We rake, blow, and haul everything away. Optional stump grinding leaves your yard ready for whatever comes next.",
  },
];

const faqs = [
  {
    q: "How much does tree removal cost in Southern Wake County?",
    a: "Tree removal typically ranges from $500 to $5,000+ depending on size, location, complexity, and access. Small trees (under 30 ft) start around $300–$800, while large hardwoods near structures can run $2,000–$5,000+. We provide free on-site estimates so you know exactly what to expect.",
  },
  {
    q: "How long does a tree removal take?",
    a: "Most residential tree removals are completed in a single day — often in just a few hours. Very large or complex removals involving cranes or tight spaces may take a full day. We\u0027ll give you a clear timeline with your estimate.",
  },
  {
    q: "Do I need a permit to remove a tree in Wake County?",
    a: "In most cases, residential tree removal on private property does not require a permit in unincorporated Wake County. However, some municipalities like Holly Springs and Apex have tree preservation ordinances. We can advise you on local requirements during your estimate.",
  },
  {
    q: "Is ABC Lawn & Tree insured for tree removal?",
    a: "Yes. We carry full general liability insurance and workers\u0027 compensation coverage. We\u0027re happy to provide a certificate of insurance before any work begins.",
  },
  {
    q: "Do you clean up after tree removal?",
    a: "Absolutely. Our price includes complete cleanup — all branches, trunk sections, and debris are hauled away. We rake and blow the area so your property looks better than before we arrived.",
  },
];

export default function TreeRemovalPage() {
  return (
    <>
      <Hero
        title="Professional Tree Removal in Southern Wake County"
        subtitle="Safe, efficient tree removal for residential and commercial properties in Fuquay-Varina, Holly Springs, Apex, Garner, and Angier."
      />
      <TrustBar />

      {/* Main Content + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">
                  Trusted Tree Removal You Can Count On
                </h2>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Whether it&apos;s a dead oak threatening your roof, a leaning
                  pine too close to the power lines, or simply a tree that&apos;s
                  outgrown its space — ABC Lawn &amp; Tree handles it safely and
                  professionally. Our experienced crew uses the right equipment
                  for every job, from compact residential lots to large
                  commercial properties.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  As a family-owned company based in Willow Springs, we
                  understand Southern Wake County&apos;s soil, tree species, and
                  storm patterns. That local knowledge means better assessments,
                  safer cuts, and cleaner results.
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[15px] text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3-Step Process */}
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-6">
                  Our 3-Step Process
                </h3>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {step.num}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[15px] text-charcoal-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Estimate Form */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-8">
                <EstimateForm
                  service="tree-removal"
                  heading="Get a Free Tree Removal Estimate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="py-10 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-2 border-emergency bg-emergency-light rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-emergency mb-2">
              Need Emergency Tree Removal?
            </h3>
            <p className="text-charcoal-light mb-4">
              Fallen tree on your house, car, or power line? We offer 24/7
              emergency response across Southern Wake County.
            </p>
            <a
              href="tel:9196060774"
              className="inline-block bg-emergency hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm transition shadow-md"
            >
              Call Now: (919) 606-0774
            </a>
          </div>
        </div>
      </section>

      {/* Before / After Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Before &amp; After
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="space-y-3">
              <div>
                <img src="https://images.unsplash.com/photo-1645430786171-362e053dcf6f?w=600&h=450&fit=crop" alt="Before — Project 1" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-charcoal-light mt-1 text-center">Before</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1626788570296-a6565dbf19b4?w=600&h=450&fit=crop" alt="After — Project 1" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-primary mt-1 text-center">After</p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="space-y-3">
              <div>
                <img src="https://images.unsplash.com/photo-1591497108596-436c1a1a5c8e?w=600&h=450&fit=crop" alt="Before — Project 2" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-charcoal-light mt-1 text-center">Before</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1589321084815-4e5f1740cbc6?w=600&h=450&fit=crop" alt="After — Project 2" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-primary mt-1 text-center">After</p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="space-y-3">
              <div>
                <img src="https://images.unsplash.com/photo-1487873606941-29660d418953?w=600&h=450&fit=crop" alt="Before — Project 3" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-charcoal-light mt-1 text-center">Before</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1626788570296-a6565dbf19b4?w=600&h=450&fit=crop" alt="After — Project 3" className="aspect-[4/3] rounded-lg object-cover w-full" loading="lazy" />
                <p className="text-xs text-primary mt-1 text-center">After</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Tree Removal FAQ
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
