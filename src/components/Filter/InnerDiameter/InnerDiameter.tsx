"use client";

import { InputFilter, WhiteBlock } from "@/ui";
import { useState } from "react";

import styles from "./InnerDiameter.module.css";

export const InnerDiameter = () => {
  const [innerDiameter, setInnerDiameter] = useState({ min: "", max: "" });

  const handleChangeFilter = () => {
    console.log("innerDiameter: ", innerDiameter);
  };

  return (
    <WhiteBlock text="Внутренний диаметр (мм)">
      <div className={styles.wrapper}>
        <InputFilter
          placeholder="от"
          value={innerDiameter.min}
          onChange={handleChangeFilter}
          type="text"
          name="minInnerDiameter"
        />
        <span className={styles.line} />
        <InputFilter
          placeholder="до"
          value={innerDiameter.max}
          onChange={handleChangeFilter}
          type="text"
          name="maxInnerDiameter"
        />
      </div>
    </WhiteBlock>
  );
};
