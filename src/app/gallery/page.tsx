import Hero from "@/components/Hero";

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="See what ABC Lawn & Tree can do for your property across Southern Wake County."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Photo Gallery Coming Soon
            </h2>
            <p className="text-charcoal-light mb-6 max-w-xl mx-auto leading-relaxed">
              We&apos;re building out our project gallery with real photos from jobs
              across Fuquay-Varina, Holly Springs, Apex, Garner, and Angier.
              In the meantime, give us a call and we&apos;ll be happy to share
              examples of our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-lg font-bold text-sm transition shadow-lg"
              >
                Get Your Free Estimate
              </a>
              <a
                href="tel:9196060774"
                className="border-2 border-primary/20 hover:border-primary/40 text-primary px-7 py-3.5 rounded-lg font-bold text-sm transition"
              >
                Call (919) 606-0774
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
