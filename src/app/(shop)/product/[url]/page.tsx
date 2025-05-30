import { fetchCategory } from "@/api/fetchCategory";
import { getCategories } from "@/api/getCategories";
import { getItemBearing } from "@/api/getItemBearing";
import {
  PopularProduct,
  ProductCard,
  ProductCharacteristic,
} from "@/components";
import TagList from "@/components/TagList/TagList";

import { urlPaths } from "@/app/(shop)/catalog/[category]/page";

import { Metadata } from "next";
import React from "react";

// metadata: Metadata = {
//   title: "Подшипник 6205",
//   description: "Описание подшипника 6205",
// };

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

export async function generateMetadata({
  params,
}: IProductPageProps): Promise<Metadata> {
  const { url } = await params;
  const bearingItem = await getItemBearing(url);
  return {
    title: bearingItem.title,
    description: bearingItem.description,
  };
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { url } = await params;
  const products = await getCategories();
  const bearingItem = await getItemBearing(url);

  const urlArray = Object.keys(urlPaths);
  const urlsCategory: ICategory[] = [];

  for (const item of urlArray) {
    if (bearingItem[item]) {
      const data = await fetchCategory(item);
      urlsCategory.push(data[bearingItem[item] - 1]);
    }
  }

  return (
    <>
      <ProductCard bearingItem={bearingItem} />
      <ProductCharacteristic bearingItem={bearingItem} />
      <PopularProduct products={products.rows} />
      <TagList urlsCategory={urlsCategory} />
    </>
  );
}
