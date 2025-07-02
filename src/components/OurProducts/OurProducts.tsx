import { categoryList } from "@/mockdata/mockdata";
import { ICategory } from "@/types/types";
import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import styles from "./OurProducts.module.css";

export const OurProducts = () => {
  return (
    <ul className={styles.ourProducts}>
      {categoryList.map((category: ICategory, index: number) => (
        <li className={styles.item} key={category.path}>
          <CategoryItem category={category} index={index} />
        </li>
      ))}
    </ul>
  );
};
