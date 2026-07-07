"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const actions = [
  {
    label: "Call Now",
    href: "tel:+917065740676",
    icon: Phone,
    bgColor: "bg-[#22c55e]",
    hoverColor: "hover:bg-[#16a34a]",
  },
  {
    label: "WhatsApp",
    href: getWhatsAppUrl("Hi! I'm interested in your services."),
    icon: MessageCircle,
    bgColor: "bg-[#25D366]",
    hoverColor: "hover:bg-[#1da851]",
    external: true,
  },
  {
    label: "Enquiry",
    href: "/contact",
    icon: Mail,
    bgColor: "bg-[#c7952e]",
    hoverColor: "hover:bg-[#a87b24]",
    isLink: true,
  },
];

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9990] flex flex-col gap-2 md:gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        const className = `flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-110 ${action.bgColor} ${action.hoverColor}`;
        
        if (action.isLink) {
          return (
            <Link
              key={action.label}
              href={action.href}
              className={className}
              aria-label={action.label}
              title={action.label}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          );
        }

        return (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className={className}
            aria-label={action.label}
            title={action.label}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        );
      })}
    </div>
  );
}
