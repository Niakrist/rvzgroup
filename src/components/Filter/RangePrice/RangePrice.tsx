"use client";
import { useFilter } from "@/hooks/useFilters";
import { Range } from "@/ui";
import React from "react";

export const RangePrice = () => {
  const { queryParams, updateQueryParams } = useFilter();

  return (
    <Range
      max={10000}
      fromInitialValue={
        queryParams.minPrice ? Number(queryParams.minPrice) : undefined
      }
      toInitialValue={
        queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
      }
      onChangeFromValue={(value) => {
        updateQueryParams("minPrice", value.toString());
      }}
      onChangeToValue={(value) => {
        updateQueryParams("maxPrice", value.toString());
      }}
    />
  );
};
