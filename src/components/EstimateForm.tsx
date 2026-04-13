"use client";
import { useState } from "react";

export default function EstimateForm({ service = "", heading = "Request Your Free Estimate", propertyType = "" }: { service?: string; heading?: string; propertyType?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log("Estimate request:", data);

    const subject = encodeURIComponent(`Estimate Request: ${data.service || "General"}`);
    const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nType: ${data.propertyType}\n\nMessage:\n${data.message}`);
    window.open(`mailto:info@abclawnandtree.com?subject=${subject}&body=${body}`, "_self");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
        <p className="text-charcoal-light text-lg">We&apos;ll get back to you within 24 hours. For immediate help, call <a href="tel:9196061130" className="text-primary font-bold hover:underline">(919) 606-1130</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-warm-white rounded-2xl shadow-xl border border-border p-8 md:p-10" id="estimate">
      {/* Gold top line */}
      <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mb-6" />
      <h3 className="text-2xl font-bold text-charcoal mb-1">{heading}</h3>
      <p className="text-charcoal-light mb-8">Most estimates delivered within 24 hours. No obligation.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
            <input name="name" required className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white text-charcoal" placeholder="Your full name"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Phone *</label>
            <input name="phone" type="tel" required className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white text-charcoal" placeholder="(919) 555-0000"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
          <input name="email" type="email" className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white text-charcoal" placeholder="you@email.com"/>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Service Needed</label>
            <select name="service" defaultValue={service} className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white text-charcoal">
              <option value="">Select a service...</option>
              <option value="tree-removal">Tree Removal</option>
              <option value="tree-trimming">Tree Trimming & Pruning</option>
              <option value="emergency">Emergency Tree Service</option>
              <option value="stump-grinding">Stump Grinding</option>
              <option value="lawn-landscape">Lawn & Landscape</option>
              <option value="hardscape">Hardscape</option>
              <option value="irrigation">Irrigation</option>
              <option value="commercial-landscape">Commercial Landscape Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Property Type</label>
            <select name="propertyType" defaultValue={propertyType || "residential"} className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white text-charcoal">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">Tell Us About Your Project</label>
          <textarea name="message" rows={4} className="w-full px-4 py-3.5 rounded-xl border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none bg-white text-charcoal" placeholder="Describe the work needed..."/>
        </div>
        <button type="submit" className="cta-gold w-full bg-accent text-primary-dark py-4.5 rounded-xl font-bold text-lg shadow-lg">
          Request Free Estimate
        </button>
        <p className="text-sm text-charcoal-light text-center">Or call now: <a href="tel:9196061130" className="text-primary font-bold hover:underline">(919) 606-1130</a></p>
      </form>
    </div>
  );
}
