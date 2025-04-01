"use client";
import React, { useState } from "react";
import { Button, DropDown, InputFilter, WhiteBlock } from "@/ui";

import { IFilter } from "@/types/types";
import styles from "./Filter.module.css";
import { useFilter } from "@/hooks/useFilters";
import { IFilterDropsownList } from "@/types/filters.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  resetFilter,
  updateQueryParamAsync,
} from "@/store/filterSlice/filterSlice";
import { usePathname, useRouter } from "next/navigation";
import { InnerDiameter } from "./InnerDiameter/InnerDiameter";
import { OuterDiameter } from "./OuterDiameter/OuterDiameter";
import { WidthBearing } from "./WidthBearing/WidthBearing";

const bodyList: IFilterDropsownList[] = [
  { id: "1", name: "Шариковые" },
  { id: "2", name: "Роликовые" },
  { id: "3", name: "Игольчатые" },
  { id: "4", name: "Шарнирные" },
];

const standartList: IFilterDropsownList[] = [
  { id: "1", name: "ГОСТ" },
  { id: "2", name: "ISO" },
];

const formaList: IFilterDropsownList[] = [
  { id: "1", name: "Самоустанавливающиеся" },
  { id: "2", name: "Сферические" },
  { id: "3", name: "Конические" },
  { id: "4", name: "Корпусные узлы" },
  { id: "5", name: "Разборные корпусные узлы" },
];

const loadList: IFilterDropsownList[] = [
  { id: "1", name: "Радиальные" },
  { id: "2", name: "Радиально-упорные" },
  { id: "3", name: "Упорные" },
];

const openList: IFilterDropsownList[] = [
  { id: "1", name: "Открытые" },
  { id: "2", name: "Закрытые" },
  { id: "3", name: "Закрытые с одной стороны" },
];

const rowList: IFilterDropsownList[] = [
  { id: "1", name: "Однорядные" },
  { id: "2", name: "Двухрядные" },
  { id: "3", name: "четырехрядные" },
];

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const pathname = usePathname();

  const handleResetFilter = (): void => {
    dispatch(resetFilter());
    router.replace(pathname);
  };

  return (
    <div className={styles.filter}>
      {/* <WhiteBlock text="Цена">
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

     */}

      <InnerDiameter />
      <OuterDiameter />
      <WidthBearing />
      <DropDown name="Стандарт" filter="standartId" list={standartList} />
      <DropDown name="Тело качения" filter="bodyId" list={bodyList} />
      <DropDown name="Нагрузка" filter="loadId" list={loadList} />
      <DropDown name="Рядность" filter="rowId" list={rowList} />
      <DropDown name="Форма" filter="formaId" list={formaList} />
      <DropDown name="Заглушка" filter="openId" list={openList} />

      <Button color="blue">Применить</Button>
      <button onClick={handleResetFilter} className={styles.button}>
        Сбросить фильтр
      </button>
    </div>
  );
};
