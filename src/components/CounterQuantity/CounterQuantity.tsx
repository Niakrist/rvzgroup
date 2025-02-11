import React from "react";
import { Icon } from "@/components";
import { ICounterQuantityProps } from "./CounterQuantity.props";
import styles from "./CounterQuantity.module.css";

export const CounterQuantity: React.FC<ICounterQuantityProps> = ({
  quantity,
  handleDecrement,
  handleChangeQuantity,
  handleIncrement,
}) => {
  return (
    <div className={styles.counterQuantity}>
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
