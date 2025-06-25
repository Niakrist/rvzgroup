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
  async redirects() {
    return [
      // Редирект HTTP → HTTPS (только если запрос НЕ HTTPS)
      {
        source: "/:path*",
        has: [
          { type: "host", value: "rvzgroup.ru" },
          { type: "header", key: "x-forwarded-proto", value: "http" }, // Проверяем HTTP
        ],
        destination: "https://rvzgroup.ru/:path*",
        permanent: true,
      },
      // Редирект WWW → без WWW (для любых протоколов)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rvzgroup.ru" }],
        destination: "https://rvzgroup.ru/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
