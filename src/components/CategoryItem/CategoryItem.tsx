import { ICategory } from "@/types/types";
import { Htag } from "@/ui";
import Link from "next/link";
import React from "react";
import { Icon } from "../Icon/Icon";

import styles from "./CategoryItem.module.css";

interface ICategoryProps {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <Link className={styles.link} href={category.path}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={category.img} alt="" />
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

export default CategoryItem;
