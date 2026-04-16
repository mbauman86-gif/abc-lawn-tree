import type { Metadata } from "next";
import Link from "next/link";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Tree Removal | Safe Expert Tree Removal Service | ABC Lawn & Tree",
  description:
    "Professional tree removal in Southern Wake & Harnett Counties. 25+ years handling large hardwoods, hazardous, and storm-damaged trees. Free estimates. (919) 606-1130.",
};

const included = [
  "Complete removal, including oversized and dangerous trees",
  "Rigging and controlled lowering for tight-access lots",
  "Full cleanup — debris hauled, lawn raked clean",
  "Stump grinding available at the same visit or separately",
  "Fully insured — comprehensive liability plus workers' comp",
];

const steps = [
  { n: "01", title: "Free on-site estimate", body: "A senior team member visits your property, assesses the tree, and provides a written quote with no pressure." },
  { n: "02", title: "Schedule and permit", body: "We handle any permits required and schedule the removal at your convenience." },
  { n: "03", title: "Crew arrives prepared", body: "Bucket truck, chipper, rigging gear, and safety kit — fully equipped, always on time." },
  { n: "04", title: "Controlled removal", body: "Section by section for tight spots. Full-drop for open areas. Nothing is ever a surprise." },
  { n: "05", title: "Full cleanup", body: "Every branch chipped, every log hauled (or stacked for firewood if you prefer), every track raked." },
];

const treeTypes = [
  { title: "Large shade trees", body: "Oaks, maples, sycamores up to 100+ feet." },
  { title: "Dead or diseased", body: "Safety removal before failure." },
  { title: "Storm-damaged", body: "Emergency and scheduled cleanup." },
  { title: "Tight-access lots", body: "Rigging and cranes when needed." },
];

const faqs = [
  { q: "Do I need a permit to remove a tree?", a: "In most of Southern Wake and Harnett counties, removal on private residential property does not require a permit. If your property is in an HOA or Raleigh city limits, additional rules may apply — we handle the paperwork either way." },
  { q: "How long does a tree removal take?", a: "Most residential removals take half a day to a full day. Massive or tight-access jobs may span two days. We give you a precise ETA at the estimate." },
  { q: "Do you grind the stump?", a: "Yes, stump grinding is an optional add-on. We can grind at the same visit or return later." },
  { q: "What if weather delays the job?", a: "We reschedule to the next available safe window at no additional cost. Safety always comes first." },
];

export default function TreeRemovalPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/tree-removal.jpg" alt="Crew removing a large hardwood tree" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[76rem] mx-auto px-6 md:px-12 py-24 text-white w-full">
          <p className="font-bold text-accent tracking-widest uppercase text-sm mb-4">TREE SERVICES &middot; REMOVAL</p>
          <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Big trees. Small trees. Difficult trees. We&rsquo;ve done them all.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl">
            Professional tree removal across Southern Wake and Harnett counties &mdash; including dead, dying, diseased, storm-damaged, and oversized trees. Free estimates. Full cleanup. Fully insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="#estimate" className="cta-gold bg-accent text-primary-dark font-headline font-bold text-lg px-10 py-5 rounded-lg shadow-2xl hover:brightness-110 transition text-center">
              GET A FREE ESTIMATE
            </Link>
            <Link href="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-headline font-bold text-lg px-10 py-5 rounded-lg transition text-center">
              VIEW OUR GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-6 leading-tight">
              What&rsquo;s included in every tree removal.
            </h2>
            <p className="text-charcoal-light text-lg">No hidden fees, no surprise upsells. Here&rsquo;s what you get with every job.</p>
          </div>
          <div className="space-y-5">
            {included.map((line) => (
              <div key={line} className="flex items-start gap-4">
                <svg className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <p className="text-charcoal text-lg leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-cream px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">How a tree removal goes.</h2>
          <div className="space-y-0">
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

      {/* TREES WE REMOVE */}
      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">Every kind of removal.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treeTypes.map((t) => (
              <div key={t.title} className="service-card bg-cream p-8 rounded-2xl border border-border">
                <h3 className="font-headline font-bold text-xl text-primary mb-3">{t.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING + FAQ */}
      <section className="py-24 md:py-32 bg-cream px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline font-extrabold text-4xl text-primary mb-6">What does it cost?</h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              Tree removal pricing varies by size, access, and complexity. Most residential removals in our area range from <strong className="text-primary-dark">$400 to $3,500</strong>. For a precise quote, we come out in person &mdash; always free, no obligation.
            </p>
            <Link href="#estimate" className="cta-gold inline-block bg-accent text-primary-dark font-headline font-bold px-8 py-4 rounded-lg shadow-lg hover:brightness-110 transition">
              GET A FREE ESTIMATE
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-border p-6 group">
                <summary className="font-headline font-bold text-lg text-primary cursor-pointer flex justify-between items-center">
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 text-accent group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </summary>
                <p className="text-charcoal-light mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
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
            <h2 className="font-headline font-black text-4xl md:text-5xl text-primary mb-4">Ready for that tree to go?</h2>
            <p className="text-charcoal-light text-xl">Get a free, no-pressure estimate. We&rsquo;ll walk the property and give you a straight answer.</p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
