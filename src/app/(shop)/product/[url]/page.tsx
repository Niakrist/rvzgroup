import { fetchCategory } from "@/api/fetchCategory";
import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import { getItemBearing } from "@/api/getItemBearing";
import {
  PopularProduct,
  ProductCard,
  ProductCharacteristic,
} from "@/components";
import TagList from "@/components/TagList/TagList";
import { urlPaths } from "@/constants/urlPaths";
import { IBearinData } from "@/types/product";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import React from "react";

interface IProductPageProps {
  params: Promise<{ url: string }>;
}

interface ICategory {
  id: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  url: string;
}

type UrlPathKey = keyof typeof urlPaths;

// SEO
export async function generateMetadata({
  params,
}: IProductPageProps): Promise<Metadata> {
  const { url } = await params;
  const bearingItem = await getItemBearing(url);
  if (!bearingItem) notFound();
  const {
    title,
    description,
    name,
    price,
    images,
    innerDiameter,
    outerDiameter,
    widthBearing,
  } = bearingItem;
  const imageUrl = images?.[0];

  const metaDescription = `Купить подшипник ${name} ${
    price ? "за " + price + " ₽" : "по низкой цене"
  }. Характеристики подшипника ${name}: ⌀ внутрений диаметр ${innerDiameter} мм, наружный диаметр ${outerDiameter} мм, ширина ${widthBearing} мм. Собственное производство, высокое качество, выгодные цены. Доставка по всей России. В наличии на складе!`;

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: `https://rvzgroup.ru/products/${url}`,
    },
    openGraph: {
      title,
      description,
      url: `https://rvzgroup.ru/products/${url}`,
      images: [
        {
          url: imageUrl,
          width: 400,
          height: 400,
          alt: `Подшипник РВЗ ${name}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams(): Promise<Array<{ url: string }>> {
  try {
    const allProducts: IBearinData | null = await getFilter();
    if (!allProducts?.rows?.length) {
      return [];
    }
    return allProducts.rows.slice(0, 100).map((product) => ({
      url: product.url,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { url } = await params;
  const products = await getCategories();
  const bearingItem = await getItemBearing(url);

  if (!bearingItem) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Подшипник ${bearingItem.name}`,
    description: bearingItem.description,
    brand: {
      "@type": "Brand",
      name: bearingItem.brand || "РВЗ",
    },
    offers: {
      "@type": "Offer",
      price: bearingItem.price ? bearingItem.price : "По запросу",
      priceCurrency: "RUB",
      availability:
        bearingItem.price > 0 || bearingItem.priceRvz > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      url: `https://rvzgroup.ru/products/${bearingItem.url}`,
    },
    image: bearingItem.images?.[0] || "",
  };

  const urlArray = Object.keys(urlPaths) as UrlPathKey[];
  const urlsCategory: ICategory[] = [];

  for (const item of urlArray) {
    if (bearingItem[item]) {
      const data = await fetchCategory(item);
      if (Array.isArray(data)) {
        urlsCategory.push(data[bearingItem[item] - 1]);
      }
    }
  }
  if (!products) return <div>Загрузка</div>;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductCard bearingItem={bearingItem} />
      <ProductCharacteristic bearingItem={bearingItem} />
      <PopularProduct products={products.rows} />
      <TagList
        urlsCategory={urlsCategory}
        innerDiameter={bearingItem.innerDiameter}
        outerDiameter={bearingItem.outerDiameter}
        widthBearing={bearingItem.widthBearing}
      />
    </>
  );
}
