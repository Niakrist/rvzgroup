import React from "react";
import styles from "./Modal.module.css";
import { IModalProps } from "./Modal.props";
import cn from "classnames";

export const Modal: React.FC<IModalProps> = ({ children, width, ...props }) => {
  return (
    <div {...props} className={styles.wrapper}>
      <div className={cn(styles.modal, styles[width])}>{children}</div>
    </div>
  );
};
