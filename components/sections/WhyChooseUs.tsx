import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { whyChooseUs } from "@/data/company";
import {
  Building2,
  ThumbsUp,
  IndianRupee,
  Timer,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "building-2": Building2,
  "thumbs-up": ThumbsUp,
  "indian-rupee": IndianRupee,
  timer: Timer,
};

export function WhyChooseUs() {
  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Why Us</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Why <span className="text-brass-500">Choose</span> Us
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item, i) => {
          const Icon = iconMap[item.icon] || Building2;
          return (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 text-center">
                <div className="w-14 h-14 rounded-xl bg-brass-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-500 group-hover:text-ink-900 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brass-500 group-hover:text-ink-900 transition-colors" />
                </div>
                <h3 className="font-display text-base font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-700 dark:text-paper-200">{item.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
