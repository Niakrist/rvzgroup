import React from "react";
import { IBadgeInStockProps } from "./BadgeInStock.props";
import styles from "./BadgeInStock.module.css";

export const BadgeInStock: React.FC<IBadgeInStockProps> = ({ product }) => {
  return (
    <div className={styles.inStock}>
      <span className={product.quantity ? styles.green : styles.orange} />
      <span>{product.quantity ? "В наличие" : "Под заказ 1-3 дня"}</span>
    </div>
  );
};
