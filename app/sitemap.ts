import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { packages } from "@/data/packages";

const BASE_URL = "https://www.thewebitshop.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/e-trust`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/payment-details`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service category pages
  const servicePages: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${BASE_URL}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Sub-service pages
  const subServicePages: MetadataRoute.Sitemap = services.flatMap((cat) =>
    cat.subServices.map((sub) => ({
      url: `${BASE_URL}/services/${cat.slug}/${sub.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Package pages
  const packagePages: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${BASE_URL}/packages/${pkg.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    "terms-and-conditions",
    "privacy-policy",
    "refund-policy",
  ].map((doc) => ({
    url: `${BASE_URL}/legal/${doc}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...corePages, ...servicePages, ...subServicePages, ...packagePages, ...legalPages];
}
