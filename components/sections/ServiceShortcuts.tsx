import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";

const shortcuts = [
  { name: "Web Development", slug: "web-development", color: "from-cobalt-500/20 to-cobalt-700/10" },
  { name: "Web Designing", slug: "web-designing", color: "from-brass-500/20 to-brass-700/10" },
  { name: "Digital Marketing", slug: "digital-marketing", color: "from-success-500/20 to-success-600/10" },
  { name: "SEO Services", slug: "seo-services", color: "from-cobalt-400/20 to-cobalt-600/10" },
  { name: "E-Commerce Development", slug: "e-commerce-web-development", color: "from-brass-400/20 to-brass-600/10" },
  { name: "Software Development", slug: "software-development-services", color: "from-slate-400/20 to-slate-600/10" },
  { name: "Mobile App Development", slug: "mobile-application-development", color: "from-cobalt-500/20 to-cobalt-700/10" },
  { name: "Graphic Designing", slug: "graphic-designing", color: "from-brass-500/20 to-brass-700/10" },
];

export function ServiceShortcuts() {
  return (
    <Section>
      <ScrollReveal>
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
          Our <span className="text-brass-500">Core</span> Services
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shortcuts.map((svc, i) => (
          <ScrollReveal key={svc.slug} delay={i * 0.05}>
            <Link
              href={`/services/${svc.slug}`}
              className="group relative block rounded-xl overflow-hidden border border-slate-500/10 hover:border-brass-500/30 transition-all duration-300 hover:shadow-elevated"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${svc.color} flex items-center justify-center p-4`}
              >
                <div className="w-16 h-16 rounded-xl bg-paper-50/50 dark:bg-ink-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="font-mono text-xs text-brass-500 font-bold">
                    {svc.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-paper-50 dark:bg-ink-800">
                <h3 className="font-display text-sm font-semibold group-hover:text-brass-500 transition-colors">
                  {svc.name}
                </h3>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
