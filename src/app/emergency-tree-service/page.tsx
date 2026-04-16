import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Tree Service | 24/7 Storm Response | ABC Lawn & Tree",
  description:
    "24/7 emergency tree service in Southern Wake & Harnett Counties. Tree on your house? Storm damage? Call (919) 606-1130 for rapid response. Licensed & insured.",
};

const emergencyCards = [
  { title: "Tree on House or Vehicle", body: "Structural impact requires immediate stabilization to prevent further water or physical damage." },
  { title: "Blocking Driveway or Road", body: "Regain access to your property. We clear paths quickly so emergency vehicles or you can pass." },
  { title: "Leaning or Uprooting Tree", body: "A tree that has started to lift its root plate or lean significantly after a storm is a ticking clock." },
  { title: "Large Branches After a Storm", body: "Hanging limbs &mdash; widow-makers &mdash; over walkways or power lines need professional removal now." },
];

const steps = [
  { n: 1, title: "You Call", body: "Our dispatcher takes your info and assesses the urgency immediately, any hour." },
  { n: 2, title: "We Dispatch", body: "A specialized emergency crew is notified and dispatched within minutes." },
  { n: 3, title: "We Arrive", body: "Our crew arrives with cranes, bucket trucks, and equipment to stabilize the site." },
  { n: 4, title: "We Restore", body: "The hazard is removed, debris is cleared, and your property is secured." },
];

export default function EmergencyTreeServicePage() {
  return (
    <>
      <section className="relative min-h-[680px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/emergency.jpg" alt="Storm-damaged tree on a residential roof" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
        </div>

        <div className="absolute top-0 w-full bg-emergency text-white font-bold py-3 text-center z-10 px-4">
          <span className="flex items-center justify-center gap-2 tracking-wide text-sm md:text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            CURRENT EMERGENCY? CALL <a className="underline ml-1" href="tel:9196061130">(919) 606-1130</a> &mdash; 24/7 RESPONSE
          </span>
        </div>

        <div className="relative z-10 max-w-[76rem] mx-auto px-6 md:px-12 py-24 text-white w-full">
          <div className="inline-flex items-center bg-primary text-accent px-4 py-2 rounded-full font-semibold text-xs tracking-widest mb-8 shadow-lg uppercase">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" /></svg>
            2-Hour Response
          </div>
          <p className="font-bold text-accent tracking-widest uppercase text-sm mb-4">EMERGENCY TREE SERVICE</p>
          <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Tree on your house?
            <span className="block text-accent">We&rsquo;re already on the way.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-xl">
            Rapid storm response for Southern Wake and Harnett county homeowners. We prioritize dangerous hazards and structure hits with 24/7 immediate dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="tel:9196061130"
              className="bg-emergency hover:brightness-110 text-white font-headline text-lg font-bold px-10 py-5 rounded-lg flex items-center justify-center gap-3 shadow-xl transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              CALL NOW &middot; (919) 606-1130
            </a>
            <a
              href="sms:9196061130"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark transition font-headline text-lg font-bold px-10 py-5 rounded-lg flex items-center justify-center gap-3"
            >
              OR TEXT US YOUR PHOTO
            </a>
          </div>
        </div>
      </section>

      <div className="bg-primary-dark py-4 text-white overflow-hidden whitespace-nowrap">
        <div className="max-w-[76rem] mx-auto flex items-center justify-around gap-8 text-sm md:text-base font-semibold tracking-widest opacity-90 px-6">
          <span>2-HOUR RESPONSE</span>
          <span className="hidden md:inline">&middot;</span>
          <span>24/7/365</span>
          <span className="hidden md:inline">&middot;</span>
          <span>FULLY EQUIPPED</span>
          <span className="hidden md:inline">&middot;</span>
          <span>FULLY INSURED</span>
          <span className="hidden md:inline">&middot;</span>
          <span>IMMEDIATE DISPATCH</span>
        </div>
      </div>

      <section className="py-24 md:py-32 bg-warm-white px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-6">What counts as an emergency?</h2>
            <p className="max-w-2xl mx-auto text-charcoal-light text-lg">
              If there is an immediate threat to your safety or property, it&rsquo;s an emergency. We are equipped for the toughest situations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyCards.map((c) => (
              <div key={c.title} className="service-card bg-white p-8 rounded-2xl border border-border group relative">
                <h3 className="font-headline font-bold text-xl text-primary mb-4">{c.title}</h3>
                <p className="text-charcoal-light mb-6" dangerouslySetInnerHTML={{ __html: c.body }} />
                <a className="font-bold text-sm text-emergency inline-flex items-center gap-2 hover:gap-3 transition-all" href="tel:9196061130">
                  CALL NOW
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream px-6 md:px-12">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-headline font-extrabold text-4xl text-primary mb-16 text-center">Our emergency process.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-accent/30 -z-10"></div>
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent text-primary-dark rounded-full flex items-center justify-center font-headline font-black text-2xl mb-6 shadow-lg border-4 border-white">
                  {s.n}
                </div>
                <h4 className="font-headline font-bold text-primary mb-3">{s.title}</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-6 md:px-12 text-white">
        <div className="max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-6 leading-tight">
              Licensed.
              <br />
              Insured.
              <br />
              Experienced.
            </h2>
            <p className="text-stone-300 text-lg">
              We deal directly with your insurance provider to streamline the claims process during a stressful time. You focus on your family &mdash; we&rsquo;ll handle the tree.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Full Liability Insurance", body: "Comprehensive coverage protecting your property and our workers." },
              { title: "Workers' Comp Protection", body: "Peace of mind knowing everyone on site is fully covered." },
              { title: "Decades of Storm Experience", body: "Proven response across tropical systems, ice, and severe wind events." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <span className="font-bold block text-xl">{item.title}</span>
                  <p className="text-stone-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-cream">
        <div className="max-w-[76rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-headline font-bold text-2xl text-primary mb-2">Storm in the forecast?</h3>
            <p className="text-charcoal-light">Schedule a pre-storm inspection. We&rsquo;ll flag weak limbs before they fail.</p>
          </div>
          <Link href="/contact" className="cta-lift bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-lg shadow-lg transition">
            Request an Inspection
          </Link>
        </div>
      </section>

      <section className="bg-emergency text-white py-24 md:py-32 px-6 text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl mb-8">Don&rsquo;t wait. Call now.</h2>
        <a href="tel:9196061130" className="inline-block text-white font-headline font-black text-5xl md:text-7xl tracking-tighter hover:underline decoration-4 transition mb-6">
          (919) 606-1130
        </a>
        <p className="text-xl opacity-90">Available 24/7. No call too small, no tree too big.</p>
      </section>
    </>
  );
}
