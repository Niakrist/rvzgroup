import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*", // Захватываем все запросы к /images/
        destination: "http://localhost:4000/:path*", // Перенаправляем их на бэкенд
      },
    ];
  },
};

export default nextConfig;
