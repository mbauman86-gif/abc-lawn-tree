import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "About ABC Lawn & Tree — Family-Owned Tree Service in Willow Springs, NC",
  description:
    "Learn about ABC Lawn & Tree, a family-owned and operated tree service and landscaping company based in Willow Springs, NC. Over 25 years of experience serving Southern Wake County. Licensed, insured, and committed to quality.",
  keywords:
    "about ABC Lawn Tree Willow Springs NC, family owned tree service Wake County, licensed insured tree company NC",
};

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "Family", label: "Owned & Operated" },
  { value: "Local", label: "Willow Springs Based" },
  { value: "100%", label: "Licensed & Insured" },
];

const values = [
  {
    title: "Licensed & Insured",
    description:
      "We carry full liability insurance and workers&apos; compensation coverage on every job. Your property and our crew are always protected.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Safety First",
    description:
      "Every team member is trained in proper rigging, climbing, and equipment operation. We follow ANSI A300 standards for tree care and never cut corners.",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
  },
  {
    title: "Community Commitment",
    description:
      "We live and work in Southern Wake County. Supporting our neighbors, sponsoring local teams, and keeping our community beautiful is part of who we are.",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About ABC Lawn &amp; Tree"
        subtitle="Family-owned. Willow Springs based. Serving Southern Wake County since 1998."
      />
      <TrustBar />

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed space-y-5">
            <p>
              ABC Lawn &amp; Tree started back in 1998 with a truck, a
              chainsaw, and a simple promise: do honest work at a fair price. What
              began as a one-man tree service out of Willow Springs, NC has grown
              into a full-service tree care and landscaping company — but we&apos;ve
              never lost that small-business mindset.
            </p>
            <p>
              We&apos;re still family-owned and operated. That means when you call
              ABC Lawn &amp; Tree, you&apos;re not talking to a call center —
              you&apos;re talking to the people who actually show up and do the
              work. We take pride in every tree we trim, every stump we grind,
              and every landscape we install because our name is on the truck.
            </p>
            <p>
              Over the years, we&apos;ve expanded from tree removal and trimming
              into lawn maintenance, landscape design, hardscape construction,
              and irrigation systems. Our crew has grown, our equipment has
              gotten bigger, and our reputation has spread across Southern Wake
              County — from Fuquay-Varina and Holly Springs to Apex, Garner,
              and Angier. But the promise hasn&apos;t changed: show up on time,
              do it right, clean up when we&apos;re done, and charge a fair
              price.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-14 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/75 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <section className="py-4" />

      {/* Values & Credentials */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Choosing a tree service or landscaper is a big decision. Here&apos;s
              why Southern Wake County homeowners trust ABC Lawn &amp; Tree.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p
                  className="text-charcoal-light text-[15px] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <EstimateForm heading="Ready to Work With Us?" />
        </div>
      </section>
    </>
  );
}
