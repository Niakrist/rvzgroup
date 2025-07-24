import { getFilter } from "@/api/getFilter";
import CatalogNavBar from "@/components/CatalogNavBar/CatalogNavBar";
import Products from "@/components/Products/Products";
import { SideBar } from "@/components/SideBar/SideBar";
import { Htag } from "@/ui";
import { Metadata } from "next";
import React from "react";
import styles from "./CatalogPage.module.css";

export const metadata: Metadata = {
  title:
    "Каталог подшипников с доставкой по России и СНГ | Гарантия качества от надежного поставщика",
  description:
    "Каталог подшипников с доставкой по России и СНГ. Широкий ассортимент, оптовые поставки, выгодные цены, быстрая доставка. Закажите прямо сейчас!",
  alternates: {
    canonical: "https://rvzgroup.ru/catalog",
  },
};

export default async function CatalogPage() {
  const products = await getFilter();

  if (!products) return <div>Загрузка products</div>;

  return (
    <>
      <div className={styles.titleWrapper}>
        <Htag size="large" tag="h1" className={styles.title}>
          Каталог подшипников
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
