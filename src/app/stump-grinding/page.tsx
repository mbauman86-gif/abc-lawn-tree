import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Stump Grinding & Removal | Willow Springs NC | ABC Lawn & Tree",
  description:
    "Professional stump grinding and stump removal in Willow Springs, NC and Southern Wake County. Fast, affordable service with free estimates. Call (919) 606-0774.",
  keywords:
    "stump grinding Willow Springs NC, stump removal Willow Springs, stump grinding Southern Wake County, tree stump removal near me, affordable stump grinding Fuquay-Varina",
};

const faqItems = [
  {
    q: "How much does stump grinding cost in Willow Springs, NC?",
    a: "Stump grinding costs vary based on the diameter of the stump, root structure, and accessibility. Most residential stumps in the Willow Springs and Southern Wake County area range from $100 to $400 per stump. We offer free on-site estimates and bundle discounts when you have multiple stumps removed at once.",
  },
  {
    q: "How long does it take to grind a stump?",
    a: "Most individual stumps take between 30 minutes and two hours to grind, depending on size and wood hardness. Larger stumps from oaks or sweetgums may take longer. We typically complete residential jobs in a single visit so your yard is ready the same day.",
  },
  {
    q: "How deep do you grind stumps?",
    a: "We grind stumps 6 to 12 inches below ground level, which is deep enough to allow new grass, landscaping, or even construction over the area. If you need deeper grinding for a specific project, just let us know and we can accommodate your requirements.",
  },
  {
    q: "What happens to the wood chips after stump grinding?",
    a: "Stump grinding produces a pile of wood chips and mulch. We can leave the chips for you to use as garden mulch, backfill the hole and grade the area smooth, or haul the debris away entirely. Most homeowners in Willow Springs choose to have us backfill and level the spot for reseeding.",
  },
  {
    q: "Can you grind a stump near my fence, driveway, or foundation?",
    a: "Yes. Our equipment is designed to work in tight spaces close to fences, driveways, sidewalks, and foundations. We take careful precautions to protect surrounding structures and underground utilities. We always call NC811 before any job to mark utility lines.",
  },
];

export default function StumpGrindingPage() {
  return (
    <>
      <Hero
        title="Professional Stump Grinding &amp; Removal"
        subtitle="Fast, clean stump grinding for homeowners and businesses across Willow Springs, Fuquay-Varina, and Southern Wake County."
      />
      <TrustBar />

      {/* Two-Column: Content + Estimate Form */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-start">
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-10">
            {/* Why Remove Stumps */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Why Remove That Old Stump?
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Leftover tree stumps are more than an eyesore. Whether you&apos;re
                reclaiming yard space in Willow Springs or preparing a lot for new
                landscaping in Fuquay-Varina, stump removal solves several problems
                at once.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-lg p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <h3 className="font-bold text-charcoal">Pest Prevention</h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light">Decaying stumps attract termites, carpenter ants, beetles, and other wood-boring insects that can eventually spread to your home or other structures.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </span>
                    <h3 className="font-bold text-charcoal">Curb Appeal</h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light">Old stumps detract from your property&apos;s appearance and can lower home values. Removing them opens up usable space for gardens, patios, or new plantings.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M4.93 4.93l14.14 14.14" /></svg>
                    </span>
                    <h3 className="font-bold text-charcoal">Safety Hazard</h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light">Stumps are a tripping hazard for kids, guests, and anyone walking your yard. They also create obstacles for lawn mowers and can damage equipment.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </span>
                    <h3 className="font-bold text-charcoal">Unwanted Regrowth</h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light">Many tree species send up new shoots from a remaining stump, creating a cluster of weak, unsightly growth that requires repeated cutting if the stump isn&apos;t ground out.</p>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Our Stump Grinding Process
              </h2>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Free On-Site Assessment", desc: "We visit your property in Willow Springs or the surrounding Southern Wake County area, measure the stump, check for underground utilities, and provide a no-obligation quote." },
                  { step: "2", title: "Preparation & Safety Setup", desc: "Before grinding begins, we clear the area around the stump, lay down protective barriers, and ensure all underground utilities have been properly marked." },
                  { step: "3", title: "Precision Grinding", desc: "Using commercial-grade stump grinders, we reduce the stump to 6 to 12 inches below grade. Our equipment handles stumps of every size, from small ornamentals to large hardwoods." },
                  { step: "4", title: "Cleanup & Finish", desc: "We backfill the hole with fresh topsoil and wood chip mulch, grade the area smooth, and clean up all debris so your yard is ready for the next step, whether that is sod, seed, or a new landscape project." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-charcoal">{item.title}</h3>
                      <p className="text-[15px] text-charcoal-light mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bundle Pricing */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                Bundle &amp; Save on Multiple Stumps
              </h3>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Have more than one stump? We offer discounted bundle pricing when you
                schedule multiple stumps in a single visit. Pair stump grinding with a
                tree removal, lawn restoration, or hardscape project and save even
                more. Call{" "}
                <a href="tel:9196060774" className="text-primary font-bold hover:underline">
                  (919) 606-0774
                </a>{" "}
                or fill out the form to get a custom package quote for your Willow Springs property.
              </p>
            </div>
          </div>

          {/* Estimate Form Column */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8">
              <EstimateForm service="stump-grinding" heading="Get Your Stump Grinding Estimate" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Stump Grinding FAQ
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>
    </>
  );
}
