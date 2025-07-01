"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import { categories } from "./tag-category.data";
import styles from "./TagCategory.module.css";
import cn from "classnames";

export const TagCategory = () => {
  const [isShow, setIsShow] = useState(false);
  const { category } = useParams();

  if (typeof category !== "string") {
    return null;
  }

  const typedCategory = category as keyof typeof categories;

  if (!categories[typedCategory]) {
    return null;
  }

  const handleToggleShowCategory = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleToggleShowCategory}
        className={cn(styles.button, { [styles.show]: isShow })}>
        <Icon name="iconFilter" className={styles.iconFilter} />
        <span className={styles.name}>Уточнить категорию</span>{" "}
        <Icon
          name="iconArrow"
          className={cn(styles.iconArrow, { [styles.show]: isShow })}
        />
      </button>
      <ul className={cn(styles.list, { [styles.show]: isShow })}>
        {categories[typedCategory].map((item) => (
          <li key={item.url}>
            <Link className={styles.item} href={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
