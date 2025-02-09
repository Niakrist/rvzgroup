"use client";
import React from "react";
import styles from "./ProductCard.module.css";
import { InfoCard, SliderCard } from "@/components";
import { products } from "@/mockdata/mockdata";
import { IProduct } from "@/types/product";

export const ProductCard = () => {
  const product: IProduct = products[0];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SliderCard product={product} />
        <InfoCard product={product} />
      </div>
    </section>
  );
};
