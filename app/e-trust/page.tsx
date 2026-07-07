import { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, ShieldCheck } from "lucide-react";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";

export const metadata: Metadata = {
  title: "What is e-Trust?",
  description: "Learn about e-Trust certification and how it helps verify your business authenticity online.",
};

export default function ETrustPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">What is e-Trust?</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            What is <span className="text-brass-500">e-Trust</span>?
          </h1>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-2xl bg-brass-500/10 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-brass-500" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Building <span className="text-brass-500">Trust</span> Online
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none space-y-6 text-ink-700 dark:text-paper-200 leading-relaxed">
              <p>
                e-Trust is a digital certification service that verifies the authenticity and credibility of online businesses. An e-Trust certificate assures your website visitors that your business is legitimate, verified, and trustworthy.
              </p>
              <p>
                When customers see the e-Trust seal on your website, they gain confidence that your business has been independently verified, making them more likely to engage with your services and make purchases.
              </p>
              <h3 className="font-display text-xl font-bold text-ink-900 dark:text-paper-50">Benefits of e-Trust Certification</h3>
              <ul className="space-y-2">
                <li>Builds customer confidence and trust</li>
                <li>Increases conversion rates</li>
                <li>Differentiates you from unverified competitors</li>
                <li>Demonstrates commitment to online security</li>
                <li>Enhances brand credibility</li>
              </ul>
              <p>
                The Web IT Shop offers e-Trust certification services to help businesses establish their online credibility. Contact us to learn more about getting your business certified.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all hover:shadow-brass-glow"
              >
                Get e-Trust Certified
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
