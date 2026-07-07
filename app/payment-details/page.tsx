import { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, CreditCard, Building, Copy } from "lucide-react";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";

export const metadata: Metadata = {
  title: "How to Pay",
  description:
    "Payment methods and bank details for The Web IT Shop services — bank transfer, UPI, and more.",
};

export default function PaymentDetailsPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">How to Pay</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Payment <span className="text-brass-500">Details</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionLabel>Payment Methods</SectionLabel>
            <h2 className="font-display text-3xl font-bold mb-8">
              How to <span className="text-brass-500">Pay</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <div className="p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-brass-500" />
                  </div>
                  <h3 className="font-display font-semibold">Bank Transfer (NEFT/IMPS/RTGS)</h3>
                </div>
                <div className="space-y-2 text-sm font-mono bg-paper-100 dark:bg-ink-700 rounded-lg p-4">
                  <p>Bank details will be shared upon project confirmation.</p>
                  <p className="text-ink-700 dark:text-paper-200">Contact us for bank transfer details.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-brass-500" />
                  </div>
                  <h3 className="font-display font-semibold">UPI Payment</h3>
                </div>
                <p className="text-sm text-ink-700 dark:text-paper-200">
                  Pay conveniently via Google Pay, PhonePe, Paytm, or any UPI app. UPI ID will be shared upon confirmation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-brass-500/5 border border-brass-500/20 text-center">
                <p className="text-sm text-ink-700 dark:text-paper-200 mb-3">For payment details, contact us:</p>
                <a href="tel:+917065740676" className="text-lg font-mono font-bold text-brass-500 hover:underline">
                  +91-7065740676
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
