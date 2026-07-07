"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const actions = [
  {
    label: "Call Now",
    href: "tel:+917065740676",
    icon: Phone,
    bgColor: "#22c55e",
    hoverColor: "#16a34a",
  },
  {
    label: "WhatsApp",
    href: getWhatsAppUrl("Hi! I'm interested in your services."),
    icon: MessageCircle,
    bgColor: "#25D366",
    hoverColor: "#1da851",
    external: true,
  },
  {
    label: "Enquiry",
    href: "/contact",
    icon: Mail,
    bgColor: "#c7952e",
    hoverColor: "#a87b24",
    isLink: true,
  },
];

export function FloatingActions() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9990,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {actions.map((action) => {
        const Icon = action.icon;
        const buttonStyle: React.CSSProperties = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: action.bgColor,
          color: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          textDecoration: "none",
        };

        if (action.isLink) {
          return (
            <Link
              key={action.label}
              href={action.href}
              style={buttonStyle}
              aria-label={action.label}
              title={action.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15)";
                e.currentTarget.style.backgroundColor = action.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = action.bgColor;
              }}
            >
              <Icon style={{ width: "24px", height: "24px" }} />
            </Link>
          );
        }

        return (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            style={buttonStyle}
            aria-label={action.label}
            title={action.label}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.backgroundColor = action.hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = action.bgColor;
            }}
          >
            <Icon style={{ width: "24px", height: "24px" }} />
          </a>
        );
      })}
    </div>
  );
}
