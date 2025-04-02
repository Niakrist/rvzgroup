import { getCategories } from "@/api/getCategories";
import Products from "@/components/Products/Products";
import React from "react";

export default async function CatalogPage(): Promise<React.JSX.Element> {
  const products = await getCategories();

  if (!products) return <div>Загрузка products</div>;

  return (
    <>
      <Products bearingList={products.rows} />
    </>
  );
}
