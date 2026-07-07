import { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/data/packages";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Affordable website designing, SEO, SMO, and PPC packages from The Web IT Shop. Starting from ₹9,999.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Packages</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-brass-500">Packages</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.slug} delay={i * 0.1}>
              <Link
                href={`/packages/${pkg.slug}`}
                className="group block p-8 rounded-2xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brass-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brass-500 transition-colors">
                  <span className="font-mono text-2xl font-bold text-brass-500 group-hover:text-ink-900 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold mb-3 group-hover:text-brass-500 transition-colors">
                  {pkg.name}
                </h2>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt-500">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
