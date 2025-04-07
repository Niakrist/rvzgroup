import { getItemBearing } from "@/api/getItemBearing";
import {
  PopularProduct,
  ProductCard,
  ProductCharacteristic,
} from "@/components";

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
  const bearingItem = await getItemBearing(url);
  return (
    <>
      <ProductCard bearingItem={bearingItem} />
      <ProductCharacteristic bearingItem={bearingItem} />
      <PopularProduct />
    </>
  );
}
