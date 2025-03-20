import { getCategories } from "@/api/getCategories";
import Products from "@/components/Products/Products";
import React from "react";

export default async function CatalogPage() {
  const products = await getCategories();
  if (!products) return;

  return (
    <>
      <Products bearingList={products.rows} />
    </>
  );
}
