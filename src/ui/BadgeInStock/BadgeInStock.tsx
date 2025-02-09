import React from "react";
import styles from "./BadgeInStock.module.css";
import { IBadgeInStockProps } from "./BadgeInStock.props";
export const BadgeInStock: React.FC<IBadgeInStockProps> = ({ product }) => {
  return (
    <div className={styles.inStock}>
      <span className={product.inStock ? styles.green : styles.orange} />
      <span>{product.inStock ? "В наличие" : "Под заказ 1-3 дня"}</span>
    </div>
  );
};
