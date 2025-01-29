import React from "react";

import cn from "classnames";

import styles from "./Button.module.css";
import { IButtonProps } from "./Button.props";

export const Button: React.FC<IButtonProps> = ({
  children,
  color,
  ...props
}) => {
  return (
    <button {...props} className={cn(styles.button, styles[color])}>
      {children}
    </button>
  );
};
