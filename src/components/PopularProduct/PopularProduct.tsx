import React from "react";
import { ProductItem } from "@/components";
import { Htag } from "@/ui";
import styles from "./PopularProduct.module.css";
import { getCategories } from "@/api/getCategories";
import { IBearing } from "@/types/bearing";

export const PopularProduct = async (): Promise<React.JSX.Element> => {
  const products = await getCategories();
  if (!products) return <div>Загрузка</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Популярные товары</Htag>
        <ul className={styles.list}>
          {products.rows.map((product: IBearing) => (
            <li key={product.id} className={styles.item}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
