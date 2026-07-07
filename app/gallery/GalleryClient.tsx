"use client";

import { useState } from "react";
import Link from "next/link";
import { galleryCategories } from "@/data/gallery";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { Home, ChevronRight, Image as ImageIcon } from "lucide-react";

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all-images");

  const activeItems = activeCategory === "all-images"
    ? galleryCategories.flatMap((c) => c.items)
    : galleryCategories.find((c) => c.slug === activeCategory)?.items || [];

  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Gallery</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-brass-500">Gallery</span>
          </h1>
        </div>
      </section>

      <Section>
        {/* Category Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.slug
                    ? "bg-brass-500 text-ink-900"
                    : "bg-paper-100 dark:bg-ink-800 text-ink-700 dark:text-paper-200 hover:text-brass-500 hover:bg-brass-500/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeItems.map((item, i) => (
            <ScrollReveal key={`${item.alt}-${i}`} delay={i * 0.03}>
              <div className="group relative aspect-square rounded-xl overflow-hidden border border-slate-500/10 hover:border-brass-500/30 bg-paper-100 dark:bg-ink-800 transition-all">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-ink-700 dark:text-paper-200/30 mx-auto mb-2" />
                    <span className="text-xs text-ink-700 dark:text-paper-200/50 px-2 text-center line-clamp-2">
                      {item.alt}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-brass-500/0 group-hover:bg-brass-500/10 transition-colors" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {activeItems.length === 0 && (
          <div className="text-center py-16 text-ink-700 dark:text-paper-200">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p>No items in this category yet.</p>
          </div>
        )}
      </Section>
    </>
  );
}
