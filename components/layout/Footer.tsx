import Link from "next/link";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { footerQuickLinks } from "@/data/navigation";
import { offices } from "@/data/offices";

function SocialIcon({ platform }: { platform: string }) {
  const letter = platform.charAt(0).toUpperCase();
  return (
    <span className="font-display text-sm font-bold leading-none">{letter}</span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const headOffice = offices[0];

  return (
    <footer className="bg-ink-900 text-paper-50/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="The Web IT Shop"
                className="h-10 sm:h-12 w-auto filter dark:brightness-110 mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-paper-50/80">
              {company.description.substring(0, 200)}...
            </p>
            <div className="flex items-center gap-3">
              {company.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-paper-50/5 flex items-center justify-center hover:bg-brass-500 hover:text-ink-900 transition-all duration-200"
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-paper-50 font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-50/80 hover:text-brass-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-paper-50 font-display text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 10).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm text-paper-50/80 hover:text-brass-500 transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-paper-50 font-display text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brass-500 shrink-0 mt-0.5" />
                <span className="text-sm text-paper-50/90">{headOffice.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brass-500 shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`tel:${company.primaryPhone}`}
                    className="block text-sm font-mono text-paper-50 hover:text-brass-500 transition-colors"
                  >
                    {company.primaryPhone}
                  </a>
                  <a
                    href={`tel:${company.secondaryPhone}`}
                    className="block text-sm font-mono text-paper-50 hover:text-brass-500 transition-colors"
                  >
                    {company.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brass-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm text-paper-50/90 hover:text-brass-500 transition-colors break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-paper-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-paper-50/80">
            © 2019–{year} The Web IT Shop. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-paper-50/80">
            <Link href="/legal/terms-and-conditions" className="hover:text-brass-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-brass-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/refund-policy" className="hover:text-brass-500 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
