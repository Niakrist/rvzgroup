import { getCategories } from "@/api/getCategories";
import { getFilter } from "@/api/getFilter";
import CatalogNavBar from "@/components/CatalogNavBar/CatalogNavBar";
import Products from "@/components/Products/Products";
import { SideBar } from "@/components/SideBar/SideBar";
import { urlsForCategory } from "@/constants/urlsForCategory";
import { ISearchParams } from "@/types/ISearchParams.interface";
import { Htag } from "@/ui";
import { getFilteredProducts } from "@/utils/getFilteredProducts";
import { getMetadataForCategory } from "@/utils/getMetadataForCategory";
import { getParamsToSend } from "@/utils/getParamsToSend";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import styles from "../CatalogPage.module.css";

interface ICategoryPageProps {
  params: Promise<{ category: UrlsForCategoryKey }>;
  searchParams: Promise<ISearchParams>;
}

type UrlsForCategoryKey = keyof typeof urlsForCategory;

export async function generateMetadata({
  params,
}: ICategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const { title, description } = getMetadataForCategory(category);
  return {
    title,
    description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: ICategoryPageProps) {
  const { category } = await params;
  const search = await searchParams;

  if (!category) notFound();

  const { allPartsFound, paramsToSend } = getParamsToSend(category);

  const { h1 } = getMetadataForCategory(category);

  if (!allPartsFound) return notFound();

  const searchParamsToSend = getFilteredProducts(search, paramsToSend);

  const products = searchParamsToSend.size
    ? await getFilter(searchParamsToSend)
    : await getCategories(paramsToSend);

  if (!products) return;

  return (
    <>
      <div className={styles.titleWrapper}>
        <Htag size="large" tag="h1" className={styles.title}>
          {`Подшипники ${h1} РВЗ`}
        </Htag>
      </div>
      <CatalogNavBar />
      <div className={styles.section}>
        <div className={styles.container}>
          <SideBar />
          <Products bearingList={products.rows} count={products.count} />
        </div>
      </div>
    </>
  );
}
