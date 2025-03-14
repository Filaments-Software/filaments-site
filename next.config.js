/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external domains here if you're using external images
    unoptimized: process.env.NODE_ENV === 'development', // Only for development
    remotePatterns: [
      // Add remote patterns if needed
    ],
  },
  // Configuration for both Webpack and Turbopack
  experimental: {
    turbo: {
      rules: {
        // Add any specific Turbopack rules here if needed
      },
    },
  },
  // SVG handling for Webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// Export with ES module syntax
export default nextConfig;
