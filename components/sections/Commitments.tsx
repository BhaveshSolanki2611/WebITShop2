import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { commitments } from "@/data/company";

export function Commitments() {
  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Our Promise</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            We&apos;re <span className="text-brass-500">Committed</span> to Deliver
            High Quality Projects
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {commitments.map((item, i) => (
          <ScrollReveal key={item.number} delay={i * 0.1}>
            <div className="relative p-8 rounded-2xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300">
              <span className="font-mono text-6xl font-bold text-brass-500/15 absolute top-4 right-6">
                {item.number}
              </span>
              <div className="relative">
                <h3 className="font-display text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-700 dark:text-paper-200">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
