"use client";
import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-lg overflow-hidden">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-charcoal hover:bg-cream transition text-[16px]">
            {item.q}
            <svg className={`w-5 h-5 text-charcoal-light flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          {openIdx === i && (
            <div className="px-6 pb-5 text-[15px] text-charcoal leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
