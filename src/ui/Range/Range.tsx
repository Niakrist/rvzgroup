"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { WhiteBlock } from "../WhiteBlock/WhiteBlock";
import styles from "./Range.module.css";
import { useDebounce } from "@/hooks/useDebounce";

interface IRangeProps {
  min?: number;
  max: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
}

export const Range = ({
  min = 0,
  max,
  fromInitialValue = 0,
  toInitialValue = max,
  onChangeFromValue,
  onChangeToValue,
}: IRangeProps): React.JSX.Element => {
  const [fromValue, setFormValue] = useState(fromInitialValue);
  const [toValue, setToValue] = useState(toInitialValue);

  const debounceFromValue = useDebounce(fromValue, 500);
  const debounceToValue = useDebounce(toValue, 500);

  useEffect(() => {
    onChangeFromValue(debounceFromValue);
  }, [debounceFromValue]);

  useEffect(() => {
    onChangeToValue(debounceToValue);
  }, [debounceToValue]);

  useEffect(() => {
    setToValue(toInitialValue);
    setFormValue(fromInitialValue);
  }, [toInitialValue, fromInitialValue]);

  return (
    <WhiteBlock text="Цена">
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="от"
          value={fromValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValue(Number(e.target.value))
          }
          type="text"
          name="min"
        />
        <span className={styles.line} />
        <input
          className={styles.input}
          placeholder="до"
          value={toValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setToValue(Number(e.target.value))
          }
          type="text"
          name="max"
        />
      </div>
      <Slider
        trackStyle={[
          { backgroundColor: "#00599f", height: 4 },
          { backgroundColor: "#00599f", height: 4 },
        ]} // Для каждого диапазона
        railStyle={{ backgroundColor: "#c4c5ca", height: 4 }}
        handleStyle={[
          {
            border: "solid 2px #fff",
            backgroundColor: "#00599f",
            outline: "none",
            width: 20, // Увеличиваем ширину
            height: 20, // Увеличиваем высоту
            marginLeft: 8, // Сдвигаем влево на половину ширины, чтобы центрировать
            marginTop: -8, // Сдвигаем вверх на половину высоты, чтобы центрировать
            opacity: 1,
          },
          {
            border: "solid 2px #fff",
            backgroundColor: "#00599f",
            outline: "none",
            width: 20, // Увеличиваем ширину
            height: 20, // Увеличиваем высоту
            marginLeft: -8, // Сдвигаем влево на половину ширины, чтобы центрировать
            marginTop: -8, // Сдвигаем вверх на половину высоты, чтобы центрировать
            opacity: 1,
          },
        ]}
        range
        min={min}
        max={max}
        value={[fromValue, toValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFormValue(value[0]);
            setToValue(value[1]);
          }
        }}
      />
    </WhiteBlock>
  );
};
