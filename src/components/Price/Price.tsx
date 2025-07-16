import React from "react";
import cn from "classnames";
import { IPriceProps } from "./Price.props";
import styles from "./Price.module.css";
import { convertNumberInGroupNumber } from "@/utils/convertNumber";

export const Price: React.FC<IPriceProps> = ({
  product,
  fontSize,
  className,
}) => {
  return (
    <div className={cn(styles.price, styles[fontSize], className)}>
      {!!product.price || !!product.priceRvz ? (
        <>
          <span>
            {convertNumberInGroupNumber(product.price || product.priceRvz)}{" "}
            ₽/шт.
          </span>
          {!!product.stock && (
            <span className={styles.stock}> {product.stock} ₽/шт.</span>
          )}
        </>
      ) : (
        "Под заказ"
      )}
    </div>
  );
};
