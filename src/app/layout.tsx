import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "ABC Lawn & Tree, Inc. — Tree Service & Landscaping | Southern Wake County NC", template: "%s | ABC Lawn & Tree — Willow Springs, NC" },
  description: "Licensed & insured tree removal, trimming, stump grinding, lawn care, landscaping, hardscape, and irrigation in Fuquay-Varina, Holly Springs, Apex, Garner, Angier, and Willow Springs NC. 25+ years experience. Free estimates — (919) 606-1130.",
  keywords: ["tree removal","tree trimming","stump grinding","landscaping","lawn care","hardscape","irrigation","Fuquay-Varina","Holly Springs","Apex","Garner","Angier","Willow Springs","Southern Wake County","NC"],
  openGraph: { type: "website", locale: "en_US", siteName: "ABC Lawn & Tree, Inc." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ABC Lawn & Tree, Inc.",
  description: "Professional tree removal, tree trimming, stump grinding, lawn care, landscaping, hardscape, and irrigation services in Southern Wake County, NC.",
  telephone: "+1-919-606-1130",
  url: "https://abclawnandtree.com",
  address: { "@type": "PostalAddress", addressLocality: "Willow Springs", addressRegion: "NC", postalCode: "27592", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: "35.5551", longitude: "-78.6836" },
  areaServed: [
    { "@type": "City", name: "Willow Springs" },
    { "@type": "City", name: "Fuquay-Varina" },
    { "@type": "City", name: "Holly Springs" },
    { "@type": "City", name: "Apex" },
    { "@type": "City", name: "Garner" },
    { "@type": "City", name: "Angier" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  priceRange: "$$",
  image: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69bc14e9c1caa63f9832ab80"
          async
        />
      </body>
    </html>
  );
}
