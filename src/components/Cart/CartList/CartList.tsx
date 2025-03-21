"use client";
import { ArticleInStock, CounterQuantity } from "@/components";
import { products } from "@/mockdata/mockdata";
import React, { useState } from "react";
import styles from "./CartList.module.css";

export const CartList = () => {
  return (
    <section>
      <ul className={styles.list}>
        {products.map((item) => (
          <li className={styles.item} key={item.article}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={`/${item.img}`} alt="" />
              <div className={styles.info}>
                <h3 className={styles.tittle}>{item.name}</h3>
                <ArticleInStock product={item} />
              </div>
            </div>
            <div className={styles.priceInfo}>
              <CounterQuantity size="large" bgColor="grey" />
              <div className={item.price ? styles.price : styles.zakaz}>
                {!!item.price ? item.price + " ₽/шт." : "Под заказ"}
              </div>
              <button className={styles.removeProduct} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
