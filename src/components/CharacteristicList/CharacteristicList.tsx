import React from "react";

import styles from "./CharacteristicList.module.css";
import { products } from "@/mockdata/mockdata";

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
