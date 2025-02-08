"use client";
import { DropDown, InputFilter } from "@/ui";
import WhiteBlock from "@/ui/WhiteBlock/WhiteBlock";
import React, { useState } from "react";

import styles from "./Filter.module.css";
import { IFilter, IList } from "@/types/types";

const standartName = "Стандарт";
const rollingName = "Тело качения";

const rollingList = [
  { id: "ball-bearings", name: "Шариковые", isCheck: false },
  { id: "roller-bearings", name: "Роликовые", isCheck: false },
  { id: "articulated", name: "Шарнирные", isCheck: false },
  { id: "needle-shaped", name: "Игольчатые", isCheck: false },
  { id: "housing", name: "Корпусные", isCheck: false },
];

const standartList = [
  { id: "gost", name: "ГОСТ", isCheck: false },
  { id: "iso", name: "ISO", isCheck: false },
];

export const Filter = () => {
  const [filter, setFilter] = useState<IFilter>({
    minPrice: "",
    maxPrice: "",
    minInnerDiameter: "",
    maxInnerDiameter: "",
    minOuterDiameter: "",
    maxOuterDiameter: "",
    minWidth: "",
    maxWidth: "",
  });

  const [rollingBody, setRollingBody] = useState<IList[]>(rollingList);
  const [standart, setStandart] = useState<IList[]>(standartList);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      const parsedValue = parseInt(value, 10);
      setFilter((prevFilter) => ({
        ...prevFilter,
        [e.target.name]: parsedValue,
      }));
    }
  };

  return (
    <>
      <WhiteBlock text="Цена">
        <div className={styles.wrapper}>
          <InputFilter
            placeholder="0"
            value={filter.minPrice}
            onChange={handleChangeFilter}
            type="text"
            name="minPrice"
          />
          <span className={styles.line} />
          <InputFilter
            placeholder="4000000"
            value={filter.maxPrice}
            onChange={handleChangeFilter}
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
      <WhiteBlock text="Внутренний диаметр (мм)">
        <div className={styles.wrapper}>
          <InputFilter
            placeholder="от"
            value={filter.minInnerDiameter}
            onChange={handleChangeFilter}
            type="text"
            name="minInnerDiameter"
          />
          <span className={styles.line} />
          <InputFilter
            placeholder="до"
            value={filter.maxInnerDiameter}
            onChange={handleChangeFilter}
            type="text"
            name="maxInnerDiameter"
          />
        </div>
      </WhiteBlock>
      <WhiteBlock text="Внешний диаметр (мм)">
        <div className={styles.wrapper}>
          <InputFilter
            placeholder="от"
            value={filter.minOuterDiameter}
            onChange={handleChangeFilter}
            type="text"
            name="minOuterDiameter"
          />
          <span className={styles.line} />
          <InputFilter
            placeholder="до"
            value={filter.maxOuterDiameter}
            onChange={handleChangeFilter}
            type="text"
            name="maxOuterDiameter"
          />
        </div>
      </WhiteBlock>
      <WhiteBlock text="Ширина (мм)">
        <div className={styles.wrapper}>
          <InputFilter
            placeholder="от"
            value={filter.minWidth}
            onChange={handleChangeFilter}
            type="text"
            name="minWidth"
          />
          <span className={styles.line} />
          <InputFilter
            placeholder="до"
            value={filter.maxWidth}
            onChange={handleChangeFilter}
            type="text"
            name="maxWidth"
          />
        </div>
      </WhiteBlock>
      <DropDown name={standartName} list={standart} setList={setStandart} />
      <DropDown
        name={rollingName}
        list={rollingBody}
        setList={setRollingBody}
      />
    </>
  );
};
