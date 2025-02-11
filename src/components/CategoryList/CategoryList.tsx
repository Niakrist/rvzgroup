import React from "react";
import { categoryList } from "@/mockdata/mockdata";
import cn from "classnames";
import { CategoryItem } from "@/components";
import { IListProps } from "./CategoryList.props";
import { ICategory } from "@/types/types";
import styles from "./CategoryList.module.css";

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
