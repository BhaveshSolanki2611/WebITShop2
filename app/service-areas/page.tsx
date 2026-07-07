import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { locations, getLocationsByRegion } from "@/data/locations";
import { Home, ChevronRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "The Web IT Shop serves clients across Delhi NCR, major Indian cities, and internationally including the USA, Australia, UK, and more.",
};

const regions = [
  { key: "delhi-ncr" as const, label: "Delhi NCR", description: "Our home territory" },
  { key: "india" as const, label: "India", description: "Major metropolitan cities" },
  { key: "usa" as const, label: "USA", description: "Bay Area & beyond" },
  { key: "international" as const, label: "International", description: "50+ countries worldwide" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Service Areas</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Service <span className="text-brass-500">Areas</span>
          </h1>
          <p className="text-paper-50/80 mt-4 max-w-2xl">
            Serving clients across India and 50+ countries worldwide from our offices in Delhi NCR and California.
          </p>
        </div>
      </section>

      {regions.map((region, ri) => {
        const locs = getLocationsByRegion(region.key);
        return (
          <Section key={region.key} className={ri % 2 === 1 ? "bg-paper-100 dark:bg-ink-800" : ""}>
            <ScrollReveal>
              <SectionLabel>{region.label}</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {region.label}
              </h2>
              <p className="text-ink-700 dark:text-paper-200 mb-8">{region.description}</p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {locs.map((loc, i) => (
                <ScrollReveal key={loc.slug} delay={i * 0.03}>
                  <div className="group flex items-center gap-2 p-3 rounded-xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-900 transition-all">
                    <MapPin className="w-4 h-4 text-brass-500 shrink-0" />
                    <span className="text-sm font-medium group-hover:text-brass-500 transition-colors truncate">
                      {loc.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
