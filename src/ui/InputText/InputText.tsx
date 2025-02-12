import React from "react";
import { IInputTextProps } from "./InputText.props";
import styles from "./InputText.module.css";

export const InputText: React.FC<IInputTextProps> = ({
  type,
  placeholder,
  ...props
}) => {
  return (
    <input
      {...props}
      className={styles.input}
      type={type}
      placeholder={placeholder}
    />
  );
};
