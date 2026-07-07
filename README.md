# The Web IT Shop — Complete Branding Solution

A modern, production-ready website for **The Web IT Shop** — India's No.1 Web Designing Company based in Kirti Nagar, New Delhi.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom "Blueprint & Signal" design system
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **TypeScript**: Full type safety across all components

## ✨ Features

- 🎨 **Custom Design System** — Brass/Cobalt/Ink color palette with dark mode support
- 📱 **Fully Responsive** — Mobile-first design with breakpoints
- 🌙 **Dark/Light Theme** — Toggle with `data-theme` attribute, persists in localStorage
- 🖱️ **Custom Cursor** — Interactive brass dot + ring follower
- 📊 **88 Static Pages** — Services, packages, team, gallery, legal, and more
- 🔒 **Security Headers** — X-Frame-Options, CSP, Referrer-Policy
- 🗺️ **SEO Optimized** — Dynamic metadata, sitemap.xml, robots.txt
- ♿ **Accessible** — WCAG AA contrast, focus-visible states, semantic HTML
- 📞 **Floating Actions** — Call, WhatsApp, and Enquiry buttons always visible

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
app/                  # Next.js App Router pages
├── about/           # About Us page
├── contact/         # Contact page with form
├── services/        # Service category & sub-service pages
├── packages/        # Pricing packages
├── gallery/         # Image gallery
├── legal/           # Terms, Privacy, Refund policies
└── ...
components/
├── layout/          # Header, Footer, FloatingActions, CustomCursor
├── sections/        # Homepage sections (Hero, Services, Testimonials...)
└── ThemeProvider.tsx # Dark/Light theme context
data/                # Static data (company info, services, team, etc.)
lib/                 # Utility functions
types/               # TypeScript type definitions
```

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` for automatic deployments.

## 📄 License

© 2019–2026 The Web IT Shop. All Rights Reserved.
