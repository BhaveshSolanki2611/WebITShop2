import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { packages, getPackageBySlug } from "@/data/packages";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { company } from "@/data/company";
import { Home, ChevronRight, Check, Phone } from "lucide-react";

export function generateStaticParams() {
  return packages.map((p) => ({ type: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const pkg = getPackageBySlug(type);
  if (!pkg) return {};
  return {
    title: pkg.name,
    description: `Affordable ${pkg.name} from The Web IT Shop, New Delhi.`,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const pkg = getPackageBySlug(type);
  if (!pkg) notFound();

  const hasTiers = pkg.tiers.length > 0;

  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/packages" className="hover:text-brass-500 transition-colors">Packages</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">{pkg.name}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-brass-500">{pkg.name}</span>
          </h1>
        </div>
      </section>

      {hasTiers ? (
        <Section>
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="font-display text-3xl font-bold">
                Choose Your <span className="text-brass-500">Plan</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {pkg.tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-elevated ${
                    i === 1
                      ? "border-brass-500 bg-brass-500/5 dark:bg-brass-500/10 scale-105"
                      : "border-slate-500/10 bg-paper-50 dark:bg-ink-800"
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brass-500 text-ink-900 text-xs font-bold font-mono rounded-full">
                      POPULAR
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="font-mono text-3xl font-bold text-brass-500 mb-6">
                    {tier.price}
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-500" />
                      <span>Web Space: <strong className="font-mono">{tier.webSpace}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-500" />
                      <span>Bandwidth: <strong className="font-mono">{tier.bandwidth}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-500" />
                      <span>Email Accounts: <strong className="font-mono">{tier.emailAccounts}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-500" />
                      <span>Pages: <strong className="font-mono">{tier.pages}</strong></span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      i === 1
                        ? "bg-brass-500 text-ink-900 hover:bg-brass-400 hover:shadow-brass-glow"
                        : "border-2 border-current hover:text-brass-500 hover:border-brass-500"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Shared Features */}
          {pkg.sharedFeatures.length > 0 && (
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h3 className="font-display text-xl font-bold mb-6 text-center">
                  All Plans <span className="text-brass-500">Include</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {pkg.sharedFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 p-2 text-sm">
                      <Check className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </Section>
      ) : (
        <Section>
          <ScrollReveal>
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-2xl bg-brass-500/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-brass-500" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Contact for <span className="text-brass-500">Custom Pricing</span>
              </h2>
              <p className="text-ink-700 dark:text-paper-200 max-w-md mx-auto mb-8">
                We create custom {pkg.name.toLowerCase()} tailored to your specific business needs and goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${company.primaryPhone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-mono">{company.primaryPhone}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-current rounded-xl font-semibold hover:text-brass-500 hover:border-brass-500 transition-colors"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      )}
    </>
  );
}
