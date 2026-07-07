import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const featured = ["web-designing", "web-development", "seo-services", "digital-marketing"];

export function TopServices() {
  const featuredServices = services.filter((s) => featured.includes(s.slug));

  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Top <span className="text-brass-500">Services</span> We Offer
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((svc, i) => (
          <ScrollReveal key={svc.slug} delay={i * 0.1}>
            <Link
              href={`/services/${svc.slug}`}
              className="group block rounded-2xl overflow-hidden border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-brass-500/10 to-cobalt-500/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-brass-500/20 border border-brass-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="font-mono text-lg font-bold text-brass-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-brass-500 transition-colors">
                  {svc.name}
                </h3>
                <p className="text-sm text-ink-700 dark:text-paper-200 line-clamp-3 mb-4">
                  {svc.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt-500 group-hover:text-brass-500 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
