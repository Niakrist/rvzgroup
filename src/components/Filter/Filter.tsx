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

const bearingDdesignList: IFilterDropsownList[] = [
  { id: "1", name: "Миниатюрные" },
  { id: "2", name: "Самоустанавливающиеся" },
  { id: "3", name: "Сферические" },
  { id: "4", name: "Комбинированные" },
  { id: "5", name: "Конические" },
  { id: "6", name: "Корпусные" },
  { id: "7", name: "Шарнирные" },
];

const standartList: IFilterDropsownList[] = [
  { id: "1", name: "ГОСТ" },
  { id: "2", name: "ISO" },
];

const bearingSealIdList: IFilterDropsownList[] = [
  { id: "1", name: "RS" },
  { id: "3", name: "2RS" },
  { id: "2", name: "Z" },
  { id: "4", name: "ZZ" },
];

const bearingTypeIdList: IFilterDropsownList[] = [
  { id: "1", name: "Качения" },
  { id: "2", name: "Скольжения" },
];

const cornerIdList: IFilterDropsownList[] = [
  { id: "1", name: "12°" },
  { id: "2", name: "15°" },
  { id: "3", name: "20°" },
  { id: "4", name: "26°" },
  { id: "5", name: "36°" },
  { id: "6", name: "40°" },
  { id: "7", name: "60°" },
  { id: "8", name: "Трехточечный контакт" },
  { id: "9", name: "Четырехточечный контакт" },
];

const holeIdList: IFilterDropsownList[] = [
  { id: "1", name: "коническое" },
  { id: "2", name: "цилиндрическое" },
];
const innerRingIdList: IFilterDropsownList[] = [
  { id: "1", name: "без внутреннего кольца" },
  { id: "2", name: "с безбортовым внутренним кольцом" },
  { id: "3", name: "с бортиками на внутреннем кольце" },
  { id: "4", name: "с выступающим внутренним кольцом" },
  { id: "5", name: "с двумя внутренними кольцами" },
  { id: "6", name: "с однобортовым внутренним кольцом" },
  { id: "7", name: "с разъемным внутренним кольцом" },
  { id: "8", name: "с широким внутренним кольцом" },
  { id: "9", name: "со скосом на внутреннем кольце" },
];

const loadTypeIdList: IFilterDropsownList[] = [
  { id: "1", name: "радиальные" },
  { id: "2", name: "радиально-упорные" },
  { id: "3", name: "упорные" },
  { id: "4", name: "упорно-радиальные" },
];
const materialIdList: IFilterDropsownList[] = [
  { id: "1", name: "Стальные" },
  { id: "2", name: "Нержавеющие" },
  { id: "3", name: "Керамические" },
];
const outerRingIdList: IFilterDropsownList[] = [
  { id: "1", name: "без бортов на наружном кольце" },
  { id: "2", name: "без наружного кольца" },
  { id: "3", name: "с бортами на наружном кольце" },
  { id: "4", name: "с двухразломным наружным кольцом" },
  { id: "5", name: "с канавкой на наружном кольце" },
  { id: "6", name: "с однобортовым наружным кольцом" },
  { id: "7", name: "с одноразломным наружным кольцом" },
  { id: "8", name: "с разломом наружного кольца в продольном направлении" },
  { id: "9", name: "с разъемным наружным кольцом" },
  { id: "10", name: "с упорным бортом на наружном кольце" },
  { id: "11", name: "с фланцем на наружном кольце" },
  { id: "12", name: "со скосом на наружном кольце" },
  { id: "13", name: "со сферической поверхностью наружного кольца" },
];
const rollerTypeIdList: IFilterDropsownList[] = [
  { id: "1", name: "Шариковые" },
  { id: "2", name: "Роликовые" },
  { id: "3", name: "Игольчатые" },
  { id: "4", name: "Роликоигольчатые" },
  { id: "5", name: "Шарикоигольчатые" },
  { id: "6", name: "Сталь по стали" },
];
const rowCountIdList: IFilterDropsownList[] = [
  { id: "1", name: "Однорядные" },
  { id: "2", name: "Двухрядные" },
  { id: "3", name: "Трехрядные" },
  { id: "4", name: "Четырехрядные" },
  { id: "5", name: "Шестирядные" },
  { id: "6", name: "Многорядные" },
];
const sealIdList: IFilterDropsownList[] = [
  { id: "1", name: "открытые" },
  { id: "2", name: "закрытые" },
];
const sepIdList: IFilterDropsownList[] = [
  { id: "1", name: "стальной" },
  { id: "2", name: "латунный" },
  { id: "3", name: "без сепаратора" },
  { id: "4", name: "с полусепаратором" },
  { id: "5", name: "текстолитовый" },
];
const bushingTypeIdList: IFilterDropsownList[] = [
  { id: "1", name: "с закрепительной втулкой" },
  { id: "2", name: "со стяжной втулкой" },
];
const lubricationHoleIdList: IFilterDropsownList[] = [
  { id: "1", name: "с канавкой для смазки на наружном кольце" },
  { id: "2", name: "с канавкой и отверстиями для смазки" },
  { id: "3", name: "с отверстием для смазки на наружном кольце" },
];
const connectionIdList: IFilterDropsownList[] = [
  { id: "1", name: "разъемные" },
  { id: "2", name: "неразъемные" },
];

