import { PortfolioCaseStudy } from "@/types";

// SAMPLE DATA — Real case studies needed from client
// Flagged in CONTENT-NEEDED.md
export const portfolio: PortfolioCaseStudy[] = [
  {
    slug: "marble-exporter-ecommerce",
    title: "Marble Export E-Commerce Platform",
    client: "Premium Stone Exports",
    industry: "Marble & Granite",
    coverImage: "/images/portfolio/marble-ecommerce.jpg",
    problem:
      "A leading marble exporter needed a multi-language e-commerce platform to showcase their product catalog to international buyers, with real-time inventory and inquiry management.",
    solution:
      "Built a custom e-commerce platform with product catalog featuring 500+ marble varieties, multi-currency pricing, WhatsApp inquiry integration, and a comprehensive admin panel for managing products, inquiries, and orders.",
    result: "3x increase in international inquiries within 6 months, 45% reduction in catalog management time.",
  },
  {
    slug: "hotel-booking-website",
    title: "Hotel Chain Booking Website",
    client: "Royal Heritage Hotels",
    industry: "Hotel & Hospitality",
    coverImage: "/images/portfolio/hotel-booking.jpg",
    problem:
      "A boutique hotel chain required a modern booking website with real-time room availability, online payments, and integration with their existing property management system.",
    solution:
      "Developed a responsive booking website with real-time availability calendar, secure payment gateway integration, room comparison features, guest reviews section, and custom CMS for managing room inventory and rates.",
    result: "60% increase in direct bookings, reducing dependency on OTA platforms by 35%.",
  },
  {
    slug: "education-management-system",
    title: "School Management Software",
    client: "Delhi Public Academy",
    industry: "College & Education",
    coverImage: "/images/portfolio/school-management.jpg",
    problem:
      "A growing school network needed a unified management system for student enrollment, attendance tracking, fee management, and parent communication across multiple branches.",
    solution:
      "Built a comprehensive school management ERP with modules for admissions, attendance, grade management, fee collection with online payment, SMS/email notifications to parents, and a mobile app for teachers and parents.",
    result: "Reduced administrative workload by 50%, improved fee collection rate to 95%, streamlined communication with 2000+ parents.",
  },
  {
    slug: "restaurant-digital-marketing",
    title: "Restaurant Chain Digital Marketing",
    client: "Spice Route Restaurants",
    industry: "Restaurant & Food",
    coverImage: "/images/portfolio/restaurant-marketing.jpg",
    problem:
      "A multi-location restaurant chain needed to improve their online visibility, manage reviews across platforms, and drive more foot traffic through digital channels.",
    solution:
      "Implemented a comprehensive digital marketing strategy including Google Business Profile optimization for all 5 locations, social media marketing with food photography content, targeted local SEO, and review management system.",
    result: "150% increase in Google Maps visibility, 4.7-star average rating across all locations, 40% increase in weekend reservations.",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioCaseStudy | undefined {
  return portfolio.find((p) => p.slug === slug);
}
