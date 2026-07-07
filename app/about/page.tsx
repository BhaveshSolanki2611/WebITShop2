import { Metadata } from "next";
import { AboutPage } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Web IT Shop — India's No.1 Web Designing Company in Kirti Nagar, New Delhi. Founded in 2019 by Nancy Gupta and Laxmi Gupta with 12+ years of experience.",
};

export default function Page() {
  return <AboutPage />;
}
