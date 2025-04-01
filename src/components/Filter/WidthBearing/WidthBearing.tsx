"use client";

import { useFilter } from "@/hooks/useFilters";
import { InputFilter, WhiteBlock } from "@/ui";
import { useEffect, useState } from "react";

import styles from "./WidthBearing.module.css";

interface IDiameter {
  min: string;
  max: string;
}

export const WidthBearing = () => {
  const { queryParams, updateQueryParams } = useFilter();
  const [widthBearing, setWidthBearing] = useState<IDiameter>({
    min: "",
    max: "",
  });

  useEffect(() => {
    setWidthBearing({
      min: queryParams.minWidth || "",
      max: queryParams.maxWidth || "",
    });
  }, [queryParams.minWidth, queryParams.maxWidth]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name as keyof IDiameter;
    if (!/^\d*$/.test(value)) return;

    setWidthBearing((prev) => {
      const newState = { ...prev, [name]: value };

      if (newState.min === "" || newState.max === "") return newState;
      const minNum = parseInt(newState.min as string);
      const maxNum = parseInt(newState.max as string);

      if (name === "min" && minNum >= maxNum) {
        newState.max = String(minNum + 1);
      } else if (name === "max" && maxNum <= minNum) {
        newState.min = String(maxNum - 1);
      }
      return newState;
    });
  };

  useEffect(() => {
    updateQueryParams("minWidth", widthBearing.min);
  }, [widthBearing.min]);
  useEffect(() => {
    updateQueryParams("maxWidth", widthBearing.max);
  }, [widthBearing.max]);

  return (
    <WhiteBlock text="Ширина (мм)">
      <div className={styles.wrapper}>
        <InputFilter
          placeholder="от"
          value={widthBearing.min}
          onChange={handleChangeFilter}
          type="text"
          name="min"
        />
        <span className={styles.line} />
        <InputFilter
          placeholder="до"
          value={widthBearing.max}
          onChange={handleChangeFilter}
          type="text"
          name="max"
        />
      </div>
    </WhiteBlock>
  );
};
