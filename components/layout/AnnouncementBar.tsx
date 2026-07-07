'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem('announcement-dismissed');
    if (stored === 'true') {
      setDismissed(true);
    }
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem('announcement-dismissed', 'true');
  }

  if (!mounted || dismissed) return null;

  return (
    <div className="bg-ink-900 text-paper-50 relative z-50 hidden md:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-1.5 text-sm">
        {/* Left — Phone */}
        <a
          href="tel:+91-7065740676"
          className="flex items-center gap-1.5 font-mono-nums text-brass-500 transition-colors hover:text-brass-400"
        >
          <Phone className="h-3.5 w-3.5 animate-pulse" />
          <span>+91-7065740676</span>
        </a>

        {/* Center — Marquee */}
        <div className="mx-8 flex-1 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            <span className="mr-16 text-slate-400">
              Welcome to our website! Stay updated with our latest offers!
            </span>
            <span className="mr-16 text-slate-400">
              Welcome to our website! Stay updated with our latest offers!
            </span>
          </div>
        </div>

        {/* Right — Hiring Badge + Close */}
        <div className="flex items-center gap-3">
          <Link
            href="/careers"
            className="rounded-full bg-error-500 px-3 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-error-600"
          >
            We are Hiring!
          </Link>
          <button
            onClick={handleDismiss}
            className="rounded p-0.5 text-slate-400 transition-colors hover:bg-ink-700 hover:text-paper-50"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
