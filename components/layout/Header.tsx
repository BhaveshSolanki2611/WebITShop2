"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const mainLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Website Designing Packages", href: "/packages/website-designing" },
      { label: "SEO Packages", href: "/packages/seo" },
      { label: "SMO Packages", href: "/packages/smo" },
      { label: "PPC Packages", href: "/packages/ppc" },
    ],
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled
            ? "bg-paper-50/95 dark:bg-ink-900/95 backdrop-blur-xl shadow-medium border-b border-slate-500/10"
            : "bg-paper-50 dark:bg-ink-900 border-b border-slate-500/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/images/logo.png"
                alt="The Web IT Shop"
                className="h-10 lg:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    (link.hasMega || link.children) &&
                    setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      "text-ink-900 dark:text-paper-50 hover:text-brass-500 hover:bg-brass-500/5"
                    )}
                  >
                    {link.label}
                    {(link.hasMega || link.children) && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega Menu for Services */}
                  <AnimatePresence>
                    {link.hasMega && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px] z-[300]"
                      >
                        <div className="bg-paper-50 dark:bg-ink-800 rounded-xl shadow-elevated border border-slate-500/10 p-6 grid grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
                          {services.map((svc) => (
                            <div key={svc.slug}>
                              <Link
                                href={`/services/${svc.slug}`}
                                className="block text-sm font-semibold text-brass-500 hover:text-brass-600 mb-1.5 transition-colors"
                              >
                                {svc.name}
                              </Link>
                              {svc.subServices.length > 0 && (
                                <ul className="space-y-0.5">
                                  {svc.subServices.slice(0, 4).map((sub) => (
                                    <li key={sub.slug}>
                                      <Link
                                        href={`/services/${svc.slug}/${sub.slug}`}
                                        className="block text-xs text-ink-700 dark:text-paper-200 hover:text-brass-500 py-0.5 transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                  {svc.subServices.length > 4 && (
                                    <li>
                                      <Link
                                        href={`/services/${svc.slug}`}
                                        className="text-xs text-cobalt-500 font-mono hover:underline"
                                      >
                                        +{svc.subServices.length - 4} more
                                      </Link>
                                    </li>
                                  )}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Simple dropdown for Packages */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64 z-[300]"
                      >
                        <div className="bg-paper-50 dark:bg-ink-800 rounded-xl shadow-elevated border border-slate-500/10 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-ink-900 dark:text-paper-50 hover:text-brass-500 hover:bg-brass-500/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-brass-500/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-brass-500" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <a
                href={`tel:${company.primaryPhone}`}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brass-500 text-ink-900 rounded-lg text-sm font-semibold hover:bg-brass-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-mono">{company.primaryPhone}</span>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-brass-500/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] bg-paper-50 dark:bg-ink-900 pt-20 overflow-y-auto lg:hidden"
          >
            <nav className="px-6 py-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg font-semibold border-b border-slate-500/10"
              >
                Home
              </Link>
              {mainLinks.map((link) => (
                <MobileNavItem
                  key={link.label}
                  link={link}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-slate-500/10">
              <a
                href={`tel:${company.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brass-500 text-ink-900 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span className="font-mono">{company.primaryPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  link,
  onClose,
}: {
  link: (typeof mainLinks)[0];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = link.hasMega || link.children;

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className="block py-3 text-lg font-semibold border-b border-slate-500/10"
      >
        {link.label}
      </Link>
    );
  }

  const items = link.hasMega
    ? services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))
    : link.children || [];

  return (
    <div className="border-b border-slate-500/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3 text-lg font-semibold"
      >
        {link.label}
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-3 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 text-sm text-ink-700 dark:text-paper-200 hover:text-brass-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
