import React from "react";
import { Metadata } from "next";
import { Cart, PopularProduct } from "@/components";
import { getCategories } from "@/api/getCategories";

export const metadata: Metadata = {
  title: "Подшипник 204",
  description: "Купить подшипник 204",
};

export default async function CartPage() {
  const products = await getCategories();
  if (!products) return <div>Загрузка</div>;
  return (
    <>
      <Cart />
      <PopularProduct products={products.rows} />
    </>
  );
}
