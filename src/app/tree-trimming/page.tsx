import type { Metadata } from "next";
import Link from "next/link";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Tree Trimming & Pruning | Healthy Trees, Safer Property | ABC Lawn & Tree",
  description:
    "Expert tree trimming & pruning across Southern Wake & Harnett Counties. Crown thinning, raising, deadwood removal. 25+ years experience. Free estimates. (919) 606-1130.",
};

const benefits = [
  { title: "Protects your home", body: "Remove overhanging branches threatening your roof, gutters, siding, or power lines." },
  { title: "Prevents disease", body: "Deadwood and diseased limbs are removed before decay spreads through the canopy." },
  { title: "Improves structure", body: "Proper pruning trains a strong, safe tree shape that lasts for decades." },
  { title: "Increases light and air", body: "A healthier crown lets more sun reach your lawn and garden below." },
  { title: "Extends tree life", body: "Well-pruned hardwoods live significantly longer than neglected ones." },
];

const services = [
  { title: "Crown Thinning", body: "Selectively removing branches throughout the crown to let light and wind through. Reduces storm damage risk." },
  { title: "Crown Raising", body: "Removing lower branches to clear walkways, driveways, rooflines, and sight lines." },
  { title: "Deadwood Removal", body: "Identifying and cutting out dead, dying, or weakly-attached branches before they fail." },
  { title: "Crown Reduction", body: "Careful size reduction when a tree has outgrown its space. Much better than topping — which we never do." },
];

const steps = [
  { n: "01", title: "Free assessment", body: "A senior team member evaluates the tree and discusses your goals on site." },
  { n: "02", title: "Custom trimming plan", body: "We explain exactly which branches we plan to cut and why." },
  { n: "03", title: "Expert crew and proper gear", body: "Climbers, bucket trucks, or both depending on access and canopy height." },
  { n: "04", title: "Precise cuts", body: "Following proven pruning standards, preserving long-term tree health." },
  { n: "05", title: "Full cleanup", body: "Every branch chipped, every scrap raked. You'd never know we were here." },
];

export default function TreeTrimmingPage() {
  return (
    <>
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/tree-trimming.jpg" alt="Arborist pruning a large oak from a bucket truck" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[76rem] mx-auto px-6 md:px-12 py-24 text-white w-full">
          <p className="font-bold text-accent tracking-widest uppercase text-sm mb-4">TREE SERVICES &middot; TRIMMING &amp; PRUNING</p>
          <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Trimming that keeps your trees healthy for decades.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl">
            Professional pruning, deadwood removal, crown shaping, and clearance work — performed by experienced tree-care crews. Preserve the value and beauty of your trees.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="#estimate" className="cta-gold bg-accent text-primary-dark font-headline font-bold text-lg px-10 py-5 rounded-lg shadow-2xl hover:brightness-110 transition text-center">
              GET A FREE ESTIMATE
            </Link>
            <a href="tel:9196061130" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-headline font-bold text-lg px-10 py-5 rounded-lg transition text-center">
              CALL (919) 606-1130
            </a>
          </div>
        </div>
      </section>

      {/* WHY TRIMMING MATTERS */}
      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-6 leading-tight">
              Trimming isn&rsquo;t just about looks.
            </h2>
            <p className="text-charcoal-light text-lg">Proper pruning protects your home, extends the life of mature trees, and prevents the kind of failures that turn into emergencies.</p>
          </div>
          <div className="space-y-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <svg className="w-7 h-7 text-sage flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <span className="block font-headline font-bold text-lg text-primary-dark mb-1">{b.title}</span>
                  <p className="text-charcoal-light leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIMMING SERVICES */}
      <section className="py-24 bg-cream px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">What we trim, and why.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="service-card bg-white p-8 rounded-2xl border border-border">
                <h3 className="font-headline font-bold text-xl text-primary mb-4">{s.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">Our trimming process.</h2>
          <div>
            {steps.map((s, i) => (
              <div key={s.n} className={`grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-6 py-8 ${i !== steps.length - 1 ? "border-b border-border" : ""}`}>
                <div className="text-accent font-headline font-black text-3xl md:text-4xl">{s.n}</div>
                <div>
                  <h4 className="font-headline font-bold text-2xl text-primary mb-2">{s.title}</h4>
                  <p className="text-charcoal-light text-lg leading-relaxed max-w-3xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="bg-primary-dark py-20 md:py-24 px-6 text-white">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl leading-tight">
            We don&rsquo;t top trees.
          </h2>
          <div>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Topping &mdash; cutting a tree&rsquo;s top off to shorten it &mdash; is the single most damaging thing you can do to a mature tree. It causes decay, weak regrowth, storm vulnerability, and often kills the tree within a few years.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed">
              We&rsquo;ll always recommend <strong className="text-accent">crown reduction</strong> or <strong className="text-accent">full removal</strong> over topping. Period.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-primary py-10 px-6 text-white">
        <div className="max-w-[76rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><span className="block text-3xl font-headline font-black text-accent">25+</span><span className="text-xs uppercase tracking-widest text-stone-300">Years</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">LICENSED</span><span className="text-xs uppercase tracking-widest text-stone-300">&amp; Insured</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">FREE</span><span className="text-xs uppercase tracking-widest text-stone-300">Estimates</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">24/7</span><span className="text-xs uppercase tracking-widest text-stone-300">Emergency</span></div>
        </div>
      </section>

      {/* FINAL CTA WITH FORM */}
      <section id="estimate" className="py-24 md:py-32 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-black text-4xl md:text-5xl text-primary mb-4">Let&rsquo;s keep your trees healthy.</h2>
            <p className="text-charcoal-light text-xl">Most trimming jobs range $250&ndash;$1,200 depending on size, access, and scope. Free estimates, always.</p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
