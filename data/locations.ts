import { Location } from "@/types";

export const locations: Location[] = [
  // Delhi NCR - Priority locations
  { slug: "kirti-nagar", name: "Kirti Nagar", region: "delhi-ncr", priority: true },
  { slug: "new-delhi", name: "New Delhi", region: "delhi-ncr", priority: true },
  { slug: "rohini", name: "Rohini", region: "delhi-ncr", priority: true },
  { slug: "adarsh-nagar", name: "Adarsh Nagar", region: "delhi-ncr", priority: true },
  { slug: "dwarka", name: "Dwarka", region: "delhi-ncr", priority: true },
  { slug: "karol-bagh", name: "Karol Bagh", region: "delhi-ncr", priority: true },
  { slug: "rajouri-garden", name: "Rajouri Garden", region: "delhi-ncr", priority: true },
  { slug: "janakpuri", name: "Janakpuri", region: "delhi-ncr", priority: true },
  { slug: "pitampura", name: "Pitampura", region: "delhi-ncr", priority: true },
  { slug: "noida", name: "Noida", region: "delhi-ncr", priority: true },
  { slug: "gurgaon", name: "Gurgaon", region: "delhi-ncr", priority: true },
  { slug: "faridabad", name: "Faridabad", region: "delhi-ncr", priority: true },
  { slug: "ghaziabad", name: "Ghaziabad", region: "delhi-ncr", priority: true },

  // Top India metros
  { slug: "mumbai", name: "Mumbai", region: "india", priority: true },
  { slug: "bangalore", name: "Bangalore", region: "india", priority: true },
  { slug: "hyderabad", name: "Hyderabad", region: "india", priority: true },
  { slug: "chennai", name: "Chennai", region: "india", priority: true },
  { slug: "kolkata", name: "Kolkata", region: "india", priority: true },
  { slug: "pune", name: "Pune", region: "india", priority: true },
  { slug: "ahmedabad", name: "Ahmedabad", region: "india", priority: true },
  { slug: "jaipur", name: "Jaipur", region: "india", priority: true },
  { slug: "lucknow", name: "Lucknow", region: "india", priority: true },
  { slug: "chandigarh", name: "Chandigarh", region: "india", priority: true },

  // USA - Bay Area
  { slug: "hayward", name: "Hayward", region: "usa", priority: true },
  { slug: "fremont", name: "Fremont", region: "usa", priority: true },
  { slug: "san-jose", name: "San Jose", region: "usa", priority: true },
  { slug: "oakland", name: "Oakland", region: "usa", priority: true },
  { slug: "san-francisco", name: "San Francisco", region: "usa", priority: true },

  // International
  { slug: "australia", name: "Australia", region: "international", priority: false },
  { slug: "united-kingdom", name: "United Kingdom", region: "international", priority: false },
  { slug: "canada", name: "Canada", region: "international", priority: false },
  { slug: "uae", name: "UAE", region: "international", priority: false },
  { slug: "singapore", name: "Singapore", region: "international", priority: false },
];

export function getPriorityLocations(): Location[] {
  return locations.filter((l) => l.priority);
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByRegion(region: Location["region"]): Location[] {
  return locations.filter((l) => l.region === region);
}
