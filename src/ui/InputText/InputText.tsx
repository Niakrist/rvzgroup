import React from "react";

import styles from "./InputText.module.css";
import { IInputTextProps } from "./InputText.props";

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
