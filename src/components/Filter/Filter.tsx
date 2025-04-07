"use client";
import React, { useEffect } from "react";
import { Button, DropDown } from "@/ui";

import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.css";
import { IFilterDropsownList } from "@/types/filters.interface";
import { InnerDiameter } from "./InnerDiameter/InnerDiameter";
import { OuterDiameter } from "./OuterDiameter/OuterDiameter";
import { WidthBearing } from "./WidthBearing/WidthBearing";
import { RangePrice } from "./RangePrice/RangePrice";
import ResetButton from "./ResetButton/ResetButton";
import { resetFilter } from "@/store/filterSlice/filterSlice";

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
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [pathname, dispatch]);

  return (
    <div className={styles.filter}>
      {/* <RangePrice /> */}
      <InnerDiameter />
      <OuterDiameter />
      <WidthBearing />
      <DropDown name="Стандарт" filter="standartId" list={standartList} />
      <DropDown name="Тело качения" filter="bodyId" list={bodyList} />
      <DropDown name="Нагрузка" filter="loadId" list={loadList} />
      <DropDown name="Рядность" filter="rowId" list={rowList} />
      <DropDown name="Форма" filter="formaId" list={formaList} />
      <DropDown name="Заглушка" filter="openId" list={openList} />
      <Button
        className={styles.button}
        color="whiteText"
        bgColor="blue"
        size="small">
        Применить
      </Button>
      <ResetButton />
    </div>
  );
};
