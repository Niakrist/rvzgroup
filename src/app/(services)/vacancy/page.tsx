import { Metadata } from "next";
import React from "react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Работа в РВЗ Групп",
};

const Vacancy = () => {
  return <div className={styles.rvz}>Vacancy</div>;
};

export default Vacancy;
