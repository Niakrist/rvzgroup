import React from "react";
import { IHtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

import cn from "classnames";

export const Htag: React.FC<IHtagProps> = ({ children, size, ...props }) => {
  return (
    <h2 {...props} className={cn(styles.title, styles[size])}>
      {children}
    </h2>
  );
};
