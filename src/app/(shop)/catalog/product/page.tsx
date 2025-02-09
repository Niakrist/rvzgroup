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

export default function ProductPage() {
  return (
    <>
      <ProductCard />
      <ProductCharacteristic />
      <PopularProduct />
    </>
  );
}
