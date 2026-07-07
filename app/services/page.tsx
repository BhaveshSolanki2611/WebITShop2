import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore 13+ professional digital services from The Web IT Shop — Web Designing, Web Development, SEO, Digital Marketing, Graphic Design, Mobile Apps, Software Development, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Services</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-brass-500">Services</span>
          </h1>
          <p className="text-paper-50/80 mt-4 max-w-2xl">
            Comprehensive digital solutions to grow your business — from web design to enterprise software.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.slug} delay={i * 0.05}>
              <Link
                href={`/services/${svc.slug}`}
                className="group block h-full rounded-2xl overflow-hidden border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-brass-500/10 to-cobalt-500/10 relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-brass-500/20 border border-brass-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="font-mono text-lg font-bold text-brass-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-brass-500 transition-colors">
                    {svc.name}
                  </h2>
                  <p className="text-sm text-ink-700 dark:text-paper-200 line-clamp-3 mb-4">{svc.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-cobalt-500 group-hover:text-brass-500 transition-colors inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                    {svc.subServices.length > 0 && (
                      <span className="text-xs font-mono text-ink-700 dark:text-paper-200">
                        {svc.subServices.length} sub-services
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
