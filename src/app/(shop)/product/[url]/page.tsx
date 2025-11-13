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

  const getValidPrice = (bearingItem: IBearing) => {
    // Проверяем, что цена существует и является положительным числом
    const price = bearingItem.price || bearingItem.priceRvz;
    return price && price > 0 ? price : undefined;
  };

  const getAvailability = (bearingItem: IBearing) => {
    const hasStock = bearingItem.price > 0 || bearingItem.priceRvz > 0;
    return hasStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Подшипник ${bearingItem.name}`,
    description: bearingItem.description,
    productID: bearingItem.id1c || bearingItem.id,
    sku: bearingItem.id1cRvz || bearingItem.id,
    brand: {
      "@type": "Brand",
      name: bearingItem.brand || "РВЗ",
    },
    ...(getValidPrice(bearingItem) && {
      offers: {
        "@type": "Offer",
        price: getValidPrice(bearingItem),
        priceCurrency: "RUB",
        availability: getAvailability(bearingItem),
        url: `https://rvzgroup.ru/product/${bearingItem.url}`,
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          .toISOString()
          .split("T")[0],
      },
    }),
    image: bearingItem.images || [],
    category: bearingItem.group,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Внутренний диаметр",
        value: bearingItem.innerDiameter,
        unitCode: "MMT",
      },
      {
        "@type": "PropertyValue",
        name: "Наружный диаметр",
        value: bearingItem.outerDiameter,
        unitCode: "MMT",
      },
      {
        "@type": "PropertyValue",
        name: "Ширина",
        value: bearingItem.widthBearing,
        unitCode: "MMT",
      },
      { "@type": "PropertyValue", name: "Вес", value: bearingItem.weight, unitCode: "KGM" },
      { "@type": "PropertyValue", name: "Серия", value: bearingItem.series },
      { "@type": "PropertyValue", name: "Тип подшипника", value: bearingItem.bearingTypeId },
      { "@type": "PropertyValue", name: "Количество рядов", value: bearingItem.rowCountId },
      { "@type": "PropertyValue", name: "Конструкция", value: bearingItem.bearingDesignId },
      { "@type": "PropertyValue", name: "Материал", value: bearingItem.materialId },
      { "@type": "PropertyValue", name: "Тип уплотнения", value: bearingItem.sealId },
      { "@type": "PropertyValue", name: "Угол контакта", value: bearingItem.cornerId },
    ].filter((prop) => prop.value !== undefined && prop.value !== null),
    ...(bearingItem.analog && {
      isSimilarTo: {
        "@type": "Product",
        name: bearingItem.analog,
        url: bearingItem.analogUrl,
      },
    }),
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
