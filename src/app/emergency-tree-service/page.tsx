import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "24/7 Emergency Tree Removal Wake County NC | ABC Lawn & Tree",
  description:
    "Emergency tree removal and storm damage cleanup in Wake County NC. 24/7 response for fallen trees, hazardous limbs, and storm damage. Fuquay-Varina, Holly Springs, Apex, Garner, Angier.",
  keywords:
    "emergency tree removal Wake County NC, storm damage tree service, fallen tree removal Fuquay-Varina, 24/7 tree service Holly Springs, emergency tree service Apex NC",
};

const situations = [
  "Tree fallen on house, garage, or other structure",
  "Tree or large limb on vehicle",
  "Tree blocking driveway, road, or access",
  "Tree on power lines or utility equipment",
  "Cracked or leaning tree threatening immediate collapse",
  "Storm-damaged trees with hanging limbs (widow-makers)",
  "Uprooted trees at risk of further falling",
  "Post-hurricane and severe storm cleanup",
];

const faqs = [
  {
    q: "How fast can you respond to a tree emergency?",
    a: "We aim to arrive within 2–4 hours for active emergencies (tree on structure, blocking access, or involving power lines). During major storm events, we triage calls by severity and work around the clock until every customer is taken care of.",
  },
  {
    q: "Do you work with insurance companies on storm damage?",
    a: "Yes. We document the damage with photos and provide detailed invoices that meet insurance requirements. We\u0027re happy to work directly with your adjuster and can provide any supplemental documentation they need.",
  },
  {
    q: "What does emergency tree removal cost?",
    a: "Emergency pricing depends on the severity, size of the tree, time of day, and complexity (e.g., tree on a structure vs. tree on the ground). We provide a clear estimate before starting work so there are no surprises. Most homeowner\u0027s insurance policies cover storm damage removal.",
  },
  {
    q: "Is it safe to try to remove a fallen tree myself?",
    a: "We strongly advise against it. Fallen trees often have stored tension that can cause unpredictable movement when cut. Trees near power lines are especially dangerous — downed lines can be energized and invisible in debris. Call a professional.",
  },
  {
    q: "Do you handle the full cleanup after emergency removal?",
    a: "Absolutely. Our emergency service includes removing the tree, clearing all debris, and making the area safe. If structural tarping or board-up is needed, we can coordinate with local contractors to protect your home until permanent repairs are made.",
  },
];

export default function EmergencyTreeServicePage() {
  return (
    <>
      <Hero
        emergency
        title="24/7 Emergency Tree Service"
        subtitle="Fallen tree? Storm damage? Dangerous limb? Our crew is ready to respond across Southern Wake County — day or night."
      />
      <TrustBar />

      {/* Emergency Banner */}
      <section className="py-12 bg-emergency">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
            TREE EMERGENCY? CALL NOW.
          </h2>
          <p className="text-white/85 mb-6 text-lg">
            We respond 24 hours a day, 7 days a week, including holidays.
          </p>
          <a
            href="tel:9196060774"
            className="inline-block text-4xl md:text-6xl font-extrabold text-white hover:text-white/75 transition"
          >
            (919) 606-0774
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* What We Handle */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">
                  What We Handle
                </h2>
                <p className="text-charcoal-light leading-relaxed mb-6">
                  When a tree comes down unexpectedly, your safety is the
                  priority. ABC Lawn &amp; Tree provides fast, professional
                  emergency response for any tree-related crisis across
                  Fuquay-Varina, Holly Springs, Apex, Garner, Angier, and Willow
                  Springs.
                </p>
                <ul className="space-y-3">
                  {situations.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-emergency flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      <span className="text-[15px] text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fast Response */}
              <div className="bg-cream rounded-xl p-8">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Fast Response When It Matters Most
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Our emergency crews are equipped and ready to mobilize at a
                  moment&apos;s notice. We carry chainsaws, rigging equipment,
                  chippers, and crane access for complex removals — so there&apos;s
                  no waiting for additional gear.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  During major storms, we prioritize life-safety situations
                  first: trees on occupied structures, blocked emergency access,
                  and downed power lines. We then work through non-emergency
                  calls as quickly as possible.
                </p>
              </div>

              {/* Insurance Support */}
              <div className="border-2 border-primary/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Insurance Claims Support
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Dealing with insurance after storm damage is stressful. We
                  make it easier by providing:
                </p>
                <ul className="space-y-2">
                  {[
                    "Detailed photo documentation of all damage",
                    "Itemized invoices that meet adjuster requirements",
                    "Direct communication with your insurance company",
                    "Written reports on cause and scope of damage",
                  ].map((item) => (
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
            </div>

            {/* Right — Estimate Form */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-8 space-y-6">
                {/* Urgent Call Box */}
                <div className="bg-emergency rounded-xl p-6 text-center">
                  <p className="text-white/85 text-sm font-medium mb-1">
                    For fastest response, call us directly:
                  </p>
                  <a
                    href="tel:9196060774"
                    className="text-2xl font-extrabold text-white hover:text-white/75 transition"
                  >
                    (919) 606-0774
                  </a>
                </div>
                <EstimateForm
                  service="emergency"
                  heading="Request Emergency Service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10">
            Emergency Tree Service FAQ
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Bottom Emergency CTA */}
      <section className="py-12 bg-emergency">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don&apos;t Wait — Call Now for Emergency Tree Service
          </h2>
          <a
            href="tel:9196060774"
            className="inline-block bg-white text-emergency hover:bg-emergency-light px-10 py-4 rounded-lg font-extrabold text-lg transition shadow-lg"
          >
            (919) 606-0774
          </a>
        </div>
      </section>
    </>
  );
}
