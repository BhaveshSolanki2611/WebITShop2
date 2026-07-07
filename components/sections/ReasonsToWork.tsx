import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { reasonsToWork } from "@/data/company";
import { Palette, Award, TrendingUp, Link as LinkIcon } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  award: Award,
  "trending-up": TrendingUp,
  link: LinkIcon,
};

export function ReasonsToWork() {
  return (
    <Section className="bg-paper-100 dark:bg-ink-800">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Why Work With Us</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Reasons to <span className="text-brass-500">Work</span> Together
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {reasonsToWork.map((item, i) => {
          const Icon = iconMap[item.icon] || Palette;
          return (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group text-center p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-900 hover:border-brass-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-brass-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-500 transition-colors">
                  <Icon className="w-7 h-7 text-brass-500 group-hover:text-ink-900 transition-colors" />
                </div>
                <h3 className="font-display text-sm font-semibold">{item.title}</h3>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
