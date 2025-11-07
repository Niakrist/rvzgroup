import { fetchCategory } from "@/api/fetchCategory";
import { getProducts } from "@/api/getProducts";
import { getItemBearing } from "@/api/getItemBearing";
import { PopularProduct, ProductCard, ProductCharacteristic } from "@/components";
import TagList from "@/components/TagList/TagList";
import { urlPaths } from "@/constants/urlPaths";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import React from "react";
import { getProductsWithoutPagination } from "@/api/getProductsWithoutPagination";
import { IBearing } from "@/types/bearing";

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
export async function generateMetadata({ params }: IProductPageProps): Promise<Metadata> {
  const { url } = await params;
  const bearingItem = await getItemBearing(url);
  if (!bearingItem) notFound();
  const { title, name, price, images, innerDiameter, outerDiameter, widthBearing } = bearingItem;
  const imageUrl = images?.[0];

  const metaDescription = `Купить подшипник ${name} ${
    price ? "за " + price + " ₽" : "по низкой цене"
  }. Характеристики подшипника ${name}: ⌀ внутренний диаметр ${innerDiameter} мм, наружный диаметр ${outerDiameter} мм, ширина ${widthBearing} мм. Собственное производство, высокое качество, выгодные цены. Доставка по всей России. В наличии на складе!`;

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: `https://rvzgroup.ru/products/${url}`,
    },
    openGraph: {
      title,
      description: metaDescription,
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
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams(): Promise<Array<{ url: string }>> {
  try {
    const allProducts: IBearing[] | [] = await getProductsWithoutPagination();
    if (!allProducts?.length) {
      return [];
    }
    return allProducts.slice(0, 100).map((product) => ({
      url: product.url,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { url } = await params;
  const products = await getProducts();
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
      price: bearingItem.price || bearingItem.priceRvz,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: `https://rvzgroup.ru/product/${bearingItem.url}`,
    },
    image: bearingItem.images?.[0] || "",
  };

  const urlArray = Object.keys(urlPaths) as UrlPathKey[];
  const urlsCategory: ICategory[] = [];

  for (const item of urlArray) {
    if (bearingItem[item]) {
      const data = await fetchCategory(item);
      if (Array.isArray(data)) {
        const tag = data.find((elem) => elem.id === bearingItem[item]);
        urlsCategory.push(tag);
      }
    }
  }

  const paramsForPopularProduct = new URLSearchParams({
    popular: "true",
  });

  const popularProducts = await getProductsWithoutPagination(paramsForPopularProduct);

  if (!products) return <div>Загрузка</div>;

  console.log("bearingItem: ", bearingItem);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductCard bearingItem={bearingItem} />
      <ProductCharacteristic bearingItem={bearingItem} />
      {!!popularProducts.length && <PopularProduct products={popularProducts} />}
      <TagList
        size={bearingItem.size}
        urlsCategory={urlsCategory}
        innerDiameter={bearingItem.innerDiameter}
        outerDiameter={bearingItem.outerDiameter}
        widthBearing={bearingItem.widthBearing}
      />
    </>
  );
}
