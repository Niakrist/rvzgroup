import React from "react";
import { CategoryList } from "@/components";

import styles from "./CatalogNavBar.module.css";

const CatalogNavBar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CategoryList list="listCategory" />
      </div>
    </section>
  );
};

export default CatalogNavBar;
