import React from "react";
import Link from "next/link";
import { Icon } from "@/components";
import { Htag } from "@/ui";
import { ICategory } from "@/types/types";
import styles from "./CategoryItem.module.css";
import Image from "next/image";

interface ICategoryProps {
  category: ICategory;
  index: number;
}

export const CategoryItem: React.FC<ICategoryProps> = ({ category, index }) => {
  return (
    <Link className={styles.link} href={`/catalog/${category.path}`}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          width={90}
          height={90}
          quality={75}
          priority={index ? index < 4 : false}
          loading={index && index > 3 ? "lazy" : "eager"}
          alt={category.name}
          src={`/${category.img}`}
        />
      </div>

      <div className={styles.wrapper}>
        <Htag tag="h3" size="verySmall">
          {category.name}
        </Htag>
        <Icon name="iconArrow" className={styles.iconArrow} />
      </div>
    </Link>
  );
};
