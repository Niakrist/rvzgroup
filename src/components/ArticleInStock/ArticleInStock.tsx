import React from "react";
import { BadgeInStock } from "@/ui";
import { IArticleInStockProps } from "./ArticleInStock.props";
import styles from "./ArticleInStock.module.css";

export const ArticleInStock: React.FC<IArticleInStockProps> = ({ product }) => {
  return (
    <div className={styles.info}>
      <BadgeInStock product={product} />
      <div className={styles.article}>Артикул: {product.article}</div>
    </div>
  );
};
