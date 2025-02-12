import React from "react";
import { ITextAreaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";

export const Textarea: React.FC<ITextAreaProps> = ({
  value,
  placeholder,
  handleChange,
  ...props
}) => {
  return (
    <textarea
      {...props}
      className={styles.textarea}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
