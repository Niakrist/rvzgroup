"use client";
import React, { useState } from "react";
import cn from "classnames";
import { CharacteristicList } from "@/components";
import styles from "./ProductCharacteristic.module.css";

export const ProductCharacteristic = () => {
  const [isActiveButton, setIsActiveButton] = useState<string>("c");

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.nav}>
            <li>
              <button
                onClick={() => setIsActiveButton("c")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "c",
                })}>
                Характеристики
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsActiveButton("o")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "o",
                })}>
                Описание
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsActiveButton("d")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "d",
                })}>
                Доставка и оплата
              </button>
            </li>
          </ul>
          {isActiveButton === "c" && <CharacteristicList />}
          {isActiveButton === "o" && <CharacteristicList />}
          {isActiveButton === "d" && <CharacteristicList />}
        </div>
      </div>
    </section>
  );
};
