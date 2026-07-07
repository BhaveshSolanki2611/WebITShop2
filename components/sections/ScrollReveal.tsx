"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-title-block text-brass-500 mb-4">
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 ${
        dark ? "bg-ink-900 text-paper-50" : ""
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
