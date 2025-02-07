import { InputFilter } from "@/ui";
import WhiteBlock from "@/ui/WhiteBlock/WhiteBlock";
import React from "react";

import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <aside>
      <WhiteBlock text="Цена">
        <div className={styles.wrapper}>
          <InputFilter placeholder="0" value={40} type="text" name="minPrice" />
          <span className={styles.line} />
          <InputFilter
            placeholder="4000000"
            value={4000000}
            type="text"
            name="maxPrice"
          />
        </div>
        <div className={styles.range}>
          <div className={styles.left} style={{ left: "40px" }} />
          <div
            className={styles.lineRange}
            style={{ left: "66px", right: "66px" }}
          />
          <div className={styles.right} style={{ right: "40px" }} />
        </div>
      </WhiteBlock>
    </aside>
  );
};
