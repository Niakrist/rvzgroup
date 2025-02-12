import React from "react";
import { Filter } from "@/components";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <Filter />
    </aside>
  );
};
