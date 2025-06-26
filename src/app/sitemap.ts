import {
  sitamapCategory,
  sitemapBearings,
  sitemapServicesPage,
  sitemapSpecifications,
} from "@/constants/sitemap";
import { MetadataRoute } from "next";

export const revalidate = 86400; // Обновлять раз в сутки

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries = [
    // Главные страницы
    ...sitemapServicesPage.map((url) => ({
      url: `https://rvzgroup.ru/${url}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    })),

    // Категории
    ...sitamapCategory.map((url) => ({
      url: `https://rvzgroup.ru/${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Категории фильтров
    ...sitemapSpecifications.map((url) => ({
      url: `https://rvzgroup.ru/${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Товары
    ...sitemapBearings.map((url) => ({
      url: `https://rvzgroup.ru/${url}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    })),
  ];

  console.log(`Sitemap generated with ${sitemapEntries.length} URLs`);
  return sitemapEntries;
}
