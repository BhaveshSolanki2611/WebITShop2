import { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, Briefcase, Send } from "lucide-react";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join The Web IT Shop team. We're hiring talented web developers, digital marketers, SEO experts, and designers in Kirti Nagar, New Delhi.",
};

const openings = [
  { title: "Digital Marketing Executive", type: "Full-time", location: "Kirti Nagar, New Delhi" },
  { title: "Web Developer (PHP/WordPress)", type: "Full-time", location: "Kirti Nagar, New Delhi" },
  { title: "SEO Specialist", type: "Full-time", location: "Kirti Nagar, New Delhi" },
  { title: "Graphic Designer", type: "Full-time", location: "Kirti Nagar, New Delhi" },
  { title: "Business Development Executive", type: "Full-time", location: "Kirti Nagar, New Delhi" },
  { title: "Content Writer", type: "Full-time / Freelance", location: "Remote / New Delhi" },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Careers</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-brass-500">Careers</span> at The Web IT Shop
          </h1>
          <p className="text-paper-50/80 mt-4 max-w-2xl">
            Join our growing team and help build India&apos;s best digital solutions.
          </p>
        </div>
      </section>

      <Section>
        <ScrollReveal>
          <SectionLabel>Open Positions</SectionLabel>
          <h2 className="font-display text-3xl font-bold mb-10">
            Current <span className="text-brass-500">Openings</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4 max-w-3xl">
          {openings.map((job, i) => (
            <ScrollReveal key={job.title} delay={i * 0.05}>
              <div className="flex items-center justify-between p-6 rounded-2xl border border-slate-500/10 hover:border-brass-500/30 bg-paper-50 dark:bg-ink-800 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-brass-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{job.title}</h3>
                    <p className="text-xs text-ink-700 dark:text-paper-200 font-mono">{job.type} · {job.location}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${company.emails[0]}?subject=Application: ${job.title}`}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm bg-brass-500 text-ink-900 rounded-lg font-semibold hover:bg-brass-400 transition-colors"
                >
                  <Send className="w-4 h-4" /> Apply
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 p-8 rounded-2xl bg-paper-100 dark:bg-ink-800 border border-slate-500/10 max-w-3xl text-center">
            <p className="text-ink-700 dark:text-paper-200 mb-4">
              Don&apos;t see a role that fits? Send your resume to:
            </p>
            <a href={`mailto:${company.emails[0]}`} className="text-lg font-semibold text-brass-500 hover:underline">
              {company.emails[0]}
            </a>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
