import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? "http://localhost:4000" : "http://localhost:4000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
      {
        source: "/images/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;
