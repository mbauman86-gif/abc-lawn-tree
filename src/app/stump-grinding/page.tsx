import type { Metadata } from "next";
import Link from "next/link";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Stump Grinding | Fast, Clean Stump Removal | ABC Lawn & Tree",
  description:
    "Professional stump grinding across Southern Wake & Harnett Counties. Below-grade grinding, full cleanup, and replantable soil. Free estimates. (919) 606-1130.",
};

const reasons = [
  { title: "Reclaim your yard", body: "An old stump kills usable space. Grinding opens it back up for lawn, garden, or a new tree." },
  { title: "Safety", body: "Stumps are tripping hazards and mower-wreckers. Grind once, done forever." },
  { title: "Pest prevention", body: "Stumps attract termites, carpenter ants, and wood-boring beetles that migrate to your home next." },
  { title: "Curb appeal", body: "A clean lawn reads well. A decaying stump doesn&rsquo;t." },
];

const steps = [
  { n: "01", title: "Free on-site quote", body: "We measure the stump, check access, and give you a flat price. No surprises." },
  { n: "02", title: "Mark for utilities", body: "We call in locates before cutting, free of charge, to protect lines and irrigation." },
  { n: "03", title: "Grind below grade", body: "Our grinder chews the stump 6–12 inches below grade so you can lay sod or plant over it." },
  { n: "04", title: "Full cleanup", body: "Chips hauled or mulched on site (your choice). Area raked, filled with soil if requested." },
];

export default function StumpGrindingPage() {
  return (
    <>
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/stump-grinding.jpg" alt="Stump grinder removing a tree stump" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[76rem] mx-auto px-6 md:px-12 py-24 text-white w-full">
          <p className="font-bold text-accent tracking-widest uppercase text-sm mb-4">TREE SERVICES &middot; STUMP GRINDING</p>
          <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Gone in an afternoon. Lawn-ready the same day.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl">
            Commercial-grade stump grinding for residential and commercial properties in Southern Wake and Harnett counties. Below-grade finish, full cleanup, honest pricing.
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

      {/* WHY GRIND */}
      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">Why grind the stump.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="service-card bg-cream p-8 rounded-2xl border border-border">
                <h3 className="font-headline font-bold text-xl text-primary mb-3">{r.title}</h3>
                <p className="text-charcoal-light leading-relaxed" dangerouslySetInnerHTML={{ __html: r.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-cream px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">How it works.</h2>
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

      {/* TRUST STRIP */}
      <section className="bg-primary py-10 px-6 text-white">
        <div className="max-w-[76rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><span className="block text-3xl font-headline font-black text-accent">25+</span><span className="text-xs uppercase tracking-widest text-stone-300">Years</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">LICENSED</span><span className="text-xs uppercase tracking-widest text-stone-300">&amp; Insured</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">FREE</span><span className="text-xs uppercase tracking-widest text-stone-300">Estimates</span></div>
          <div><span className="block text-3xl font-headline font-black text-accent">24/7</span><span className="text-xs uppercase tracking-widest text-stone-300">Emergency</span></div>
        </div>
      </section>

      <section id="estimate" className="py-24 md:py-32 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline font-black text-4xl md:text-5xl text-primary mb-4">Ready to reclaim the yard?</h2>
            <p className="text-charcoal-light text-xl">Stump grinding estimates are always free. We usually respond within 24 hours.</p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
