import React from "react";
import { IWhiteBlockProps } from "./WhiteBlock.props";
import styles from "./WhiteBlock.module.css";

const WhiteBlock: React.FC<IWhiteBlockProps> = ({ text, children }) => {
  return (
    <div className={styles.block}>
      <p className={styles.name}>{text}</p>
      {children}
    </div>
  );
};

export default WhiteBlock;
