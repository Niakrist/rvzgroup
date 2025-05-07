import React from "react";

import cn from "classnames";
import styles from "./Text.module.css";
import { ITextProps } from "./Text.props";

export const Text = ({
  size,
  tag: Tag,
  children,
  className,
  ...props
}: ITextProps): React.JSX.Element => {
  return (
    <Tag
      {...props}
      className={cn(className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}>
      {children}
    </Tag>
  );
};
