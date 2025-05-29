import React from "react";
import cn from "classnames";

import styles from "./LabelList.module.css";
import { ILabelListProps } from "./LabelList.props";

const LabelList = ({ popular, stock, newProduct, size }: ILabelListProps) => {
  return (
    <div
      className={cn(styles.labelList, {
        [styles.labelListBig]: size === "big",
      })}>
      {popular && (
        <span
          className={cn(styles.green, {
            [styles.labelSmall]: size === "small",
            [styles.labelBig]: size === "big",
          })}>
          Хит продаж
        </span>
      )}
      {stock && (
        <span
          className={cn(styles.orange, {
            [styles.labelSmall]: size === "small",
            [styles.labelBig]: size === "big",
          })}>
          Акция
        </span>
      )}
      {newProduct && (
        <span
          className={cn(styles.blue, {
            [styles.labelSmall]: size === "small",
            [styles.labelBig]: size === "big",
          })}>
          Новинка
        </span>
      )}
    </div>
  );
};

export default LabelList;
