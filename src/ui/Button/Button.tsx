import React from "react";
import cn from "classnames";
import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button: React.FC<IButtonProps> = ({
  children,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        styles[color],
        className,
        size && styles[size]
      )}>
      {children}
    </button>
  );
};
