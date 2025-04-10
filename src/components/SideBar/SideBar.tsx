"use client";
import React, { Suspense } from "react";
import { Filter } from "@/components";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <Suspense fallback={<div>Загрузка фильтров...</div>}>
        <Filter />
      </Suspense>
    </aside>
  );
};
