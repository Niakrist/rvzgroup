"use client";
import { useFilter } from "@/hooks/useFilters";
import { Range } from "@/ui";
import React from "react";

export const RangePrice = () => {
  const { queryParams, updateQueryParams } = useFilter();

  return (
    <Range
      max={10000}
      fromInitialValue={queryParams.minPrice ? Number(queryParams.minPrice) : 0}
      toInitialValue={
        queryParams.maxPrice ? Number(queryParams.maxPrice) : 10000
      }
      onChangeFromValue={(value) => {
        updateQueryParams("minPrice", value === 0 ? "" : value.toString());
      }}
      onChangeToValue={(value) => {
        updateQueryParams("maxPrice", value === 10000 ? "" : value.toString());
      }}
    />
  );
};
