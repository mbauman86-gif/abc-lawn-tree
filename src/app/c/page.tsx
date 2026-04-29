import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reach ABC Lawn & Tree — Call or Text",
  description:
    "Free estimates across Southern Wake County. Tap to call or text ABC Lawn & Tree.",
};

const PHONE = "9196061130";
const PHONE_DISPLAY = "(919) 606-1130";
const SMS_BODY = encodeURIComponent(
  "Hi, I scanned your ABC Lawn & Tree door hanger. I'd like a free estimate."
);

export default function CallOrTextPage() {
  return (
    <main className="min-h-[80vh] bg-cream flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="text-xs font-bold tracking-[0.25em] text-primary/70 uppercase mb-3">
          ABC Lawn &amp; Tree
        </div>
        <h1 className="font-serif font-black text-4xl md:text-5xl text-primary leading-tight mb-4">
          Reach us now
        </h1>
        <p className="text-base text-charcoal-light mb-10 max-w-sm">
          Free estimates across Fuquay-Varina, Holly Springs, Apex, Garner,
          Angier &amp; Willow Springs.
        </p>

        <a
          href={`tel:${PHONE}`}
          className="w-full bg-primary text-cream text-xl md:text-2xl font-bold uppercase tracking-wide py-5 rounded-full mb-4 active:scale-[0.98] transition shadow-md hover:bg-primary-dark"
        >
          Call {PHONE_DISPLAY}
        </a>

        <a
          href={`sms:${PHONE}?&body=${SMS_BODY}`}
          className="w-full bg-cream border-2 border-primary text-primary text-xl md:text-2xl font-bold uppercase tracking-wide py-5 rounded-full mb-10 active:scale-[0.98] transition hover:bg-primary hover:text-cream"
        >
          Text {PHONE_DISPLAY}
        </a>

        <a
          href="/contact"
          className="text-sm text-primary underline underline-offset-4"
        >
          Or send us your details &rarr;
        </a>

        <div className="mt-12 text-xs text-charcoal-light/80">
          25+ years &middot; Family-owned &middot; Licensed &amp; insured
        </div>
      </div>
    </main>
  );
}
