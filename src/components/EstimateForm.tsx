"use client";
import { useState } from "react";

export default function EstimateForm({ service = "", heading = "Get Your Free Estimate", propertyType = "" }: { service?: string; heading?: string; propertyType?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log("Estimate request:", data);

    // mailto fallback
    const subject = encodeURIComponent(`Estimate Request: ${data.service || "General"}`);
    const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nType: ${data.propertyType}\n\nMessage:\n${data.message}`);
    window.open(`mailto:info@abclawnandtree.com?subject=${subject}&body=${body}`, "_self");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 text-center">
        <svg className="w-14 h-14 text-primary mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-charcoal">We&apos;ll get back to you within 24 hours. For immediate help, call <a href="tel:9196060774" className="text-primary font-bold hover:underline">(919) 606-0774</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border p-8" id="estimate">
      <h3 className="text-2xl font-bold text-charcoal mb-1">{heading}</h3>
      <p className="text-charcoal-light text-[15px] mb-6">Most estimates delivered within 24 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[15px] font-medium text-charcoal mb-2">Name *</label>
            <input name="name" required className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" placeholder="Your full name"/>
          </div>
          <div>
            <label className="block text-[15px] font-medium text-charcoal mb-2">Phone *</label>
            <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" placeholder="(919) 555-0000"/>
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-charcoal mb-2">Email</label>
          <input name="email" type="email" className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" placeholder="you@email.com"/>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[15px] font-medium text-charcoal mb-2">Service Needed</label>
            <select name="service" defaultValue={service} className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white">
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
            <label className="block text-[15px] font-medium text-charcoal mb-2">Property Type</label>
            <select name="propertyType" defaultValue={propertyType || "residential"} className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-[15px] font-medium text-charcoal mb-2">Tell Us About Your Project</label>
          <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-md border border-border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none" placeholder="Describe the work needed..."/>
        </div>
        <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-lg font-bold text-lg transition shadow-md hover:shadow-lg">
          Request Free Estimate
        </button>
        <p className="text-sm text-charcoal-light text-center">Or call now: <a href="tel:9196060774" className="text-primary font-bold">(919) 606-0774</a></p>
      </form>
    </div>
  );
}
