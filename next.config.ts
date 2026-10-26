import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment — server-side rendering enabled by default.
  // Switch to `output: 'export'` for a fully static CDN deploy.
  // output: 'export',

  // Performance flags (Next.js 16)
  cacheComponents: true,
  partialPrefetching: true,

  // Images: disable the built-in loader when using static export.
  // images: { unoptimized: true },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