const featureIdList: IFilterDropsownList[] = [
  { id: "1", name: "дюймовые" },
  { id: "2", name: "сдвоенные" },
  { id: "3", name: "тороидальные" },
  { id: "4", name: "виброустойчивые" },
  { id: "5", name: "с канавкой для ввода шариков" },
  { id: "6", name: "с длинными цилиндрическими роликами" },
  { id: "7", name: "с короткими цилиндрическими роликами" },
];

const feature2IdList: IFilterDropsownList[] = [
  { id: "1", name: "без колец" },
  { id: "2", name: "с цапфой" },
  { id: "3", name: "с плоским упорным кольцом" },
  { id: "4", name: "с фасонным упорным кольцом" },
];

export const Filter = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [pathname, dispatch]);

  return (
    <div className={styles.filter}>
      <RangePrice />
      <InnerDiameter />
      <OuterDiameter />
      <WidthBearing />
      <DropDown name="Стандарт" filter="standartId" list={standartList} />
      <DropDown name="Вид" filter="bearingDesignId" list={bearingDdesignList} />
      <DropDown name="Тип" filter="bearingTypeId" list={bearingTypeIdList} />
      <DropDown
        name="Тело качения"
        filter="rollerTypeId"
        list={rollerTypeIdList}
      />
      <DropDown name="Рядность" filter="rowCountId" list={rowCountIdList} />
      <DropDown name="Нагрузка" filter="loadTypeId" list={loadTypeIdList} />
      <DropDown name="Открытый / Закрытый" filter="sealId" list={sealIdList} />
      <DropDown
        name="Заглушка / Уплотнение"
        filter="bearingSealId"
        list={bearingSealIdList}
      />
      <DropDown name="Сепаратор" filter="sepId" list={sepIdList} />
      <DropDown name="Угол контакта" filter="cornerId" list={cornerIdList} />
      <DropDown
        name="Внутренее кольцо"
        filter="innerRingId"
        list={innerRingIdList}
      />
      <DropDown
        name="Наружное кольцо"
        filter="outerRingId"
        list={outerRingIdList}
      />
      <DropDown name="Отверстие" filter="holeId" list={holeIdList} />
      <DropDown name="Материал" filter="materialId" list={materialIdList} />
      <DropDown
        name="Со втулкой"
        filter="bushingTypeId"
        list={bushingTypeIdList}
      />
      <DropDown
        name="Смазочные отверстия"
        filter="lubricationHoleId"
        list={lubricationHoleIdList}
      />
      <DropDown
        name="Соединение"
        filter="connectionId"
        list={connectionIdList}
      />
      <DropDown name="Специальные" filter="featureId" list={featureIdList} />
      <DropDown
        name="Дополнительные"
        filter="feature2Id"
        list={feature2IdList}
      />
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
