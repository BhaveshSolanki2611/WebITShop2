import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { Home, ChevronRight, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";

export function generateStaticParams() {
  return services.map((s) => ({ category: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const svc = getServiceBySlug(category);
  if (!svc) return {};
  return {
    title: `${svc.name} — Best ${svc.name} Services in Kirti Nagar, New Delhi`,
    description: svc.excerpt,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const svc = getServiceBySlug(category);
  if (!svc) notFound();

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
            <span className="text-brass-500">{svc.name}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Best <span className="text-brass-500">{svc.name}</span> Services
          </h1>
          <p className="text-paper-50/80 mt-4 max-w-2xl text-lg">in Kirti Nagar, New Delhi</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <p className="text-lg text-ink-700 dark:text-paper-200 leading-relaxed mb-8">
                {svc.intro}
              </p>
            </ScrollReveal>

            {/* Bullet list */}
            <ScrollReveal delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {svc.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 rounded-lg hover:bg-brass-500/5 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brass-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.2}>
              <a
                href={`tel:${company.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all hover:shadow-brass-glow"
              >
                <Phone className="w-5 h-5" />
                Connect With Expert
              </a>
            </ScrollReveal>

            {/* Sub-services Grid */}
            {svc.subServices.length > 0 && (
              <div className="mt-16">
                <ScrollReveal>
                  <SectionLabel>Sub-Services</SectionLabel>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                    Our <span className="text-brass-500">{svc.name}</span> Solutions
                  </h2>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 gap-6">
                  {svc.subServices.map((sub, i) => (
                    <ScrollReveal key={sub.slug} delay={i * 0.05}>
                      <Link
                        href={`/services/${svc.slug}/${sub.slug}`}
                        className="group block p-6 rounded-2xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                      >
                        <h3 className="font-display font-semibold mb-2 group-hover:text-brass-500 transition-colors">
                          {sub.name}
                        </h3>
                        <p className="text-sm text-ink-700 dark:text-paper-200 line-clamp-2 mb-3">{sub.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt-500 group-hover:text-brass-500 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
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
                    <h3 className="font-display font-semibold">All Services</h3>
                  </div>
                  <div className="p-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          s.slug === svc.slug
                            ? "bg-brass-500/10 text-brass-500 font-semibold"
                            : "hover:bg-brass-500/5 hover:text-brass-500"
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-gradient-to-br from-brass-500 to-brass-600 p-6 text-ink-900">
                  <h3 className="font-display font-semibold text-lg mb-2">Need Help?</h3>
                  <p className="text-sm text-ink-900/70 mb-4">
                    Get in touch with our experts for a free consultation.
                  </p>
                  <a
                    href={`tel:${company.primaryPhone}`}
                    className="block text-center px-4 py-3 bg-ink-900 text-paper-50 rounded-xl font-semibold text-sm hover:bg-ink-800 transition-colors"
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
