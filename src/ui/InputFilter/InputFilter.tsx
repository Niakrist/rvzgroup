import React from "react";

import styles from "./InputFilter.module.css";
import { IInputDilterProps } from "./InputFilter.props";

export const InputFilter: React.FC<IInputDilterProps> = ({
  placeholder,
  value,
  type,
  name,
  onChange,
  ...props
}) => {
  return (
    <input
      {...props}
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
