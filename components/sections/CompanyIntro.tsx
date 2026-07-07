import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { aboutContent } from "@/data/company";

export function CompanyIntro() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl border border-slate-500/10 overflow-hidden shadow-elevated">
              <img
                src="https://www.thewebitshop.com/static_files/25324161about-us.jpg"
                alt="The Web IT Shop Office"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Since badge */}
            <div className="absolute -bottom-3 -right-3 md:right-4 bg-brass-500 text-ink-900 px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-brass-glow">
              Since 2019
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Welcome to <span className="text-brass-500">The Web IT Shop</span>
          </h2>
          <p className="text-ink-700 dark:text-paper-200 leading-relaxed mb-6">
            {aboutContent.intro}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all hover:shadow-brass-glow"
          >
            Learn More About Us
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  );
}
