import React from "react";
import { products } from "@/mockdata/mockdata";
import styles from "./CharacteristicList.module.css";

export const CharacteristicList = () => {
  const product = products[0];
  return (
    <ul className={styles.characteristic}>
      {product.characteristic?.map((item) => (
        <li key={item.key} className={styles.item}>
          <span className={styles.key}>{item.key}</span>
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};
