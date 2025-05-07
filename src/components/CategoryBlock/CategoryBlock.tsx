import React from "react";
import { Htag } from "@/ui";
import styles from "./CategoryBlock.module.css";
import { OurProducts } from "../OurProducts/OurProducts";

export const CategoryBlock = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag tag="h2" size="medium">
          Наша продукция
        </Htag>
        <OurProducts />
      </div>
    </section>
  );
};
