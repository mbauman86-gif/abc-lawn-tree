import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GHLForm from "@/components/GHLForm";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimate for Tree Service & Landscaping | ABC Lawn & Tree",
  description:
    "Get a free estimate for tree removal, tree trimming, landscaping, and hardscape services in Wake County, NC. Call (919) 606-0774 or fill out our online form. ABC Lawn & Tree — Willow Springs, NC.",
  keywords:
    "free estimate tree service landscaping Wake County NC, contact ABC Lawn Tree, tree removal quote Fuquay-Varina Holly Springs",
};

const serviceAreas = [
  "Willow Springs",
  "Fuquay-Varina",
  "Holly Springs",
  "Apex",
  "Garner",
  "Angier",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us — Get Your Free Estimate"
        subtitle="Fill out the form below or give us a call. Most estimates are delivered within 24 hours."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Contact Form (Go High Level) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h2 className="text-xl font-bold text-charcoal mb-4">Request a Free Estimate</h2>
                <GHLForm
                  formId="1YzGKCWn59XKN6XL3lR8"
                  height={706}
                />
              </div>
            </div>

            {/* Right: Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  Call Us
                </h3>
                <a
                  href="tel:9196060774"
                  className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-charcoal hover:text-primary transition"
                >
                  <svg
                    className="w-7 h-7 text-accent flex-shrink-0"
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

              {/* Address */}
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  Location
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-charcoal">
                      ABC Lawn &amp; Tree, Inc.
                    </p>
                    <p className="text-charcoal-light text-[15px]">
                      Willow Springs, NC 27592
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Monday – Friday</span>
                    <span className="font-semibold text-charcoal">
                      7:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Saturday</span>
                    <span className="font-semibold text-charcoal">
                      8:00 AM – 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-light">Sunday</span>
                    <span className="font-semibold text-charcoal">Closed</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-charcoal-light">Emergency Service</span>
                    <span className="font-bold text-accent">24/7</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  Service Area
                </h3>
                <p className="text-charcoal-light text-[15px] mb-3">
                  Proudly serving Southern Wake County:
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-1.5 text-[15px] text-charcoal-light"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-accent flex-shrink-0"
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
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Callout */}
              <div className="bg-emergency-light border-2 border-emergency/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emergency/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-emergency"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-emergency mb-1">
                      Emergency Tree Service
                    </h3>
                    <p className="text-charcoal text-[15px] mb-3">
                      Tree on your house? Blocking your driveway? We offer 24/7
                      emergency response across Southern Wake County.
                    </p>
                    <a
                      href="tel:9196060774"
                      className="inline-flex items-center gap-2 bg-emergency hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition"
                    >
                      <svg
                        className="w-4 h-4"
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
                      Call Now — 24/7
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
