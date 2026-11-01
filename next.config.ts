import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin tracing root so Next.js ignores the stray lockfile in C:\Users\AI HUB\
  outputFileTracingRoot: path.join(__dirname),

  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(__dirname, "node_modules/tailwindcss"),
    },
  },

  // Static export (required for shared hosting / Apache)
  output: "export",

  // Images handled by CDN / server (since export mode)
  images: {
    unoptimized: true,
  },

  // Trailing slash improves Apache compatibility
  trailingSlash: true,

  // Prevent unnecessary build output
  poweredByHeader: false,

  // Enable compression (effective on Vercel / Node servers)
  // On Apache/Nginx, gzip is handled via .htaccess / server config
  compress: true,

  // Strict mode helps detect hydration & SEO-breaking issues
  reactStrictMode: true,
};

export default nextConfig;
