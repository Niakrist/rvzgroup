"use client";
import { InputFilter } from "@/ui";
import WhiteBlock from "@/ui/WhiteBlock/WhiteBlock";
import React, { useState } from "react";

import styles from "./SideBar.module.css";
import { IRange } from "@/ui/InputFilter/InputFilter.props";

export const SideBar = () => {
  const [range, setRange] = useState<IRange>({
    minPrice: "",
    maxPrice: "",
  });

  console.log(range);

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      setRange((prevRange) => ({ ...prevRange, [e.target.name]: parsedValue }));
    }
  };

  return (
    <aside>
      <WhiteBlock text="Цена">
        <div className={styles.wrapper}>
          <InputFilter
            placeholder="0"
            value={range.minPrice}
            onChange={handleChangeRange}
            type="text"
            name="minPrice"
          />
          <span className={styles.line} />
          <InputFilter
            placeholder="4000000"
            value={range.maxPrice}
            onChange={handleChangeRange}
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
