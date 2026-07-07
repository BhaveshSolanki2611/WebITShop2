"use client";

import { useRef, useEffect, useState } from "react";
import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { statCounters } from "@/data/company";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-mono text-4xl md:text-5xl font-bold text-brass-500">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function StatCounters() {
  return (
    <Section dark>
      <div className="registration-mark registration-mark--tl text-paper-50" />
      <div className="registration-mark registration-mark--br text-paper-50" />

      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-paper-50">
            Numbers That <span className="text-brass-500">Speak</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statCounters.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-paper-50/80 font-mono uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
