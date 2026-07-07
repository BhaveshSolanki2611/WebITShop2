"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-20 bg-paper-50 dark:bg-ink-900 transition-colors duration-300" />
      
      {/* Drafting grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-[0.05] drafting-grid mix-blend-multiply dark:mix-blend-lighten" />

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brass-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-cobalt-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              <div className="px-4 py-1.5 rounded-full border border-brass-500/30 bg-brass-500/10 text-brass-600 dark:text-brass-400 text-sm font-mono font-medium mb-6 backdrop-blur-sm shadow-sm">
                India's No.1 Web Designing Company
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-6 text-ink-900 dark:text-paper-50"
            >
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-600 to-brass-400 dark:from-brass-400 dark:to-brass-200">
                Branding
              </span>
              <br />
              Solution For Your{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cobalt-600 to-blue-400 dark:from-cobalt-400 dark:to-blue-300">Business</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-cobalt-500/20 dark:bg-cobalt-500/40 -z-10 rounded-sm" 
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-ink-700 dark:text-paper-200 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              We build precise, high-performing digital presences — websites, apps, SEO strategies, and brand identities — engineered to scale your business worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brass-500 to-brass-600 text-ink-900 rounded-xl font-bold text-base hover:from-brass-400 hover:to-brass-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-500/20 dark:border-paper-50/20 text-ink-900 dark:text-paper-50 rounded-xl font-semibold text-base hover:border-brass-500 hover:text-brass-600 dark:hover:text-brass-400 hover:bg-brass-500/5 transition-all duration-300"
              >
                View Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 mt-12 pt-8 border-t border-slate-500/15"
            >
              {[
                { value: "7500+", label: "Projects" },
                { value: "4200+", label: "Clients" },
                { value: "50+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-paper-50 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-ink-500 dark:text-paper-400 font-mono tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Logo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Ambient glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brass-500/10 to-cobalt-500/10 rounded-full blur-[80px]" />
            
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-dashed border-brass-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border border-slate-500/10 rounded-full"
            />

            {/* The Logo */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-paper-50 dark:bg-ink-900 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-500/10"
            >
              <img
                src="/images/logo.png"
                alt="The Web IT Shop"
                className="w-full max-w-[320px] h-auto object-contain drop-shadow-md filter dark:brightness-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
