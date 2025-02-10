import { Cart } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Подшипник 204",
  description: "Купить подшипник 204",
};

export default function CartPage() {
  return (
    <>
      <Cart />
    </>
  );
}
