import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Брэнд РВЗ",
};

const BrandRvz = () => {
  return <section className={styles.rvz}>BrandRvz</section>;
};
export default BrandRvz;
