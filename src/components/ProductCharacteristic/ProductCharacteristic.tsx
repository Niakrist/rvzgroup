"use client";
import React, { useState } from "react";
import cn from "classnames";
import { CharacteristicList } from "@/components";
import styles from "./ProductCharacteristic.module.css";
import { IBearing } from "@/types/bearing";

interface IProductCharacteristicProps {
  bearingItem: IBearing;
}

export const ProductCharacteristic = ({
  bearingItem,
}: IProductCharacteristicProps): React.JSX.Element => {
  const [isActiveButton, setIsActiveButton] =
    useState<string>("characteristic");

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.nav}>
            <li>
              <button
                onClick={() => setIsActiveButton("characteristic")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "characteristic",
                })}>
                Характеристики
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsActiveButton("content")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "content",
                })}>
                Описание
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsActiveButton("delivery")}
                className={cn(styles.button, {
                  [styles.active]: isActiveButton === "delivery",
                })}>
                Доставка и оплата
              </button>
            </li>
          </ul>
          {isActiveButton === "characteristic" && (
            <CharacteristicList
              type="characteristic"
              bearingItem={bearingItem}
            />
          )}
          {isActiveButton === "content" && (
            <CharacteristicList type="content" bearingItem={bearingItem} />
          )}
          {isActiveButton === "delivery" && (
            <CharacteristicList type="delivery" bearingItem={bearingItem} />
          )}
        </div>
      </div>
    </section>
  );
};
