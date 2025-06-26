import {
  sitamapCategory,
  sitemapBearings,
  sitemapServicesPage,
  sitemapSpecifications,
} from "@/constants/sitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSitemap = [
    ...sitemapServicesPage,
    ...sitamapCategory,
    ...sitemapSpecifications,
    ...sitemapBearings,
  ].map((url) => ({
    url: `https://rvzgroup.ru/${url}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  return staticSitemap;
}
