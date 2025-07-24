"use client";
import {
  resetQueryParamAsync,
  updateQueryParamAsync,
} from "@/store/filterSlice/filterSlice";
import { AppDispatch, RootState } from "@/store/store";
import { IQueryParams } from "@/types/queryParams.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { queryParams } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    if (!searchParams) return;
    const params = Array.from(searchParams.entries());
    params.forEach(([key, value]) => {
      dispatch(
        updateQueryParamAsync({ key: key as keyof IQueryParams, value })
      );
    });
  }, [searchParams, dispatch]);

  const updateQueryParams = async (key: keyof IQueryParams, value: string) => {
    await dispatch(updateQueryParamAsync({ key, value }));
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete("page");
    await dispatch(resetQueryParamAsync("page"));

    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }

    if (pathname.includes("catalog") && newParams.has("page")) {
      replace(pathname + `?${newParams.toString()}`);
    } else if (newParams.size) {
      replace("/filter" + `?${newParams.toString()}`);
    }
  };

  return { queryParams, updateQueryParams };
};
