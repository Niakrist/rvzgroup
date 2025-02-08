import React from "react";
import styles from "./SideBar.module.css";
import { Filter } from "../Filter/Filter";

export const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <Filter />
    </aside>
  );
};
