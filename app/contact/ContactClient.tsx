"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal, Section, SectionLabel } from "@/components/sections/ScrollReveal";
import { offices } from "@/data/offices";
import { company, enquiryOptions } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  Home,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to API/Resend
    setSubmitted(true);
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-ink-900 text-paper-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-paper-50/80 mb-4 font-mono">
            <Link href="/" className="hover:text-brass-500 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brass-500">Contact Us</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Contact <span className="text-brass-500">Us</span>
          </h1>
        </div>
      </section>

      {/* Office Cards */}
      <Section>
        <ScrollReveal>
          <SectionLabel>Our Offices</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Visit <span className="text-brass-500">Our</span> Offices
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, i) => (
            <ScrollReveal key={office.shortName} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-800 hover:border-brass-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-brass-500" />
                </div>
                <h3 className="font-display font-semibold mb-2 text-sm">{office.shortName}</h3>
                <p className="text-xs text-ink-700 dark:text-paper-200 mb-4 flex-1">{office.address}</p>
                {office.phone && (
                  <a
                    href={`tel:${office.phone}`}
                    className="text-xs font-mono text-brass-500 hover:underline mb-3 inline-block"
                  >
                    {office.phone}
                  </a>
                )}
                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cobalt-500 hover:text-brass-500 transition-colors"
                >
                  View on Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section className="bg-paper-100 dark:bg-ink-800">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Send Us a <span className="text-brass-500">Message</span>
            </h2>

            {submitted ? (
              <div className="text-center py-12 rounded-2xl bg-paper-50 dark:bg-ink-900 border border-success-500/30">
                <CheckCircle2 className="w-16 h-16 text-success-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-ink-700 dark:text-paper-200">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-500/20 bg-paper-50 dark:bg-ink-900 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-500/20 bg-paper-50 dark:bg-ink-900 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/20 outline-none transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-500/20 bg-paper-50 dark:bg-ink-900 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/20 outline-none transition-all text-sm font-mono"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-500/20 bg-paper-50 dark:bg-ink-900 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/20 outline-none transition-all text-sm"
                    >
                      <option value="">Select a service</option>
                      {enquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-500/20 bg-paper-50 dark:bg-ink-900 focus:border-brass-500 focus:ring-2 focus:ring-brass-500/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brass-500 text-ink-900 rounded-xl font-semibold hover:bg-brass-400 transition-all hover:shadow-brass-glow"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-900">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brass-500" />
                  </div>
                  <h3 className="font-display font-semibold">Call Us</h3>
                </div>
                <a href={`tel:${company.primaryPhone}`} className="block font-mono text-lg text-brass-500 hover:underline mb-1">
                  {company.primaryPhone}
                </a>
                <a href={`tel:${company.secondaryPhone}`} className="block font-mono text-sm text-ink-700 dark:text-paper-200 hover:text-brass-500 transition-colors">
                  {company.secondaryPhone}
                </a>
              </div>

              <div className="p-6 rounded-2xl border border-slate-500/10 bg-paper-50 dark:bg-ink-900">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brass-500" />
                  </div>
                  <h3 className="font-display font-semibold">Email Us</h3>
                </div>
                {company.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-sm text-ink-700 dark:text-paper-200 hover:text-brass-500 transition-colors mb-1">
                    {email}
                  </a>
                ))}
              </div>

              <a
                href={getWhatsAppUrl("Hi! I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-6 rounded-2xl bg-success-500 text-white hover:bg-success-600 transition-colors"
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-white/70">Quick response guaranteed</div>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
