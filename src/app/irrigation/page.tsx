import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Irrigation Installation & Maintenance | Southern Wake County NC | ABC Lawn & Tree",
  description:
    "Irrigation system installation, repair, winterization, and spring startup in Southern Wake County, NC. Serving Willow Springs, Fuquay-Varina, Apex, and Holly Springs. Free estimates. Call (919) 606-1130.",
  keywords:
    "irrigation installation Southern Wake County NC, sprinkler system repair Willow Springs, irrigation winterization Fuquay-Varina, lawn sprinkler Apex NC, irrigation maintenance Wake County",
};

const services = [
  {
    title: "New System Installation",
    description:
      "Complete irrigation system design and installation tailored to your property&apos;s layout, soil type, and plant material. We use high-efficiency rotary nozzles, drip zones for beds, and smart controllers that adjust watering based on weather data, saving you water and money from day one.",
    features: [
      "Custom zone layout for turf, beds, and trees",
      "Smart Wi-Fi controllers with rain sensor integration",
      "High-efficiency rotary and drip heads",
      "Proper backflow prevention per NC code",
    ],
  },
  {
    title: "Repair & Maintenance",
    description:
      "Broken heads, leaking valves, controller malfunctions, and uneven coverage are common issues across Southern Wake County properties. Our technicians diagnose problems quickly and carry the most common parts on our trucks so most repairs are completed in a single visit.",
    features: [
      "Head and nozzle replacement",
      "Valve and solenoid repair",
      "Controller reprogramming and upgrades",
      "Leak detection and pipe repair",
    ],
  },
  {
    title: "Winterization",
    description:
      "Protect your investment before the first freeze. Our winterization service uses compressed air to blow out every zone, ensuring no water is left in the lines to freeze, expand, and crack pipes or fittings. We recommend scheduling winterization by mid-November for properties in Willow Springs and the surrounding area.",
    features: [
      "Complete compressed-air blowout of all zones",
      "Controller shutdown and backup",
      "Backflow preventer protection",
      "Main shutoff valve inspection",
    ],
  },
  {
    title: "Spring Startup",
    description:
      "When temperatures warm up in March and April, we bring your system back online safely. Spring startup includes a full inspection of every zone, head adjustment, leak check, and controller reprogramming to match the new season&apos;s watering schedule.",
    features: [
      "Gradual pressurization to prevent shock",
      "Zone-by-zone head inspection and adjustment",
      "Leak and coverage check",
      "Seasonal programming of controller schedule",
    ],
  },
];

export default function IrrigationPage() {
  return (
    <>
      <Hero
        title="Irrigation Installation &amp; Maintenance"
        subtitle="Professional sprinkler system installation, repair, winterization, and spring startup serving Willow Springs, Fuquay-Varina, Apex, and all of Southern Wake County."
        backgroundImage="/images/irrigation.jpg"
      />
      <TrustBar />

      {/* Services Detail */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Irrigation Services for Every Season
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              A well-designed irrigation system keeps your lawn green while conserving water.
              ABC Lawn &amp; Tree handles everything from new installations to seasonal
              maintenance so your system runs efficiently year-round.
            </p>
          </div>

          <div className="space-y-10">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`bg-white rounded-xl border border-border shadow-sm overflow-hidden ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex`}
              >
                {/* Icon / Visual Side */}
                <div className="lg:w-1/3 bg-primary/5 flex items-center justify-center p-10">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a7.065 7.065 0 010-10l.354-.354a.75.75 0 011.06 0l5.1 5.1m-5.1 5.1l5.1 5.1m-5.1-5.1h10.24m0 0l5.1-5.1a7.065 7.065 0 000-10l-.354-.354a.75.75 0 00-1.06 0l-5.1 5.1" />}
                      {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M21.08 7.76l-9.9 9.9m0 0l-3.54-3.54m3.54 3.54l-7.07 7.07M3.34 17.42l3.54-3.54" />}
                      {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />}
                      {idx === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />}
                    </svg>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-3">{svc.title}</h3>
                  <p className="text-charcoal-light text-[15px] leading-relaxed mb-4">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[15px] text-charcoal-light">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Service Messaging */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Year-Round Irrigation Care in Southern Wake County
          </h2>
          <p className="text-white/75 max-w-3xl mx-auto leading-relaxed mb-10">
            North Carolina&apos;s climate demands different things from your irrigation system
            in every season. Our seasonal service calendar keeps your system protected,
            efficient, and ready to perform when your lawn needs it most.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <div className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Spring</div>
              <h3 className="font-bold text-white mb-1">System Startup</h3>
              <p className="text-white/75 text-sm">March &ndash; April. Reactivate zones, inspect heads, reprogram controller for warm-season watering.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <div className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Summer</div>
              <h3 className="font-bold text-white mb-1">Peak Performance</h3>
              <p className="text-white/75 text-sm">May &ndash; September. Monitor coverage, adjust run times for heat, repair any damage from mowing or foot traffic.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <div className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Fall</div>
              <h3 className="font-bold text-white mb-1">Wind Down</h3>
              <p className="text-white/75 text-sm">October &ndash; November. Reduce watering frequency, check rain sensors, prepare for winterization scheduling.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
              <div className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Winter</div>
              <h3 className="font-bold text-white mb-1">Winterization</h3>
              <p className="text-white/75 text-sm">November &ndash; February. Full blowout, backflow protection, controller shutdown to prevent freeze damage.</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#estimate"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
            >
              Schedule Seasonal Service
            </a>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm service="irrigation" heading="Request Your Irrigation Estimate" />
        </div>
      </section>
    </>
  );
}
