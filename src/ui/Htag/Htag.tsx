import React from "react";
import cn from "classnames";
import { IHtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({
  children,
  size,
  position,
  className,
  tag,
  ...props
}: IHtagProps): React.JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1
          {...props}
          className={cn(styles.title, className, {
            [styles.center]: position,
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.large]: size === "large",
            [styles.verySmall]: size === "verySmall",
          })}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          {...props}
          className={cn(styles.title, styles[size], className, {
            [styles.center]: position,
          })}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          {...props}
          className={cn(styles.title, styles[size], className, {
            [styles.center]: position,
          })}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          {...props}
          className={cn(styles.title, styles[size], className, {
            [styles.center]: position,
          })}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};
