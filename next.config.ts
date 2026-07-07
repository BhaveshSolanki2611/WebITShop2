import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from thewebitshop.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thewebitshop.com",
        pathname: "/**",
      },
    ],
  },

  // Production security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // Compress output
  compress: true,

  // Powered-by header removal
  poweredByHeader: false,
};

export default nextConfig;
