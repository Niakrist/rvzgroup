"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { InfoCard, SliderCard } from "@/components";
import { products } from "@/mockdata/mockdata";
import { IProduct } from "@/types/product";
import styles from "./ProductCard.module.css";
import { useAppDispatch } from "@/store/store";
import { fetchBbearingItem } from "@/store/bearingItemSlice/bearingItemSlice";

export const ProductCard = () => {
  const product: IProduct = products[0];

  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log("!!!: ", router.query.slug);

  useEffect(() => {
    dispatch(fetchBbearingItem());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SliderCard product={product} />
        <InfoCard product={product} />
      </div>
    </section>
  );
};
