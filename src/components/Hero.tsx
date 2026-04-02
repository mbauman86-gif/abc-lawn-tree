import Link from "next/link";

export default function Hero({ title, subtitle, emergency = false }: { title: string; subtitle: string; emergency?: boolean }) {
  return (
    <section className={`relative ${emergency ? "bg-emergency-dark" : "bg-primary"} text-white min-h-[600px] flex items-center`}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")"}}/>
      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center w-full">
        <h1 className="text-5xl md:text-[64px] font-bold mb-6 leading-[1.1] text-white">{title}</h1>
        <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-bold text-[17px] transition shadow-lg">Get Free Estimate</Link>
          <a href="tel:9196061130" className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-[17px] transition bg-transparent">Call (919) 606-1130</a>
        </div>
      </div>
    </section>
  );
}
