"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { aboutContent, keyExpertise, values, commitments } from "@/data/company";
import { team } from "@/data/team";
import {
  ShieldCheck,
  HeartHandshake,
  Smile,
  Lightbulb,
  Users,
  Clock,
  Headphones,
  Home,
  ChevronRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const valueIcons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "heart-handshake": HeartHandshake,
  smile: Smile,
  lightbulb: Lightbulb,
  users: Users,
  clock: Clock,
  headphones: Headphones,
};

const tabs = [
  { key: "mission", label: "Our Mission", content: aboutContent.mission },
  { key: "vision", label: "Our Vision", content: aboutContent.vision },
  { key: "history", label: "Our History", content: aboutContent.history },
] as const;

export function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>("mission");

  return (
    <>
      {/* Breadcrumb Banner */}
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">About Us</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="text-brass-500">Us</span>
          </h1>
        </div>
      </section>

      {/* Company Intro */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-slate-500/10 shadow-elevated">
                <img
                  src="https://www.thewebitshop.com/static_files/25324161about-us.jpg"
                  alt="The Web IT Shop Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-brass-500 text-ink-900 px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-brass-glow">
                Since 2019
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-brass-500">The Web IT Shop</span>
            </h2>
            <div className="space-y-4 text-ink-700 dark:text-paper-200 leading-relaxed">
              <p>{aboutContent.intro}</p>
              <p>{aboutContent.established}</p>
              <p>{aboutContent.founders}</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Mission / Vision / History Tabs */}
      <Section className="bg-paper-100 dark:bg-ink-800">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-1 p-1 bg-paper-200/50 dark:bg-ink-700/50 rounded-xl mb-8 w-fit mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? "bg-brass-500 text-ink-900 shadow-sm"
                      : "text-ink-700 dark:text-paper-200 hover:text-brass-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg leading-relaxed text-ink-700 dark:text-paper-200 max-w-2xl mx-auto">
                {tabs.find((t) => t.key === activeTab)?.content}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Key Expertise */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Key Areas of <span className="text-brass-500">Expertise</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {keyExpertise.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.05}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-500/10 hover:border-brass-500/30 transition-colors bg-paper-50 dark:bg-ink-800">
                <div className="w-8 h-8 rounded-lg bg-brass-500/10 flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-bold text-brass-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-paper-100 dark:bg-ink-800">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What We <span className="text-brass-500">Stand</span> For
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const Icon = valueIcons[val.icon] || ShieldCheck;
            return (
              <ScrollReveal key={val.title} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-900 hover:border-brass-500/30 transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 rounded-xl bg-brass-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brass-500 transition-colors">
                    <Icon className="w-6 h-6 text-brass-500 group-hover:text-ink-900 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold mb-2 text-sm">{val.title}</h3>
                  <p className="text-xs text-ink-700 dark:text-paper-300">{val.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel>Our People</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Meet Our <span className="text-brass-500">Expert</span> Team
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {team.map((member, i) => (
            <ScrollReveal key={`${member.name}-${i}`} delay={i * 0.03}>
              <div className="group text-center p-4 rounded-xl border border-slate-500/10 hover:border-brass-500/30 transition-all duration-300 bg-paper-50 dark:bg-ink-800">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-full object-cover border-2 border-brass-500/30 group-hover:border-brass-500 transition-colors"
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-brass-500/20 to-cobalt-500/20 border-2 border-brass-500/30 flex items-center justify-center group-hover:border-brass-500 transition-colors">
                    <span className="font-display text-lg font-bold text-brass-500">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xs font-semibold truncate">{member.name}</h3>
                <p className="text-[10px] text-ink-600 dark:text-paper-300 font-mono uppercase tracking-wider mt-0.5 truncate">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
