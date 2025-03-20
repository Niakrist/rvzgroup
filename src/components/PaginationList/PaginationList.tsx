"use client";
import React, { useState } from "react";
import cn from "classnames";
import styles from "./PaginationList.module.css";
import { usePathname } from "next/navigation";

const pages = [1, 2, 3, 4, 5, 15];

export const PaginationList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const path = usePathname();
  console.log("path: ", path);

  const handleChangePage = (p: number) => {
    setCurrentPage(p);
  };

  return (
    <ul className={styles.list}>
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => handleChangePage(page)}
            className={cn(styles.btn, {
              [styles.active]: page === currentPage,
            })}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
