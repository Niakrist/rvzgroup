import React from "react";
import cn from "classnames";
import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button: React.FC<IButtonProps> = ({
  children,
  color,
  bgColor,
  size,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.whiteText]: color === "whiteText",
        [styles.blackText]: color === "blackText",
        [styles.white]: bgColor === "white",
        [styles.blue]: bgColor === "blue",
        [styles.border]: bgColor === "border",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big",
      })}>
      {children}
    </button>
  );
};
