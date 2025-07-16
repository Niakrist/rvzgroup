import React from "react";
import { Metadata } from "next";
import { Cart, PopularProduct } from "@/components";
import { getProducts } from "@/api/getProducts";

export const metadata: Metadata = {
  title: "Корзина",
  description: "Корзина с товаром",
};

export default async function CartPage() {
  const products = await getProducts();
  if (!products) return <div>Загрузка</div>;
  return (
    <>
      <Cart />
      <PopularProduct products={products.rows} />
    </>
  );
}
