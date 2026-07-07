import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CustomCursor } from "@/components/layout/CustomCursor";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Web IT Shop — Complete Branding Solution For Your Business",
    template: "%s | The Web IT Shop",
  },
  description:
    "TheWebITShop® in Kirti Nagar, New Delhi — Rated No.1 Web Designing Company in India. Web Development, Digital Marketing, SEO Services, Graphic Design & more.",
  keywords: [
    "web designing",
    "web development",
    "digital marketing",
    "SEO services",
    "New Delhi",
    "The Web IT Shop",
    "Kirti Nagar",
    "web designing company in Delhi",
    "software development",
    "graphic designing",
  ],
  authors: [{ name: "The Web IT Shop" }],
  creator: "The Web IT Shop",
  metadataBase: new URL("https://www.thewebitshop.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "The Web IT Shop",
    title: "The Web IT Shop — Complete Branding Solution For Your Business",
    description:
      "India's No.1 web designing company. Web Development, Digital Marketing, SEO, Graphic Design & Software Development.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@TheWebITShop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col drafting-grid">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <FloatingActions />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
