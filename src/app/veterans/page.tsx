import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "ABC Salutes — Free Tree Service for Wake County Veterans",
  description:
    "ABC Lawn & Tree provides free hazard tree removal and tree service for U.S. military veterans in Wake County, NC. Nominate a veteran or apply yourself.",
};

export default function VeteransPage() {
  return (
    <>
      <Hero
        title="Free Tree Service for Wake County Veterans"
        subtitle="ABC Salutes — every week we take down one dangerous tree, free of charge, for a Wake County veteran or surviving spouse."
      />

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-lg md:text-xl text-charcoal leading-relaxed">
              ABC Lawn &amp; Tree was started in 1998 by Colin Pemberton — a
              self-proclaimed Lawn Dog from a military family. For over two
              decades he said the same thing to anyone who&apos;d listen:{" "}
              <em>&ldquo;I&apos;ve always wanted to do free work for the
              vets.&rdquo;</em> He never had the systems to make it happen.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mt-4">
              <strong>So his family stepped in to build them.</strong> Every
              week, ABC Lawn &amp; Tree removes one hazardous tree free of
              charge for a Wake County veteran or surviving spouse. No catch.
              No upsell. No fine print. The mission Colin always wanted —
              finally built into the business.
            </p>
          </div>

          {/* Who qualifies */}
          <div className="bg-white rounded-xl border border-border shadow-sm p-8 mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-5">
              Who qualifies
            </h2>
            <ul className="space-y-3 text-charcoal">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                <span>U.S. military veteran — any branch, any era of service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                <span>Surviving spouse of a veteran (Gold Star families included)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                <span>
                  Property in Willow Springs, Fuquay-Varina, Holly Springs, Apex, Garner,
                  Angier, or surrounding Wake County
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                <span>
                  A tree that needs work — hazard removal, storm damage cleanup, or
                  dangerous limb pruning
                </span>
              </li>
            </ul>
            <p className="text-sm text-charcoal-light mt-6 leading-relaxed">
              We give priority to elderly, disabled, and fixed-income veterans, and to
              genuinely dangerous trees (over a house, leaning, dead, or split). One free
              service per veteran per year so we can help as many people as possible.
            </p>
          </div>

          {/* How to apply / nominate */}
          <div className="bg-primary text-cream rounded-xl p-8 mb-12 shadow-md">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Nominate a veteran — or apply yourself
            </h2>
            <p className="mb-6 leading-relaxed">
              Tell us a little about the veteran (or yourself), what tree work is needed,
              and the property address. We&apos;ll reach out within 48 hours to schedule a
              site visit.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:9196061130"
                className="block bg-cream text-primary text-center font-bold uppercase tracking-wide py-4 rounded-full hover:bg-accent hover:text-charcoal transition"
              >
                Call (919) 606-1130
              </a>
              <Link
                href="/contact"
                className="block bg-transparent border-2 border-cream text-cream text-center font-bold uppercase tracking-wide py-4 rounded-full hover:bg-cream hover:text-primary transition"
              >
                Send Details Online
              </Link>
            </div>
          </div>

          {/* What's included */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            What&apos;s included
          </h2>
          <p className="text-charcoal-light mb-4">
            Standard hazard tree work and cleanup, including:
          </p>
          <ul className="space-y-2 text-charcoal mb-4">
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">→</span>
              <span>Removal of one hazardous tree (typically up to 60ft)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">→</span>
              <span>Limb chipping and disposal</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">→</span>
              <span>Stump grinding (when included in scope)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">→</span>
              <span>Cleanup and haul-away</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">→</span>
              <span>Full liability insurance and licensed crew</span>
            </li>
          </ul>
          <p className="text-sm text-charcoal-light mb-12 leading-relaxed">
            For larger jobs (multiple trees, crane work, complex removals), we&apos;ll do
            what we can free of charge and offer a meaningful discount on the rest.
          </p>

          {/* Who Runs ABC Salutes */}
          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
              Who runs ABC Salutes
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              ABC Salutes is the passion project of Colin Pemberton&apos;s daughter
              Ashlee Bauman and son-in-law Michael Bauman. After exiting a $10M+
              landscape company they built together in 2024, Ashlee and Michael
              decided their next chapter would be honoring Colin&apos;s
              long-standing wish — building the systems, the funding, and the
              outreach to finally make free tree service for veterans real.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              <strong>ABC Salutes</strong> is the charitable program. It selects
              the veterans, manages the applications, and funds the work.{" "}
              <strong>ABC Lawn &amp; Tree</strong> (Colin&apos;s tree-service
              company) provides the labor — same crew, same standards as a paid
              job, free for the veteran. Together they deliver one free hazardous
              tree removal every week.
            </p>
            <p className="text-charcoal leading-relaxed">
              If you served — or you know someone who did — get in touch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
