"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Registration marks */}
      <div className="registration-mark registration-mark--tl" />
      <div className="registration-mark registration-mark--tr" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-title-block text-brass-500 mb-6">
                <span>Digital Agency — Since 2019</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Complete{" "}
              <span className="text-brass-500">Branding</span>{" "}
              Solution For Your{" "}
              <span className="text-cobalt-500">Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-ink-700 dark:text-paper-200 max-w-xl mb-8 leading-relaxed"
            >
              We build precise, high-performing digital presences — websites,
              apps, SEO strategies, and brand identities — engineered to scale
              your business across India and 50+ countries worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brass-500 text-ink-900 rounded-xl font-semibold text-base hover:bg-brass-400 transition-all duration-200 hover:shadow-brass-glow"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-current rounded-xl font-semibold text-base hover:text-brass-500 hover:border-brass-500 transition-colors"
              >
                View Services
              </Link>
            </motion.div>

            {/* Stats mini row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-500/15"
            >
              {[
                { value: "7500+", label: "Projects" },
                { value: "4200+", label: "Clients" },
                { value: "50+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl font-bold text-brass-500">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-600 dark:text-paper-300 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Browser Chrome Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Browser chrome */}
              <div className="bg-ink-900 rounded-2xl shadow-elevated overflow-hidden border border-slate-500/20">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-ink-800 border-b border-slate-500/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error-500/80" />
                    <div className="w-3 h-3 rounded-full bg-warning-500/80" />
                    <div className="w-3 h-3 rounded-full bg-success-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-ink-700 rounded-md px-3 py-1 text-xs font-mono text-paper-50/80 text-center">
                      thewebitshop.com
                    </div>
                  </div>
                </div>

                {/* Content area: wireframe draft animation */}
                <div className="p-6 space-y-4 min-h-[340px]">
                  {/* Nav wireframe */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 100 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="h-4 bg-brass-500/30 rounded border border-dashed border-brass-500/50"
                    />
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 40, opacity: 1 }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                          className="h-3 bg-paper-50/10 rounded"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hero block */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="origin-left"
                  >
                    <div className="h-32 rounded-lg bg-gradient-to-br from-cobalt-500/20 to-brass-500/20 border border-dashed border-cobalt-500/30 flex items-center justify-center">
                      <div className="space-y-2 text-center">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ delay: 1.4, duration: 0.4 }}
                          className="h-4 bg-paper-50/15 rounded mx-auto"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ delay: 1.6, duration: 0.4 }}
                          className="h-3 bg-paper-50/10 rounded mx-auto"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.8, duration: 0.3 }}
                          className="inline-block px-4 py-1.5 bg-brass-500/30 rounded text-[10px] font-mono text-brass-500 border border-brass-500/40 mt-2"
                        >
                          CTA BUTTON
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Grid blocks */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
                        className="h-20 rounded-lg border border-dashed border-paper-50/15 bg-paper-50/5 p-2"
                      >
                        <div className="h-2 w-2/3 bg-paper-50/10 rounded mb-1.5" />
                        <div className="h-1.5 w-full bg-paper-50/5 rounded mb-1" />
                        <div className="h-1.5 w-4/5 bg-paper-50/5 rounded" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer wireframe */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.4 }}
                    className="h-8 bg-paper-50/5 rounded-lg border border-dashed border-paper-50/10"
                  />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-brass-500/10 rounded-2xl border border-brass-500/20 -z-10"
              />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-cobalt-500/10 rounded-2xl border border-cobalt-500/20 -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
