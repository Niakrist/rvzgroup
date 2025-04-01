"use client";

import { useFilter } from "@/hooks/useFilters";
import { InputFilter, WhiteBlock } from "@/ui";
import { useEffect, useState } from "react";

import styles from "./OuterDiameter.module.css";

interface IDiameter {
  min: string;
  max: string;
}

export const OuterDiameter = () => {
  const { queryParams, updateQueryParams } = useFilter();
  const [outerDiameter, setOuterDiameter] = useState<IDiameter>({
    min: "",
    max: "",
  });

  useEffect(() => {
    setOuterDiameter({
      min: queryParams.minOuterDiameter || "",
      max: queryParams.maxOuterDiameter || "",
    });
  }, [queryParams.minOuterDiameter, queryParams.maxOuterDiameter]);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name as keyof IDiameter;
    if (!/^\d*$/.test(value)) return;

    setOuterDiameter((prev) => {
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
    updateQueryParams("minOuterDiameter", outerDiameter.min);
  }, [outerDiameter.min]);
  useEffect(() => {
    updateQueryParams("maxOuterDiameter", outerDiameter.max);
  }, [outerDiameter.max]);

  return (
    <WhiteBlock text="Наружный диаметр (мм)">
      <div className={styles.wrapper}>
        <InputFilter
          placeholder="от"
          value={outerDiameter.min}
          onChange={handleChangeFilter}
          type="text"
          name="min"
        />
        <span className={styles.line} />
        <InputFilter
          placeholder="до"
          value={outerDiameter.max}
          onChange={handleChangeFilter}
          type="text"
          name="max"
        />
      </div>
    </WhiteBlock>
  );
};
