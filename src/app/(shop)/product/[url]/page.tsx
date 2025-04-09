import { getCategories } from "@/api/getCategories";
import { getItemBearing } from "@/api/getItemBearing";
import {
  PopularProduct,
  ProductCard,
  ProductCharacteristic,
} from "@/components";
import { SwiperSliderProducts } from "@/components";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Подшипник 6205",
  description: "Описание подшипника 6205",
};

interface IProductPageProps {
  params: Promise<{ url: string }>;
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { url } = await params;
  const products = await getCategories();
  const bearingItem = await getItemBearing(url);
  return (
    <>
      <ProductCard bearingItem={bearingItem} />
      <ProductCharacteristic bearingItem={bearingItem} />
      {/* <SwiperSliderProducts products={products.rows} /> */}
      <PopularProduct products={products.rows} />
    </>
  );
}
