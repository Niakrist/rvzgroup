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
        source: "/:path*",
        has: [
          { type: "host", value: "rvzgroup.ru" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://rvzgroup.ru/:path*",
        permanent: true,
      },
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
