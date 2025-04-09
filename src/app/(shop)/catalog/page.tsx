import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import Products from "@/components/Products/Products";
import { ISearchParams } from "@/types/ISearchParams.interface";
import { getFilteredProducts } from "@/utils/getFilteredProducts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Каталог подшипников",
};

interface ICatalogPageProps {
  searchParams: Promise<ISearchParams>;
}

export default async function CatalogPage({
  searchParams,
}: ICatalogPageProps): Promise<React.JSX.Element> {
  const search = await searchParams;

  const searchParamsToSend = getFilteredProducts(search);

  const products = searchParamsToSend.size
    ? await getFilter(searchParamsToSend)
    : await getCategories();

  if (!products) return <div>Загрузка products</div>;

  return (
    <>
      <Products bearingList={products.rows} count={products.count} />
    </>
  );
}
