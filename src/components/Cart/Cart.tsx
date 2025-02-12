"use client";
import React from "react";
import { CartList, CartOrder } from "@/components";
import styles from "./Cart.module.css";

export const Cart = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CartList />
        <CartOrder />
      </div>
    </section>
  );
};
