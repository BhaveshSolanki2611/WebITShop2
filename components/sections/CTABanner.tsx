import Link from "next/link";
import { ScrollReveal, Section } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <Section className="!py-0">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brass-700 via-brass-500 to-brass-600 px-8 py-12 md:px-16 md:py-16 text-ink-900">
          <div className="registration-mark registration-mark--tl" />
          <div className="registration-mark registration-mark--br" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                We&apos;re Ready to Bring Bigger &amp; Stronger Projects
              </h2>
              <p className="text-ink-900/70 max-w-lg">
                Let&apos;s work together to build something extraordinary for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shrink-0 shadow-xl ring-2 ring-white/50"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: "repeating-linear-gradient(90deg, currentColor 0px, currentColor 0.5px, transparent 0.5px, transparent 40px), repeating-linear-gradient(0deg, currentColor 0px, currentColor 0.5px, transparent 0.5px, transparent 40px)",
            }} />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
