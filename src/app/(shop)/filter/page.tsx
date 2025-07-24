import { getFilter } from "@/api/getFilter";
import CatalogNavBar from "@/components/CatalogNavBar/CatalogNavBar";
import Products from "@/components/Products/Products";
import { SideBar } from "@/components/SideBar/SideBar";
import { ISearchParams } from "@/types/ISearchParams.interface";
import { Htag } from "@/ui";
import { getFilteredProducts } from "@/utils/getFilteredProducts";
import { Metadata } from "next";
import React from "react";

import styles from "./FilterPage.module.css";

interface IFilterPageProps {
  searchParams: Promise<ISearchParams>;
}

export const metagata: Metadata = {
  title: "Подобрать подшипники по размерам, характеристикам и параметрам",
  description:
    "Подберите нужный подшипник с помощью удобного фильтра по размерам, характеристикам и параметрам и получите выгодные условия покупки.",
};

export default async function FilterPage({ searchParams }: IFilterPageProps) {
  const search = await searchParams;

  const searchParamsToSend = getFilteredProducts(search);

  const products = await getFilter(searchParamsToSend);
  if (!products) return;
  return (
    <>
      <div className={styles.titleWrapper}>
        <Htag size="large" tag="h1" className={styles.title}>
          Поиск подшипников по размерам и параметрам
        </Htag>
        <CatalogNavBar />
        <div className={styles.section}>
          <div className={styles.container}>
            <SideBar />
            <Products bearingList={products.rows} count={products.count} />
          </div>
        </div>
      </div>
    </>
  );
}
