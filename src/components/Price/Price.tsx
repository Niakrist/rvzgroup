import React from "react";

import styles from "./Price.module.css";
import { IPriceProps } from "./Price.props";

import cn from "classnames";

export const Price: React.FC<IPriceProps> = ({
  product,
  fontSize,
  className,
}) => {
  return (
    <div className={cn(styles.price, styles[fontSize], className)}>
      {!!product.inStock ? (
        <>
          <span>{product.price} ₽/шт.</span>
          {!!product.stock && (
            <span className={styles.stock}> {product.stock} ₽/шт.</span>
          )}
        </>
      ) : (
        "Цена по запросу"
      )}
    </div>
  );
};
