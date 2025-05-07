import React from "react";
import { IPProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

export const P = ({
  size,
  children,
  className,
  ...props
}: IPProps): React.JSX.Element => {
  return (
    <p
      {...props}
      className={cn(className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}>
      {children}
    </p>
  );
};
