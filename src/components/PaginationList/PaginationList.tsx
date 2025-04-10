"use client";
import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./PaginationList.module.css";
import Link from "next/link";
import { useFilter } from "@/hooks/useFilters";

interface IPaginationListProps {
  count: number;
}

export const PaginationList = ({
  count,
}: IPaginationListProps): React.JSX.Element => {
  const { queryParams, updateQueryParams } = useFilter();

  const currentPage = queryParams.page ? Number(queryParams.page) : 1;
  const limit = 12;
  const totalPage = Math.ceil(count / limit);

  const handleChangePage = (p: number) => {
    updateQueryParams("page", p.toString());
  };
  const getVisiblePages = () => {
    let startPage = 0;
    let endPage = 0;

    if (totalPage <= 5) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage >= totalPage - 2) {
        startPage = totalPage - 4;
        endPage = totalPage;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const visiblePages = getVisiblePages();

  return (
    <ul className={styles.list}>
      <li>
        <Link
          onClick={() => handleChangePage(1)}
          className={styles.btn}
          href={`?page=${1}`}>
          {"<"}
        </Link>
      </li>
      {visiblePages.map((page) => (
        <li key={page}>
          <Link
            onClick={() => handleChangePage(page)}
            className={cn(styles.btn, {
              [styles.active]: page === currentPage,
            })}
            href={`?page=${page}`}>
            {page}
          </Link>
        </li>
      ))}
      <li>
        <Link
          onClick={() => handleChangePage(totalPage)}
          className={styles.btn}
          href={`?page=${totalPage}`}>
          {">"}
        </Link>
      </li>
    </ul>
  );
};
