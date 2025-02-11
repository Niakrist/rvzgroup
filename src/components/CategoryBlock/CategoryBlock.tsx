import React from "react";
import { CategoryList } from "@/components";
import { Htag } from "@/ui";
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
