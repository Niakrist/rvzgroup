import React from "react";

import styles from "./ProductCard.module.css";
import { SliderCard } from "./SliderCard/SliderCard";
import { IBearing } from "@/types/bearing";
import { InfoCard } from "./InfoCard/InfoCard";

interface IProductCardProps {
  bearingItem: IBearing;
}

export const ProductCard = ({
  bearingItem,
}: IProductCardProps): React.JSX.Element => {
  if (!bearingItem) return <div>Загрузка ProductCard</div>;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SliderCard product={bearingItem} />
        <InfoCard product={bearingItem} />
      </div>
    </section>
  );
};
