import React from "react";
import Link from "next/link";
import { Icon } from "@/components";
import { Htag } from "@/ui";
import { ICategory } from "@/types/types";
import styles from "./CategoryItem.module.css";

interface ICategoryProps {
  category: ICategory;
}

export const CategoryItem: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <Link className={styles.link} href={`/catalog/${category.path}`}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={`/${category.img}`} alt="" />
      </div>

      <div className={styles.wrapper}>
        <Htag size="small">{category.name}</Htag>
        <div className={styles.info}>
          <p className={styles.quantity}>1020 шт.</p>
          <Icon name="iconArrow" className={styles.iconArrow} />
        </div>
      </div>
    </Link>
  );
};
