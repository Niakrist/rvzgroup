import { Htag } from "@/ui";
import Link from "next/link";
import React from "react";
import { Icon } from "../Icon/Icon";
import styles from "./CategoryList.module.css";
import { categoryList } from "./CategoryList.props";
export const CategoryList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Htag size="medium">Наша продукция</Htag>
        <ul className={styles.list}>
          {categoryList.map((category) => (
            <li className={styles.item} key={category.path}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
