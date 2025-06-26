import { getFilter } from "@/api/getFilter";
import {
  sitamapCategory,
  sitemapServicesPage,
  sitemapSpecifications,
} from "@/constants/sitemap";
import { IBearing } from "@/types/bearing";
import { IBearinData } from "@/types/product";
import { MetadataRoute } from "next";

const getAllBearings = async () => {
  const allProducts: IBearing[] = [];
  let pageNumber = 0;
  let allPage = null;

  do {
    const params = new URLSearchParams();
    params.set("page", String(pageNumber));
    const products: IBearinData | null = await getFilter(params);

    if (!products || !products.rows || products.rows.length === 0) break;

    if (!allPage) {
      allPage = Math.ceil(products.count / products.rows.length);
    }
    ++pageNumber;
    allProducts.push(...products.rows);
  } while (pageNumber < allPage);
  return allProducts;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticSitemap = [
    ...sitemapServicesPage,
    ...sitamapCategory,
    ...sitemapSpecifications,
  ].map((url) => ({
    url: `https://rvzgroup.ru/${url}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  try {
    const allProducts = await getAllBearings();

    const productUrls = allProducts.map((product) => ({
      url: `https://rvzgroup.ru/product/${product.url}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const, // потом поменять на weekly
      priority: 1, // потом поменять на 0.7
    }));
    return [...staticSitemap, ...productUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [...staticSitemap];
  }
}
