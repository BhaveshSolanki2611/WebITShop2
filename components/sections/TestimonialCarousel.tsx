"use client";

import { ScrollReveal, Section, SectionLabel } from "./ScrollReveal";
import { testimonials } from "@/data/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What Our <span className="text-brass-500">Clients</span> Say
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-paper-100 dark:bg-ink-800 rounded-2xl p-8 md:p-12 text-center border border-slate-500/10">
                    <Quote className="w-10 h-10 text-brass-500/30 mx-auto mb-6" />
                    <blockquote className="text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl mx-auto">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-brass-500/20 border-2 border-brass-500/40 flex items-center justify-center">
                        <span className="font-display font-bold text-brass-500">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-ink-600 dark:text-paper-300 font-mono uppercase tracking-wider">
                          Client
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-paper-50 dark:bg-ink-700 shadow-medium flex items-center justify-center hover:bg-brass-500 hover:text-ink-900 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-paper-50 dark:bg-ink-700 shadow-medium flex items-center justify-center hover:bg-brass-500 hover:text-ink-900 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === selectedIndex
                    ? "bg-brass-500 w-8"
                    : "bg-slate-500/30 hover:bg-slate-500/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
