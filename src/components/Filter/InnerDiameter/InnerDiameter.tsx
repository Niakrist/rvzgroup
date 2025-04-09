"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useFilter } from "@/hooks/useFilters";
import { InputFilter, WhiteBlock } from "@/ui";
import { useEffect, useState } from "react";

import styles from "./InnerDiameter.module.css";

interface IDiameter {
  min: string;
  max: string;
}

export const InnerDiameter = () => {
  const { queryParams, updateQueryParams } = useFilter();
  const [innerDiameter, setInnerDiameter] = useState<IDiameter>({
    min: "",
    max: "",
  });

  useEffect(() => {
    setInnerDiameter({
      min: queryParams.minInnerDiameter || "",
      max: queryParams.maxInnerDiameter || "",
    });
  }, [queryParams.minInnerDiameter, queryParams.maxInnerDiameter]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name as keyof IDiameter;
    if (!/^\d*$/.test(value)) return;

    setInnerDiameter((prev) => {
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

  const debounceInnerDiameterMin = useDebounce(innerDiameter.min, 500);
  const debounceInnerDiameterMax = useDebounce(innerDiameter.max, 500);

  useEffect(() => {
    updateQueryParams("minInnerDiameter", debounceInnerDiameterMin);
  }, [debounceInnerDiameterMin]);
  useEffect(() => {
    updateQueryParams("maxInnerDiameter", debounceInnerDiameterMax);
  }, [debounceInnerDiameterMax]);

  return (
    <WhiteBlock text="Внутренний диаметр (мм)">
      <div className={styles.wrapper}>
        <InputFilter
          placeholder="от"
          value={innerDiameter.min}
          onChange={handleChangeFilter}
          type="text"
          name="min"
        />
        <span className={styles.line} />
        <InputFilter
          placeholder="до"
          value={innerDiameter.max}
          onChange={handleChangeFilter}
          type="text"
          name="max"
        />
      </div>
    </WhiteBlock>
  );
};
