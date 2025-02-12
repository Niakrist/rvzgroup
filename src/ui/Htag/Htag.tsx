import React from "react";
import cn from "classnames";
import { IHtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

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
