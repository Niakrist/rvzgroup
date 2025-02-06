import { Htag } from "@/ui";
import React from "react";
import { ProductItem } from "@/components";
import styles from "./PopularProduct.module.css";
import { products } from "./PopularProduct.props";
import { IProduct } from "@/types/product";

export const PopularProduct: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Популярные товары</Htag>

        <ul className={styles.list}>
          {products.map((product: IProduct) => (
            <li key={product.article} className={styles.item}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
