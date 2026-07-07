import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getSubService } from "@/data/services";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { Home, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export function generateStaticParams() {
  const params: { category: string; subservice: string }[] = [];
  services.forEach((cat) => {
    cat.subServices.forEach((sub) => {
      params.push({ category: cat.slug, subservice: sub.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subservice: string }>;
}): Promise<Metadata> {
  const { category, subservice } = await params;
  const result = getSubService(category, subservice);
  if (!result) return {};
  return {
    title: `${result.subService.name} — ${result.category.name}`,
    description: result.subService.excerpt,
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ category: string; subservice: string }>;
}) {
  const { category, subservice } = await params;
  const result = getSubService(category, subservice);
  if (!result) notFound();

  const { category: cat, subService: sub } = result;
  const relatedServices = cat.subServices.filter((s) => s.slug !== sub.slug).slice(0, 4);

  return (
    <>
      {/* Banner */}
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono flex-wrap">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-brass-500 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/services/${cat.slug}`} className="hover:text-brass-500 transition-colors">
              {cat.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">{sub.name}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-brass-500">{sub.name}</span>
          </h1>
          <p className="text-paper-50/80 mt-4 max-w-2xl">{sub.excerpt}</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-ink-700 dark:text-paper-200 leading-relaxed mb-8">{sub.body}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`tel:${company.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all hover:shadow-brass-glow"
                >
                  <Phone className="w-5 h-5" />
                  Contact Expert
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-current rounded-xl font-semibold hover:text-brass-500 hover:border-brass-500 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </ScrollReveal>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="mt-16">
                <ScrollReveal>
                  <SectionLabel>Related Services</SectionLabel>
                  <h2 className="font-display text-2xl font-bold mb-8">
                    Other <span className="text-brass-500">{cat.name}</span> Services
                  </h2>
                </ScrollReveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedServices.map((rel, i) => (
                    <ScrollReveal key={rel.slug} delay={i * 0.05}>
                      <Link
                        href={`/services/${cat.slug}/${rel.slug}`}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-slate-500/10 hover:border-brass-500/30 transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center shrink-0 group-hover:bg-brass-500 transition-colors">
                          <ArrowRight className="w-5 h-5 text-brass-500 group-hover:text-ink-900 transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-brass-500 transition-colors">{rel.name}</h3>
                          <p className="text-xs text-ink-700 dark:text-paper-200 line-clamp-1">{rel.excerpt}</p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <ScrollReveal>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-800 overflow-hidden">
                  <div className="bg-ink-900 text-paper-50 p-4">
                    <h3 className="font-display font-semibold">{cat.name}</h3>
                  </div>
                  <div className="p-2">
                    {cat.subServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${cat.slug}/${s.slug}`}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          s.slug === sub.slug
                            ? "bg-brass-500/10 text-brass-500 font-semibold"
                            : "hover:bg-brass-500/5 hover:text-brass-500"
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brass-500 to-brass-600 p-6 text-ink-900">
                  <h3 className="font-display font-semibold text-lg mb-2">Get a Quote</h3>
                  <p className="text-sm text-ink-900/70 mb-4">Free consultation for {sub.name}.</p>
                  <a
                    href={`tel:${company.primaryPhone}`}
                    className="block text-center px-4 py-3 bg-ink-900 text-paper-50 rounded-xl font-semibold text-sm"
                  >
                    <span className="font-mono">{company.primaryPhone}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
