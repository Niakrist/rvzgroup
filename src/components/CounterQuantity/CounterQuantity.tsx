"use client";
import React from "react";
import { Icon } from "@/components";
import { ICounterQuantityProps } from "./CounterQuantity.props";
import cn from "classnames";
import styles from "./CounterQuantity.module.css";

export const CounterQuantity = ({
  handleChangeQuantity,
  handleIncrement,
  handleDecrement,
  count,
  size,
  bgColor,
}: ICounterQuantityProps): React.JSX.Element => {
  return (
    <div
      className={cn(styles.counterQuantity, styles[bgColor], {
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}>
      <button className={styles.button} onClick={handleDecrement}>
        <Icon name="iconMinus" className={styles.iconMinus} />
      </button>
      <input
        className={styles.input}
        type="text"
        value={count}
        onChange={handleChangeQuantity}
      />
      <button className={styles.button} onClick={handleIncrement}>
        <Icon name="iconPlus" className={styles.iconPlus} />
      </button>
    </div>
  );
};
