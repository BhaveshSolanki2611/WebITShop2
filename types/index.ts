// ============================================================
// The Web IT Shop — Master Type Definitions
// ============================================================

export interface SubService {
  slug: string;
  name: string;
  excerpt: string;
  body: string;
  image: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  excerpt: string;
  heroImage: string;
  intro: string;
  bullets: string[];
  subServices: SubService[];
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  photo: string;
}

export interface PricingTier {
  name: string;
  price: string;
  webSpace: string;
  bandwidth: string;
  emailAccounts: number;
  pages: number;
}

export interface PackageType {
  slug: string;
  name: string;
  tiers: PricingTier[];
  sharedFeatures: string[];
}

export interface OfficeLocation {
  name: string;
  shortName: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  mapsUrl: string;
}

export interface GalleryCategory {
  slug: string;
  name: string;
  items: GalleryItem[];
}

export interface GalleryItem {
  image: string;
  alt: string;
  videoUrl?: string;
}

export interface Location {
  slug: string;
  name: string;
  region: "delhi-ncr" | "india" | "usa" | "international";
  priority: boolean;
}

export interface PortfolioCaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  coverImage: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  founded: number;
  tagline: string;
  description: string;
  primaryPhone: string;
  secondaryPhone: string;
  emails: string[];
  whatsappNumber: string;
  socialLinks: SocialLink[];
  gaId: string;
  metaPixelId: string;
}

export interface StatCounter {
  label: string;
  value: number;
  suffix: string;
}

export interface SkillBar {
  label: string;
  percentage: number;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface EnquiryOption {
  value: string;
  label: string;
}
