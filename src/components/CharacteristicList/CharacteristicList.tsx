import React from "react";
import styles from "./CharacteristicList.module.css";
import { IBearing } from "@/types/bearing";
import Link from "next/link";

interface ICharacteristicListProps {
  bearingItem: IBearing;
  type: "characteristic" | "content" | "delivery";
}

export const CharacteristicList = ({
  bearingItem,
  type,
}: ICharacteristicListProps): React.JSX.Element => {
  if (!bearingItem) return <div>Загрузка...</div>;

  switch (type) {
    case "characteristic":
      return (
        <ul className={styles.characteristic}>
          <li className={styles.item}>
            <span className={styles.key}>Бренд</span>
            <span className={styles.value}>{bearingItem.brand}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Внутренний диаметр (мм)</span>
            <span className={styles.value}>{bearingItem.innerDiameter}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Внешний диаметр (мм)</span>
            <span className={styles.value}>{bearingItem.outerDiameter}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Ширина (мм)</span>
            <span className={styles.value}>{bearingItem.width}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Маркировка {bearingItem.name}</span>
            <span className={styles.value}>
              Аналог{" "}
              {bearingItem.analog ? (
                <Link
                  className={styles.analogLink}
                  href={bearingItem.analogUrl}>
                  {bearingItem.analog}
                </Link>
              ) : (
                "отсутствует"
              )}
            </span>
          </li>
        </ul>
      );
    case "content":
      return <div dangerouslySetInnerHTML={{ __html: bearingItem.content }} />;
    default:
      return <p>Информация о доставке</p>;
  }
};
