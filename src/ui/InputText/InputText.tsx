import React from "react";
import { IInputTextProps } from "./InputText.props";
import styles from "./InputText.module.css";
import cn from "classnames";

export const InputText: React.FC<IInputTextProps> = ({
  type,
  placeholder,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={cn(styles.input, className)}
      type={type}
      placeholder={placeholder}
    />
  );
};
