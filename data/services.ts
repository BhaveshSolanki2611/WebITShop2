import { ServiceCategory, SubService } from "@/types";

export const services: ServiceCategory[] = [
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    excerpt:
      "Strategic digital marketing services including social media marketing, Google Business Profile SEO, YouTube promotion, WhatsApp marketing, and targeted campaigns to grow your business online.",
    heroImage: "/images/services/digital-marketing.jpg",
    intro:
      "The Web IT Shop is a leading Digital Marketing agency in Kirti Nagar, New Delhi. We craft data-driven strategies across social media, search engines, and paid advertising to help businesses reach their target audience, increase online visibility, and drive measurable growth.",
    bullets: [
      "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
      "Google Business Profile (GBP/GMB) SEO & Optimization",
      "YouTube Video Promotion & Channel Growth",
      "WhatsApp Business Marketing Campaigns",
      "Political Campaign Digital Marketing",
      "Internet Marketing & Online Advertising",
      "City-Wise Local Promotion Campaigns",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing & Strategy",
      "Email Marketing Automation",
      "Influencer Marketing Campaigns",
      "Online Reputation Management",
      "Conversion Rate Optimization",
      "Marketing Analytics & Reporting",
    ],
    subServices: [
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing",
        excerpt:
          "Build your brand presence across all major social media platforms with targeted campaigns and engaging content.",
        body: "Our Social Media Marketing services help businesses create a strong online presence across Facebook, Instagram, LinkedIn, Twitter, and more. We develop custom strategies that align with your brand voice, create engaging content, manage your community, and run targeted ad campaigns to drive real results.",
        image: "/images/services/social-media-marketing.jpg",
      },
      {
        slug: "gbp-gmb-google-business-profile-seo",
        name: "(GBP/GMB) Google Business Profile SEO",
        excerpt:
          "Optimize your Google Business Profile to rank higher in local search results and attract more customers.",
        body: "Get found by local customers with our Google Business Profile optimization services. We set up, verify, and optimize your GBP listing with accurate business information, compelling photos, regular posts, review management, and local SEO strategies to improve your visibility in Google Maps and local search results.",
        image: "/images/services/gbp-seo.jpg",
      },
      {
        slug: "youtube-promotion",
        name: "YouTube Promotion",
        excerpt:
          "Grow your YouTube channel with professional video promotion, SEO optimization, and audience targeting.",
        body: "Maximize your YouTube presence with our comprehensive promotion services. We handle video SEO optimization, thumbnail design, targeted advertising campaigns, audience growth strategies, and analytics to help your videos reach the right viewers and grow your subscriber base organically.",
        image: "/images/services/youtube-promotion.jpg",
      },
      {
        slug: "whatsapp-marketing",
        name: "WhatsApp Marketing",
        excerpt:
          "Reach your customers directly through WhatsApp Business with bulk messaging, catalogs, and automated responses.",
        body: "Leverage WhatsApp Business for direct customer engagement. Our WhatsApp marketing services include bulk messaging campaigns, business catalog setup, automated chatbot responses, broadcast lists, and WhatsApp Business API integration to help you communicate effectively with your audience.",
        image: "/images/services/whatsapp-marketing.jpg",
      },
      {
        slug: "political-campaign-marketing",
        name: "Political Campaign Marketing",
        excerpt:
          "Comprehensive digital marketing strategies for political campaigns including social media, ads, and voter outreach.",
        body: "Win elections with data-driven digital campaign strategies. We provide complete political digital marketing including social media campaign management, targeted voter outreach, content creation, online reputation management, WhatsApp campaigns, and real-time analytics to maximize your political reach.",
        image: "/images/services/political-campaign.jpg",
      },
      {
        slug: "internet-marketing",
        name: "Internet Marketing",
        excerpt:
          "Full-spectrum internet marketing services to establish and grow your online business presence.",
        body: "Our comprehensive internet marketing services cover every aspect of your online presence. From search engine marketing and display advertising to content marketing and email campaigns, we create integrated strategies that drive traffic, generate leads, and increase conversions for your business.",
        image: "/images/services/internet-marketing.jpg",
      },
      {
        slug: "city-wise-promotion",
        name: "City Wise Promotion",
        excerpt:
          "Targeted local marketing campaigns focused on specific cities and regions to reach your ideal local audience.",
        body: "Expand your business reach city by city with our targeted local promotion services. We create location-specific marketing campaigns, optimize your presence for local search, manage local directories, and run geo-targeted advertising to help you dominate specific markets across India and internationally.",
        image: "/images/services/city-wise-promotion.jpg",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    excerpt:
      "India's top web development company providing PHP, custom, e-commerce, and CMS website development with robust, scalable solutions.",
    heroImage: "/images/services/web-development.jpg",
    intro:
      "The Web IT Shop is one of India's top web development companies based in Kirti Nagar, New Delhi. We build robust, scalable, and secure web applications using modern technologies. From simple business websites to complex enterprise solutions, our expert developers deliver pixel-perfect, high-performance websites.",
    bullets: [
      "PHP Website Development",
      "Custom Website Development",
      "E-Commerce Website Development",
      "CMS Website Development (WordPress, Joomla, Drupal)",
      "Web Application Development",
      "API Development & Integration",
      "Database Design & Management",
      "Payment Gateway Integration",
      "Third-Party Service Integration",
      "Website Migration & Upgrades",
      "Performance Optimization",
      "Security Implementation & SSL",
      "Responsive & Cross-Browser Development",
      "Cloud Hosting & Deployment",
    ],
    subServices: [
      {
        slug: "php-website-development",
        name: "PHP Website Development",
        excerpt:
          "Professional PHP development for dynamic, database-driven websites and web applications.",
        body: "Build powerful web applications with our PHP development expertise. We create custom PHP solutions including dynamic websites, content management systems, e-commerce platforms, and enterprise web applications with clean code, security best practices, and scalable architecture.",
        image: "/images/services/php-development.jpg",
      },
      {
        slug: "customize-website-development",
        name: "Customize Website Development",
        excerpt:
          "Tailor-made website solutions designed specifically to meet your unique business requirements.",
        body: "Get a website built exactly to your specifications. Our custom development services provide tailored solutions that perfectly match your business processes, branding, and functionality needs. We work closely with you to understand your requirements and deliver a unique website that sets you apart.",
        image: "/images/services/custom-development.jpg",
      },
      {
        slug: "ecommerce-website-development",
        name: "Ecommerce Website Development",
        excerpt:
          "Complete e-commerce solutions with secure payments, inventory management, and seamless shopping experiences.",
        body: "Launch your online store with our comprehensive e-commerce development services. We build feature-rich online stores with product catalogs, shopping carts, secure payment gateways, inventory management, order tracking, and admin dashboards that make selling online effortless.",
        image: "/images/services/ecommerce-development.jpg",
      },
      {
        slug: "cms-website-development",
        name: "CMS Website Development",
        excerpt:
          "Content management system development on WordPress, Joomla, and Drupal for easy content updates.",
        body: "Take control of your website content with our CMS development services. We build and customize websites on popular CMS platforms including WordPress, Joomla, and Drupal, giving you the power to easily update content, add pages, manage media, and grow your site without technical expertise.",
        image: "/images/services/cms-development.jpg",
      },
    ],
  },
  {
    slug: "web-designing",
    name: "Web Designing",
    excerpt:
      "Creative web designing services where your first impression creates a lasting impression. Dynamic, static, responsive, and custom designs.",
    heroImage: "/images/services/web-designing.jpg",
    intro:
      "The Web IT Shop is a premier web designing company in Kirti Nagar, New Delhi. We believe your first impression should create a lasting impression. Our creative team designs visually stunning, user-friendly websites that reflect your brand identity and engage your visitors from the first click.",
    bullets: [
      "Dynamic Website Design",
      "Static Website Design",
      "Customize Website Design",
      "Mobile Responsive Website Design",
      "Web Re-Designing & Maintenance",
      "Template Based Website Design",
      "Business Websites Design",
      "Brochure/Catalog Design",
      "Company Logo Design",
      "Multi Vendor E-commerce Website Design",
      "Landing Page Design",
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Brand Identity Design",
    ],
    subServices: [
      {
        slug: "dynamic-website-design",
        name: "Dynamic Website Design",
        excerpt: "Interactive, database-driven dynamic websites with content management capabilities.",
        body: "Create engaging, interactive websites with our dynamic web design services. Dynamic websites feature content that updates automatically, database integration, user interaction capabilities, and admin panels for easy content management — perfect for businesses that need to frequently update their online presence.",
        image: "/images/services/dynamic-website.jpg",
      },
      {
        slug: "static-website-design",
        name: "Static Website Design",
        excerpt: "Fast, secure, and cost-effective static websites perfect for small businesses and portfolios.",
        body: "Get online quickly with our affordable static website design services. Static websites are fast-loading, secure, and cost-effective — ideal for businesses that need a professional online presence without complex functionality. Perfect for portfolios, brochure sites, and informational websites.",
        image: "/images/services/static-website.jpg",
      },
      {
        slug: "customize-website-design",
        name: "Customize Website Design",
        excerpt: "Fully customized website designs tailored to your brand vision and business goals.",
        body: "Stand out from the competition with a fully customized website design. We create unique, bespoke designs that perfectly represent your brand, align with your business goals, and provide an exceptional user experience tailored to your target audience.",
        image: "/images/services/customize-website.jpg",
      },
      {
        slug: "mobile-responsive-website-design",
        name: "Mobile Responsive Website Design",
        excerpt: "Websites that look perfect on every device — desktop, tablet, and mobile.",
        body: "Ensure your website looks and works perfectly on every device with our responsive design services. We create fluid, adaptive layouts that automatically adjust to any screen size, providing an optimal viewing and interaction experience across desktops, tablets, and smartphones.",
        image: "/images/services/responsive-design.jpg",
      },
      {
        slug: "web-re-designing-maintenance",
        name: "Web Re-Designing & Maintenance",
        excerpt: "Revitalize your existing website with modern design and ongoing maintenance services.",
        body: "Give your existing website a fresh, modern look with our redesign services. We analyze your current site, identify areas for improvement, and create a redesigned version that meets current web standards, improves user experience, and drives better results. Plus, ongoing maintenance to keep everything running smoothly.",
        image: "/images/services/web-redesign.jpg",
      },
      {
        slug: "template-based-website-design",
        name: "Template Based Website Design",
        excerpt: "Quick, affordable websites built on professional templates customized for your brand.",
        body: "Get a professional website quickly and affordably with our template-based design services. We customize high-quality templates to match your brand colors, content, and requirements, delivering a polished website at a fraction of the cost of custom design.",
        image: "/images/services/template-website.jpg",
      },
      {
        slug: "business-websites-design",
        name: "Business Websites Design",
        excerpt: "Professional business websites designed to establish credibility and generate leads.",
        body: "Establish a strong online presence with our professional business website design services. We create corporate websites that communicate your brand values, showcase your services, and include lead generation features to help convert visitors into customers.",
        image: "/images/services/business-website.jpg",
      },
      {
        slug: "brochure-catalog-design",
        name: "Brochure/Catalog Design",
        excerpt: "Digital and print-ready brochure and catalog designs that showcase your products beautifully.",
        body: "Showcase your products and services with stunning brochure and catalog designs. We create both digital and print-ready designs that highlight your offerings, communicate your brand story, and provide all the information your customers need in a visually appealing format.",
        image: "/images/services/brochure-design.jpg",
      },
      {
        slug: "company-logo-design",
        name: "Company Logo Design",
        excerpt: "Memorable, professional logo designs that capture your brand essence.",
        body: "Create a lasting first impression with a professionally designed logo. Our designers craft unique, memorable logos that capture your brand's essence, work across all media, and help establish strong brand recognition in your market.",
        image: "/images/services/logo-design.jpg",
      },
      {
        slug: "multi-vendor-e-commerce-website-design",
        name: "Multi Vendor E-commerce Website Design",
        excerpt: "Full-featured marketplace platforms where multiple vendors can sell their products.",
        body: "Launch your own online marketplace with our multi-vendor e-commerce design services. We build complete marketplace platforms where multiple sellers can register, list products, manage orders, and process payments — complete with admin controls, vendor dashboards, and customer-facing storefronts.",
        image: "/images/services/multi-vendor-ecommerce.jpg",
      },
    ],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    excerpt:
      "Proven SEO strategies to improve your search engine rankings, drive organic traffic, and grow your online visibility with measurable results.",
    heroImage: "/images/services/seo-services.jpg",
    intro:
      "The Web IT Shop delivers results-driven SEO services from Kirti Nagar, New Delhi. Our proven strategies combine on-page optimization, technical SEO, content enhancement, and authoritative link building to improve your search engine rankings and drive sustained organic traffic growth.",
    bullets: [
      "On-Page SEO Optimization",
      "Off-Page SEO & Link Building",
      "Technical SEO Audits & Fixes",
      "Content Optimization & Strategy",
      "Mobile SEO Optimization",
      "Backlink Building & Outreach",
      "Website Speed Optimization",
      "Comprehensive SEO Audits",
      "Local SEO & Google Maps",
      "Keyword Research & Strategy",
      "Competitor Analysis",
      "Analytics Monitoring & Reporting",
      "Schema Markup Implementation",
      "SEO-Friendly Content Writing",
    ],
    subServices: [
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        excerpt: "Optimize your website's content, structure, and HTML elements for search engines.",
        body: "Maximize your website's visibility with comprehensive on-page SEO. We optimize title tags, meta descriptions, header tags, content structure, internal linking, image alt texts, URL structure, and more to help search engines understand and rank your pages effectively.",
        image: "/images/services/on-page-seo.jpg",
      },
      {
        slug: "off-page-seo",
        name: "Off-Page SEO",
        excerpt: "Build authority and trust through quality backlinks, social signals, and brand mentions.",
        body: "Strengthen your website's authority with our off-page SEO services. We build high-quality backlinks through guest posting, directory submissions, social bookmarking, brand mentions, and strategic outreach to improve your domain authority and search rankings.",
        image: "/images/services/off-page-seo.jpg",
      },
      {
        slug: "technical-seo",
        name: "Technical SEO",
        excerpt: "Fix technical issues that prevent search engines from crawling and indexing your site properly.",
        body: "Ensure search engines can effectively crawl and index your website with our technical SEO services. We address crawlability issues, fix broken links, optimize site speed, implement structured data, improve mobile usability, and resolve all technical barriers to search performance.",
        image: "/images/services/technical-seo.jpg",
      },
      {
        slug: "content-optimization",
        name: "Content Optimization",
        excerpt: "Enhance your existing content to rank higher and engage your target audience better.",
        body: "Transform your content into a powerful SEO asset. We analyze and optimize your existing content for target keywords, readability, user intent, and engagement metrics. Our content optimization services ensure every page on your site contributes to your search visibility goals.",
        image: "/images/services/content-optimization.jpg",
      },
      {
        slug: "mobile-optimization",
        name: "Mobile Optimization",
        excerpt: "Ensure your website delivers a fast, seamless experience on all mobile devices.",
        body: "With mobile-first indexing, mobile optimization is critical. We ensure your website loads fast, displays correctly, and provides an excellent user experience on all mobile devices through responsive design, AMP implementation, mobile UX improvements, and Core Web Vitals optimization.",
        image: "/images/services/mobile-optimization.jpg",
      },
      {
        slug: "backlink-building",
        name: "Backlink Building",
        excerpt: "Acquire high-quality, relevant backlinks to boost your domain authority and rankings.",
        body: "Build a strong backlink profile with our white-hat link building services. We acquire high-quality, relevant backlinks from authoritative websites through guest posting, digital PR, resource link building, and strategic outreach to improve your domain authority and search rankings.",
        image: "/images/services/backlink-building.jpg",
      },
      {
        slug: "speed-optimization",
        name: "Speed Optimization",
        excerpt: "Make your website lightning fast to improve user experience and search rankings.",
        body: "Speed up your website for better rankings and user experience. We optimize images, minify code, leverage browser caching, implement CDNs, optimize server response times, and address Core Web Vitals to ensure your site loads in under 3 seconds on all devices.",
        image: "/images/services/speed-optimization.jpg",
      },
      {
        slug: "seo-audits",
        name: "SEO Audits",
        excerpt: "Comprehensive website audits identifying SEO issues and opportunities for improvement.",
        body: "Get a complete picture of your website's SEO health with our comprehensive audit services. We analyze technical SEO, on-page optimization, content quality, backlink profile, competitor positioning, and provide a prioritized action plan to improve your search rankings.",
        image: "/images/services/seo-audits.jpg",
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        excerpt: "Dominate local search results and Google Maps to attract nearby customers.",
        body: "Attract local customers with our specialized local SEO services. We optimize your Google Business Profile, build local citations, manage online reviews, create location-specific content, and implement local schema markup to help you rank higher in local search results and Google Maps.",
        image: "/images/services/local-seo.jpg",
      },
      {
        slug: "keyword-strategy",
        name: "Keyword Strategy",
        excerpt: "Data-driven keyword research and strategy to target the right search terms for your business.",
        body: "Target the right keywords with our data-driven keyword strategy services. We conduct thorough keyword research, analyze search intent, assess competition levels, identify long-tail opportunities, and create a comprehensive keyword map that guides your content and SEO efforts for maximum impact.",
        image: "/images/services/keyword-strategy.jpg",
      },
    ],
  },
  {
    slug: "graphic-designing",
    name: "Graphic Designing",
    excerpt:
      "Professional graphic design services including e-book design, posters, business cards, catalogues, and presentations.",
    heroImage: "/images/services/graphic-designing.jpg",
    intro:
      "The Web IT Shop offers professional graphic design services in Kirti Nagar, New Delhi. Our creative team transforms your ideas into visually compelling designs that communicate your brand message effectively across all media — digital and print.",
    bullets: [
      "E-Book Design & Layout",
      "Poster & Banner Design",
      "Business Card Design",
      "Catalogue & Brochure Design",
      "Presentation Design",
      "Social Media Graphics",
      "Infographic Design",
      "Packaging Design",
      "Brand Identity Systems",
      "Marketing Collateral Design",
    ],
    subServices: [
      {
        slug: "e-book-design",
        name: "E-Book Design",
        excerpt: "Professional e-book design and layout for digital publications.",
        body: "Create stunning digital publications with our e-book design services. We design professional layouts, typography, illustrations, and covers that make your e-books engaging, readable, and visually appealing across all e-reader devices and platforms.",
        image: "/images/services/ebook-design.jpg",
      },
      {
        slug: "poster-design",
        name: "Poster Design",
        excerpt: "Eye-catching poster designs for events, promotions, and advertising campaigns.",
        body: "Grab attention with our creative poster design services. Whether for events, product launches, promotions, or advertising campaigns, we create visually striking posters that communicate your message clearly and leave a lasting impression.",
        image: "/images/services/poster-design.jpg",
      },
      {
        slug: "business-card-design",
        name: "Business Card Design",
        excerpt: "Professional business card designs that make memorable first impressions.",
        body: "Make a great first impression with professionally designed business cards. We create unique, memorable card designs that reflect your brand personality, include all essential contact information, and stand out in a stack of cards.",
        image: "/images/services/business-card.jpg",
      },
      {
        slug: "catalogue-design",
        name: "Catalogue Design",
        excerpt: "Product and service catalogues designed to showcase your offerings professionally.",
        body: "Present your products and services in the best light with our professional catalogue design services. We create well-organized, visually appealing catalogues that make it easy for customers to browse, compare, and choose your offerings.",
        image: "/images/services/catalogue-design.jpg",
      },
      {
        slug: "presentation-design",
        name: "Presentation Design",
        excerpt: "Compelling presentation designs that engage your audience and deliver your message clearly.",
        body: "Deliver impactful presentations with our professional design services. We create visually stunning presentation slides with clear data visualization, consistent branding, engaging layouts, and compelling storytelling to help you communicate your ideas effectively.",
        image: "/images/services/presentation-design.jpg",
      },
    ],
  },
  {
    slug: "mobile-application-development",
    name: "Mobile Application Development",
    excerpt:
      "Custom mobile app development for iOS and Android platforms with intuitive designs and robust functionality.",
    heroImage: "/images/services/mobile-app-development.jpg",
    intro:
      "The Web IT Shop builds powerful, user-friendly mobile applications for iOS and Android platforms. From concept to deployment, we handle the entire mobile app development lifecycle with a focus on performance, security, and exceptional user experience.",
    bullets: [
      "iOS App Development (Swift/SwiftUI)",
      "Android App Development (Kotlin/Java)",
      "Cross-Platform App Development (React Native, Flutter)",
      "UI/UX Design for Mobile Apps",
      "App Store Optimization (ASO)",
      "App Maintenance & Updates",
      "Push Notification Integration",
      "In-App Payment Integration",
      "API Integration & Backend Development",
      "App Testing & Quality Assurance",
    ],
    subServices: [],
  },
  {
    slug: "e-commerce-web-development",
    name: "E-Commerce Web Development",
    excerpt:
      "Complete e-commerce solutions with product management, secure payments, and seamless shopping experiences.",
    heroImage: "/images/services/ecommerce-web-development.jpg",
    intro:
      "Launch and grow your online store with The Web IT Shop's comprehensive e-commerce development services. We build feature-rich, secure, and scalable online stores that provide seamless shopping experiences and drive sales for your business.",
    bullets: [
      "Custom E-Commerce Website Development",
      "Shopping Cart Development",
      "Payment Gateway Integration",
      "Product Catalog Management",
      "Inventory Management System",
      "Order Management & Tracking",
      "Customer Account Management",
      "Multi-Currency & Multi-Language Support",
      "E-Commerce SEO Optimization",
      "Mobile Commerce (M-Commerce)",
    ],
    subServices: [],
  },
  {
    slug: "ssl-certificate-service",
    name: "SSL Certificate Service",
    excerpt:
      "Secure your website with DV, OV, and EV SSL certificates for data encryption and customer trust.",
    heroImage: "/images/services/ssl-certificate.jpg",
    intro:
      "Protect your website and build customer trust with our SSL certificate services. The Web IT Shop provides Domain Validation (DV), Organization Validation (OV), and Extended Validation (EV) SSL certificates to secure your website data, improve search rankings, and give your visitors confidence.",
    bullets: [
      "Domain Validation (DV) SSL Certificates",
      "Organization Validation (OV) SSL Certificates",
      "Extended Validation (EV) SSL Certificates",
      "Wildcard SSL Certificates",
      "Multi-Domain SSL Certificates",
      "SSL Installation & Configuration",
      "SSL Certificate Renewal",
      "HTTPS Migration Assistance",
    ],
    subServices: [
      {
        slug: "dv-domain-validation-ssl-certificate",
        name: "DV (Domain Validation) SSL Certificate",
        excerpt: "Basic SSL encryption with domain ownership verification — ideal for blogs and small sites.",
        body: "Secure your website with a Domain Validation SSL certificate. DV certificates provide essential encryption and are issued quickly after verifying domain ownership. They're perfect for personal websites, blogs, and small business sites that need basic security without extensive validation.",
        image: "/images/services/dv-ssl.jpg",
      },
      {
        slug: "ov-organization-validation-ssl-certificate",
        name: "OV (Organization Validation) SSL Certificate",
        excerpt: "Enhanced SSL with business verification — recommended for company websites and e-commerce.",
        body: "Build greater trust with an Organization Validation SSL certificate. OV certificates verify your organization's identity and provide a higher level of assurance to visitors. They're recommended for business websites, e-commerce sites, and any site that handles sensitive customer information.",
        image: "/images/services/ov-ssl.jpg",
      },
      {
        slug: "ev-extended-validation-ssl-certificate",
        name: "EV (Extended Validation) SSL Certificate",
        excerpt: "Maximum trust SSL with rigorous business verification — the gold standard for security.",
        body: "Achieve the highest level of online trust with an Extended Validation SSL certificate. EV certificates undergo the most rigorous verification process and display your organization's name in the browser's address bar. They're the gold standard for banks, financial institutions, and high-profile e-commerce sites.",
        image: "/images/services/ev-ssl.jpg",
      },
    ],
  },
  {
    slug: "software-development-services",
    name: "Software Development Services",
    excerpt:
      "Custom software development including ERP, CRM, employee management, and industry-specific solutions.",
    heroImage: "/images/services/software-development.jpg",
    intro:
      "The Web IT Shop develops custom software solutions tailored to your business processes. From enterprise resource planning to customer relationship management, we build scalable, secure, and efficient software that streamlines operations and drives growth.",
    bullets: [
      "API & Integration Development",
      "Custom Software Development",
      "ERP Software Development",
      "CRM Software Development",
      "Employee Management Software",
      "School Management Software",
      "Data Entry Software Development",
      "Hotel Software Development",
      "Hospital Software Development",
      "Inventory Management Software",
      "Project Management Software",
      "HRMS Software Development",
    ],
    subServices: [
      {
        slug: "api-integration-development",
        name: "API & Integration Development",
        excerpt: "Custom API development and third-party service integration for seamless connectivity.",
        body: "Connect your systems and automate workflows with our API development and integration services. We build custom RESTful APIs, integrate third-party services, and create seamless data flows between your applications to improve efficiency and reduce manual processes.",
        image: "/images/services/api-integration.jpg",
      },
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        excerpt: "Bespoke software solutions built to address your specific business challenges.",
        body: "Get software built exactly for your needs. Our custom software development services create tailored solutions that address your unique business challenges, automate processes, and provide competitive advantages that off-the-shelf software cannot match.",
        image: "/images/services/custom-software.jpg",
      },
      {
        slug: "erp-software-development",
        name: "ERP Software Development",
        excerpt: "Enterprise resource planning systems to streamline and integrate your business operations.",
        body: "Streamline your entire business with our custom ERP software development. We build integrated enterprise resource planning systems that connect finance, HR, manufacturing, supply chain, and sales into a single platform for complete visibility and control over your operations.",
        image: "/images/services/erp-software.jpg",
      },
      {
        slug: "crm-software-development-services",
        name: "CRM Software Development Services",
        excerpt: "Customer relationship management systems to manage leads, sales, and customer interactions.",
        body: "Manage your customer relationships more effectively with our custom CRM development services. We build systems that track leads, manage sales pipelines, automate follow-ups, analyze customer behavior, and provide actionable insights to help you close more deals.",
        image: "/images/services/crm-software.jpg",
      },
      {
        slug: "employee-management-software",
        name: "Employee Management Software",
        excerpt: "HR and employee management systems for attendance, payroll, and performance tracking.",
        body: "Simplify HR operations with our employee management software. We build comprehensive systems that handle attendance tracking, leave management, payroll processing, performance reviews, document management, and employee self-service portals.",
        image: "/images/services/employee-management.jpg",
      },
      {
        slug: "school-management-software",
        name: "School Management Software",
        excerpt: "Complete school and education management systems for administration and academics.",
        body: "Modernize your educational institution with our school management software. We develop comprehensive systems covering student enrollment, attendance, grade management, fee collection, timetabling, parent communication, library management, and more.",
        image: "/images/services/school-management.jpg",
      },
      {
        slug: "data-entry-software-development",
        name: "Data Entry Software Development",
        excerpt: "Efficient data entry and management solutions for large-scale data processing needs.",
        body: "Streamline your data management with our custom data entry software solutions. We build efficient, user-friendly applications for large-scale data entry, validation, processing, and storage that reduce errors, save time, and improve data quality.",
        image: "/images/services/data-entry.jpg",
      },
      {
        slug: "hotel-software-development",
        name: "Hotel Software Development",
        excerpt: "Hotel management systems for reservations, guest management, and operations.",
        body: "Run your hotel more efficiently with our custom hotel management software. We build systems that handle room reservations, guest check-in/check-out, housekeeping management, billing, restaurant POS, and comprehensive reporting for your hospitality business.",
        image: "/images/services/hotel-software.jpg",
      },
      {
        slug: "hospital-software-development",
        name: "Hospital Software Development",
        excerpt: "Healthcare management systems for patient records, appointments, and hospital operations.",
        body: "Improve patient care and hospital efficiency with our custom healthcare software. We develop hospital management systems covering patient registration, appointment scheduling, electronic health records, lab management, pharmacy, billing, and regulatory compliance.",
        image: "/images/services/hospital-software.jpg",
      },
      {
        slug: "inventory-management-software",
        name: "Inventory Management Software",
        excerpt: "Track, manage, and optimize your inventory with custom inventory management solutions.",
        body: "Take control of your inventory with our custom management software. We build systems that track stock levels in real-time, automate reorder points, manage multiple warehouses, handle barcode/QR scanning, generate reports, and integrate with your existing sales and procurement systems.",
        image: "/images/services/inventory-management.jpg",
      },
    ],
  },
  {
    slug: "e-trust-certificate",
    name: "E-Trust Certificate",
    excerpt:
      "E-Trust certification to verify your business authenticity online and build customer confidence.",
    heroImage: "/images/services/e-trust-certificate.jpg",
    intro:
      "Build trust and credibility online with E-Trust certification services from The Web IT Shop. E-Trust certificates verify your business authenticity, display trust seals on your website, and give customers confidence that they're dealing with a legitimate, verified business entity.",
    bullets: [
      "Business Identity Verification",
      "E-Trust Seal Integration",
      "Website Authenticity Certification",
      "Digital Trust Building",
      "Customer Confidence Enhancement",
      "Online Business Verification",
    ],
    subServices: [],
  },
  {
    slug: "business-local-listing",
    name: "Business / Local Listing",
    excerpt:
      "Get your business listed on all major online directories and local search platforms for maximum visibility.",
    heroImage: "/images/services/business-listing.jpg",
    intro:
      "Boost your local presence with The Web IT Shop's business listing services. We ensure your business is accurately listed across all major online directories, local search platforms, and industry-specific listings to improve your visibility and attract more local customers.",
    bullets: [
      "Google Business Profile Setup & Optimization",
      "Local Directory Submissions",
      "Industry-Specific Listings",
      "NAP Consistency Management",
      "Review Management & Monitoring",
      "Citation Building & Cleanup",
      "Map Listing Optimization",
      "Business Listing Audits",
    ],
    subServices: [],
  },
  {
    slug: "wedding-e-invitation-card-design",
    name: "Wedding E Invitation Card Design",
    excerpt:
      "Beautiful digital wedding invitation cards with animations, RSVP features, and personalized designs.",
    heroImage: "/images/services/wedding-invitation.jpg",
    intro:
      "Create stunning digital wedding invitations with The Web IT Shop. Our designers craft beautiful, personalized e-invitation cards with elegant animations, RSVP functionality, event details, venue maps, and easy sharing options for a modern, eco-friendly wedding invitation experience.",
    bullets: [
      "Custom Wedding E-Invitation Design",
      "Animated Digital Invitations",
      "RSVP Integration",
      "Event Details & Venue Maps",
      "Social Media Sharing Options",
      "Multiple Design Templates",
      "Photo Gallery Integration",
      "WhatsApp & Email Distribution",
    ],
    subServices: [],
  },
  {
    slug: "brand-reputation-management",
    name: "Brand & Reputation Management",
    excerpt:
      "Protect and enhance your brand's online reputation with PR, digital branding, and reputation management services.",
    heroImage: "/images/services/brand-management.jpg",
    intro:
      "Protect and grow your brand's online reputation with The Web IT Shop. Our comprehensive brand management services include PR, digital branding, and online reputation management to ensure your business is perceived positively across all digital channels.",
    bullets: [
      "Public Relations (PR) Services",
      "Digital Branding Strategy",
      "Online Reputation Management (ORM)",
      "Review Monitoring & Response",
      "Social Media Brand Management",
      "Crisis Communication Management",
      "Brand Perception Analysis",
      "Competitor Brand Monitoring",
    ],
    subServices: [
      {
        slug: "pr-public-relations-agency",
        name: "PR (Public Relations) Agency",
        excerpt: "Professional PR services to build media relationships and manage your public image.",
        body: "Build and maintain a positive public image with our PR services. We handle media relations, press release distribution, event coordination, spokesperson training, and strategic communications to help your brand gain positive media coverage and public attention.",
        image: "/images/services/pr-agency.jpg",
      },
      {
        slug: "digital-branding-agency",
        name: "Digital Branding Agency",
        excerpt: "Comprehensive digital branding services to establish and grow your brand identity online.",
        body: "Create a powerful digital brand presence with our comprehensive branding services. We develop brand strategies, visual identities, brand guidelines, messaging frameworks, and digital brand experiences that resonate with your target audience and differentiate you from competitors.",
        image: "/images/services/digital-branding.jpg",
      },
      {
        slug: "online-reputation-management",
        name: "Online Reputation Management",
        excerpt: "Monitor, protect, and improve your brand's online reputation across all channels.",
        body: "Take control of your online reputation with our ORM services. We monitor mentions, manage reviews, address negative content, promote positive stories, and implement proactive reputation strategies to ensure your brand is perceived positively across search engines, social media, and review platforms.",
        image: "/images/services/orm.jpg",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((s) => s.slug === slug);
}

export function getSubService(
  categorySlug: string,
  subServiceSlug: string
): { category: ServiceCategory; subService: SubService } | undefined {
  const category = services.find((s) => s.slug === categorySlug);
  if (!category) return undefined;
  const subService = category.subServices.find((ss) => ss.slug === subServiceSlug);
  if (!subService) return undefined;
  return { category, subService };
}
