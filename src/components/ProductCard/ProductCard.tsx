"use client";
import React, { useEffect } from "react";

import styles from "./ProductCard.module.css";
import { SliderCard } from "./SliderCard/SliderCard";
import { InfoCard } from "./InfoCard/InfoCard";
import { RootState, useAppDispatch } from "@/store/store";
import { fetchBbearingItem } from "@/store/bearingItemSlice/bearingItemSlice";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";

interface IProductCardProps {
  url: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({ url }) => {
  const { bearingItem, errorBearingItem, loadingBearingItem } = useSelector(
    (state: RootState) => state.bearingItem
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBbearingItem(url));
  }, [dispatch, url]);

  if (loadingBearingItem || !bearingItem) return <div>Загрузка</div>;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SliderCard product={bearingItem} />
        <InfoCard product={bearingItem} />
      </div>
    </section>
  );
};
