import React from "react";
import styles from "./CharacteristicList.module.css";
import { IBearing } from "@/types/bearing";
import Link from "next/link";
import { urlPaths } from "@/app/(shop)/catalog/[category]/page";

interface ICharacteristicListProps {
  bearingItem: IBearing;
  type: "characteristic" | "content" | "delivery";
  showAll?: true;
}

export const CharacteristicList = ({
  bearingItem,
  type,
  showAll,
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
            <span className={styles.value}>{bearingItem.widthBearing}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.key}>Аналог </span>
            <span className={styles.value}>
              {bearingItem.analog ? (
                <Link
                  className={styles.analogLink}
                  href={bearingItem.analogUrl}>
                  Подшипник {bearingItem.analog}
                </Link>
              ) : (
                "отсутствует"
              )}
            </span>
          </li>
          {showAll && (
            <>
              <li className={styles.item}>
                <span className={styles.key}>Масса (кг)</span>
                <span className={styles.value}>{bearingItem.weight}</span>
              </li>
            </>
          )}
        </ul>
      );
    case "content":
      return <div dangerouslySetInnerHTML={{ __html: bearingItem.content }} />;
    default:
      return <p>Информация о доставке</p>;
  }
};
