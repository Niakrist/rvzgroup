import React from "react";
import { IHtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

import cn from "classnames";

export const Htag: React.FC<IHtagProps> = ({
  children,
  size,
  position,
  className,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={cn(styles.title, styles[size], className, {
        [styles.center]: position,
      })}>
      {children}
    </h2>
  );
};
