import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function getWhatsAppUrl(message?: string): string {
  const base = "https://wa.me/917065740676";
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
