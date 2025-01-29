import React from "react";
import styles from "./BubbleList.module.css";
import cn from "classnames";

export const BubbleList = () => {
  const bubbles = [1, 2, 3, 4, 5];
  return (
    <ul className={styles.bubbleList}>
      {bubbles.map((bubble) => (
        <li
          className={cn(styles.bubble, { [styles.bubbleActive]: bubble === 3 })}
          key={bubble}
        />
      ))}
    </ul>
  );
};
