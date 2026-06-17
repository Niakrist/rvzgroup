import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/products/:slug",
        destination: "/product/:slug",
        permanent: true, // 301
      },
    ];
  },
  experimental: {
    optimizeCss: true, // Включаем встраивание критического CSS
  },
};

export default nextConfig;
