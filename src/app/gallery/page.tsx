"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

type Category = "all" | "tree-work" | "landscaping" | "hardscape";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "tree-work" | "landscaping" | "hardscape";
  image: string;
}

const projects: Project[] = [
  // Tree Work
  {
    id: 1,
    title: "Large Oak Removal",
    description: "Safely removed a 70-foot oak threatening a home in Fuquay-Varina.",
    category: "tree-work",
    image: "https://images.unsplash.com/photo-1628697579400-6ff003101a3d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Storm Damage Cleanup",
    description: "Emergency pine removal after severe weather in Holly Springs.",
    category: "tree-work",
    image: "https://images.unsplash.com/photo-1645430786171-362e053dcf6f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Canopy Pruning",
    description: "Crown thinning on mature maples to restore light to a Willow Springs yard.",
    category: "tree-work",
    image: "https://images.unsplash.com/photo-1658615324653-00fbdaee8a3f?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Multi-Tree Lot Clearing",
    description: "Cleared 15 pines for new construction in Angier.",
    category: "tree-work",
    image: "https://images.unsplash.com/photo-1487873606941-29660d418953?w=800&h=600&fit=crop",
  },
  // Landscaping
  {
    id: 5,
    title: "Front Yard Makeover",
    description: "Complete landscape redesign with native plantings in Apex.",
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1626788570296-a6565dbf19b4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Seasonal Color Installation",
    description: "Annual flower bed installation for a Garner commercial property.",
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1589321084815-4e5f1740cbc6?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Lawn Renovation",
    description: "Full lawn tear-out and fescue installation in Holly Springs.",
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1626788570296-a6565dbf19b4?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Foundation Planting",
    description: "Shrub and perennial design for a new build in Fuquay-Varina.",
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1589321084815-4e5f1740cbc6?w=800&h=600&fit=crop",
  },
  // Hardscape
  {
    id: 9,
    title: "Paver Patio",
    description: "600 sq ft paver patio with seating wall in Willow Springs.",
    category: "hardscape",
    image: "https://images.unsplash.com/photo-1582586729982-43ce0902f1f1?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Retaining Wall",
    description: "Natural stone retaining wall to manage slope erosion in Apex.",
    category: "hardscape",
    image: "https://images.unsplash.com/photo-1638107982729-59f464ea6b52?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    title: "Outdoor Fire Pit",
    description: "Custom stone fire pit and surrounding patio in Garner.",
    category: "hardscape",
    image: "https://images.unsplash.com/photo-1757851704368-3ae8d337943d?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    title: "Walkway & Steps",
    description: "Flagstone walkway with landscape lighting in Fuquay-Varina.",
    category: "hardscape",
    image: "https://images.unsplash.com/photo-1596086221164-c8a4cac55e27?w=800&h=600&fit=crop",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Tree Work", value: "tree-work" },
  { label: "Landscaping", value: "landscaping" },
  { label: "Hardscape", value: "hardscape" },
];

const categoryLabels: Record<string, string> = {
  "tree-work": "Tree Work",
  landscaping: "Landscaping",
  hardscape: "Hardscape",
};

const badgeColors: Record<string, string> = {
  "tree-work": "bg-emerald-100 text-emerald-800",
  landscaping: "bg-lime-100 text-lime-800",
  hardscape: "bg-amber-100 text-amber-800",
};

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Browse real projects completed across Southern Wake County — tree removal, landscaping, and hardscape work by the ABC Lawn & Tree crew."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition ${
                  active === f.value
                    ? "bg-primary text-white shadow-md"
                    : "bg-cream text-charcoal-light hover:bg-border"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {/* Project Image */}
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" loading="lazy" />
                {/* Card Body */}
                <div className="p-5">
                  <span
                    className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${badgeColors[project.category]}`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal mb-1">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-light text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Ready to Transform Your Property?
            </h2>
            <p className="text-charcoal-light mb-6 max-w-xl mx-auto">
              Every project in our gallery started with a free estimate. Let&apos;s
              talk about what ABC Lawn &amp; Tree can do for your home or
              business in Southern Wake County.
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
