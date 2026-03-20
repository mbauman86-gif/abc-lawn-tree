import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Tree Trimming & Pruning Holly Springs & Southern Wake County NC | ABC Lawn & Tree",
  description:
    "Expert tree trimming and pruning in Holly Springs, Fuquay-Varina, Apex & Southern Wake County NC. Crown thinning, deadwood removal, storm prep. Licensed & insured. Free estimates.",
  keywords:
    "tree trimming Holly Springs NC, tree pruning Southern Wake County, crown thinning Apex NC, deadwood removal Fuquay-Varina, tree trimming cost Wake County",
};

const services = [
  {
    title: "Crown Thinning",
    description:
      "Selectively remove interior branches to improve light penetration and airflow, reducing disease risk and wind resistance.",
  },
  {
    title: "Deadwood Removal",
    description:
      "Eliminate dead, dying, and diseased branches before they fall — protecting your family, roof, and vehicles.",
  },
  {
    title: "Crown Raising",
    description:
      "Remove lower branches to increase clearance for walkways, driveways, structures, and lawn maintenance equipment.",
  },
  {
    title: "Shape Pruning",
    description:
      "Restore balanced, natural form to overgrown or lopsided trees to improve curb appeal and structural integrity.",
  },
  {
    title: "Vista Pruning",
    description:
      "Strategically thin or frame branches to open up desirable views without removing the entire tree.",
  },
  {
    title: "Storm Prep Pruning",
    description:
      "Reduce sail area and remove weak attachments to minimize damage from hurricanes and severe thunderstorms common in Wake County.",
  },
];

const steps = [
  {
    num: "1",
    title: "Arborist Assessment",
    description:
      "We evaluate tree health, structure, and your goals to build a tailored pruning plan.",
  },
  {
    num: "2",
    title: "Precision Pruning",
    description:
      "Our crew makes clean, proper cuts using ISA-informed techniques that promote healing and healthy regrowth.",
  },
  {
    num: "3",
    title: "Cleanup & Review",
    description:
      "All debris is removed and we walk the property with you to ensure you&apos;re completely satisfied.",
  },
];

const faqs = [
  {
    q: "How much does tree trimming cost in the Holly Springs area?",
    a: "Most residential tree trimming jobs range from $250 to $1,500 per tree depending on size, species, access, and the scope of work. We provide free on-site estimates with transparent pricing — no surprises.",
  },
  {
    q: "When is the best time to trim trees in North Carolina?",
    a: "Late winter (January–March) is ideal for most species because trees are dormant and branch structure is clearly visible. However, deadwood removal and hazard pruning can be done year-round. We\u0027ll recommend the best timing for your specific trees.",
  },
  {
    q: "How often should trees be trimmed?",
    a: "Most shade and ornamental trees benefit from trimming every 3–5 years. Fast-growing species or trees near structures may need attention every 2–3 years. We can set up a maintenance schedule tailored to your property.",
  },
  {
    q: "Will trimming hurt my tree?",
    a: "Proper pruning actually improves tree health by removing diseased wood, improving airflow, and reducing weight on weak branches. We follow ISA best practices and never remove more than 25% of live canopy in a single session.",
  },
  {
    q: "Do you trim trees near power lines?",
    a: "We handle trimming near secondary service lines on your property. For trees touching primary utility lines, we\u0027ll coordinate with Duke Energy or the appropriate utility provider to ensure safe, compliant work.",
  },
];

export default function TreeTrimmingPage() {
  return (
    <>
      <Hero
        title="Expert Tree Trimming & Pruning"
        subtitle="ISA-informed pruning that promotes tree health, improves safety, and enhances your property&apos;s curb appeal across Southern Wake County."
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
                  Keep Your Trees Healthy, Safe &amp; Beautiful
                </h2>
                <p className="text-charcoal-light text-[15px] leading-relaxed mb-4">
                  Regular pruning is the single best investment you can make in
                  your trees. It prevents storm damage, removes hazards, fights
                  disease, and keeps your property looking its best.
                </p>
                <p className="text-charcoal-light text-[15px] leading-relaxed">
                  ABC Lawn &amp; Tree brings over a decade of experience trimming
                  and pruning trees across Holly Springs, Fuquay-Varina, Apex,
                  Garner, and Angier. We use proper techniques — no topping, no
                  lion-tailing, no shortcuts — because healthy cuts mean healthy
                  trees.
                </p>
              </div>

              {/* Trimming Services */}
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-6">
                  Our Trimming &amp; Pruning Services
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="border border-border rounded-lg p-4"
                    >
                      <h4 className="font-bold text-charcoal mb-1">
                        {s.title}
                      </h4>
                      <p className="text-[13px] text-charcoal-light leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
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
                  service="tree-trimming"
                  heading="Get a Free Trimming Estimate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See Our Work CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Want to See Our Work?
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-6">
            We&apos;d love to show you examples of completed trimming and pruning jobs in your area.
            Give us a call or request an estimate and we&apos;ll share photos of similar projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
            >
              Request an Estimate
            </a>
            <a
              href="tel:9196060774"
              className="border-2 border-primary/20 hover:border-primary/40 text-primary px-7 py-3.5 rounded-lg font-bold text-sm transition"
            >
              Call (919) 606-0774
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Tree Trimming FAQ
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Schedule Your Tree Trimming?
          </h2>
          <p className="text-white/85 mb-6">
            Most estimates delivered within 24 hours.
          </p>
          <a
            href="tel:9196060774"
            className="inline-block bg-white text-accent hover:bg-cream px-8 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
          >
            Call (919) 606-0774
          </a>
        </div>
      </section>
    </>
  );
}
