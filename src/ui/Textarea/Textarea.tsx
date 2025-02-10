import React from "react";
import styles from "./Textarea.module.css";
import { ITextAreaProps } from "./Textarea.props";

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
