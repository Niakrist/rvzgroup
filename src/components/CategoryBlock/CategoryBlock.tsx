import { Htag } from "@/ui";
import React from "react";
import { CategoryList } from "../CategoryList/CategoryList";
import styles from "./CategoryBlock.module.css";

export const CategoryBlock = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Наша продукция</Htag>
        <CategoryList list="listHome" />
      </div>
    </section>
  );
};
