import React from "react";
import { products } from "@/mockdata/mockdata";
import styles from "./CharacteristicList.module.css";
import { IBearing } from "@/types/types";

interface ICharacteristicListProps {
  product: IBearing;
}

export const CharacteristicList = ({
  product,
}: ICharacteristicListProps): React.JSX.Element => {
  if (!product) return <div>Загрузка...</div>;

  return (
    <ul className={styles.characteristic}>
      <li className={styles.item}>
        <span className={styles.key}>Бренд</span>
        <span className={styles.value}>{product.brand}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.key}>Внутренний диаметр (мм)</span>
        <span className={styles.value}>{product.innerDiameter}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.key}>Внешний диаметр (мм)</span>
        <span className={styles.value}>{product.outerDiameter}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.key}>Ширина (мм)</span>
        <span className={styles.value}>{product.width}</span>
      </li>
    </ul>
  );
};
