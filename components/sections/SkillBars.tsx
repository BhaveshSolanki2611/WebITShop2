"use client";

import { useRef, useEffect, useState } from "react";
import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { skillBars } from "@/data/company";

function AnimatedBar({ label, percentage }: { label: string; percentage: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-display font-semibold text-sm">{label}</span>
        <span className="font-mono text-sm text-brass-500">{percentage}%</span>
      </div>
      <div className="h-3 bg-slate-500/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brass-500 to-brass-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function SkillBars() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Skills That <span className="text-brass-500">Drive</span> Results
          </h2>
          <p className="text-ink-700 dark:text-paper-200 leading-relaxed">
            Our team brings deep expertise across web development, SEO optimization,
            and enterprise software solutions. These aren&apos;t just numbers — they
            represent years of delivering measurable results for our clients.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {skillBars.map((bar) => (
            <AnimatedBar key={bar.label} label={bar.label} percentage={bar.percentage} />
          ))}
        </ScrollReveal>
      </div>
    </Section>
  );
}
