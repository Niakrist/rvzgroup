import React from "react";
import { Metadata } from "next";
import { Cart, PopularProduct } from "@/components";

export const metadata: Metadata = {
  title: "Подшипник 204",
  description: "Купить подшипник 204",
};

export default function CartPage() {
  return (
    <>
      <Cart />
      <PopularProduct />
    </>
  );
}
