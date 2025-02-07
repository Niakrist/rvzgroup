import { categoryList } from "@/mockdata/mockdata";
import { ICategory } from "@/types/types";
import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoryList.module.css";
import cn from "classnames";
import { IListProps } from "./CategoryList.props";

export const CategoryList: React.FC<IListProps> = ({ list }) => {
  return (
    <ul className={cn(styles[list])}>
      {categoryList.map((category: ICategory) => (
        <li className={styles.item} key={category.path}>
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
};
