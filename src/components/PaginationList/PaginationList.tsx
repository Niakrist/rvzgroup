"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./PaginationList.module.css";
import Link from "next/link";

interface IPaginationListProps {
  count: number;
}

export const PaginationList = ({
  count,
}: IPaginationListProps): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 16;

  const totalPage = Math.ceil(count / limit);

  const handleChangePage = (p: number) => {
    setCurrentPage(p);
  };

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
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
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
      <Link
        onClick={() => handleChangePage(totalPage)}
        className={styles.btn}
        href={`?page=${totalPage}`}>
        {">"}
      </Link>
    </ul>
  );
};
