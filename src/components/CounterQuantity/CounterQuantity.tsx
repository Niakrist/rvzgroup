"use client";
import React, { useState } from "react";
import { Icon } from "@/components";
import { ICounterQuantityProps } from "./CounterQuantity.props";
import cn from "classnames";
import styles from "./CounterQuantity.module.css";

export const CounterQuantity = ({
  size,
  bgColor,
}: ICounterQuantityProps): React.JSX.Element => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      setQuantity(parsedValue);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={cn(styles.counterQuantity, styles[bgColor], styles[size])}>
      <button className={styles.button} onClick={handleDecrement}>
        <Icon name="iconMinus" className={styles.iconMinus} />
      </button>
      <input
        className={styles.input}
        type="text"
        value={quantity}
        onChange={handleChangeQuantity}
      />
      <button className={styles.button} onClick={handleIncrement}>
        <Icon name="iconPlus" className={styles.iconPlus} />
      </button>
    </div>
  );
};
