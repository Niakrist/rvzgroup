import React from "react";
import cn from "classnames";
import styles from "./BubbleList.module.css";

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
