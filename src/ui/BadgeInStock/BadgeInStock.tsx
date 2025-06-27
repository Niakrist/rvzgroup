import React from "react";
import { IBadgeInStockProps } from "./BadgeInStock.props";
import styles from "./BadgeInStock.module.css";

export const BadgeInStock: React.FC<IBadgeInStockProps> = ({ product }) => {
  return (
    <div className={styles.inStock}>
      <span
        className={
          product.price || product.priceRvz ? styles.green : styles.orange
        }
      />
      <span>
        {product.price || product.priceRvz ? "В наличие" : "Под заказ"}
      </span>
    </div>
  );
};
