import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EstimateForm from "@/components/EstimateForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ABC Lawn & Tree — Our Family, Our Rebuild, Our Mission",
  description:
    "ABC Lawn & Tree was founded in 1998 by Colin Pemberton — a self-proclaimed Lawn Dog from a military family. Now his family is rebuilding it around a single mission: free service for veterans every week.",
  keywords:
    "ABC Lawn Tree story, family owned tree service Wake County, Colin Pemberton founder, Willow Springs NC tree service",
};

const stats = [
  { value: "1998", label: "Founded" },
  { value: "Family", label: "Owned & Run" },
  { value: "1/Week", label: "Free Vet Service" },
  { value: "Wake Co.", label: "Southern NC" },
];

const cast = [
  {
    name: "Colin Pemberton",
    role: "Founder · Owner",
    blurb:
      "Started ABC Lawn & Tree in 1998 with a truck, a mower, and a chainsaw. Self-proclaimed Lawn Dog. Comes from a military family. Said for years he wanted to do something to give back to the vets — and that wish is now ABC Salutes.",
  },
  {
    name: "CJ Pemberton",
    role: "Marketing · Colin's Son",
    blurb:
      "Took a different professional path than Dad — but came home for the rebuild. Runs the marketing and the strategic thinking that keeps every campaign tied to what the crew can actually deliver on the ground.",
  },
];

const values = [
  {
    title: "Mission First",
    description:
      "Every week, ABC takes down one dangerous tree free of charge for a Wake County veteran. Built into the business, not bolted on.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    title: "Licensed & Insured",
    description:
      "We carry full liability insurance and workers&apos; compensation coverage on every job. Your property and our crew are always protected.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Family Run",
    description:
      "ABC is owned and operated by Colin Pemberton, with his son CJ running marketing and ops. When you call ABC, you&apos;re calling the family. No call centers. No subcontracted crews.",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="A Family Business. A New Chapter."
        subtitle="ABC Lawn & Tree was founded in 1998 by Colin Pemberton — a Lawn Dog from a military family. Now we&apos;re rebuilding it around a mission he had from day one."
      />
      <TrustBar />

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="prose prose-lg max-w-none text-charcoal-light leading-relaxed space-y-5">
            <p>
              ABC Lawn &amp; Tree was started in 1998 by Colin Pemberton — a
              self-proclaimed &ldquo;Lawn Dog&rdquo; from a military family
              who&apos;d rather be cutting grass and trimming trees than punching
              a clock. He bought what he could afford, ran it till the wheels
              fell off, and built a reputation in Willow Springs the only way he
              knew how: hard work, honest pricing, and showing up.
            </p>
            <p>
              For over two decades, Colin said the same thing to anyone who&apos;d
              listen:{" "}
              <em>&ldquo;I want to do something to give back to the vets.&rdquo;</em>{" "}
              He never had the systems to make it happen. The work was steady,
              the equipment was old, and there was always one more job to get
              to.
            </p>
            <p>
              Today ABC is in a new chapter. Colin&apos;s still on the trucks
              cutting trees, and his son CJ runs the marketing — and the
              strategic thinking that keeps every campaign tied to what the
              crew can actually deliver. They&apos;ve narrowed the focus to what
              they do best: tree work across Southern Wake County. And
              they&apos;re finally building the systems to deliver on
              Colin&apos;s longtime wish.
            </p>
            <p>
              That mission is now its own program: <strong>ABC Salutes</strong>{" "}
              — every week, one Wake County veteran gets a free hazardous tree
              job. ABC Salutes is led by Colin&apos;s daughter Ashlee Bauman
              and son-in-law Michael Bauman as their passion project. ABC Lawn
              &amp; Tree provides the labor, ABC Salutes runs the program.
              Same family. Same heart. Better systems.
            </p>
            <p className="font-bold text-charcoal">
              The work is what it&apos;s always been. The mission is what we
              should&apos;ve been doing from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Family */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Meet the Family
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Four people. One family. One company.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {cast.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-bold text-charcoal mb-1">
                  {person.name}
                </h3>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  {person.role}
                </div>
                <p className="text-charcoal-light text-[14px] leading-relaxed">
                  {person.blurb}
                </p>
              </div>
            ))}
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

      {/* ABC Salutes Callout */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            ABC Salutes
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed mb-8">
            Free hazardous tree removal for Wake County veterans — every week,
            no catch. The mission Colin always wanted, finally built into the
            business.
          </p>
          <Link
            href="/veterans"
            className="inline-block bg-primary text-cream font-bold uppercase tracking-wide px-8 py-4 rounded-full hover:bg-primary-dark transition"
          >
            Learn About ABC Salutes
          </Link>
        </div>
      </section>

      {/* Values & Credentials */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Choosing a tree service or lawn-care company is a real decision.
              Here&apos;s why Wake County homeowners trust ABC Lawn &amp; Tree.
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
