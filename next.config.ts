import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization from Supabase storage
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
