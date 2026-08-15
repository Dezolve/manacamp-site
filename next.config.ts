import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/help",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/help/:path*",
        destination: "/support/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
